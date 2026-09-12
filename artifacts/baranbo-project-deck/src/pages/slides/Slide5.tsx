export default function Slide5() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#f6f1e6] text-[#171b1d]">
      <div className="absolute bottom-0 left-0 h-[1.2vh] w-[36vw] bg-[#d9673f]" />
      <div className="flex h-full flex-col p-[6.5vw]">
        <div className="flex items-center justify-between text-[1.25vw] font-bold uppercase tracking-[0.18em] text-[#77796e]">
          <span>05 / 08</span>
          <span className="text-[#d9673f]">Access</span>
        </div>
        <div className="mt-[6vh] flex items-end justify-between">
          <h2 className="max-w-[54vw] text-[5vw] font-extrabold leading-[0.88] tracking-[-0.07em]">One site, three languages</h2>
          <p className="max-w-[22vw] pb-[1vh] text-right text-[1.45vw] leading-[1.35] text-[#59605e]">The interface keeps the same route to information, no matter which language a visitor chooses.</p>
        </div>
        <div className="mt-[9vh] grid flex-1 grid-cols-3 gap-[1.5vw]">
          <div className="border-t-[0.45vh] border-[#171b1d] pt-[2.5vh]"><p className="text-[6.6vw] font-extrabold leading-none tracking-[-0.08em]">EN</p><p className="mt-[2vh] max-w-[18vw] text-[1.7vw] leading-[1.25]">English content and navigation</p></div>
          <div className="border-t-[0.45vh] border-[#d9673f] pt-[2.5vh]"><p className="text-[6.6vw] font-extrabold leading-none tracking-[-0.08em] text-[#d9673f]">FR</p><p className="mt-[2vh] max-w-[18vw] text-[1.7vw] leading-[1.25]">French content and navigation</p></div>
          <div className="border-t-[0.45vh] border-[#f3c742] pt-[2.5vh]"><p className="text-[6.6vw] font-extrabold leading-none tracking-[-0.08em] text-[#9a7611]">AR</p><p className="mt-[2vh] max-w-[18vw] text-[1.7vw] leading-[1.25]">Arabic layouts support right-to-left reading</p></div>
        </div>
        <div className="border-t border-[#bcb4a5] pt-[2vh] text-[1.35vw] text-[#59605e]">Core contact and enquiry actions remain consistent across translations</div>
      </div>
    </div>
  );
}