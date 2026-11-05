
import Scene from "../app/Scene";

export default function Hero() {
  return (
    <section
      id="collection"
      className="min-h-[680px] bg-[#171719] px-5 py-12 sm:px-8 lg:px-12 lg:py-16"
    >
      <div className="mx-auto grid min-h-[600px] max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[40%_60%] md:gap-0">

        {/* Left: Editorial Content */}
        <div className="flex flex-col items-start justify-center space-y-7 md:pr-8 lg:pr-12">

          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B89B70]">
            01 — THE CLASSIC COLLECTION
          </p>

          <h1 className="font-display text-5xl font-medium uppercase leading-[0.95] tracking-tight text-[#F2EEE8] sm:text-6xl lg:text-7xl">
            The Art of
            <br />
            the Drive.
          </h1>

          <p className="max-w-md text-sm leading-7 text-[#92908D] sm:text-base">
            An appreciation of timeless design, mechanical craftsmanship,
            and the machines that define an era.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-2">
            <a
              href="#vehicle"
              className="bg-[#B89B70] px-7 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#171719] transition-colors duration-300 hover:bg-[#D0B58C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B89B70]"
            >
              Discover the Vehicle
            </a>

            <a
              href="#vehicle"
              className="text-xs font-semibold uppercase tracking-[0.1em] text-[#F2EEE8] transition-colors duration-300 hover:text-[#B89B70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B89B70]"
            >
              Explore in 3D →
            </a>
          </div>

        </div>

        {/* Right: 3D Vehicle Scene */}
        <div
          id="vehicle"
          className="relative min-h-[420px] w-full overflow-hidden md:min-h-[550px]"
        >
          <Scene />

          <p className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-[#92908D]">
            Drag to Rotate
          </p>
        </div>

      </div>
    </section>
  );
}
