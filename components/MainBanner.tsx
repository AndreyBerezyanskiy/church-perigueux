import Image from "next/image";
import Container from "./Container";
import Link from "next/link";


export default function MainBanner({ t }: { t: (key:string) => string }) {
  return (
    <section className="relative text-white">
      <div className="absolute inset-0">
        <Image
          src="/back-main-bannner.png"
          alt="background-banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-amber-100/10 via-transparent to-black/10"></div>
      </div>
      <Container>
        <div className="relative py-16 px-2 flex flex-col gap-20 md:flex-row justify-between ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl">{t("header")}</h1>
            <h2 className="mb-10 md:mb-20 text-4xl">{t("subheader")}</h2>
            <span className=" mb-4">{t("aboutChurch")}</span>
            <Link className="py-3 px-4 w-full md:w-8/12 bg-white text-amber-500  text-center" href={"/main"}>{ t("aboutButton") }</Link>
          </div>
          <div className="flex flex-col gap-6 md:gap-10 justify-center">
            <span className="text-xl">{t("shcedule")}</span>
            <div className="flex flex-col text-md">
              <span className="font-bold">{t("sunday")}</span>
              <span>10:00 {t("sundayService")}</span>
            </div>
            <div className="flex flex-col text-md">
              <span className="font-bold">{t("wednesday")}</span>
              <span>16:00 {t("wednesdayService")}</span>
            </div>
            <div className="mb-6 flex flex-col text-md">
              <span className="font-bold">{t("suturday")}</span>
              <span>14:00 {t("suturdayService")}</span>
            </div>
            <Link href={"/"} className="mb-4 md:mb-0 py-3 px-4 w-full md:w-8/12 bg-white text-amber-500 text-center">{t("broadcast")}</Link>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col gap-1">
                <span className="font-bold">{t("address")}</span>
                <span>{t("addressStreet")}</span>
                <span>{t("addressCity")}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold">{t("phone")}</span>
                <span>+33-7-68-34-12-45</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section >
  )
}