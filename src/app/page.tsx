"use client";

/* eslint-disable @next/next/no-img-element */
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function Home() {
  return (
    <main className="">
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <div className="container mx-auto mt-20">
          <div className="flex flex-col lg:flex-row content-center items-center justify-around">
            <div className="flex flex-col w-3/4">
              <h1 className="text-4xl leading-tight text-center lg:text-left lg:text-7xl drop-shadow-2xl">
                Hello, my name is <br />{" "}
                <strong className="gradient-text">Luiz Almeida</strong>
              </h1>
              <MouseParallaxChild factorX={0} factorY={0.1}>
                <h2 className="text-xl leading-tight lg:text-4xl mt-6 mb-6 lg:mb-0 text-center lg:text-left drop-shadow-xl">
                  a.k.a. <strong className="gradient-text-2">@lhas.io</strong>
                </h2>
              </MouseParallaxChild>
              <p className="mt-5 text-xl">
                28-year-old <em className="underline">Front-end Developer</em>{" "}
                with a passion for creating seamless digital experiences. With
                15 years of expertise, I specialize in leading technologies such
                as <em>React, Ruby on Rails, TypeScript, and Node.js</em>.
              </p>
            </div>
            <div className="pb-20 w-1/4">
              <MouseParallaxChild factorX={0.1} factorY={0.2}>
                <img
                  src="/avatar.jpg"
                  alt="Luiz Almeida a.k.a. @lhas.io"
                  className="w-full rounded-full drop-shadow-2xl"
                />
              </MouseParallaxChild>
            </div>
          </div>
        </div>
      </MouseParallaxContainer>
    </main>
  );
}
