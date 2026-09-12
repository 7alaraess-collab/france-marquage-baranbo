import logoImage from '@assets/logo2_1789212961125.png';

export default function Slide8() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#171b1d] text-[#f6f1e6]">
      <div className="absolute left-0 top-0 h-[1.2vh] w-[40vw] bg-[#f3c742]" />
      <div className="absolute bottom-0 right-0 h-[46vh] w-[46vh] rounded-full border-[0.35vw] border-[#f3c742]/35" />
      <div className="absolute bottom-[7vh] right-[7vw] h-[32vh] w-[32vh] rounded-full border-[0.15vw] border-[#f6f1e6]/20" />
      <div className="relative z-10 flex h-full flex-col justify-between p-[7vw]">
        <div className="flex items-center justify-between text-[1.25vw] font-bold uppercase tracking-[0.18em] text-[#b9bbb1]">
          <span>08 / 08</span>
          <span className="text-[#f3c742]">Closing view</span>
        </div>
        <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-[8vw]">
          <div>
            <h2 className="max-w-[62vw] text-[5.3vw] font-extrabold leading-[0.87] tracking-[-0.075em]">A clearer path to the next project</h2>
            <div className="mt-[4vh] space-y-[1.8vh] border-t border-[#f6f1e6]/20 pt-[3vh]">
              <p className="max-w-[47vw] text-[1.65vw] leading-[1.22]">The website makes the company's capabilities easier to discover</p>
              <p className="max-w-[47vw] text-[1.65vw] leading-[1.22]">The service story is organized around real work, real equipment, and real contact paths</p>
              <p className="max-w-[47vw] text-[1.65vw] leading-[1.22]">Multilingual support broadens access without changing the core experience</p>
              <p className="max-w-[47vw] text-[1.65vw] leading-[1.22]">The result is a confident digital front door for France Marquage Baranbo</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={logoImage} crossOrigin="anonymous" alt="France Marquage Baranbo logo" className="relative z-10 h-[32vh] w-[32vh] object-contain" />
          </div>
        </div>
        <div className="flex items-end justify-between border-t border-[#f6f1e6]/20 pt-[2vh]">
          <span className="text-[1.45vw] font-bold uppercase tracking-[0.18em] text-[#f3c742]">France Marquage Baranbo</span>
          <span className="text-[1.25vw] uppercase tracking-[0.16em] text-[#b9bbb1]">Road marking / traffic safety</span>
        </div>
      </div>
    </div>
  );
}