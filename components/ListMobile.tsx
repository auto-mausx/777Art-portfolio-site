import * as React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { data } from "../mock/mock";

export const ListMobile: React.SFC = () => {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="md:hidden fixed pt-24 z-10 w-screen h-screen"
        style={{ backgroundColor: "#f8edeb" }}
      >
        <ul className="grid grid-rows-6 gap-6 justify-center">
          <li className="py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900">
            <Link href="/" passHref>
              <span className="cursor-pointer">Home</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900">
            <Link href="/portfolio" passHref>
              <span className="cursor-pointer">Portfolio</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900">
            <Link href="/bio" passHref>
              <span className="cursor-pointer">Bio</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-lg text-center font-extralight text-gray-700 hover:text-gray-900">
            <Link href="/contact" passHref>
              <span className="cursor-pointer">Contact</span>
            </Link>
          </li>
          <li className="py-1 px-2 text-sm font-extralight grid place-items-center">
            <a href={data.twitter_link} className="leading-none">
              <svg
                className="fill-current stroke-current text-d-green hover:text-blue-200 w-4 h-4"
                role="img"
                viewBox="328 355 335 276"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path d="
                M 630, 425
                A 195, 195 0 0 1 331, 600
                A 142, 142 0 0 0 428, 570
                A  70,  70 0 0 1 370, 523
                A  70,  70 0 0 0 401, 521
                A  70,  70 0 0 1 344, 455
                A  70,  70 0 0 0 372, 460
                A  70,  70 0 0 1 354, 370
                A 195, 195 0 0 0 495, 442
                A  67,  67 0 0 1 611, 380
                A 117, 117 0 0 0 654, 363
                A  65,  65 0 0 1 623, 401
                A 117, 117 0 0 0 662, 390
                A  65,  65 0 0 1 630, 425
                Z" />
              </svg>
            </a>
          </li>
          <li className="py-1 px-2 text-sm font-extralight">
            <a href={data.discord_link} className="leading-none text-red-500">
              <svg
                className="fill-current stroke-current text-d-green hover:text-blue-200 w-4 h-4"
                role="img"
                viewBox="35 20 175 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Discord</title>
                <path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
                <path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" />
              </svg>
            </a>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};
