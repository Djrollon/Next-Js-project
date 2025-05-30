import Image from "next/image";

export default function Home() {
    return (
        <>
      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">Hi, I'm Your Dj Rollon 👋</h1>
        <p className="mt-4 text-lg text-light mt-3">Welcome to my portfolio website.</p>

        <div className="mx-auto w-48 h-48 relative mt-5">
      <Image
    src="/grove_img.jpg"
  alt="Profile picture"
  layout="fill"
  objectFit="cover"
  className="rounded-full"
/>
      </div>
      </div>


      
</>
    );
  }
  
