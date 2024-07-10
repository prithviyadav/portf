import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { metadata } from "./layout";
import Stats from "@/components/Stats";
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flec flex-col">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-8 height:600">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-8">
              Hello I&apos;m <br />
              <span className="text-accent">Prithvi Yadav</span>
            </h1>
            <p className="max-w-[550px] mb-9 text-white/80">
              Crafting Seamless Digital Experiences with Proficiency in
              Front-End Aesthetics and Back-End Efficiency.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="https://drive.google.com/file/d/1zE8GwVrNLt7ZIweYeyi5HtEbuzH3r76s/view?usp=sharing"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-6"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-2 xl:mb-0">
            <Photo />
          </div>
          </div>
          <Stats className="mb-3" />
        </div>
      </div>
    </section>
  );
}
