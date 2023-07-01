import Image from "next/image";
import { Container } from "postcss";

export default function Home() {
  return (
    <div className="container gap-2 text-sm md:text-base lg:text-base w-auto mx-auto bg-gradient-to-br from-white to-slate-600 rounded-t-md mt-2 py-2">
      <div className="md:flex md:gap-2">
        <div className="flex flex-col h-auto">
          <div className="text-center">
            Some more text relating to me and my abilities to build websites and
            that kind of stuff is important to have so that I can fill up some
            extra space and see how text looks when entered.
          </div>
          <div className="flex justify-center align-middle">
            <Image
              src="/img_fractal.png"
              alt="Mandelbrot"
              height="300"
              width="300"
              className="rounded-lg my-2 mx-2"
            />
          </div>
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="my-1 mx-1">
            <p>I'm James, a Computer Science student and web designer.</p>
          </div>
          <div className="my-1 mx-1">
            <p>
              I focus on reponsive, intuitive front-end designs as well as
              backend infrastructure including API integration and Databasing
              solutions.
            </p>
          </div>
          <div className="my-1 mx-1">
            <p>
              My goal is to deliver quality results while working in the most
              efficient manner possible, to speed up development time and lower
              costs.
            </p>
          </div>
        </div>

        <div className="flex flex-col h-auto">
          <div className="text-center">
            Some more text relating to me and my abilities to build websites and
            that kind of stuff is important to have so that I can fill up some
            extra space and see how text looks when entered.
          </div>
          <div className="flex justify-center align-middle">
            <Image
              src="/img_fractal.png"
              alt="Mandelbrot"
              height="300"
              width="300"
              className="rounded-lg my-2 mx-2"
            />
          </div>
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="my-1 mx-1">
            <p>I'm James, a Computer Science student and web designer.</p>
          </div>
          <div className="my-1 mx-1">
            <p>
              I focus on reponsive, intuitive front-end designs as well as
              backend infrastructure including API integration and Databasing
              solutions.
            </p>
          </div>
          <div className="my-1 mx-1">
            <p>
              My goal is to deliver quality results while working in the most
              efficient manner possible, to speed up development time and lower
              costs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
