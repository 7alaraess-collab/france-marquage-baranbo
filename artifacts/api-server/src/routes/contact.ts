import { Router, type IRouter } from "express";
import {
  SubmitContactEnquiryBody,
  SubmitContactEnquiryResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();
const contactRecipient = "momo.bar06160@gmail.com";
const formSubmitUrl =
  process.env.FORMSUBMIT_URL ?? `https://formsubmit.co/ajax/${contactRecipient}`;

router.post("/contact-enquiries", async (req, res): Promise<void> => {
  const parsed = SubmitContactEnquiryBody.safeParse(req.body);

  if (!parsed.success) {
    req.log.warn({ issues: parsed.error.issues.length }, "Invalid contact enquiry");
    res.status(400).json({ error: "Please complete all enquiry fields." });
    return;
  }

  const { name, organisation, email, projectType, siteDetails, language } = parsed.data;

  try {
    const deliveryResponse = await fetch(formSubmitUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Organisation: organisation,
        Email: email,
        "Project Type": projectType,
        "Site Details": siteDetails,
        Language: language,
        _subject: `New project enquiry from ${name}`,
        _replyto: email,
        _captcha: "false",
        _template: "table",
      }),
    });
    const deliveryBody = await deliveryResponse.text();

    if (!deliveryResponse.ok) {
      req.log.error(
        {
          status: deliveryResponse.status,
          statusText: deliveryResponse.statusText,
          responseHeaders: Object.fromEntries(deliveryResponse.headers.entries()),
          responseBody: deliveryBody,
          language,
        },
        "Contact enquiry delivery failed with full FormSubmit response",
      );
      res.status(502).json({ error: "The enquiry could not be sent right now." });
      return;
    }

    res.json(
      SubmitContactEnquiryResponse.parse({
        status: "sent",
        message: "Your enquiry has been sent.",
      }),
    );
  } catch (error) {
    req.log.error({ err: error, language }, "Contact enquiry delivery request failed");
    res.status(502).json({ error: "The enquiry could not be sent right now." });
  }
});

export default router;