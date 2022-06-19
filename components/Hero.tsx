import * as React from "react";
import user from '../mock/mainRight.gif'
import Image from "next/image";
import intro from "../mock/intro.gif"

// function to get image dimensions for model image
import { uniqueFunction } from "../hooks/uniqueFunction";

// Using require as normal import causes typescript error
const Fade = require("react-reveal/Fade");
import { data } from "../mock/mock";

const modelImageLoader = (props: any) => {
  return props.src.toString();
};

export const Hero: React.SFC = () => {
  const [imageDimensions, setImageDimensions] = React.useState([0, 0]);

  React.useEffect(() => {
    setImageDimensions(uniqueFunction(/* modelImage */) || []); // to get initial image dimensions

    function handleResize(): void {
      setImageDimensions(uniqueFunction(/* modelImage */) || []);
    }
    if (typeof window != "undefined") {
      window.addEventListener("resize", handleResize); // handle resize

      return function cleanupListener() {
        // removing event listener improves efficiency
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [setImageDimensions]);

  return (
    <section className="py-8 col-span-10 col-start-2 col-end-12 grid grid-cols-1 sm:grid-cols-2 font-beon">
      <Fade left>
        <div className="flex flex-col justify-evenly order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl md:w-min my-4 md:m-0 font-light leading-snug text-d-green pb-0">
            Meet 
          </h1>
            <Image src={intro}
            />
          <h2 className="font-extralight text-2xl my-4 md:m-0 text-d-green pt-0">
            {data.job}
          </h2>
        </div>
      </Fade>
      <Fade>
        <div className="relative grid place-items-center order-1 md:order-2">
          <Image
            loader={modelImageLoader}
            src="https://storage.cloud.google.com/triple-seven-timelapse/mainRight.gif?authuser=1"
            alt="Picture of artist"
            objectFit="contain"
            height={imageDimensions[1]}
            width={imageDimensions[0]}
          />
        </div>
      </Fade>
    </section>
  );
};
