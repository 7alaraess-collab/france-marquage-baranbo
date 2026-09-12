export default function Slide3() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#f6f1e6] text-[#171b1d]">
      <div className="absolute right-0 top-0 h-[1.2vh] w-[30vw] bg-[#f3c742]" />
      <div className="flex h-full flex-col p-[6.5vw]">
        <div className="flex items-center justify-between text-[1.25vw] font-bold uppercase tracking-[0.18em] text-[#77796e]">
          <span>03 / 08</span>
          <span className="text-[#d9673f]">The service story</span>
        </div>
        <div className="mt-[5vh] flex items-end justify-between">
          <h2 className="max-w-[55vw] text-[4.8vw] font-extrabold leading-[0.9] tracking-[-0.07em]">Services people can understand</h2>
          <span className="mb-[1vh] h-[1.1vw] w-[1.1vw] rounded-full bg-[#d9673f]" />
        </div>
        <div className="mt-[6vh] grid flex-1 grid-cols-3 gap-[1.3vw]">
          <div className="flex flex-col justify-between bg-[#171b1d] p-[2vw] text-[#f6f1e6]"><span className="text-[1.35vw] font-bold text-[#f3c742]">01</span><p className="max-w-[16vw] text-[1.7vw] font-bold leading-[1.05]">Road marking and pedestrian crossings</p></div>
          <div className="flex flex-col justify-between bg-[#171b1d] p-[2vw] text-[#f6f1e6]"><span className="text-[1.35vw] font-bold text-[#f3c742]">02</span><p className="max-w-[16vw] text-[1.7vw] font-bold leading-[1.05]">Parking lot marking and organized traffic flow</p></div>
          <div className="flex flex-col justify-between bg-[#171b1d] p-[2vw] text-[#f6f1e6]"><span className="text-[1.35vw] font-bold text-[#f3c742]">03</span><p className="max-w-[16vw] text-[1.7vw] font-bold leading-[1.05]">Accessible EV charging spaces</p></div>
          <div className="flex flex-col justify-between bg-[#d9673f] p-[2vw] text-[#f6f1e6]"><span className="text-[1.35vw] font-bold text-[#171b1d]">04</span><p className="max-w-[16vw] text-[1.7vw] font-bold leading-[1.05]">Bike lane marking</p></div>
          <div className="flex flex-col justify-between bg-[#d9673f] p-[2vw] text-[#f6f1e6]"><span className="text-[1.35vw] font-bold text-[#171b1d]">05</span><p className="max-w-[16vw] text-[1.7vw] font-bold leading-[1.05]">School, sports, and specialized markings</p></div>
          <div className="flex flex-col justify-between bg-[#f3c742] p-[2vw] text-[#171b1d]"><span className="text-[1.35vw] font-bold">06</span><p className="max-w-[16vw] text-[1.7vw] font-bold leading-[1.05]">Mechanical street sweeping</p></div>
        </div>
      </div>
    </div>
  );
}