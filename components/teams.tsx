import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import TeamMember1 from "@/public/images/team-member-1.png";
import TeamMember2 from "@/public/images/team-member-2.png";

export default function Teams() {
  return (
    <section className="relative" id="teams">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            {/* <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Advanced...Everything
              </span>
            </div> */}
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Who’s behind McKinsly?
            </h2>
            <p className="text-lg text-indigo-200/65">
              <span className="text-white">OpenStatus </span>
              is on a mission to provide a{" "}
              <span className="text-white">reliable </span>,
              <span className="text-white">easy </span> and{" "}
              <span className="text-white">fast </span> way to synthetically
              monitor your APIs and websites.
            </p>
          </div>
          {/* Team Members */}
          <div className="mx-auto justify-center items-center grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 md:gap-x-7 md:gap-y-16 lg:grid-cols-4">
            <article className=" ">
              <div className=" ">
                <Image
                  className="max-w-none w-full h-full border-white border-[1px] rounded-xl"
                  src={TeamMember1}
                  width={100}
                  height={100}
                  alt="Blurred shape"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="mb-1 font-nacelle text-[1rem] mt-2 font-semibold text-gray-200">
                    Maximilian Kaske
                  </h3>
                  <p className="text-indigo-200/65">Pilsner Advocate</p>
                </div>
                <div>
                  <a
                    className="flex items-center justify-center "
                    href="https://x.com/mckinslyai"
                    target="_blank"
                    aria-label="X"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 512 462.799"
                    >
                      <path
                        fill-rule="nonzero"
                        d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
            <article className=" ">
              <div className=" ">
                <Image
                  className="max-w-none w-full h-full border-white border-[1px] rounded-xl"
                  src={TeamMember2}
                  width={100}
                  height={100}
                  alt="Blurred shape"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="mb-1 font-nacelle text-[1rem] mt-2 font-semibold text-gray-200">
                    Thibault Le Ouay Ducasse{" "}
                  </h3>
                  <p className="text-indigo-200/65">Gose Lover</p>
                </div>

                <div>
                  <a
                    className="flex items-center justify-center "
                    href="https://x.com/mckinslyai"
                    target="_blank"
                    aria-label="X"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 512 462.799"
                    >
                      <path
                        fill-rule="nonzero"
                        d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
            <article className=" ">
              <div className=" ">
                <Image
                  className="max-w-none w-full h-full border-white border-[1px] rounded-xl"
                  src={TeamMember2}
                  width={100}
                  height={100}
                  alt="Blurred shape"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="mb-1 font-nacelle text-[1rem] mt-2 font-semibold text-gray-200">
                    Thibault Le Ouay Ducasse{" "}
                  </h3>
                  <p className="text-indigo-200/65">Gose Lover</p>
                </div>

                <div>
                  <a
                    className="flex items-center justify-center "
                    href="https://x.com/mckinslyai"
                    target="_blank"
                    aria-label="X"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 512 462.799"
                    >
                      <path
                        fill-rule="nonzero"
                        d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>{" "}
            </article>
            <article className=" ">
              <div className=" ">
                <Image
                  className="max-w-none w-full h-full border-white border-[1px] rounded-xl"
                  src={TeamMember2}
                  width={100}
                  height={100}
                  alt="Blurred shape"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="mb-1 font-nacelle text-[1rem] mt-2 font-semibold text-gray-200">
                    Thibault Le Ouay Ducasse{" "}
                  </h3>
                  <p className="text-indigo-200/65">Gose Lover</p>
                </div>

                <div>
                  <a
                    className="flex items-center justify-center "
                    href="https://x.com/mckinslyai"
                    target="_blank"
                    aria-label="X"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 512 462.799"
                    >
                      <path
                        fill-rule="nonzero"
                        d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* story section */}
          <div className="flex items-center justify-center mt-[80px]">
            <div>
              <div className="p-10 border-[1px] max-w-[836px] rounded-md border-white">
                <div>
                  <h3 className="mb-1 font-nacelle text-[1rem] mt-2 text-xl font-semibold text-gray-200">
                    Our Story 📜
                  </h3>
                  <p className="text-indigo-200/65">
                    We met on Twitter in 2023, after couple of months of DM. We
                    started to work on OpenStatus and were driven by these
                    goals:
                  </p>
                  <p className="text-indigo-200/65 ml-8 mt-3">
                    Build something useful for other developers 🧑
                  </p>
                  <p className="text-indigo-200/65 ml-8 ">
                    A real-world project with all the latest hot technologies 🌶{" "}
                  </p>
                  <p className="text-indigo-200/65 ml-8 ">Be Open-Source 📖 </p>
                </div>

                <div className="mt-9">
                  <h3 className="mb-1 font-nacelle text-[1rem] mt-2 text-xl font-semibold text-gray-200">
                    Our values
                  </h3>
                  <p className="text-indigo-200/65">
                    We are a small team of 2 people, we are a small company. We
                    are not a VC funded startup. We are not looking for
                    investors. We want to keep our freedom and build a
                    substainable business while working on features that
                    provides the best value to our users.
                  </p>
                  <p className="text-indigo-200/65 mt-3">
                    We also want to be transparent about our business. We are
                    not going to hide our ups and downs. We are going to share
                    our journey with you.{" "}
                  </p>
                </div>

                <div className="mt-9">
                  <h3 className="mb-1 font-nacelle text-[1rem] mt-2 text-xl font-semibold text-gray-200">
                    Our mission 🚀
                  </h3>
                  <p className="text-indigo-200/65">
                    We want to make the web faster and more reliable for
                    everyone, wherever they are in the world. To achieve this,
                    we are building a platform that helps developers monitor
                    their websites and APIs.
                  </p>
                  <div className="flex items-center">
                    <p className="text-indigo-200/65 mt-3">
                      We are here to fight Us-East-1 privilege.
                    </p>
                    <p className="mt-1 text-2xl">⚔</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
