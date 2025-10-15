export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col md:flex-row md:items-center md:justify-center p-6 md:p-8">
      {/* Cat illustration - top on mobile, centered on desktop */}
      <div className="pt-8 md:hidden">
        <img
          src="/cat.jpg"
          alt="Dancing cat"
          className="w-20 h-30 mx-auto"
        />
      </div>

      <div className="max-w-5xl w-full text-center flex-1 flex items-center justify-center">
        <div>
          {/* Cat illustration - desktop only */}
          <div className="hidden md:block mb-12">
            <img
              src="/cat.jpg"
              alt="Dancing cat"
              className="w-30 h-40 mx-auto"
            />
          </div>

          {/* Body text */}
          <div className="space-y-8 pb-32 md:space-y-8 text-black lowercase">
            <p className="text-base md:text-lg leading-relaxed px-4 md:px-0">
              welcome to our wedding website!
            </p>
            <p className="text-base md:text-lg leading-relaxed px-4 md:px-0">
              nothing to see here yet, but soon this is where you'll find
              information about the event, travel, accommodation and more.
            </p>
            <p className="text-base md:text-lg leading-relaxed px-4 md:px-0">
              until then, please save the date for our celebration on the 29
              <sup>th</sup> of august, 2026, in prod, romania.
            </p>
            <p className="text-base md:text-lg">
              — ines & filip :)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}