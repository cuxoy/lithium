import { useTranslation } from "@/app/i18n";
import Container from "../Container/Container";

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
              {t("top__text_2")}
            </h2>
            <div className="top__links">
              <div className="top__button">{t("top__button")}</div>
              <div className="top__download">{t("top__download")}</div>
            </div>
          </div>
          <div className="top__image">
            <img src="/images/top_figure.svg" alt="logo" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Top;
