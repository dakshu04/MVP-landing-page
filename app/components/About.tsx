import { TextReveal } from "@/components/magicui/text-reveal";

export default function About() {
    return (
        <div className="min-h-screen">
            <div className="shadow-2xl max-h-80px">

                <TextReveal className="text-5xl pl-20 max-w-screen z-20">
                    We take your vision from sketch to launch — no matter where you are in
                    the world. In just 21 days, your idea becomes a product users can
                    actually touch, love, and share...
                </TextReveal>
            </div>
        </div>
    )
}