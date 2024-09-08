"use client";
import { Spotlight } from "@/components/ui/Spotlight";
import  {TextGenerateEffect}  from "@/components/ui/text-generate-effect";

const words = `Hi, I'm student and Front-end developer. I can make landing pages, converting Figma to web using React or Nextjs.`;

export default function Home() {
  return (
    <main className="bg-black p-20">
      <div className="bg-black h-screen w-full flex align-top justify-center">
        <div className="w-3/4 flex flex-col justify-center">
         <Spotlight className="absolute bg-transparent w-full top-0 left-1/2 h-auto min-[320px]:top-[200px]" fill="red"/>
         <Spotlight className="absolute bg-transparent w-full top-0 left-1/3 h-auto min-[320px]:top-[200px]" fill="blue"/>
         {/* <Image src={img} alt="image" width={"300"} height={"300"} className="absolute w-auto top-0 left-1/4 h-5/6"/>*/}
         <div className=" bg-transparent bottom-0 flex align-middle justify-center h-1/2">
          <h1 className="w-max text-center text-white text-6xl font-extrabold opacity-0 animate-view">HI, I`M SARDORBEK SAIDOV FRONT END DEVELOPER</h1>
         </div>
        </div>
      </div>
      <div className="mb-20">
        <h1 className="font-serif text-white text-2xl p-1 text-center animate-view opacity-0">ABOUT</h1>
        <div className="animate-line h-1 rounded-lg bg-blue-900 mb-10 opacity-0"></div>
         <div>
          <TextGenerateEffect duration={2} filter={true} words={words} className="text-center"/>
         </div>
      </div>
      <div className="">
        <h1 className="uppercase mb-5 text-white text-center animate-view text-2xl opacity-0">skils</h1>
        <div className="animate-line h-1 rounded-lg bg-blue-900 mb-10 opacity-0"></div>
        <div className="grid grid-rows-1 grow-1 grid-cols-[100px_minmax(900px,_1fr)_100px] md:grid-cols-[100px_minmax(700px,_1fr)_100px] sm:grid-cols-[70px_minmax(400px,_1fr)_100px] min-[320px]:grid-cols-[70px_minmax(400px,_1fr)_100px] w-full gap-5">
          <ul className="flex flex-col items-end uppercase gap-1 text-white">
            <li className=" opacity-0 animate-[view_3s_linear_6s_1_forwards]">python </li>
            <li className="opacity-0 animate-[view_3s_linear_6s_1_forwards] ">c++ </li>
            <li className=" opacity-0 animate-[view_3s_linear_6s_1_forwards]">javascript </li>
            <li className=" opacity-0 animate-[view_3s_linear_6s_1_forwards]">java </li>
            <li className=" opacity-0 animate-[view_3s_linear_6s_1_forwards]">typescript </li>
          </ul>
          <ul className=" flex flex-col gap-5 align-middle justify-center  w-3/4 h-full">
            <div className="motion-safe:animate-line2 h-2 rounded-lg w-0 bg-green-500"></div>
            <div className="motion-safe:animate-line3 h-2 rounded-lg w-0 bg-green-500"></div>
            <div className="motion-safe:animate-line4 h-2 rounded-lg w-0 bg-green-500"></div>
            <div className="motion-safe:animate-line5 h-2 rounded-lg w-0 bg-green-500"></div>
            <div className="motion-safe:animate-line6 h-2 rounded-lg w-0 bg-green-500"></div>
          </ul>
        </div>
      </div>
    </main>
  )
}
