"use client";

import Link from "next/link";
import Logo from "./logo";

interface HeaderProps {
  isDark: boolean;
  updateIsDark: (newIsDark: boolean) => void;
}

export default function Header({ isDark, updateIsDark }: HeaderProps) {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border-2 dark:before:border dark:before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex ">
            <li>
              <Link
                className="btn-sm text-[14px] md:text-[15px] relative bg-gradient-to-b dark:text-gray-300  text-[#64748B] rounded-3xl hover:bg-[#F8F9FB] focus:bg-[#F8F9FB] focus: hover:text-black focus:text-black dark:hover:bg-[#10192A] dark:hover:text-white dark:focus:bg-[#10192A] dark:focus:text-white px-1 md:p-3"
                href="#teams"
              >
                The Team
              </Link>
            </li>
            <li>
              <Link
                className="btn-sm text-[14px] md:text-[15px]  relative bg-gradient-to-b dark:text-gray-300  text-[#64748B] rounded-3xl hover:bg-[#F8F9FB] focus:bg-[#F8F9FB] focus: hover:text-black focus:text-black dark:hover:bg-[#10192A] dark:hover:text-white dark:focus:bg-[#10192A] dark:focus:text-white px-1 md:p-3"
                href="https://cal.com/"
                target="_blank"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="">
            <button
              className="w-[30px] flex items-center p-[5px] justify-center h-[30px] border-[1px] rounded-full"
              onClick={() => {
                updateIsDark(!isDark);
              }}
            >
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-lg dark:fill-white fill-black css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="WbSunnyOutlinedIcon"
              >
                <path d="m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495 1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m-1 4h2v2.95h-2zm-7.45-.96 1.41 1.41 1.79-1.8-1.41-1.41z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
