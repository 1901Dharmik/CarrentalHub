import React from 'react'

const About = () => {
  return (
    <div>
        <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
            <div class="relative mb-12">
              <img class="w-full rounded-md" src="./images/new.jpg" alt="" />

              <div class="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                <div class="overflow-hidden bg-white rounded">
                  <div class="px-10 py-6">
                    <div class="flex items-center">
                      <p class="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl"></p>
                      <p class="pl-6 text-sm font-medium text-black sm:text-lg">
                        Rent Your Dream Car <br />
                        Around The World
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                <svg
                  class="w-8 h-8 text-orange-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="pt-4 text-xl">About Us</h3>
              <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                Get to know about our company
              </h2>
              <p class="mt-6 text-lg leading-relaxed text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia conse duis enim velit mollit.
                Exercitation veniam.
              </p>
              <a
                href="#"
                title=""
                class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
              >
                {" "}
                Explore more{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Meet the brains</h2>
            <p class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-1.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Jenny Wilson</p>
                <p class="mt-1 text-base leading-tight text-gray-600">Founder</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-2.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Darrell Steward</p>
                <p class="mt-1 text-base leading-tight text-gray-600">CTO</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-3.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Bessie Cooper</p>
                <p class="mt-1 text-base leading-tight text-gray-600">CMO</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-4.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Arlene McCoy</p>
                <p class="mt-1 text-base leading-tight text-gray-600">Senior Developer</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-5.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Brooklyn Simmons</p>
                <p class="mt-1 text-base leading-tight text-gray-600">Product Designer</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-6.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Jerome Bell</p>
                <p class="mt-1 text-base leading-tight text-gray-600">Customer Success</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-7.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Dianne Russell</p>
                <p class="mt-1 text-base leading-tight text-gray-600">Front-end Developer</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-8.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Kristin Watson</p>
                <p class="mt-1 text-base leading-tight text-gray-600">H.R</p>
            </div>

            <div class="hidden lg:block"></div>

            <div>
                <img class="object-cover mx-auto rounded-lg w-28 h-28" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-9.jpg" alt="" />
                <p class="mt-8 text-lg font-semibold leading-tight text-black">Eleanor Pena</p>
                <p class="mt-1 text-base leading-tight text-gray-600">UI Designer</p>
            </div>
        </div>
    </div>
</section>
      <section class="py-10 pt-5 bg-gray-100 sm:py-16 lg:py-6">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              What our customers say
            </h2>
            <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-1.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Darrell Steward
                    </p>
                    <p class="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                    <span class="block text-sky-500">#another</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-2.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Leslie Alexander
                    </p>
                    <p class="text-sm text-gray-600 truncate">@lesslie</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    Simply the best. Better than all the rest. I’d recommend
                    this product to beginners and advanced users.
                    <span class="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Jenny Wilson
                    </p>
                    <p class="text-sm text-gray-600 truncate">@jennywilson</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    This is a top quality product. No need to think twice before
                    making it live on web.
                    <span class="block text-sky-500">#make_it_fast</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Kristin Watson
                    </p>
                    <p class="text-sm text-gray-600 truncate">
                      @kristinwatson2
                    </p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    YFinally, I’ve found a template that covers all bases for a
                    bootstrapped startup. We were able to launch in days, not
                    months.
                    <span class="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-5.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Guy Hawkins
                    </p>
                    <p class="text-sm text-gray-600 truncate">@jennywilson</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    This is a top quality product. No need to think twice before
                    making it live on web.
                    <span class="block text-sky-500">#make_it_fast</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-6.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Marvin McKinney
                    </p>
                    <p class="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    With Celebration, it’s quicker with the customer, the
                    customer is more ensured of getting exactly what they
                    ordered, and I’m all for the efficiency.
                    <span class="block text-sky-500">#dev #tools</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-6">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-7.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Annette Black
                    </p>
                    <p class="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                    <span class="block text-sky-500">#another</span>
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md">
              <div class="px-5 py-2">
                <div class="flex items-center justify-between">
                  <img
                    class="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg"
                    alt=""
                  />
                  <div class="min-w-0 ml-3 mr-auto">
                    <p class="text-base font-semibold text-black truncate">
                      Floyd Miles
                    </p>
                    <p class="text-sm text-gray-600 truncate">@darrels</p>
                  </div>
                  <a href="#" title="" class="inline-block text-sky-500">
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                    </svg>
                  </a>
                </div>
                <blockquote class="mt-5">
                  <p class="text-base text-gray-800">
                    My new site is so much faster and easier to work with than
                    my old site. I just choose the page, make the change and
                    click save.
                    <span class="block text-sky-500">#Celebration</span>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
