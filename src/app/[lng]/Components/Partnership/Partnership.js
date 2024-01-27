import { useTranslation } from "@/app/i18n";
import Container from "../Container/Container";
import Slider from "./Slider/Slider";

import "./partnership.scss";

async function Partnership({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="partnership_section" className="partnership">
      <Container>
        <div className="partnership__inner">
          <div className="partnership__texts">
            <p className="partnership__text">{t("partnership__text_1")}</p>
            <p className="partnership__text">{t("partnership__text_2")}</p>
            <p className="partnership__text">{t("partnership__text_3")}</p>
          </div>
          <div className="partnership__slider">
            <h3 className="partnership__title">{t("partnership__title")}</h3>
            <Slider />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Partnership;
