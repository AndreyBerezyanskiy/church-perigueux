import Container from "./Container";
import Link from "next/link";

export default function HowToGod({ t }: { t: (key:string) => string }) {
  return (
    <section className="bg-gradient-to-b from-amber-200 via-amber-100 to-amber-50 text-gray-800 py-20">
      <Container>
        <div className="px-2 flex flex-col gap-8 md:flex-row justify-between items-center">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className="text-3xl font-bold">{t("header")}</h2>
            <p className="text-md">{t("subheader")}</p>
          </div>
          <div className="hidden md:block w-px h-20 bg-gray-600"></div>
          <span className="px-20 md:px-0 text-xl text-center">{t("aboutPlan")}</span>
          <Link className="py-3 px-12 w-full md:w-auto  bg-amber-500 text-white  text-center" href={"/plan"}>{ t("planButton") }</Link>
        </div>
      </Container>
    </section >
  )
}