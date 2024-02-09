import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
import "./privacy.scss";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <section className="privacy">
        <Container>
          <Link className="back" href={`/`}>
            {t("news_back")}
          </Link>
          <div
            className="privacy__text"
            dangerouslySetInnerHTML={{
              __html: t("privacy-policy"),
            }}
          />
        </Container>
      </section>
      <Footer lng={lng} />
    </>
  );
}
