import Head from 'next/head'
import { Fragment, useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import {gsap, Power3} from 'gsap';
import anime from 'animejs'; 


export default function Home() {

  
  
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(0);
  const [testHeight, setTestHeight] = useState(0);
  const [width, setWidth] = useState(0);
  let sliderItem = useRef();

  useEffect(() => {

    let prBody = document.querySelector('body');
    let prWrapper = document.querySelector('.pr-wrapper');


    prBody.classList.add("no-overflow");

    const timer = setTimeout(() => {
      prBody.classList.remove("no-overflow");
      prWrapper.classList.add("pr-hide");
    }, 2000);

    var r = document.querySelector(':root');

    const handleScroll = () => {
      setScrollY(Math.round(window.scrollY));
    };

    const handleHeight = () => {
      setHeight(window.innerHeight);
    };



    const handleWidth = () => {
      var translateWidth = 1 - (window.scrollY * 0.001)
    
      r.style.setProperty('--heroVidScale', `${translateWidth > 0.6
      ? 1 - (window.scrollY * 0.001)
    : 0.6}`);
      setWidth(`w-[${100 - (window.scrollY * 0.1)}vw]`);
    };

    setTestHeight(document.querySelector('body').offsetHeight);    

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();
    handleHeight();
    handleWidth();
    
    window.addEventListener("scroll", handleScroll);

    window.addEventListener("scroll", handleWidth);

    window.onclick = e => {
      if(e.target.classList.contains("slider-option")){
       document.querySelectorAll(".slider-option").forEach(entry =>{
        entry.classList.remove("active");
       })
       
       e.target.classList.add("active");
      }
  } 
  
    const multipleTargets = document.querySelectorAll('.tl-animate');
    const focusTargets = document.querySelectorAll('.focus-target');

    const elementHasIntersected = (entries) => {
      entries.forEach(entry=>{
        if(entry.isIntersecting){
            const tlItem=entry.target;
            const tlImageBox = undefined;
            const tlImageText1 = undefined;
            const tlImageText2 = undefined;
            const tlDesc = undefined;
            if(entry.target.closest(".timeline-item").children[0].children[0] != undefined && !(entry.target.closest(".timeline-item").children[0].innerHTML.includes("<p>"))) {
              tlImageBox = entry.target.closest(".timeline-item").children[0].children[0].children[0];
              tlImageText1 = entry.target.closest(".timeline-item").children[0].children[0].children[1].children[0];
              tlImageText2 = entry.target.closest(".timeline-item").children[0].children[0].children[1].children[1];
              tlDesc = entry.target.closest(".timeline-item").children[2];
            }
            else{
              tlImageBox = entry.target.closest(".timeline-item").children[2].children[0].children[0];
              tlImageText1 = entry.target.closest(".timeline-item").children[2].children[0].children[1].children[0];
              tlImageText2 = entry.target.closest(".timeline-item").children[2].children[0].children[1].children[1];
              tlDesc = entry.target.closest(".timeline-item").children[0];
            }

            

            tlItem.classList.add("focus");
            tlImageBox.classList.add("box-animate");
            tlImageText1.classList.add("text-drop");
            tlImageText2.classList.add("text-drop");
            tlDesc.classList.add("opacity-visible");
            
        }else if(entry.boundingClientRect.top > 0){
            const tlItem=entry.target;
            const tlImageBox = undefined;
            const tlImageText1 = undefined;
            const tlImageText2 = undefined;
            const tlDesc = undefined;
            if(entry.target.closest(".timeline-item").children[0].children[0] != undefined && !(entry.target.closest(".timeline-item").children[0].innerHTML.includes("<p>"))) {
              tlImageBox = entry.target.closest(".timeline-item").children[0].children[0].children[0];
              tlImageText1 = entry.target.closest(".timeline-item").children[0].children[0].children[1].children[0];
              tlImageText2 = entry.target.closest(".timeline-item").children[0].children[0].children[1].children[1];
              tlDesc = entry.target.closest(".timeline-item").children[2];
            }
            else{
              tlImageBox = entry.target.closest(".timeline-item").children[2].children[0].children[0];
              tlImageText1 = entry.target.closest(".timeline-item").children[2].children[0].children[1].children[0];
              tlImageText2 = entry.target.closest(".timeline-item").children[2].children[0].children[1].children[1];
              tlDesc = entry.target.closest(".timeline-item").children[0];
            }


            tlItem.classList.remove("focus");
            tlImageBox.classList.remove("box-animate");
            tlImageText1.classList.remove("text-drop");
            tlImageText2.classList.remove("text-drop");
            tlDesc.classList.remove("opacity-visible");
       
        }
    })};

    const playSound = (entries) => {
      entries.forEach(entry=>{
        if(entry.isIntersecting){   
              play();
        }
    })};

    window.onscroll = function(e) {
      // print "false" if direction is down and "true" if up
      var check = this.oldScroll > this.scrollY
      this.oldScroll = this.scrollY;
      return check;
    }

    const focusCB = (entries) => {
      entries.forEach(entry=>{
        if(entry.isIntersecting){
            const tlItem=entry.target;

            tlItem.classList.add("focus");
        }else{
            const tlItem=entry.target;

            tlItem.classList.remove("focus");
        }
    })};


    const ioConfiguration = {
      rootMargin: '0% 0% -51% 0%',
      threshold: [0]
    };

    const ioConfiguration2 = {
      rootMargin: '-50.5% 0% -49.5% 0%',
      threshold: [0]
    };

    const ioConfiguration3 = {
      rootMargin: '-50% 0% -50% 0%',
      threshold: [0]
    };

    
    
    const observer = new IntersectionObserver(elementHasIntersected, ioConfiguration);
    multipleTargets.forEach((target) => observer.observe(target));
    const soundObserver = new IntersectionObserver(playSound, ioConfiguration3);
    multipleTargets.forEach((target) => soundObserver.observe(target));
    const focusObbserver = new IntersectionObserver(focusCB, ioConfiguration2);
    focusTargets.forEach((target) => focusObbserver.observe(target));

    

    

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleWidth);
    };

  }, []);

  function play() {
    var audio = document.getElementById('nobSound');
    audio.play();
  }

  function sliderTest(){
    document.querySelector(".option").classList.remove("active");
    this.classList.add("active");
  }

  return (
    <Fragment>
      <Head>
        <title>BrokeTopia | NFT Minecraft World</title>
        <meta name="description" content="NFT Games" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="fixed inset-0 flex flex-col justify-center items-center z-[200] inset-0 w-screen h-screen bg-white dark:bg-black pr-wrapper transition-transform duration-500 ease-out">
      <svg height="100%" width="100%" strokeWidth="2" className="stroke-black dark:stroke-white text-line block">
        <text className="font-BlenderPro font-bold text-[12rem]" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="none" fontSize = "2000">BrokeTopia</text>
      </svg>
      </div>

      <Navigation/>
      
      <main className="relative z-[10]"> 
      <div className="relative bg-white dark:bg-black z-10">
      <section className="heroSec flex flex-col justify-center items-center pt-[100px] bg-white dark:bg-black z-20">
      <div className="relative h-[90vh]"><div className=" h-[25vh] lg:h-[90vh] mt-8 px-12 w-screen heroDiv sticky top-0"><video className="rounded-2xl video-block heroVid relative w-screen" autoPlay muted playsInline loop><source src="/static/videos/HeroVid.mp4" type="video/mp4" /></video></div></div>
      <div className="font-Outfit pt-24 pb-36 font-medium  text-2xl 2xl:w-1/3 w-9/12 md:w-8/12 lg:w-7/12 items-center text-[#bec0c5] dark:text-[#5a5a5a] ">
        <p id="test" className="pb-6 focus-target">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <p className="py-6 focus-target">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p className="py-6 focus-target">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="py-6 focus-target">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      </section> 
      </div>
      <div id="tl-wrapper" className="timeline-wrapper relative overflow-y-hidden h-fit font-Outfit font-normal text-xl flex flex-col items-center bg-white dark:bg-black">
      <div className="timeline-progress w-[2px] min-h-full dark:bg-[#3d3d3d] bg-[#cfcfcf] absolute overflow-hidden z-[1] "><div className="z-[2] timeline-progress-bar w-[2px] h-[50vh] dark:bg-[#fff] bg-black fixed bottom-[50vh] "></div></div>
        <div className="timeline-item  flex flex-row justify-around items-center py-32 w-full">
            <div className="tl-left w-1/2 flex flex-col items-end justify-center">
              <div className="tl-image-wrapper">
                <div className="tl-image-box"></div>
                <div className="tl-image-cont rounded-2xl overflow-hidden">
                  <h2 className="animEasing absolute h-[1%] w-[1%] inset-0 z-[4] text-4xl ml-[4.5%] mt-[3%] font-Outfit font-semibold translate-y-[-200px] text-white">Plateia</h2>
                  <h2 className="animEasing absolute h-[1%] w-[70%] inset-0 z-[4] text-3xl ml-[4.5%] mt-[12%] font-Outfit font-light translate-y-[-150px] text-[#c9c9c9]">Downtown City</h2>
                <Image className="tl-image hover:scale-110 transition-transform duration-150 ease-linear" src="/static/images/render.png" width="615" height="903" />
                </div>
              </div>
            </div>
            <div className="tl-center flex items-center justify-center w-1/4"><span className="z-10 tl-animate py-4 px-6 border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-black">Proxy Giorgakis</span></div>
            <div className="tl-right w-1/2 flex flex-col items-start gap-32 opacity-0">
              <p className="w-1/2 font-Outfit font-medium text-black dark:text-white text-4xl">Complete your quests by going to the quest market in the market of the quest and complete any quests using the quest ability.</p>
              <div className="font-Outfit font-light text-black dark:text-white text-xl">
                <p>Found in: Plateia</p>
                <p>Quests: Market, NFT, Check, Broke</p>
              </div>
              
            </div>
          </div>
        <div className="timeline-item flex flex-row justify-around items-center py-32 w-full">
          <div className="opacity-0 tl-left w-1/2 flex flex-col items-end justify-center gap-32"> 
            <p className="w-1/2 font-Outfit text-left font-medium text-black dark:text-white text-4xl">Complete your quests by going to the quest market in the market of the quest and complete any quests using the quest ability.</p>
            <div className="font-Outfit font-light text-left text-black dark:text-white text-xl w-1/2">
              <p>Found in: Plateia</p>
              <p>Quests: Market, NFT, Check, Broke</p>
            </div>
          </div>
          <div className="tl-center flex items-center justify-center w-1/4 z-10"><span className="z-10 tl-animate py-4 px-6 border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-black">Proxy Giorgakis</span></div>
          <div className="tl-right w-1/2 flex items-center justify-start">
          <div className="tl-image-wrapper">
                <div className="tl-image-box"></div>
                <div className="tl-image-cont rounded-2xl overflow-hidden">
                  <h2 className="animEasing absolute h-[1%] w-[1%] inset-0 z-[4] text-4xl ml-[4.5%] mt-[3%] font-Outfit font-semibold translate-y-[-200px] text-white">Plateia</h2>
                  <h2 className="animEasing absolute h-[1%] w-[70%] inset-0 z-[4] text-3xl ml-[4.5%] mt-[11%] font-Outfit font-light translate-y-[-150px] text-[#c9c9c9]">Downtown City</h2>
                <Image className="tl-image hover:scale-110 transition-transform duration-150 ease-linear" src="/static/images/render2.png" width="615" height="903" />
                </div>
              </div>
          </div>
        </div>
        <div className="timeline-item  flex flex-row justify-around items-center py-32 w-full">
            <div className="tl-left w-1/2 flex flex-col items-end justify-center">
              <div className="tl-image-wrapper">
                <div className="tl-image-box"></div>
                <div className="tl-image-cont rounded-2xl overflow-hidden">
                  <h2 className="animEasing absolute h-[1%] w-[1%] inset-0 z-[4] text-4xl ml-[4.5%] mt-[3%] font-Outfit font-semibold translate-y-[-200px] text-white">Plateia</h2>
                  <h2 className="animEasing absolute h-[1%] w-[70%] inset-0 z-[4] text-3xl ml-[4.5%] mt-[12%] font-Outfit font-light translate-y-[-150px] text-[#c9c9c9]">Downtown City</h2>
                <Image className="tl-image hover:scale-110 transition-transform duration-150 ease-linear" src="/static/images/render3.png" width="615" height="903" />
                </div>
              </div>
            </div>
            <div className="tl-center flex items-center justify-center w-1/4"><span className="z-10 tl-animate py-4 px-6 border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-black">Proxy Giorgakis</span></div>
            <div className="tl-right w-1/2 flex flex-col items-start gap-32 opacity-0">
              <p className="w-1/2 font-Outfit font-medium text-black dark:text-white text-4xl">Complete your quests by going to the quest market in the market of the quest and complete any quests using the quest ability.</p>
              <div className="font-Outfit font-light text-black dark:text-white text-xl">
                <p>Found in: Plateia</p>
                <p>Quests: Market, NFT, Check, Broke</p>
              </div>
              
            </div>
          </div>
          <div className="timeline-item flex flex-row justify-around items-center py-32 w-full">
          <div className="opacity-0 tl-left w-1/2 flex flex-col items-end justify-center gap-32"> 
            <p className="w-1/2 font-Outfit text-left font-medium text-black dark:text-white text-4xl">Complete your quests by going to the quest market in the market of the quest and complete any quests using the quest ability.</p>
            <div className="font-Outfit font-light text-left text-black dark:text-white text-xl w-1/2">
              <p>Found in: Plateia</p>
              <p>Quests: Market, NFT, Check, Broke</p>
            </div>
          </div>
          <div className="tl-center flex items-center justify-center w-1/4 z-10"><span className="z-10 tl-animate py-4 px-6 border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-black">Proxy Giorgakis</span></div>
          <div className="tl-right w-1/2 flex items-center justify-start">
          <div className="tl-image-wrapper">
                <div className="tl-image-box"></div>
                <div className="tl-image-cont rounded-2xl overflow-hidden">
                  <h2 className="animEasing absolute h-[1%] w-[1%] inset-0 z-[4] text-4xl ml-[4.5%] mt-[3%] font-Outfit font-semibold translate-y-[-200px] text-white">Plateia</h2>
                  <h2 className="animEasing absolute h-[1%] w-[70%] inset-0 z-[4] text-3xl ml-[4.5%] mt-[11%] font-Outfit font-light translate-y-[-150px] text-[#c9c9c9]">Downtown City</h2>
                <Image className="tl-image hover:scale-110 transition-transform duration-150 ease-linear" src="/static/images/render4.png" width="615" height="903" />
                </div>
              </div>
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center py-96 relative bg-white dark:bg-black z-10">
          <div className="options">
            <div className="slider-option active slider-first">
                <div className="shadow"></div>
                <div className="label">
                  <div className="info">
                      <div className="main-slider">Blonkisoaz</div>
                      <div className="sub-slider">Omuke trughte a otufta</div>
                  </div>
                </div>
            </div>
            <div className="slider-option slider-second" >
                <div className="shadow"></div>
                <div className="label">
                  <div className="info">
                      <div className="main-slider">Oretemauw</div>
                      <div className="sub-slider">Omuke trughte a otufta</div>
                  </div>
                </div>
            </div>
            <div className="slider-option slider-third" >
                <div className="shadow"></div>
                <div className="label">
                  <div className="info">
                      <div className="main-slider">Iteresuselle</div>
                      <div className="sub-slider">Omuke trughte a otufta</div>
                  </div>
                </div>
            </div>
            <div className="slider-option slider-fourth" >
                <div className="shadow"></div>
                <div className="label">
                  <div className="info">
                      <div className="main-slider">Idiefe</div>
                      <div className="sub-slider">Omuke trughte a otufta</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
     
      </main>

      <footer className="sticky z-0 bottom-0 left-0 w-full h-screen flex flex-col bg-black dark:bg-white items-center justify-start overflow-hidden">
        <span className=" z-[100] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-Outfit font-bold text-white dark:text-black text-[16em]">Buy</span>
        <div className="flex flex-row flex-wrap grow-0 shrink basis-auto gap-6 w-screen p-8">
        <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%] "></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%] "></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="block relative w-full h-0 pb-[100%] overflow-hidden"><a href="https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/159" target="_blank" rel="noreferrer"><Image className="hover:scale-110 transition-transform duration-150 ease-linear" src="/static/images/render4.png" width="615" height="903" /></a></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#159</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
        </div>
        <div className="flex flex-row flex-wrap grow-0 shrink basis-auto gap-6 w-screen p-8">
          <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="block relative w-full h-0 pb-[100%] overflow-hidden"><a href="https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/4200" target="_blank" rel="noreferrer"><Image className="hover:scale-110 transition-transform duration-150 ease-linear" src="/static/images/render3.png" width="615" height="903" /></a></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#4200</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap grow-0 shrink basis-auto gap-6 w-screen p-8">
          <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="block relative w-full h-0 pb-[100%] overflow-hidden"><a href="https://opensea.io/assets/0xbd4455da5929d5639ee098abfaa3241e9ae111af/158" target="_blank" rel="noreferrer"><Image className="hover:scale-110 transition-transform duration-150 ease-linear" src="/static/images/render.png" width="615" height="903" /></a></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#158</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
            <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
              <div className="site-col block relative w-full h-0 pb-[100%]"></div>
              <div className="flex justify-between">
                <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
                <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
              </div>
            </div>
        </div>
        <div className="flex flex-row flex-wrap grow-0 shrink basis-auto gap-6 w-screen p-8">
        <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
            <div className="site-col block relative w-full h-0 pb-[100%]"></div>
            <div className="flex justify-between">
              <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
              <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
            </div>
          </div>
          <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
            <div className="site-col block relative w-full h-0 pb-[100%]"></div>
            <div className="flex justify-between">
              <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
              <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
            </div>
          </div>
          <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
            <div className="site-col block relative w-full h-0 pb-[100%]"></div>
            <div className="flex justify-between">
              <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
              <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
            </div>
          </div>
          <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
            <div className="site-col block relative w-full h-0 pb-[100%]"></div>
            <div className="flex justify-between">
              <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
              <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
            </div>
          </div>
          <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
            <div className="site-col block relative w-full h-0 pb-[100%]"></div>
            <div className="flex justify-between">
              <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
              <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
            </div>
          </div>
          <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
            <div className="site-col block relative w-full h-0 pb-[100%]"></div>
            <div className="flex justify-between">
              <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
              <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
            </div>
          </div>
          <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
            <div className="site-col block relative w-full h-0 pb-[100%]"></div>
            <div className="flex justify-between">
              <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
              <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
            </div>
          </div>
          <div className="grow shrink-0 basis-0 max-w-full h-full z-50">
            <div className="site-col block relative w-full h-0 pb-[100%]"></div>
            <div className="flex justify-between">
              <span className="font-Outfit font-light text-base text-white dark:text-black">NFT World</span>
              <span className="font-Outfit font-light text-base text-white dark:text-black">#???</span>
            </div>
          </div>
        </div>
      </footer>
      <audio id='nobSound' src='/static/music/nob.mp3'></audio>
    </Fragment>
  )
}

/*{ scrollY > (height * 0.75) && scrollY < (height * 0.95)
        ? "py-6 focus"
        : "py-6"}*/


/*const animate = (entries) => {
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.timeline.play();
        }else{
          entry.target.timeline.reverse();
        }
    })};

    const ioConfiguration2 = {

      rootMargin: '-0% 0% -50% 0%',
      threshold: 0
    };

    const observerFocus = new IntersectionObserver(animate, ioConfiguration2);
    
    var animations = document.querySelectorAll(".tl-image-box");

    animations.forEach(target => {
      target.timeline = gsap.timeline();
      target.timeline.to(target, {duration: 1.2, y: '100%'})
      observerFocus.observe(target);
    })*/