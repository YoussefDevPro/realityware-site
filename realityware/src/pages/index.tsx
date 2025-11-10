import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
        <header className="bg-gradient-to-b from-background via-background to-accent w-full mx-auto min-h-[20vh] pt-24 pb-12">
          <div className="flex items-center justify-center mb-6 relative">
            <h1 className="text-[8rem] font-bold mb-6 text-center text-foreground flex-1">Realityware</h1>
            <div className="absolute top-1/5 right-[7vw] -translate-y-1/2 z-50 max-width max-w-xs px-4">
              <Image src="/hackclublogo.png" alt="Hack Club logo" width={181} height={63} className="object-cover" />
            </div>
          </div>
          <div className="flex justify-center">
            <p className="inline-block text-3xl mb-3 text-primary whitespace-nowrap">Ship a solution to a problem of society, get a grant to build it!</p>
          </div>
          <p className="mb-12 text-secondary text-center">You can also get prizes like 3D printers, Raspberry Pis, and stickers!</p>

          <section className="space-y-4 mb-32 flex justify-center">
            <a className="inline-block border border-neutral px-6 py-3 rounded text-foreground text-center text-white bg-accent hover:opacity-90" href="/hub">RSVP here!</a>
          </section>
        </header>
  
        <main className="w-full p-8 bg-accent mx-auto">
          <section className="space-y-4">
            {/* This can be worded better */}
            <p className="block px-4 py-3 text-4xl rounded text-center underline text-black">Completing the YSWS</p>
          </section>
          <section className="space-y-4 gap-[10vw] flex mt-[10vh]">
            <p className="inline-block w-[25vw] h-64 px-4 py-3 border border-secondary rounded-lg shadow-lg border-[2vw] rounded text-center text-lightblack text-lg">Step 1: Come up with an idea! <span className="block mt-4 text-sm text-justify">It can be anything, as well as a solution can be built for it! The better your idea is to help society, the better reward you will get!</span></p>

            <p className="inline-block w-[25vw] h-64 px-4 py-3 border border-foreground rounded-lg shadow-lg border-[2vw] rounded text-lightblack text-center text-lg">Step 2: Build your project! <span className="block mt-4 text-sm text-justify">Design your project! Plan it out, make a CAD, and design the schematic! Then, create the code that your project would run on, and put it on GitHub!</span></p>
            <p className="inline-block w-[25vw] h-64 px-4 py-3 border border-primary rounded-lg shadow-lg border-[2vw] rounded text-lightblack text-center text-lg">Step 3: Create your BOM! <span className="block mt-4 text-sm text-justify">Simply list out all the components and materials you will need to create your project. We will use this BOM to give you an appropriate grant!</span></p>
          </section>
          <section className="space-y-4 gap-[10vw] flex mt-[15vh] justify-center items-center">
            <p className="inline-block w-[25vw] h-64 px-4 py-3 border border-blue-900 border-[2vw] rounded-lg shadow-lg rounded text-lightblack text-center text-lg">Optional: Create a PCB layout for your project! <span className="block mt-4 text-sm text-justify">For a chance at bigger rewards, create a PCB design for your project! This will become a part of your grant.</span></p>
            <p className="inline-block w-[25vw] h-64 px-4 py-3 border border-purple border-[2vw] rounded-lg shadow-lg rounded text-lightblack text-center text-lg">Step 4: Ship it! <span className="block mt-4 text-sm text-justify">Once you're finished, ship it to us! We'll rate your project and give you a grant to build it.</span></p>
          </section>
          <section className="space-y-4 gap-[10vw] flex mt-[15vh] justify-center items-center">
            <p className="inline-block w-[25vw] h-64 px-4 py-3 border border-background border-[2vw] rounded-lg shadow-lg rounded text-lightblack text-center text-lg">Step 5: Use your grant to build your project!<span className="block mt-4 text-sm text-justify">The project isn't finished until it's up and working! You can win even more prizes by doing so!</span></p>
          </section>
          <section className="flex items-center justify-center mt-[20vh]">
            <a className="block rounded w-[22vw] h-16 px-4 py-3 rounded text-center bg-purple text-white rounded-full justify-center flex items-center" href="https://hackclub.slack.com/docs/T0266FRGM/F09S78K5M1P">To learn more, read our FAQ here!</a>
          </section>
        </main>

        <footer className="bg-neutral w-full p-8 mx-auto items-center justify-center flex">
          <section className="space-y-4">
            <p className="block px-4 py-3 rounded text-foreground">Built with love by members of <a href="https://hackclub.com/" className="text-blue-900 underline">Hack Club</a>! View this website's <a href="https://github.com/Drummingcoder/realityware-site" className="text-blue-900 underline">source code</a> and join our <a href="https://hackclub.com/slack/" className="text-blue-900 underline">Slack!</a></p>
          </section>
        </footer>
      </div>
    </>
  );
}