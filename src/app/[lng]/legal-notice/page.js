import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
import "./legal.scss";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <section className="legal">
        <Container>
          <Link className="back" href={`/#newsList`}>
            {t("news_back")}
          </Link>
          <div
            className="legal__text"
            dangerouslySetInnerHTML={{
              __html: t("legal"),
            }}
          />
        </Container>
      </section>
      <Footer lng={lng} />
    </>
  );
}
