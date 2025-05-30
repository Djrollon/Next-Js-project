import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" p-4 px-10 bg-yellow-500 text-[black] py-1 flex justify-between items-center">
      <Image
        src="/rollon-logo.png"
        width={100}
        height={10}
        alt="image-logo"
      />

      <ul className="flex gap-6 justify-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
