import Image from "next/image";


export default function MainBanner() {
  return (
    <section className="relative ">
      <Image src="/back-main-bannner.png" alt="background-banner" className="absolute w-full" width={800} height={800}></Image>
      <div className="flex justify-between"></div>
    </section >
  )
}