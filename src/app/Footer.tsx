"use client";
import React from "react";
import {
  IconBrandDiscordFilled,
  IconBrandGithub,
  IconBrandMedium,
  IconBrandTelegram,
  IconBrandX,
  IconBrandYoutubeFilled,
  IconWorld,
} from "@tabler/icons-react";


export function Footer() {
  return (
    <footer
      className="
      z-10
      flex
      flex-col-reverse
      items-center
      justify-between
      gap-1 px-5 py-3
      text-xs
      bg-[#0398FC]
      text-white
      sm:flex-row
      sm:gap-0
      sm:py-5
      sm:text-base
      "
    >
      <p>© 2024 Astar Network. All Rights Reserved.</p>
      <div className="flex items-center flex-col gap-3 sm:gap-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <a
            className="text-white cursor-pointer text-sm sm:text-base"
            href="https://astar.network"
          >
            Terms of Service
          </a>
          <a
            className="text-white cursor-pointer text-sm sm:text-base"
            href="https://astar.network"
          >
            Privacy Policy
          </a>

        </div>
        <div className="items-center gap-4 hidden lg:flex">
          <a target="_blank" className="text-white cursor-pointer" href={"https://discord.gg/AstarNetwork"}>
            <IconBrandDiscordFilled size={20} color="white" stroke={1.7} />
          </a>
          <a target="_blank" className="text-white cursor-pointer" href={"https://astar.network"}>
            <IconWorld size={20} color="white" stroke={1.7} />
          </a>
          <a target="_blank" className="text-white cursor-pointer" href={"https://twitter.com/AstarNetwork"}>
            <IconBrandX size={20} color="white" stroke={1.7} />
          </a>
          <a target="_blank" className="text-white cursor-pointer" href={"https://www.youtube.com/c/AstarNetwork"}>
            <IconBrandYoutubeFilled size={20} color="white" stroke={1.7} />
          </a>
        </div>

      </div>
    </footer>
  );
}
