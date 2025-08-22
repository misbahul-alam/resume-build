import Logo from "@/images/logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b  border-gray-200 p-4 h-16 flex items-center justify-between px-[5%]">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" className="h-9 w-9 mr-2" />
        <span className="text-xl text-gray-900 font-semibold select-none">
          <span>Resume</span>
          <span className="text-blue-500">Builder</span>
        </span>
      </div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
          Register
        </button>
      </div>
    </header>
  );
}
