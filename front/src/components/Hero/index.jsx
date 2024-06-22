import Link from "next/link";
import { Carousel } from "flowbite-react";
import SignIn from "../SignIn";

export default function Hero() {
  return (
    <div className="h-[750px] w-full relative pb-6">
      <Carousel slideInterval={5000}>
        <div className="h-full w-full bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div className="relative h-full bg-slate-100 flex flex-col lg:flex-row justify-center items-center">
            <div className="z-20 w-full min-h-[600px] lg:max-w-2xl h-auto flex flex-col justify-center items-center xl:items-start gap-6 p-6 lg:py-0">
              <div className="font-montserrat text-5xl xl:text-4xl">
                <span className="text-black font-semibold leading-tight">
                  Welcome to{" "}
                </span>
                <span className="text-blue-400 font-semibold leading-tight">
                  TechHaven
                </span>
              </div>
              <div className="text-slate-400 text-lg lg:text-xl font-bold font-nunito leading-snug">
                Your destination for the latest in technology
              </div>
              <div className="text-zinc-500 text-lg lg:text-2xl font-normal font-nunito leading-snug lg:leading-9">
                Discover the best smartphones, tablets, and accessories at the best price.{" "}
              </div>
              <Link href="/products">
                <button type="button" className="bg-blue-500 text-white text-lg lg:text-xl px-4 lg:px-6 py-2.5 lg:py-3.5 font-extrabold rounded-md hover:bg-blue-700 flex items-center">
                  Explore Products
                  <div className="ml-2 inline-block translate-y-1">
                    <img src="/icons/arrow-right.svg" alt="arrow right icon" className="size-full mx-auto -translate-y-1" />
                  </div>
                </button>
              </Link>
            </div>
            <div className="z-20 hidden xl:block w-full lg:w-2/4 h-auto">
              <img src="/images/heroImageTechHaven.png" alt="hero image" className="w-full h-auto" />
            </div>
            <div className="absolute z-10 w-full h-full bg-hero-gradient " />
          </div>
        </div>
        <div className="h-full w-full bg-black relative flex justify-end items-center">
          <div className="h-full lg:max-w-md flex flex-col justify-center items-center absolute -top-16 left-40">
            <h1 className="font-montserrat text-5xl xl:text-4xl text-white font-semibold leading-tight mb-6">
              Embrace the Future of Computing
            </h1>
            <p className="text-slate-300 text-lg lg:text-xl font-bold font-nunito leading-snug">
              Explore the power of cutting-edge technology with our latest laptops, designed for modern professionals.
            </p>
          </div>
          <div></div>
          <div className="w-full h-full">
            <img src="/images/SliderImage2.jpg" alt="hero image" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="h-full w-full bg-slate-300 flex justify-center items-center">
          <div className="container lg:w-2/4 flex flex-col justify-center items-center">
            <div className="lg:max-w-2xl mx-auto bg-slate-100 shadow-lg rounded px-8 pt-6 pb-8">
              <h1
                className="font-montserrat text-5xl xl:text-4xl font-semibold leading-tight mb-4
             bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700
             text-transparent bg-clip-text"
              >
                The Best Online Shopping Experience in One Place
              </h1>

              <p className="text-slate-400 text-lg lg:text-xl font-bold font-nunito leading-snug mb-2 ">
                Experience seamless online shopping with our state-of-the-art platform.
              </p>
              <p className="text-zinc-500 text-lg lg:text-2xl font-normal font-nunito leading-snug lg:leading-9 mb-6">
                From the latest gadgets to essential accessories, we bring you the best deals in tech.
              </p>
              <SignIn />
            </div>
          </div>
          <div className="hidden xl:block w-2/4 h-full">
            <img src="/images/SliderImage4.png" alt="hero image" className="w-full h-full object-contain" />
          </div>
        </div>
      </Carousel>
      <div className="absolute bottom-0 z-20 w-full h-14 bg-gradient-to-b from-transparent to-backgroundColor"></div>
    </div>
  );
}
{/*slideInterval={5000} */ }