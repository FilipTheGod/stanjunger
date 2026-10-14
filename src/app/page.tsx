import Image from "next/image"
import cat from "../../public/cat.jpg"
import wedding from "../../public/wedding.jpg"

// Layout (same on mobile and desktop, fits one screen with no scrolling):
// cat pinned top, photo + date centered, "party date tbd" near the bottom,
// and 1/6 of the screen left blank at the bottom.
export default function Home() {
  return (
    <main className="min-h-svh bg-white flex flex-col items-center p-6 pb-0 md:p-8 md:pt-7 md:pb-0 text-center text-black lowercase">
      {/* Cat illustration - header */}
      <header className="pt-4 md:pt-1">
        {/* next/image serves a small resized copy instead of the 1 MB original */}
        <Image
          src={cat}
          alt="Dancing cat"
          className="w-12 md:w-16 h-auto mx-auto"
          sizes="64px"
          priority
        />
      </header>

      <section className="w-full max-w-2xl flex-1 flex flex-col justify-center py-10 md:pt-22 md:pb-25">
        <Image
          src={wedding}
          alt="ines and filip on their wedding day"
          // On desktop the photo is capped by screen height so the page never scrolls
          className="w-full h-auto md:w-auto md:max-h-[44svh] mx-auto"
          sizes="(min-width: 768px) 672px, 100vw"
          placeholder="blur"
          priority
        />
        <p className="mt-4 text-base md:text-lg">married october 2nd, 2026</p>
      </section>

      <p className="text-base md:text-lg">party date tbd</p>

      {/* Blank space at the bottom: 1/6 of the screen height (a bit less on desktop, where "party date tbd" sits lower) */}
      <div aria-hidden className="h-[calc(100svh/6)] md:h-[calc(100svh/6-28px)] shrink-0" />
    </main>
  );
}
