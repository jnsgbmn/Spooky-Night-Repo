import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import mp3File from "./audio/furelise.mp3";
import cloud1 from "../Images/cloud-1.svg";
import cloud from "../Images/cloud.svg";

const Hero = () => {
  const [audioPlayer] = useState(new Audio(mp3File));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }, [isPlaying, audioPlayer]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50;
      const scrollPosition = window.scrollY;

      if (scrollPosition > threshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`about h-screen items-center justify-center ${
        isFixed && "custom-cursor"
      }`}
    >
      <div className="about flex h-screen items-center justify-center relative">
        <div className="gap-[360px] flex items-center relative">
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 50 }}
            transition={{
              ease: "easeInOut",
              type: "spring",
              duration: 2,
              delay: 3,
            }}
            className="font-p text-4xl md:text-6xl lg:text-[8vw] text-center text-transparent bg-gradient-to-r from-purple-600 to-white tracking-widest bg-clip-text md:mt-4 lg:mt-6"
            style={{ zIndex: 1 }}
          >
            spooky
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeInOut",
              type: "spring",
              duration: 2,
              delay: 3,
            }}
            className="font-p text-4xl md:text-6xl lg:text-[8vw] text-center text-transparent bg-gradient-to-r from-purple-600 to-white tracking-widest bg-clip-text md:mt-4 lg:mt-6 ml-4"
            style={{ zIndex: 1 }}
          >
            night
          </motion.div>
        </div>
      </div>
      <Spline
        style={{ zIndex: 3 }}
        scene="https://prod.spline.design/O0i1UUZlm1y-TWXh/scene.splinecode"
        className=" mt-[-1800px] fixed my-auto mx-auto items-center"
      />
      <Spline
        style={{ zIndex: 3 }}
        className="fixed top-0 left-0 w-full h-full sm:mt-[-3px] md:mt-[-6px] lg:mt-[-100px]"
        scene="https://prod.spline.design/V0mC5Wu-L-D3QKsz/scene.splinecode"
      />
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: "0", x: 0 }}
        transition={{
          ease: "easeIn",
          type: "spring",
          duration: 4,
          delay: 3,
        }}
        className="absolute top-0 left-0 flex h-full w-full items-center justify-center"
      >
        <img
          src={cloud1}
          alt=""
          className="items-center mx-auto my-auto justify-center mr-[-10px]   w-[2400px] h-[1550px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: "0", x: 0 }}
        transition={{
          ease: "easeIn",
          type: "spring",
          duration: 4,
          delay: 3,
        }}
        className="absolute top-0 left-0 flex  w-full items-center justify-center"
      >
        <img
          src={cloud}
          alt=""
          className="items-center mx-auto my-auto  justify-center ] mt-[-150px] ml-[-10px] w-[1600px] h-[1600px]"
        />
      </motion.div>
      <div style={{ zIndex: 4 }}>
        <h1
          style={{ zIndex: 4 }}
          className=" font-h1 mb-[10vh] absolute bottom-0 text-2xl w-[700px] left-0 right-0 mx-auto  text-white"
        >
          (click before you read the short story)
        </h1>

        <button
          onClick={handlePlayPause}
          className="absolute pointer-events-auto   bottom-0 w-[100px] left-0 right-[120px] mx-auto mb-[7vh] font-p text-4xl text-white "
        >
          {isPlaying ? "Pause" : "Play..."}
        </button>
      </div>
      <div class="h-[3100px]   about w-full py-10">
        <div class="h-full   relative w-full py-10">
          <div class=" relative w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div class="relative flex-col items-left m-auto">
              <div class="grid grid-cols-1 mt lg:gap-24">
                <div class="relative items-center m-auto lg:inline-flex md:order-first">
                  <section>
                    <h1 class="text-center  lg:text-[30px] mt-[40vh] mb-[10vh]  relative font-h1 text-[30px] text-white ">
                      We were headed for Bantayan Island and only needed to
                      spend one night in Cebu. I remembered a friend talking
                      about their haunted ancestral home in the outskirts of the
                      city. I never believed in such things, but I thought it
                      would be interesting to stay in a 90-year-old home.
                    </h1>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div class="relative w-full mb-[10vh] px-5  mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div class="relative flex-col items-left m-auto">
              <div class="grid grid-cols-1 mt lg:gap-24">
                <div class="relative items-center m-auto lg:inline-flex md:order-first">
                  <section>
                    <img
                      alt=""
                      className="  w-[400px] absolute pt-[250px]"
                      src={require("../Images/webd.png")}
                    ></img>
                    <h1 class="text-center lg:text-[30px] relative mb-5 font-h1 text-[30px] text-white">
                      My friends thought it would be thrilling to have a night
                      of fright before heading out to paradise. I just wanted a
                      free place to stay. What should have been a restful night
                      turned out to be a nightmare for me. As soon as I got on
                      my bed, a strange voice started to call out my name.
                    </h1>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div class="relative w-full px-5 mb-[10vh] mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div class="relative flex-col items-left m-auto">
              <div class="grid grid-cols-1 mt lg:gap-24">
                <div class="relative items-center m-auto lg:inline-flex md:order-first">
                  <section>
                    <img
                      alt=""
                      className=" ml-[500px] w-[400px] absolute pt-[250px]"
                      src={require("../Images/webd.png")}
                    ></img>
                    <h1 class="text-center lg:text-[30px] relative mb-5 font-h1 text-[30px] text-white">
                      It seemed distant and near all at the same time. Its echo
                      reverberated around me, I just felt there was no escaping
                      it. I looked around me and my friends were going about
                      their business as if nothing strange was happening. I’ve
                      never felt more alone, even as I was surrounded by my
                      closest friends. So much for a free stay. Oh, the fright I
                      felt that night. It wasn’t a price I was willing to pay.
                    </h1>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div class="relative w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div class="relative flex-col items-left m-auto">
              <div class="grid grid-cols-1 mt lg:gap-24">
                <div class="relative items-center m-auto lg:inline-flex md:order-first">
                  <section>
                    <h1 class="text-center lg:text-[2vw] relative font-h1 text-[30px] text-white">
                      THE END.
                    </h1>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <footer
            class="w-full mt-[30vh] bg-black"
            aria-labelledby="footer-heading"
          >
            <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
              <div class="flex flex-col items-baseline space-y-6">
                <div class="mx-auto">
                  <span class="mx-auto mt-2 text-sm text-gray-500">
                    Copyright © 2022 - 2023
                    <a
                      href="https://jnsgumban-portfolio-74c76.web.app/"
                      class="mx-2 text-purple-600 500 hover:text-gray-500 pointer-events-auto"
                      rel="noopener noreferrer"
                    >
                      @jsgbn
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div
        className={`fixed inset-0 h-[1600px] z-[1] ${
          isFixed ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          <img
            style={{ zIndex: 4 }}
            className=" relative  h-[1500px] w-[2550px]"
            src={require("../Images/isle.png")}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
