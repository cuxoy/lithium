import { useTranslation } from "@/app/i18n";
import Container from "../Container/Container";

import "./technology.scss";

async function Technology({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="technology_section" className="technology">
      <Container>
        <div className="technology__inner">
          <div className="technology__content">
            <h3 className="technology__title">{t("technology__title")}</h3>
            <div className="technology__image no-desktop">
              <img
                src="/images/technology_img_desk.png"
                alt="technology image"
              />
            </div>
            <div className="technology__texts">
              <p
                className="technology__text"
                dangerouslySetInnerHTML={{ __html: t("technology__text_1") }}
              />
              <p
                className="technology__text"
                dangerouslySetInnerHTML={{ __html: t("technology__text_2") }}
              />
            </div>
          </div>
          <div className="technology__image desktop-only">
            <img src="/images/technology_img_desk.png" alt="technology image" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Technology;
