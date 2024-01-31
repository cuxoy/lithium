import { useTranslation } from "@/app/i18n";
import Container from "../Container/Container";
import Link from "next/link";

import "./top.scss";

async function Top({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section className="top">
      <Container>
        <div className="top__inner">
          <div className="top__content">
            <div className="top__giga">{t("top__giga")}</div>
            <h1 className="top__title">
              {t("top__title_1")}
              <br />
              {t("top__title_2")}
              <br />
              {t("top__title_3")}
            </h1>
            <h2 className="top__text">
              {t("top__text_1")}
              <br />
              <div className="separator" />
              {t("top__text_2")}
            </h2>
            <div className="top__links">
              <div className="top__button">
                <Link href="#contacts_section">{t("top__button")}</Link>
              </div>

              <div className="top__download">
                <a
                  href="/test.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  {t("top__download")}
                </a>
              </div>
            </div>
          </div>
          <div className="top__image">
            <img src="/images/top_figure.png" alt="logo" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Top;
