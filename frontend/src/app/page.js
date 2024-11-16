import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div id="default-carousel" className="relative w-full">
          {/* Carousel Container */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Carousel Items */}
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className={`hidden duration-700 ease-in-out`}
                data-carousel-item
              >
                <Image
                  width={800}
                  height={400}
                  src="/images/images.jpeg"
                  className="absolute block w-full h-full object-cover"
                  alt={`Slide ${item}`}
                />
              </div>
            ))}
          </div>
          {/* Carousel Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                type="button"
                className="w-3 h-3 rounded-full bg-gray-600"
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
              ></button>
            ))}
          </div>
          {/* Previous Button */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 group-hover:bg-gray-900">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </span>
          </button>
          {/* Next Button */}
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 group-hover:bg-gray-900">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
