import { Globe } from "@/components/magicui/globe"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { TextReveal } from "@/components/magicui/text-reveal"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="max-h-screen mt-12">
            <div className="">
                Sparkle
            </div>
            <div className="text-center">
                <div className="items-center text-4xl">
                    Unlock The Power of Your Next Idea
                </div>
                <div className="text-5xl mt-2 font-bold">
                    Build Your MVP in Less Than 21 Days
                </div>
                <div className="mt-4">
                    <p>
                        Invest in your MVP and let user's know who you actually are!
                    </p>
                    <div>
                        <Link href="https://cal.com/daksh-dev/30min">
                        <RainbowButton className="mt-3" size="lg">
                            Book Your Slot
                        </RainbowButton>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                {/* <div>
                     <Image
                        src="/cursor"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        />
                </div> */}
                



                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="mt-28">
                <Globe className="mt-85"/>
            </div>
            
        </div>
    )
}