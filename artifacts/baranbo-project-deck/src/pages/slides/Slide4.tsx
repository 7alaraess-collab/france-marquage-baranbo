import fieldImage from '@assets/photo_1789214029508.jpg';

export default function Slide4() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#23292a] text-[#f6f1e6]">
      <div className="absolute left-0 top-0 h-full w-[47vw]">
        <img src={fieldImage} crossOrigin="anonymous" alt="Line-marking equipment at a completed road marking site" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#23292a]" />
      </div>
      <div className="relative z-10 ml-[46vw] flex h-full flex-col justify-between p-[6.5vw] pl-[4vw]">
        <div className="flex items-center justify-between text-[1.25vw] font-bold uppercase tracking-[0.18em] text-[#b9bbb1]">
          <span>04 / 08</span>
          <span className="text-[#f3c742]">The capability layer</span>
        </div>
        <div className="max-w-[44vw]">
          <h2 className="text-[4.55vw] font-extrabold leading-[0.9] tracking-[-0.07em]">Built around real equipment and crews</h2>
          <div className="mt-[4vh] space-y-[2.1vh] border-t border-[#f6f1e6]/20 pt-[3vh]">
            <p className="text-[1.75vw] leading-[1.15]"><span className="mr-[1vw] text-[#f3c742]">01</span>Airless line-marking equipment</p>
            <p className="text-[1.75vw] leading-[1.15]"><span className="mr-[1vw] text-[#f3c742]">02</span>Fleet line-marking machines</p>
            <p className="text-[1.75vw] leading-[1.15]"><span className="mr-[1vw] text-[#f3c742]">03</span>Mechanical sweeping equipment</p>
            <p className="text-[1.75vw] leading-[1.15]"><span className="mr-[1vw] text-[#f3c742]">04</span>Photoluminescent paint capabilities</p>
            <p className="text-[1.75vw] leading-[1.15]"><span className="mr-[1vw] text-[#f3c742]">05</span>Field crews ready for on-site work</p>
          </div>
        </div>
        <p className="max-w-[36vw] text-[1.3vw] uppercase tracking-[0.16em] text-[#b9bbb1]">The project keeps the digital story grounded in the physical work.</p>
      </div>
    </div>
  );
}