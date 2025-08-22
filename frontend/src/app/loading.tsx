import LoaderIcon from "@/images/loader.svg";
import Image from "next/image";
export default function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Image src={LoaderIcon} alt="Loading..." height={80} width={80} />
    </div>
  );
}
