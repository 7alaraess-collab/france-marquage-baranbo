import siteImage from '@assets/photo_1789214029508.jpg';

export default function Slide2() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#171b1d] text-[#f6f1e6]">
      <div className="absolute right-0 top-0 h-full w-[49vw]">
        <img src={siteImage} crossOrigin="anonymous" alt="Road marking equipment outside the Baranbo facility" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171b1d] via-[#171b1d]/10 to-transparent" />
      </div>
      <div className="absolute left-0 top-0 h-[1.2vh] w-[28vw] bg-[#f3c742]" />
      <div className="relative z-10 flex h-full flex-col justify-between p-[7vw]">
        <div className="flex max-w-[42vw] items-center justify-between text-[1.25vw] font-bold uppercase tracking-[0.18em] text-[#b9bbb1]">
          <span>02 / 08</span>
          <span className="text-[#f3c742]">The brief</span>
        </div>
        <div className="max-w-[46vw]">
          <h2 className="text-[5.1vw] font-extrabold leading-[0.9] tracking-[-0.07em]">Precision on the ground</h2>
          <div className="mt-[4vh] h-[0.35vh] w-[9vw] bg-[#f3c742]" />
          <p className="mt-[3vh] max-w-[34vw] text-[2.1vw] leading-[1.18] text-[#f6f1e6]">Professional road marking and traffic safety solutions in Damascus</p>
          <p className="mt-[2vh] max-w-[32vw] text-[1.6vw] leading-[1.4] text-[#b9bbb1]">Built for clarity, durability, and everyday performance</p>
          <p className="mt-[2vh] max-w-[32vw] text-[1.6vw] leading-[1.4] text-[#b9bbb1]">A focused digital presence for a practical, field-based business</p>
        </div>
        <div className="max-w-[42vw] border-t border-[#f6f1e6]/20 pt-[2vh] text-[1.2vw] uppercase tracking-[0.16em] text-[#b9bbb1]">A site that treats the work with the same precision as the work itself.</div>
      </div>
    </div>
  );
}