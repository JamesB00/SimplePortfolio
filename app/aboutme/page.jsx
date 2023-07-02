import React from "react";
import Image from "next/image";

const aboutme = () => {
  return (
    <div className=" flex text-white mx-auto justify-center bg-slate-400">
      <div className="lg:mx-32 lg:border-2 rounded-lg lg:mt-2">
        <div id="top_text" className=" text-lg text-center my-2 border-b-black">
          <p className="md:underline">
            Creating quality, reliable services to make connecting your business
            to the world that much easier.
          </p>
        </div>

        <div className="md:grid hover:cursor-pointer my-2 md:grid-cols-3 md:gap-5 text-center border-b-2 md:border-b-0">
          <div className="md:my-auto px-2 text-sm md:text-base col-span-2">
            <p className="">
              We all know how important a website is. But responsive, custom
              user experience can't be created by simple static builders. Users
              expect more from a current day experience, and that's what I'm
              for.
            </p>
          </div>
          <div className="md:col-start-3 justify-center mx-auto ">
            <Image
              src="/img_fractal.png"
              width="300"
              height="300"
              className="shadow-md rounded-lg mx-auto my-2 md:my-0 md:mx-0 hover:cursor-pointer hover:animate-pulse"
            />
          </div>
        </div>

        <div className="flex md:grid my-2 md:grid-cols-3 md:gap-5 text-center">
          <div className="justify-center px-2 md:px-0 md:mx-auto">
            <Image
              src="/img_fractal.png"
              width="300"
              height="300"
              className="shadow-md rounded-lg mx-auto my-2 md:my-0 md:mx-0"
            />
          </div>
          <div className="my-auto px-2 text-sm md:text-base md:col-start-2 md:col-span-2">
            <p>
              On your initiative, we'll build the best presentation of you and
              your products to show to the world.
            </p>
          </div>
        </div>

        <div className="flex md:grid my-2 md:grid-cols-3 md:gap-5 text-center">
          <div className="my-auto px-2 text-sm md:text-base md:col-start-1 md:col-span-2">
            <p>
              On your initiative, we'll build the best presentation of you and
              your products to show to the world.
            </p>
          </div>
          <div className="justify-center px-2 md:px-0 md:mx-auto">
            <Image
              src="/img_fractal.png"
              width="300"
              height="300"
              className="shadow-md rounded-lg mx-auto my-2 md:my-0 md:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutme;
