import roadImage from '@assets/generated_images/service-card-road-night.png';
import logoImage from '@assets/logo2_1789212961125.png';

export default function Slide1() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#171b1d] text-[#f6f1e6]">
      <img src={roadImage} crossOrigin="anonymous" alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171b1d] via-[#171b1d]/80 to-[#171b1d]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#171b1d]/90 via-transparent to-[#171b1d]/10" />
      <div className="relative z-10 flex h-full flex-col justify-between p-[7vw]">
        <div className="flex items-start justify-between">
          <img src={logoImage} crossOrigin="anonymous" alt="France Marquage Baranbo logo" className="h-[15vh] w-[15vh] object-contain" />
          <p className="max-w-[18vw] text-right text-[1.35vw] font-bold uppercase tracking-[0.18em] text-[#f3c742]">Project presentation<br />2026</p>
        </div>
        <div className="max-w-[72vw]">
          <div className="mb-[2.5vh] flex items-center gap-[1vw] text-[1.45vw] font-bold uppercase tracking-[0.22em] text-[#f3c742]">
            <span className="h-[0.7vw] w-[0.7vw] rounded-full bg-[#f3c742]" />
            Road marking / traffic safety
          </div>
          <h1 className="max-w-[68vw] text-[6.6vw] font-extrabold leading-[0.86] tracking-[-0.075em] text-[#f6f1e6]">France Marquage Baranbo</h1>
          <p className="mt-[3.5vh] max-w-[39vw] text-[2.15vw] leading-[1.2] text-[#f6f1e6]/85">Road marking and traffic safety, made clear.</p>
          <p className="mt-[2vh] max-w-[47vw] text-[1.65vw] leading-[1.35] text-[#b9bbb1]">A multilingual website project for a professional road marking company in Damascus.</p>
        </div>
        <div className="flex items-end justify-between border-t border-[#f6f1e6]/25 pt-[2vh]">
          <span className="text-[1.2vw] font-bold uppercase tracking-[0.18em] text-[#b9bbb1]">01 / 08</span>
          <span className="h-[0.65vw] w-[17vw] bg-[#f3c742]" />
        </div>
      </div>
    </div>
  );
}