import roadMarkingImage from '@assets/1_1788895253864.jpg';

export default function Slide6() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#171b1d] text-[#f6f1e6]">
      <div className="absolute right-0 top-0 h-full w-[52vw]">
        <img src={roadMarkingImage} crossOrigin="anonymous" alt="Fresh road markings viewed from above" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171b1d] via-[#171b1d]/35 to-transparent" />
        <div className="absolute inset-0 bg-[#171b1d]/10" />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between p-[6.5vw]">
        <div className="flex items-center justify-between text-[1.25vw] font-bold uppercase tracking-[0.18em] text-[#b9bbb1]">
          <span>06 / 08</span>
          <span className="text-[#f3c742]">The visual system</span>
        </div>
        <div className="max-w-[48vw]">
          <h2 className="text-[4.75vw] font-extrabold leading-[0.9] tracking-[-0.07em]">A visual identity with field presence</h2>
          <div className="mt-[4vh] space-y-[2.25vh]">
            <p className="max-w-[34vw] text-[1.85vw] leading-[1.15]">Black, warm yellow, and cream create a recognizable visual system</p>
            <p className="max-w-[32vw] text-[1.6vw] leading-[1.3] text-[#b9bbb1]">Strong typography supports fast scanning</p>
            <p className="max-w-[32vw] text-[1.6vw] leading-[1.3] text-[#b9bbb1]">Service photography keeps the work concrete and credible</p>
            <p className="max-w-[32vw] text-[1.6vw] leading-[1.3] text-[#b9bbb1]">Subtle motion and hover states make the experience feel responsive</p>
          </div>
        </div>
        <div className="flex items-center gap-[1vw] text-[1.3vw] font-bold uppercase tracking-[0.16em] text-[#f3c742]"><span className="h-[0.75vw] w-[0.75vw] rounded-full bg-[#f3c742]" /> Visual language / service reality</div>
      </div>
    </div>
  );
}