
import Link from "next/link";

const specifications = [
  { label: "ERA", value: "1960s" },
  { label: "CATEGORY", value: "Classic Sports Car" },
  { label: "DESIGN", value: "Timeless Engineering" },
];

export default function FeaturedVehicle() {
  return (
    <section
      id="featured"
      className="bg-[#242427] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Editorial Content */}
        <div className="flex flex-col items-start">

          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#B89B70]">
            02 — Featured Automobile
          </p>

          <h2 className="mb-6 font-display text-5xl font-medium uppercase leading-[0.95] text-[#F2EEE8] sm:text-6xl lg:text-7xl">
            The Classic
            <br />
            Sports Car.
          </h2>

          <p className="mb-10 max-w-lg text-sm leading-7 text-[#92908D] sm:text-base">
            A celebration of an era when automotive design was defined by
            character, craftsmanship, and the pursuit of driving perfection.
            Discover a machine that represents the timeless spirit of
            classic motoring.
          </p>

          {/* Specifications */}
          <div className="mb-10 grid w-full grid-cols-3 gap-4 border-y border-[#92908D]/20 py-7">
            {specifications.map((spec) => (
              <div key={spec.label} className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#92908D]">
                  {spec.label}
                </span>

                <span className="text-xs font-medium text-[#F2EEE8] sm:text-sm">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Details Link */}
          <Link
            href="/vehicles/classic-sports-car"
            className="group inline-flex items-center gap-4 border-b border-[#B89B70] pb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#F2EEE8] transition-colors duration-300 hover:text-[#B89B70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B89B70] focus-visible:outline-offset-4"
          >
            Explore This Vehicle

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>

        </div>

        {/* Vehicle Visual */}
        <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-[#202027] sm:min-h-[450px] lg:min-h-[550px]">

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(184,155,112,0.10),_transparent_65%)]" />

          <div className="relative z-10 flex flex-col items-center gap-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#92908D]">
              MOTOR / ARCHIVE
            </span>

            <span className="font-display text-3xl italic text-[#B89B70]">
              A timeless machine.
            </span>
          </div>

          <span className="absolute bottom-5 right-5 text-[10px] uppercase tracking-[0.15em] text-[#92908D]">
            01 / 01
          </span>

        </div>

      </div>
    </section>
  );
}
