export default function Slide7() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#f3c742] text-[#171b1d]">
      <div className="absolute right-0 top-0 h-full w-[38vw] bg-[#171b1d]" />
      <div className="absolute left-[62vw] top-[15vh] h-[70vh] w-[0.3vw] bg-[#d9673f]" />
      <div className="relative z-10 flex h-full flex-col justify-between p-[6.5vw]">
        <div className="flex items-center justify-between text-[1.25vw] font-bold uppercase tracking-[0.18em] text-[#59605e]">
          <span>07 / 08</span>
          <span className="text-[#171b1d]">The conversion path</span>
        </div>
        <div className="grid grid-cols-[1fr_0.8fr] gap-[8vw]">
          <div>
            <h2 className="max-w-[48vw] text-[4.9vw] font-extrabold leading-[0.88] tracking-[-0.07em]">From first impression to enquiry</h2>
            <div className="mt-[4vh] space-y-[2.2vh] border-t border-[#c8a62f] pt-[3vh]">
              <p className="max-w-[40vw] text-[1.7vw] leading-[1.2]">Contact information is visible beside the enquiry form</p>
              <p className="max-w-[40vw] text-[1.7vw] leading-[1.2]">Visitors can call, email, or find the business location</p>
              <p className="max-w-[40vw] text-[1.7vw] leading-[1.2]">A service selector helps visitors describe their project</p>
              <p className="max-w-[40vw] text-[1.7vw] leading-[1.2]">Instagram, Facebook, and YouTube buttons open the company's channels in new tabs</p>
              <p className="max-w-[40vw] text-[1.7vw] leading-[1.2]">The contact experience remains responsive on mobile, tablet, and desktop</p>
            </div>
          </div>
          <div className="flex flex-col justify-end pb-[1vh] text-[#f6f1e6]">
            <div className="border border-[#f6f1e6]/25 p-[2.2vw]">
              <p className="text-[1.2vw] font-bold uppercase tracking-[0.18em] text-[#f3c742]">Contact / enquiry</p>
              <div className="mt-[3vh] space-y-[1.7vh] text-[1.65vw] leading-[1.1]">
                <p>Phone</p>
                <p>Email</p>
                <p>Address</p>
              </div>
              <div className="mt-[4vh] flex gap-[0.7vw] text-[1.25vw] font-bold uppercase tracking-[0.12em] text-[#f3c742]">
                <span className="border border-[#f3c742] px-[0.8vw] py-[0.9vh]">Instagram</span>
                <span className="border border-[#f3c742] px-[0.8vw] py-[0.9vh]">Facebook</span>
                <span className="border border-[#f3c742] px-[0.8vw] py-[0.9vh]">YouTube</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[1.25vw] font-bold uppercase tracking-[0.16em] text-[#59605e]">Every route points toward a clear next action.</div>
      </div>
    </div>
  );
}