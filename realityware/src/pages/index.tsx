import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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

      <div className="fixed top-40 right-10 z-50 max-width max-w-xs px-4">
        <Image src="/hackclublogo.png" alt="Hack Club logo" width={181} height={63} className="object-cover" />
      </div>

      <div className="min-h-screen flex items-center justify-center bg-background">
        <main className="max-w-3xl w-full p-8">
          <h1 className="text-8xl font-bold mb-4 text-center text-foreground">Realityware</h1>
          <p className="text-lg mb-6 text-primary text-center">Ship a solution to a problem of society, get a grant to build it!</p>
          <p className="text-sm mb-6 text-secondary">Psst...You can even get prizes like 3D printers, Raspberry Pis, and stickers!</p>

          <section className="space-y-4">
            <a className="block px-4 py-3 rounded text-foreground text-center" href="/gallery">RSVP here!</a>
          </section>

          <section className="space-y-4">
            <p className="block px-4 py-3 rounded text-foreground text-center">So, how will the event work?</p>
          </section>
          <section className="space-y-4">
            <p className="block px-4 py-3 bg-background rounded text-foreground">Step 1: Come up with an idea!</p>
          </section>
        </main>
      </div>
    </>
  );
}