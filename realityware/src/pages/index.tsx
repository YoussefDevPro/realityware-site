import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [faq1, showfaq1] = useState(false);
  const [faq2, showfaq2] = useState(false);
  const [faq3, showfaq3] = useState(false);
  const [faq4, showfaq4] = useState(false);
  const [faq5, showfaq5] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTitle(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Realityware</title>
        <meta name="description" content="The home page for Realityware! Doesn't show up if logged in (to be implemented)" />
      </Head>

      {/* To be implemented once we're ready
      <div className="fixed -top-1 right-0 z-50 max-width max-w-xs px-4 mt-8 text-center">
        <a href="/signin" className="inline-block px-6 py-3 bg-black text-white rounded-lg shadow hover:opacity-90 transition">
          Sign in with Slack!
        </a>
      </div> */}
      <div className="min-h-screen items-center justify-center">
        <header className="bg-gradient-to-b from-background via-background to-accent w-full mx-auto min-h-[20vh] pt-[18vh] pb-[12vw]">
          {showTitle && (
            <div className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur shadow text-left py-2">
              <span className="text-[2.5vw] font-bold text-foreground ml-[2vw]">Realityware</span>
            </div>
          )}
          <div className="absolute top-0 left-[38vw] z-50 max-width max-w-xs px-[4vw]">
            <Image src="/flag-orpheus-top.png" alt="Hack Club logo" width={181} height={63} className="object-contain w-[calc(8vw+15vh)] h-auto" />
          </div>
          <div className="flex items-center justify-center mb-[3vh] relative">
            <h1 className="text-[calc(6vw+6vh)] font-bold text-center text-foreground flex-1">Realityware</h1>
          </div>
          <div className="flex justify-center">
            <p className="inline-block text-[calc(1.6vw+2vh)] mb-[2vh] text-primary text-center whitespace-wrap mx-[2vw]">Ship a solution to a problem of society, get a grant to build it!</p>
          </div>
          <p className="mb-[8vh] text-secondary text-center text-[calc(0.7vw+1.4vh)]">You can also get prizes like 3D printers, Raspberry Pis, and stickers!</p>

          <section className="space-y-4 mb-[8vh] flex justify-center">
            <a className="inline-block px-[3vw] py-[2.4vh] rounded shadow-lg text-foreground text-center text-white bg-lightaccent text-[calc(0.9vw+1vh)] hover:opacity-80 hover:bg-accent" href="/gallery">RSVP here!</a>
          </section>
        </header>
  
        <main className="w-full p-8 bg-accent mx-auto">
          <section className="space-y-4">
            {/* This can be worded better */}
            <p className="block px-[1vw] py-[2vh] text-[calc(1.6vw+3.3vh)] rounded text-center underline text-black">Completing the YSWS</p>
          </section>
          <section className="items-center flex mt-[10vh] justify-center">
            <p className="inline-block w-[25vw] h-[42vh] px-[1vw] py-[2vh] border border-[2vw] border-gray bg-secondary rounded-lg shadow-lg rounded text-center text-lightblack text-[calc(0.9vw+1.2vh)] overflow-y-auto">Step 1: Come up with an idea! <span className="block mt-[3vh] text-[calc(0.6vw+0.9vh)] text-justify">It can be anything, as well as a solution can be built for it! The better your idea is to help society, the better reward you will get!</span></p>
            <div className="w-[8vw] h-[6vh] bg-lightblue flex-shrink-0"></div>
            <p className="inline-block w-[25vw] h-[40vh] px-[1vw] py-[2vh] border border-[2vw] border-gray bg-foreground rounded-lg shadow-lg rounded text-center text-white text-[calc(0.9vw+1.2vh)] overflow-y-auto">Step 2: Build your project! <span className="block mt-[3vh] text-[calc(0.6vw+0.9vh)] text-justify">Design your project! Plan it out, make a CAD, and design the schematic! Then, create the code that your project would run on, and put it on GitHub!</span></p>
            <div className="w-[8vw] h-[6vh] bg-lightblue flex-shrink-0"></div>
            <p className="inline-block w-[25vw] h-[40vh] px-[1vw] py-[2vh] border border-[2vw] border-gray bg-primary rounded-lg shadow-lg rounded text-white text-center text-[calc(0.9vw+1.2vh)] overflow-y-auto">Step 3: Create your BOM! <span className="block mt-[3vh] text-[calc(0.6vw+0.9vh)] text-justify">Simply list out all the components and materials you will need to create your project. We will use this BOM to give you an appropriate grant!</span></p>
          </section>
          <section className="flex h-[28vh]">
            <div className="absolute w-[3vw] h-[10vh] bg-lightblue flex-shrink-0 right-[16vw] rounded-b-full -mt-[1vh]"></div>
            <div className="absolute w-[52vw] h-[6vh] bg-lightblue flex-shrink-0 mt-[4vh] right-[16vw] rounded-full z-1"></div>
            <div className="absolute w-[3vw] h-[24vh] bg-lightblue flex-shrink-0 mt-[4vh] right-[65vw] rounded-t-full"></div>
            <div className="absolute w-[3vw] h-[24vh] bg-red flex-shrink-0 mt-[4vh] right-[32vw] rounded-t-full"></div>
          </section>
          <section className="items-center flex justify-center">
            <p className="inline-block w-[25vw] h-[40vh] px-[1vw] py-[2vh] border border-[2vw] border-gray bg-blue-900 rounded-lg shadow-lg rounded text-center text-white text-[calc(0.9vw+1.2vh)] overflow-y-auto">Optional: Make a PCB layout! <span className="block mt-[3vh] text-[calc(0.6vw+0.9vh)] text-justify">For a chance at bigger rewards, create a PCB design for your project! This will become a part of your grant.</span></p>
            <div className="w-[8vw] h-[6vh] bg-lightblue flex-shrink-0"></div>
            <p className="inline-block w-[25vw] h-[40vh] px-[1vw] py-[2vh] border border-[2vw] border-gray bg-purple rounded-lg shadow-lg rounded text-lightblack text-center text-[calc(0.9vw+1.2vh)] overflow-y-auto">Step 4: Ship it! <span className="block mt-[3vh] text-[calc(0.6vw+0.9vh)] text-justify">Once you're finished, ship it to us! We'll rate your project and give you a grant to build it.</span></p>
          </section>
          <section className="flex h-[28vh]">
            <div className="absolute w-[3vw] h-[10vh] bg-lightblue flex-shrink-0 right-[32vw] rounded-b-full"></div>
            <div className="absolute w-[18vw] h-[6vh] bg-lightblue flex-shrink-0 mt-[4vh] right-[32vw] rounded-full z-1"></div>
            <div className="absolute w-[3vw] h-[24vh] bg-lightblue flex-shrink-0 mt-[4vh] right-[48vw] rounded-t-full"></div>
          </section>
          <section className="gap-[10vw] flex justify-center items-center">
            <p className="inline-block w-[25vw] h-[40vh] px-[1vw] py-[2vh] border border-[2vw] border-gray bg-yellow-500 rounded-lg shadow-lg rounded text-lightblack text-center text-[calc(0.9vw+1.2vh)] overflow-y-auto">Step 5: Use your grant to build your project!<span className="block mt-[3vh] text-[calc(0.6vw+0.9vh)] text-justify">The project isn't finished until it's up and working! You can win even more prizes by doing so!</span></p>
          </section>

          <section className="flex items-center justify-center max-width mt-[18vh]">
            <div className="relative bg-white pb-[2vh] w-[67vw] h-auto border border-black border-[0.25vw] shadow-lg rounded [clip-path:polygon(0%_0%,calc(100%-6vw)_0%,100%_6vw,100%_100%,0%_100%)]">
              <div className="absolute -top-[0.25vw] -right-[0.25vw] pointer-events-none">
                <div className="w-[6vw] h-[6vw] border-[0.25vw] border-black"></div>
              </div>
              <p className="relative text-center text-[calc(2vw+2vh)] underline mt-[2vh]">Frequently Asked Questions</p>
              <p
                className="text-lightblack text-[calc(1.2vw+1vh)] mt-[6vh] ml-[2vw] cursor-pointer"
                onClick={() => showfaq1((v) => !v)}
              >
                When will the YSWS start?
                <span
                  className={`absolute right-[2.5vw] transition-transform duration-200 inline-block ${
                    faq1 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block w-0 h-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>
              
              {faq1 && (
                <p className="text-lightblack text-[calc(0.8vw+0.8vh)] mt-[4vh] ml-[2vw] transition-all duration-300 text-textlight">
                  Around late December or early January!
                </p>
              )}
              <hr className="w-[63vw] mx-auto mt-[1vh]"/>
              <p
                className="text-lightblack text-[calc(1.2vw+1vh)] mt-[6vh] ml-[2vw] cursor-pointer"
                onClick={() => showfaq2((v) => !v)}
              >
                Any special gimmicks?
                <span
                  className={`absolute right-[2.5vw] transition-transform duration-200 inline-block ${
                    faq2 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block w-0 h-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>
              
              {faq2 && (
                <p className="text-lightblack text-[calc(0.8vw+0.8vh)] mt-[4vh] ml-[2vw] transition-all duration-300 text-textlight">
                  You will be placed into a city (out of 4 cities), and you must complete scenarios with your city to earn more points!
                </p>
              )}
              <hr className="w-[63vw] mx-auto mt-[1vh]"/>
              <p
                className="text-lightblack text-[calc(1.2vw+1vh)] mt-[6vh] ml-[2vw] cursor-pointer"
                onClick={() => showfaq3((v) => !v)}
              >
                Placeholder 1
                <span
                  className={`absolute right-[2.5vw] transition-transform duration-200 inline-block ${
                    faq3 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block w-0 h-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>
              
              {faq3 && (
                <p className="text-lightblack text-[calc(0.8vw+0.8vh)] mt-[4vh] ml-[2vw] transition-all duration-300 text-textlight">
                  Still working on the FAQ!
                </p>
              )}
              <hr className="w-[63vw] mx-auto mt-[1vh]"/>
              <p
                className="text-lightblack text-[calc(1.2vw+1vh)] mt-[6vh] ml-[2vw] cursor-pointer"
                onClick={() => showfaq4((v) => !v)}
              >
                Placeholder 2
                <span
                  className={`absolute right-[2.5vw] transition-transform duration-200 inline-block ${
                    faq4 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block w-0 h-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>
              
              {faq4 && (
                <p className="text-lightblack text-[calc(0.8vw+0.8vh)] mt-[4vh] ml-[2vw] transition-all duration-300 text-textlight">
                  Still working on the FAQ!
                </p>
              )}
              <hr className="w-[63vw] mx-auto mt-[1vh]"/>
              <p
                className="text-lightblack text-[calc(1.2vw+1vh)] mt-[6vh] ml-[2vw] cursor-pointer"
                onClick={() => showfaq5((v) => !v)}
              >
                Placeholder 3
                <span
                  className={`absolute right-[2.5vw] transition-transform duration-200 inline-block ${
                    faq5 ? "rotate-90" : ""
                  }`}
                >
                  <span className="inline-block w-0 h-0 border-t-[1vw] border-t-transparent border-b-[1vw] border-b-transparent border-l-[1vw] border-l-black"></span>
                </span>
              </p>
              
              {faq5 && (
                <p className="text-lightblack text-[calc(0.8vw+0.8vh)] mt-[4vh] ml-[2vw] transition-all duration-300 text-textlight">
                  Still working on the FAQ!
                </p>
              )}
              <hr className="w-[63vw] mx-auto mt-[1vh]"/>
            </div>
          </section>

          <section className="flex items-center justify-center mt-[4vh] mb-[14vh]">
            <a className="block rounded w-[22vw] h-[16vh] px-[1vw] py-[2vh] rounded text-center bg-purple text-white rounded-full justify-center flex items-center text-[calc(0.7vw+1vh)]" href="https://hackclub.slack.com/docs/T0266FRGM/F09S78K5M1P">To learn more, read our full FAQ here!</a>
          </section>
        </main>

        <footer className="bg-neutral w-full p-[4vh] mx-auto items-center justify-center flex">
          <section className="space-y-4">
            <p className="block px-[1vw] py-[2vh] rounded text-foreground text-[calc(0.9vw+1vh)]">Built with love by members of <a href="https://hackclub.com/" className="text-blue-900 underline">Hack Club</a>! View this website's <a href="https://github.com/Drummingcoder/realityware-site" className="text-blue-900 underline">source code</a> and join our <a href="https://hackclub.com/slack/" className="text-blue-900 underline">Slack!</a></p>
          </section>
        </footer>
      </div>
    </>
  );
}