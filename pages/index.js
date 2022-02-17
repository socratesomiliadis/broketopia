import Head from "next/head";
import { Fragment, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const fadeInUp = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(0);
  const [testHeight, setTestHeight] = useState(0);
  const [width, setWidth] = useState(0);
  let sliderItem = useRef();

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function () {
        gsap.to(".vidCont", {
          scrollTrigger: {
            trigger: ".vidCont",
            start: "center 48%",
            end: "bottom center",
            pin: ".vidCont",
            pinSpacing: true,
            scrub: 1,
          },
          scale: 0.7,
          ease: "none",
          duration: 10,
        });
      },
    });

    let prBody = document.querySelector("body");
    let prWrapper = document.querySelector(".pr-wrapper");

    prBody.classList.add("no-overflow");

    const timer = setTimeout(() => {
      prBody.classList.remove("no-overflow");
      prWrapper.classList.add("pr-hide");
    }, 1200);

    var r = document.querySelector(":root");
    var h = document.getElementById("heroVid");

    const handleScroll = () => {
      setScrollY(Math.round(window.scrollY));
    };

    const handleHeight = () => {
      setHeight(window.innerHeight);
    };

    const handleWidth = () => {
      var scrolled = 1 - window.scrollY / window.innerHeight;

      r.style.setProperty(
        "--heroVidWidth",
        `${scrolled > 0.6 ? scrolled : 0.6}`
      );
      //h.style.setProperty('border-radius', `${16 + scrolled}px`);
      //setWidth(`w-[${100 - (window.scrollY * 0.1)}vw]`);
    };

    setTestHeight(document.querySelector("body").offsetHeight);

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();
    handleHeight();
    handleWidth();

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("scroll", handleWidth);

    window.addEventListener("click", function () {
      window.onclick = (e) => {
        if (e.target.classList.contains("slider-option")) {
          document.querySelectorAll(".slider-option").forEach((entry) => {
            entry.classList.remove("active");
          });

          e.target.classList.add("active");
        }
      };
    });

    document.addEventListener("click", function (event) {
      var targetElement = event.target;
      if (targetElement.closest(".slider-option") != null) {
        var sliderTarget = targetElement.closest(".slider-option");
      }
      if (sliderTarget != null) {
        if (sliderTarget.classList.contains("slider-option")) {
          document.querySelectorAll(".slider-option").forEach((entry) => {
            entry.classList.remove("active");
          });

          sliderTarget.classList.add("active");
        }
      }
    });

    const multipleTargets = document.querySelectorAll(".tl-animate");
    const focusTargets = document.querySelectorAll(".focus-target");
    const footerTarget = document.querySelectorAll(".options");
    //const TopTarget = document.querySelectorAll('.pageResetBottom');

    const elementHasIntersected = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tlItem = entry.target;
          const tlImageBox = undefined;
          const tlImageText1 = undefined;
          const tlImageText2 = undefined;
          const tlDesc = undefined;
          if (
            entry.target.closest(".timeline-item").children[0].children[0] !=
              undefined &&
            !entry.target
              .closest(".timeline-item")
              .children[0].innerHTML.includes("<p>")
          ) {
            tlImageBox =
              entry.target.closest(".timeline-item").children[0].children[0]
                .children[0];
            tlImageText1 =
              entry.target.closest(".timeline-item").children[0].children[0]
                .children[1].children[0];
            tlImageText2 =
              entry.target.closest(".timeline-item").children[0].children[0]
                .children[1].children[1];
            tlDesc = entry.target.closest(".timeline-item").children[2];
          } else {
            tlImageBox =
              entry.target.closest(".timeline-item").children[2].children[0]
                .children[0];
            tlImageText1 =
              entry.target.closest(".timeline-item").children[2].children[0]
                .children[1].children[0];
            tlImageText2 =
              entry.target.closest(".timeline-item").children[2].children[0]
                .children[1].children[1];
            tlDesc = entry.target.closest(".timeline-item").children[0];
          }

          tlItem.classList.add("focus");
          tlImageBox.classList.add("box-animate");
          tlImageText1.classList.add("text-drop");
          tlImageText2.classList.add("text-drop");
          tlDesc.classList.add("opacity-visible");
        } else if (entry.boundingClientRect.top > 0) {
          const tlItem = entry.target;
          const tlImageBox = undefined;
          const tlImageText1 = undefined;
          const tlImageText2 = undefined;
          const tlDesc = undefined;
          if (
            entry.target.closest(".timeline-item").children[0].children[0] !=
              undefined &&
            !entry.target
              .closest(".timeline-item")
              .children[0].innerHTML.includes("<p>")
          ) {
            tlImageBox =
              entry.target.closest(".timeline-item").children[0].children[0]
                .children[0];
            tlImageText1 =
              entry.target.closest(".timeline-item").children[0].children[0]
                .children[1].children[0];
            tlImageText2 =
              entry.target.closest(".timeline-item").children[0].children[0]
                .children[1].children[1];
            tlDesc = entry.target.closest(".timeline-item").children[2];
          } else {
            tlImageBox =
              entry.target.closest(".timeline-item").children[2].children[0]
                .children[0];
            tlImageText1 =
              entry.target.closest(".timeline-item").children[2].children[0]
                .children[1].children[0];
            tlImageText2 =
              entry.target.closest(".timeline-item").children[2].children[0]
                .children[1].children[1];
            tlDesc = entry.target.closest(".timeline-item").children[0];
          }

          tlItem.classList.remove("focus");
          tlImageBox.classList.remove("box-animate");
          tlImageText1.classList.remove("text-drop");
          tlImageText2.classList.remove("text-drop");
          tlDesc.classList.remove("opacity-visible");
        }
      });
    };

    const playSound = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          play();
        }
      });
    };

    window.onscroll = function (e) {
      // print "false" if direction is down and "true" if up
      var check = this.oldScroll > this.scrollY;
      this.oldScroll = this.scrollY;
      return check;
    };

    const focusCB = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tlItem = entry.target;

          tlItem.classList.add("focus");
          var pBar = document.querySelector(".timeline-progress-bar");

          pBar.classList.remove("bar-invisible");
        } else {
          const tlItem = entry.target;

          tlItem.classList.remove("focus");
        }
      });
    };

    const footerVis = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          var pBar = document.querySelector(".timeline-progress-bar");

          pBar.classList.add("bar-invisible");
        } else if (
          entry.boundingClientRect.top > 0 &&
          entry.boundingClientRect.top < 1000
        ) {
          var pBar = document.querySelector(".timeline-progress-bar");

          pBar.classList.remove("bar-invisible");
        }
      });
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      });
    };

    const scrollTop = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          prBody.classList.add("no-overflow");

          const timer = setTimeout(() => {
            scrollToTop();
          }, 100);

          const timer2 = setTimeout(() => {
            prBody.classList.remove("no-overflow");
          }, 300);

          let tlTargets = document.querySelectorAll(".tl-animate");
          tlTargets.forEach((entry) => {
            const tlItem = entry;
            const tlImageBox = undefined;
            const tlImageText1 = undefined;
            const tlImageText2 = undefined;
            const tlDesc = undefined;
            if (
              entry.closest(".timeline-item").children[0].children[0] !=
                undefined &&
              !entry
                .closest(".timeline-item")
                .children[0].innerHTML.includes("<p>")
            ) {
              tlImageBox =
                entry.closest(".timeline-item").children[0].children[0]
                  .children[0];
              tlImageText1 =
                entry.closest(".timeline-item").children[0].children[0]
                  .children[1].children[0];
              tlImageText2 =
                entry.closest(".timeline-item").children[0].children[0]
                  .children[1].children[1];
              tlDesc = entry.closest(".timeline-item").children[2];
            } else {
              tlImageBox =
                entry.closest(".timeline-item").children[2].children[0]
                  .children[0];
              tlImageText1 =
                entry.closest(".timeline-item").children[2].children[0]
                  .children[1].children[0];
              tlImageText2 =
                entry.closest(".timeline-item").children[2].children[0]
                  .children[1].children[1];
              tlDesc = entry.closest(".timeline-item").children[0];
            }

            tlItem.classList.remove("focus");
            tlImageBox.classList.remove("box-animate");
            tlImageText1.classList.remove("text-drop");
            tlImageText2.classList.remove("text-drop");
            tlDesc.classList.remove("opacity-visible");
          });
        }
      });
    };

    const ioConfiguration = {
      rootMargin: "0% 0% -51% 0%",
      threshold: [0],
    };

    const ioConfiguration2 = {
      rootMargin: "-50.5% 0% -49.5% 0%",
      threshold: [0],
    };

    const ioConfiguration3 = {
      rootMargin: "-50% 0% -50% 0%",
      threshold: [0],
    };

    const ioConfiguration4 = {
      rootMargin: "-20% 0% -80% 0%",
      threshold: [0],
    };

    const ioConfiguration5 = {
      rootMargin: "0px",
      threshold: [0],
    };

    const observer = new IntersectionObserver(
      elementHasIntersected,
      ioConfiguration
    );
    multipleTargets.forEach((target) => observer.observe(target));
    const soundObserver = new IntersectionObserver(playSound, ioConfiguration3);
    multipleTargets.forEach((target) => soundObserver.observe(target));
    const focusObbserver = new IntersectionObserver(focusCB, ioConfiguration2);
    focusTargets.forEach((target) => focusObbserver.observe(target));
    const footerObserver = new IntersectionObserver(
      footerVis,
      ioConfiguration4
    );
    footerTarget.forEach((target) => footerObserver.observe(target));
    //const TopObserver = new IntersectionObserver(scrollTop, ioConfiguration5);
    //TopTarget.forEach((target) => TopObserver.observe(target));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleWidth);
    };
  }, []);

  function play() {
    var audio = document.getElementById("nobSound");
    audio.play();
  }

  function sliderTest() {
    document.querySelector(".option").classList.remove("active");
    this.classList.add("active");
  }

  return (
    <Fragment>
      <Head>
        <title>BrokeTopia | NFT Minecraft World</title>
        <meta name='description' content='NFT Games' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <motion.div
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
        className='fixed inset-0 flex flex-col justify-center items-center z-[200] w-screen h-screen bg-white dark:bg-black pr-wrapper transition-transform duration-500 ease-out'
      >
        <motion.div
          variants={stagger}
          className='text-black dark:text-white flex flex-row justify-center items-center'
        >
          <motion.span
            variants={fadeInUp}
            className='font-Outfit font-bold text-6xl'
          >
            b
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className='font-Outfit font-bold text-6xl'
          >
            r
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className='font-Outfit font-bold text-6xl'
          >
            o
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className='font-Outfit font-bold text-6xl'
          >
            k
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className='font-Outfit font-bold text-6xl'
          >
            e
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className='font-Outfit font-light text-6xl'
          >
            t
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className='font-Outfit font-light text-6xl'
          >
            o
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className='font-Outfit font-light text-6xl'
          >
            p
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className='font-Outfit font-light text-6xl'
          >
            i
          </motion.span>
          <motion.span
            variants={fadeInUp}
            className='font-Outfit font-light text-6xl'
          >
            a
          </motion.span>
        </motion.div>
      </motion.div>

      <Navigation />

      <main className='relative z-[10] overflow-x-hidden'>
        <div className='relative bg-white dark:bg-black z-10'>
          <section className='heroSec flex flex-col justify-center items-center pt-[100px] bg-white dark:bg-black z-20'>
            <div>
              <div className='vidCont overflow-hidden w-screen p-8 xl:p-12'>
                <video
                  className='relative w-full gpu rounded-2xl'
                  src='/static/videos/TrailerSourceFixed.mp4'
                  autoPlay
                  muted
                  playsInline
                  loop
                ></video>
              </div>
            </div>
            <div className='font-Outfit pt-24 pb-36 font-medium  text-2xl 2xl:w-1/3 w-9/12 md:w-8/12 lg:w-7/12 items-center text-[#bec0c5] dark:text-[#5a5a5a] '>
              <p id='test' className='pb-6 focus-target'>
                BrokeTopia is a massive open-world of a modern multicultural
                metropolis that sets new standards in terms of visuals,
                complexity, and depth.
              </p>
              <p className='py-6 focus-target'>
                The building includes an action-adventure story set in a
                BrokeBoyz NFT related futuristic world. A megalopolis obsessed
                with power and glamour. The map is an innovative representation
                of a metropolis of the 21st century.
              </p>
              <p className='py-6 focus-target'>
                A wide variety of in-game quests is waiting for you. Test your
                skills in this Minecraft metaverse and earn rewards. Hint: The
                more energy devoted, the bigger the amount of rewards.
              </p>
              <p className='py-6 focus-target'>
                Luck can always change lives, so this one is for you. Challenge
                the odds in Deez Casino and have a chance to win big prizes.
                Will the roulette pay the 35:1? Will the slots give you the
                jackpot? Are you better than our blackjack dealers?
              </p>
            </div>
          </section>
        </div>
        <div
          id='tl-wrapper'
          className='timeline-wrapper relative overflow-y-hidden h-fit font-Outfit font-normal text-xl flex flex-col items-start lg:items-center pl-4 lg:pl-0 bg-white dark:bg-black'
        >
          <div className='timeline-progress w-[2px] min-h-full dark:bg-[#3d3d3d] bg-[#cfcfcf] absolute overflow-hidden z-[1]'>
            <div className='z-[2] timeline-progress-bar w-[2px] h-[50vh] dark:bg-[#fff] bg-black fixed bottom-[50vh] '></div>
          </div>
          <div className='pl-4 lg:pl-0 timeline-item flex flex-col lg:flex-row justify-around items-center py-32 w-full'>
            <div className='order-2 lg:order-1 tl-left w-full lg:w-1/2 flex flex-col items-start -mt-4 lg:mt-8 lg:items-end justify-center'>
              <div className='tl-image-wrapper'>
                <div className='tl-image-box'></div>
                <div className='tl-image-cont rounded-2xl overflow-hidden'>
                  <h2 className='animEasing absolute h-[1%] w-[1%] inset-0 z-[4] text-lg lg:text-4xl ml-[4.5%] mt-[3%] font-Outfit font-semibold translate-y-[-200px] text-white'>
                    Plateia
                  </h2>
                  <h2 className='animEasing absolute h-[1%] w-[70%] inset-0 z-[4] text-base lg:text-3xl ml-[4.5%] mt-[12%] font-Outfit font-light translate-y-[-150px] text-[#c9c9c9]'>
                    Downtown City
                  </h2>
                  <Image
                    className='tl-image hover:scale-110 transition-transform duration-150 ease-linear'
                    src='/static/images/render.png'
                    width='615'
                    height='903'
                  />
                </div>
              </div>
            </div>
            <div className='order-1 lg:order-2 tl-center flex items-center justify-start py-8 lg:justify-center lg:py-0 w-full lg:w-1/4'>
              <span className='lg:block z-10 text-base lg:text-xl text-center pt-[0.4rem] w-[46px] h-[46px] tl-animate border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-black'>
                1
              </span>
            </div>
            <div className='order-3 tl-right w-full lg:w-1/2 flex flex-col items-start mt-4 lg:mt-0 gap-8 lg:gap-32 opacity-0'>
              <p className='w-full lg:w-3/4 font-Outfit font-medium text-black dark:text-white text-xl pr-8 lg:pr-0 lg:text-4xl'>
                Complete your quests by going to the quest market in the market
                of the quest and complete any quests using the quest ability.
              </p>
              <div className='font-Outfit font-light text-black dark:text-white text-base lg:text-xl'>
                <p>Found in: Plateia</p>
                <p>Quests: Market, NFT, Check, Broke</p>
              </div>
            </div>
          </div>
          <div className='pl-4 lg:pl-0 timeline-item flex flex-col lg:flex-row justify-around items-center py-32 w-full'>
            <div className='order-3 lg:order-1 tl-left w-full lg:w-1/2 flex flex-col items-end mt-4 lg:mt-0 gap-8 lg:gap-32 opacity-0'>
              <p className='w-full lg:w-3/4 font-Outfit font-medium text-black dark:text-white text-xl pr-8 lg:pr-0 lg:text-4xl'>
                Complete your quests by going to the quest market in the market
                of the quest and complete any quests using the quest ability.
              </p>
              <div className='font-Outfit font-light text-black dark:text-white text-base lg:text-xl w-full lg:w-3/4'>
                <p>Found in: Plateia</p>
                <p>Quests: Market, NFT, Check, Broke</p>
              </div>
            </div>
            <div className='order-1 lg:order-2 tl-center flex items-center justify-start py-8 lg:justify-center lg:py-0 w-full lg:w-1/4'>
              <span className='lg:block z-10 text-base lg:text-xl tl-animate text-center pt-[0.4rem] w-[46px] h-[46px] border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-black'>
                2
              </span>
            </div>
            <div className='order-2 lg:order-3 tl-right w-full lg:w-1/2 flex flex-col items-start -mt-4 lg:mt-8 justify-center'>
              <div className='tl-image-wrapper'>
                <div className='tl-image-box'></div>
                <div className='tl-image-cont rounded-2xl overflow-hidden'>
                  <h2 className='animEasing absolute h-[1%] w-[1%] inset-0 z-[4] text-lg lg:text-4xl ml-[4.5%] mt-[3%] font-Outfit font-semibold translate-y-[-200px] text-white'>
                    Plateia
                  </h2>
                  <h2 className='animEasing absolute h-[1%] w-[70%] inset-0 z-[4] text-base lg:text-3xl ml-[4.5%] mt-[12%] font-Outfit font-light translate-y-[-150px] text-[#c9c9c9]'>
                    Downtown City
                  </h2>
                  <Image
                    className='tl-image hover:scale-110 transition-transform duration-150 ease-linear'
                    src='/static/images/render2.png'
                    width='615'
                    height='903'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='pl-4 lg:pl-0 timeline-item flex flex-col lg:flex-row justify-around items-center py-32 w-full'>
            <div className='order-2 lg:order-1 tl-left w-full lg:w-1/2 flex flex-col items-start -mt-4 lg:mt-8 lg:items-end justify-center'>
              <div className='tl-image-wrapper'>
                <div className='tl-image-box'></div>
                <div className='tl-image-cont rounded-2xl overflow-hidden'>
                  <h2 className='animEasing absolute h-[1%] w-[1%] inset-0 z-[4] text-lg lg:text-4xl ml-[4.5%] mt-[3%] font-Outfit font-semibold translate-y-[-200px] text-white'>
                    Plateia
                  </h2>
                  <h2 className='animEasing absolute h-[1%] w-[70%] inset-0 z-[4] text-base lg:text-3xl ml-[4.5%] mt-[12%] font-Outfit font-light translate-y-[-150px] text-[#c9c9c9]'>
                    Downtown City
                  </h2>
                  <Image
                    className='tl-image hover:scale-110 transition-transform duration-150 ease-linear'
                    src='/static/images/render3.png'
                    width='615'
                    height='903'
                  />
                </div>
              </div>
            </div>
            <div className='order-1 lg:order-2 tl-center flex items-center justify-start py-8 lg:justify-center lg:py-0 w-full lg:w-1/4'>
              <span className='lg:block z-10 text-base lg:text-xl tl-animate text-center pt-[0.4rem] w-[46px] h-[46px] border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-black'>
                3
              </span>
            </div>
            <div className='order-3 tl-right w-full lg:w-1/2 flex flex-col items-start mt-4 lg:mt-0 gap-8 lg:gap-32 opacity-0'>
              <p className='w-full lg:w-3/4 font-Outfit font-medium text-black dark:text-white text-xl pr-8 lg:pr-0 lg:text-4xl'>
                Complete your quests by going to the quest market in the market
                of the quest and complete any quests using the quest ability.
              </p>
              <div className='font-Outfit font-light text-black dark:text-white text-base lg:text-xl'>
                <p>Found in: Plateia</p>
                <p>Quests: Market, NFT, Check, Broke</p>
              </div>
            </div>
          </div>
          <div className='pl-4 lg:pl-0 timeline-item flex flex-col lg:flex-row justify-around items-center py-32 w-full'>
            <div className='order-3 lg:order-1 tl-left w-full lg:w-1/2 flex flex-col items-end mt-4 lg:mt-0 gap-8 lg:gap-32 opacity-0'>
              <p className='w-full lg:w-3/4 font-Outfit font-medium text-black dark:text-white text-xl pr-8 lg:pr-0 lg:text-4xl'>
                Complete your quests by going to the quest market in the market
                of the quest and complete any quests using the quest ability.
              </p>
              <div className='font-Outfit font-light text-black dark:text-white text-base lg:text-xl w-full lg:w-3/4'>
                <p>Found in: Plateia</p>
                <p>Quests: Market, NFT, Check, Broke</p>
              </div>
            </div>
            <div className='order-1 lg:order-2 tl-center flex items-center justify-start py-8 lg:justify-center lg:py-0 w-full lg:w-1/4'>
              <span className='lg:block z-10 text-base lg:text-xl tl-animate text-center pt-[0.4rem] w-[46px] h-[46px] border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-black'>
                4
              </span>
            </div>
            <div className='order-2 lg:order-3 tl-right w-full lg:w-1/2 flex flex-col items-start -mt-4 lg:mt-8 justify-center'>
              <div className='tl-image-wrapper'>
                <div className='tl-image-box'></div>
                <div className='tl-image-cont rounded-2xl overflow-hidden'>
                  <h2 className='animEasing absolute h-[1%] w-[1%] inset-0 z-[4] text-lg lg:text-4xl ml-[4.5%] mt-[3%] font-Outfit font-semibold translate-y-[-200px] text-white'>
                    Plateia
                  </h2>
                  <h2 className='animEasing absolute h-[1%] w-[70%] inset-0 z-[4] text-base lg:text-3xl ml-[4.5%] mt-[12%] font-Outfit font-light translate-y-[-150px] text-[#c9c9c9]'>
                    Downtown City
                  </h2>
                  <Image
                    className='tl-image hover:scale-110 transition-transform duration-150 ease-linear'
                    src='/static/images/render4.png'
                    width='615'
                    height='903'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center py-96 relative bg-white dark:bg-black z-10'>
          <div className='options'>
            <div className='slider-option active slider-first'></div>
            <div className='slider-option slider-second'></div>
            <div className='slider-option slider-third'></div>
            <div className='slider-option slider-fourth'></div>
          </div>
        </div>
      </main>

      <footer className='z-[30] relative w-full h-[50vh] lg:h-fit flex flex-col bg-white dark:bg-black items-center justify-start overflow-hidden'>
        <a
          href='https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/159'
          target='_blank'
          rel='noreferrer'
        >
          <span className='text-[8em] z-[100] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-Outfit font-bold dark:text-white text-black lg:text-[16em]'>
            World
          </span>
        </a>
        <div className='hidden lg:flex flex-row flex-wrap grow-0 shrink basis-auto gap-6 w-screen p-8'>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%] '></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%] '></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='block relative w-full h-0 pb-[100%] overflow-hidden'>
              <a
                href='https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/159'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  className='hover:scale-110 transition-transform duration-150 ease-linear'
                  src='/static/images/render4.png'
                  width='615'
                  height='903'
                />
              </a>
            </div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #159
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex flex-row flex-wrap grow-0 shrink basis-auto gap-6 w-screen p-8'>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='block relative w-full h-0 pb-[100%] overflow-hidden'>
              <a
                href='https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/4200'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  className='hover:scale-110 transition-transform duration-150 ease-linear'
                  src='/static/images/World4200.jpg'
                  width='700'
                  height='700'
                />
              </a>
            </div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #4200
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex flex-row flex-wrap grow-0 shrink basis-auto gap-6 w-screen p-8'>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='block relative w-full h-0 pb-[100%] overflow-hidden'>
              <a
                href='https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/198'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  className='hover:scale-110 transition-transform duration-150 ease-linear'
                  src='/static/images/World198.jpg'
                  width='700'
                  height='700'
                />
              </a>
            </div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #198
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
          <div className='grow shrink-0 basis-0 max-w-full h-full z-50'>
            <div className='site-col block relative w-full h-0 pb-[100%]'></div>
            <div className='flex justify-between'>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                NFT World
              </span>
              <span className='font-Outfit font-light text-base dark:text-white text-black'>
                #???
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className='relative z-50 bg-white dark:bg-black h-[10vh] w-screen'></div>

      <audio id='nobSound' src='/static/music/nob.mp3'></audio>
    </Fragment>
  );
}
