import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
import "./terms.scss";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <section className="cookies">
        <Container>
          <Link className="back" href={`/`}>
            {t("news_back")}
          </Link>
          <div
            className="cookies__text"
            dangerouslySetInnerHTML={{
              __html: t("cookies"),
            }}
          />
        </Container>
      </section>
      <Footer lng={lng} />
    </>
  );
}
