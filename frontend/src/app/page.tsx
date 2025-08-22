import MainLayout from "@/components/layouts/MainLayout";
import Button from "@/components/widgets/Button";
import HeroImage from "@/images/hero-image.svg";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <MainLayout>
      <section className="bg-slate-50 rounded-2xl p-6 grid grid-cols-2 gap-6 ">
        <div className="content-center space-y-4">
          <h2 className="text-4xl font-semibold text-blue-600">
            Build Your Resume in Minutes.
          </h2>
          <p className="text-gray-800 text-lg">
            Craft a polished, professional resume in just a few clicks.
            Customize templates, edit instantly, and download in multiple
            formats.
          </p>
          <div className="space-x-2 mt-10">
            <Link href="/dashboard">
              <Button name="Get Started" />
            </Link>
            <Link href="/learn-more">
              <Button
                name="Learn More"
                className="text-blue-600 bg-blue-100 font-medium"
              />
            </Link>
          </div>
        </div>
        <div className="content-center">
          <Image src={HeroImage} alt="Hero Image" className="w-full h-[80%]" />
        </div>
      </section>
    </MainLayout>
  );
}
