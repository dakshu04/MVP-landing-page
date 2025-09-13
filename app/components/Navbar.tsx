"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" w-full relative text-sm">
      {/* Radial Gradient Background */}

      <div className="relative w-full flex items-center justify-between px-50 py-6">
        <SmoothCursor />

        {/* Logo */}
        
        <h1 className="font-bold text-2xl"><TextAnimate
        animation="blurInDown" animate="fadeIn">
            MVP
          </TextAnimate></h1>

        {/* Navigation Links */}
        <div className="flex gap-3">
          <Link href="#process">
          <TextAnimate animation="blurInDown" by="word" once animate="fadeIn" duration={5} delay={0.1}className="px-3 py-2  hover:bg-white m-2 transition duration-500 cursor-pointer ">
            Process
          </TextAnimate>
          </Link >
          <Link href="#project">
          <TextAnimate animation="blurInDown" by="word" once duration={10} delay={0.3} className="cursor-pointer py-2 px-3 m-2 transition duration-500 hover:bg-white">
            Project
          </TextAnimate>
          </Link>
          <Link href="#price">
          <TextAnimate delay={0.5} animation="blurInDown" by="word" once duration={15}  className="cursor-pointer px-3 py-2 m-2 transition duration-500 hover:bg-white">
            Price
          </TextAnimate>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="https://cal.com/daksh-dev/30min?overlayCalendar=true"
            target="_blank"
          >
            <InteractiveHoverButton>
              <TextAnimate animation="blurInDown" by="word"  once>
                Schedule a Call
              </TextAnimate>
            </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
