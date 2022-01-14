import Head from 'next/head'
import { Fragment, useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import {gsap, Power3} from 'gsap';


export default function Home() {

  
  
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(0);
  const [testHeight, setTestHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {

    

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
  
    const multipleTargets = document.querySelectorAll('.tl-animate');
    const focusTargets = document.querySelectorAll('.focus-target');

    const elementHasIntersected = (entries) => {
      entries.forEach(entry=>{
        if(entry.isIntersecting){
            const tlItem=entry.target;
            const tlImageBox = undefined;
            if(entry.target.closest(".timeline-item").children[0].children[0] != undefined) {tlImageBox = entry.target.closest(".timeline-item").children[0].children[0].children[0];}
            else{tlImageBox = entry.target.closest(".timeline-item").children[2].children[0].children[0];}

            tlItem.classList.add("focus");
            if(tlImageBox != null){tlImageBox.classList.add("box-animate");}
            
            play(); 
        }else if(entry.boundingClientRect.top > 0){
            const tlItem=entry.target;
            const tlImageBox = undefined;
            if(entry.target.closest(".timeline-item").children[0].children[0] != undefined) {tlImageBox = entry.target.closest(".timeline-item").children[0].children[0].children[0];}
            else{tlImageBox = entry.target.closest(".timeline-item").children[2].children[0].children[0];}

            tlItem.classList.remove("focus");
            if(tlImageBox != null){tlImageBox.classList.remove("box-animate");}
       
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
      rootMargin: '-49% 0% -50% 0%',
      threshold: [0]
    };
    
    
    const observer = new IntersectionObserver(elementHasIntersected, ioConfiguration);
    multipleTargets.forEach((target) => observer.observe(target));
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

  return (
    <Fragment>
      <Head>
        <title>BrokeTopia | NFT Minecraft World</title>
        <meta name="description" content="NFT Games" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation/>
      
      <main> 
      <section className="heroSec flex flex-col justify-center items-center pt-[100px] bg-white dark:bg-[#121212]">
      <div className="relative h-[90vh]"><div className=" h-[25vh] lg:h-[90vh] mt-8 px-12 w-screen heroDiv sticky top-0"><video className="rounded-2xl video-block heroVid relative w-screen" autoPlay muted playsInline loop><source src="/static/videos/HeroVid.mp4" type="video/mp4" /></video></div></div>
      <div className="font-Outfit pt-24 pb-36 font-medium  text-2xl 2xl:w-1/3 w-9/12 md:w-8/12 lg:w-7/12 items-center text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-[#121212]">
        <p id="test" className="pb-6 focus-target">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <p className="py-6 focus-target">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p className="py-6 focus-target">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="py-6 focus-target">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      </section> 
      <div id="tl-wrapper" className="timeline-wrapper font-Outfit font-normal text-xl flex flex-col items-center h-[6500px]">
      <div className="timeline-progress w-[2px] h-[450%] dark:bg-[#3d3d3d] bg-[#cfcfcf] absolute -z-10"><div className="timeline-progress-bar w-[2px] h-[50vh] dark:bg-[#fff] bg-black fixed bottom-[50vh] -z-10"></div></div>
        <div className="timeline-item  flex flex-row justify-around items-center py-32 w-full">
            <div className="tl-left w-1/2 flex flex-col items-center justify-center">
              <div className="tl-image-wrapper">
                <div className="tl-image-box"></div>
                <div>
                <Image className="tl-image" src="/static/images/npc.png" width="615" height="903" />
                </div>
              </div>
            </div>
            <div className="tl-center flex items-center justify-center w-1/4"><span className="tl-animate py-4 px-6 border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-[#121212]">Proxy Giorgakis</span></div>
            <div className="tl-right w-1/2 flex items-center justify-center"></div>
          </div>
        <div className="timeline-item flex flex-row justify-around items-center py-32 w-full">
          <div className="tl-left w-1/2 flex flex-col items-center justify-center"> 
          </div>
          <div className="tl-center flex items-center justify-center w-1/4"><span className="tl-animate py-4 px-6 border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-[#121212]">Proxy Giorgakis</span></div>
          <div className="tl-right w-1/2 flex items-center justify-center">
          <div className="tl-image-wrapper">
              <div className="tl-image-box"></div>
              <div>
              <Image className="tl-image" src="/static/images/npc.png" width="615" height="903" />
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-item flex flex-row justify-around items-center py-32 w-full">
          <div className="tl-left w-1/2 flex flex-col items-center justify-center">
            <div className="tl-image-wrapper">
              <div className="tl-image-box"></div>
              <div>
              <Image className="tl-image" src="/static/images/npc.png" width="615" height="903" />
              </div>
            </div>
          </div>
          <div className="tl-center flex items-center justify-center w-1/4"><span className="tl-animate py-4 px-6 border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-[#121212]">Proxy Giorgakis</span></div>
          <div className="tl-right w-1/2 flex items-center justify-center"></div>
        </div>
        <div className="timeline-item flex flex-row justify-around items-center py-32 w-full">
          <div className="tl-left w-1/2 flex flex-col items-center justify-center"></div>
          <div className="tl-center flex items-center justify-center w-1/4"><span className="tl-animate py-4 px-6 border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-[#121212]">Proxy Giorgakis</span></div>
          <div className="tl-right w-1/2 flex items-center justify-center">
          <div className="tl-image-wrapper">
              <div className="tl-image-box"></div>
              <div>
              <Image className="tl-image" src="/static/images/npc.png" width="615" height="903" />
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-item flex flex-row justify-around items-center py-32 w-full">
          <div className="tl-left w-1/2 flex flex-col items-center justify-center">
            <div className="tl-image-wrapper">
              <div className="tl-image-box"></div>
              <div>
              <Image className="tl-image" src="/static/images/npc.png" width="615" height="903" />
              </div>
            </div>
          </div>
          <div className="tl-center flex items-center justify-center w-1/4"><span className="tl-animate py-4 px-6 border-[2.5px] rounded-full border-[#bec0c5] dark:border-[#5a5a5a] text-[#bec0c5] dark:text-[#5a5a5a] bg-white dark:bg-[#121212]">Proxy Giorgakis</span></div>
          <div className="tl-right w-1/2 flex items-center justify-center"></div>
        </div>
        </div>
     
      </main>
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