import { useTranslation } from "@/app/i18n";
import Container from "../Container/Container";

import "./about.scss";

async function About({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="about_section" className="about">
      <Container>
        <div className="about__inner">
          <div className="about__content">
            <h3 className="about__title">{t("about__title")}</h3>
            <div className="about__image mobile_image">
              <img src="/images/about_img_desk.png" alt="about image" />
            </div>
            <div className="about__texts">
              <p className="about__text">{t("about__text_1")}</p>
              <p className="about__text">{t("about__text_2")}</p>
              <p className="about__text">{t("about__text_3")}</p>
            </div>
          </div>
          <div className="about__image desktop_image">
            <img src="/images/about_img_desk.png" alt="about image" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
