import React from "react";

const Wrapper = () => {
  return (
    <div class="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px] bg-[url('https://firstclassorolaminado.com/cdn/shop/files/BANNER.jpg?v=1681087799&width=3840')]">
      <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
        <div class="flex h-full items-center justify-center">
          <div class="px-6 text-center text-white md:px-12">
            <h1 class="mt-6 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              The best offer on the market <br />
              <span>for your business</span>
            </h1>
            <a
              class="mb-2 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="#!"
              role="button"
            >
              Get started
            </a>
            <a
              class="inline-block rounded-full px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-20 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="#!"
              role="button"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
