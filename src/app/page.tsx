"use client";
import { useOffsetTop } from "@/hooks/useOffsetTop";
import Image from "next/image";
import boy from "../../public/boy.png"
import girl from "../../public/girl.png"
import fox from "../../public/fox.png"
import capsules from "../../public/capsules.png"
import leaves from "../../public/leaves.png"
import logo from "../../public/logo_with_leaves.png"
import small_capsules from "../../public/small-capsules.png"
import astarLogo from "../../public/astar-logo.svg"
import background from "../../public/main_background.png"

import "./Home.css";
import { useMemo, useRef } from "react";
import Link from "next/link";

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const { viewportTop, pageOffsetTop } = useOffsetTop(ref);

  const blurSize = useMemo(() => {
    if (viewportTop === undefined || pageOffsetTop === undefined) return 0;
    const size = (pageOffsetTop - viewportTop) / 200;
    return size;
  }, [viewportTop, pageOffsetTop]);

  return (
    <section>
      <div className="fixed h-18 left-0 top-0 z-50 flex items-center py-3 px-3 sm:px-5">
        <img className="w-28 sm:w-36" src={astarLogo.src} alt="astar logo" />
      </div>
      <div className="h-svh w-full fixed top-0 left-0 z-0">
        <Image
          priority={true}
          src={background}
          alt="background"
          fill={true}
          style={{
            filter: `blur(${blurSize}px)`,
          }}
        />
      </div>
      <div className="pt-20 h-auto">
        <div className="flex items-center justify-center relative">
          <Image
            id="logo"
            priority={true}
            className="h-72 sm:h-[450px] aspect-square object-contain"
            src={logo}
            alt="yoki logo"
            style={{
              filter: `blur(${blurSize}px)`,
            }}
          />
        </div>
      </div>
      <div
        className="flex items-center justify-center -mt-5 sticky top-0 sm:-mt-20"
        style={{
          filter: `blur(${blurSize}px)`,
        }}
      >
        <Image
          id="bg"
          className="absolute z-10 h-[570px] object-cover sm:h-auto"
          src={capsules}
          alt="capsules"
        />
        <Image
          id="bg"
          className="absolute h-[570px] object-cover sm:h-auto"
          src={small_capsules}
          alt="capsules"
        />
        <Image
          id="bg"
          className="absolute h-[570px] object-cover sm:h-auto"
          src={leaves}
          alt="capsules"
        />
        <div className="relative z-10 flex">
          <Image
            id="boy"
            className="absolute h-[570px] object-cover sm:h-auto"
            src={boy}
            alt="boy"
          />
          <Image id="girl" className="h-[570px] object-cover sm:h-auto" src={girl} alt="girl" />
          <Image
            id="fox"
            className="absolute h-[570px] object-cover sm:h-auto"
            src={fox}
            alt="fox"
          />
        </div>
      </div>
      <div ref={ref} className="features pb-20 pt-10 sm:pt-1">
        <div className="mt-0 sm:-mt-20">
          <div className="
            flex
            gap-5
            justify-center
            flex-col
            items-center
            mb-16
            w-full
            sm:flex-row
            sm:items-stretch
            sm:justify-evenly
            ">
            <div
              className="
              features-card
              flex flex-col
              justify-between
              items-center
              shrink-0
              border
              border-solid
              border-white
              px-8
              pt-8
              pb-14
              gap-6
              w-96"
            >
              <h2 className="title pt-4">Yoki Origins - First Edition Capsule</h2>
              <p className="content">Yoki Origins is an exciting journey to discover one-of-kind characters inspired by supernatural creatures from Japan. Join this web3 adventure for everyone and be among the first to experience the magic and charm of Yoki using the button below!</p>
              <Link target="_blank" href="https://astarnetwork.deform.cc/first-edition-capsule-1">
                <button className="
                  rounded-2xl
                  py-4
                  px-3
                  uppercase
                  font-black
                  text-lg
                  border
                  text-white
                  border-white
                  bg-[#0297FB]
                  hover-glow
                ">Mint A First Edition Capsule</button>
              </Link>
            </div>
            <div
              className="
              features-card
              flex flex-col
              items-start
              border
              border-solid
              border-white
              px-8
              pt-8
              pb-14
              gap-6
              w-96
              overflow-auto
              min-h-full

              "
            >
              <h2 className="title">Astar Network Ecosystem</h2>
              <p className="content">Astar Network is the gateway for projects across enterprises, entertainment & gaming in Japan, Korea, and beyond, driving global adoption while delivering web3 products for everyone. Astar zkEVM is the new Layer-2 solution to scale a web3 experience on Ethereum with zero knowledge technology, powered by Polygon AggLayer & CDK.</p>
              <Link target="_blank" href="https://discord.gg/AstarNetwork">
                <button className="
                  rounded-2xl
                  p-4
                  uppercase
                  font-black
                  text-lg
                  border
                  text-white
                  border-white
                  bg-[#0297FB]
                  hover-glow
                ">Join the Astar Community</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
