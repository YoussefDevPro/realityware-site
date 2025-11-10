import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-center">
      <Image
        src="https://static.wikia.nocookie.net/joke-battles/images/7/77/Core%21Frisk.png" /* Core!Frisk my beloved :3 */
        alt="404 Not Found"
        width={300}
        height={300}
        className="object-contain"
      />
      <h1 className="text-4xl font-bold mt-8">404 - Page Not Found</h1>
      <p className="text-lg mt-2">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-8 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
        Go back home
      </Link>
    </div>
  );
}
