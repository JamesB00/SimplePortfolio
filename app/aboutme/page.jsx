import React from "react";
import Image from "next/image";

const aboutme = () => {
  return (
    <div className=" flex text-white mx-auto justify-center bg-slate-400">
      <div className="">
        <div id="top_text" className=" text-lg text-center my-2 border-b-black">
          <p>
            Creating quality, reliable services to make connecting your business
            to the world that much easier.
          </p>
        </div>

        <div className="md:grid my-2 md:grid-cols-3 md:gap-5 text-center">
          <div className="md:my-auto px-2 text-sm md:text-base col-span-2">
            <p className="">
              We all know how important a website is. But responsive, custom
              user experience can't be created by simple static builders. Users
              expect more from a current day experience, and that's what I'm
              for.
            </p>
          </div>
          <div className="md:col-start-3 justify-center mx-auto">
            <Image
              src="/img_fractal.png"
              width="300"
              height="300"
              className="rounded-lg mx-auto my-2 md:my-0 md:mx-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutme;
