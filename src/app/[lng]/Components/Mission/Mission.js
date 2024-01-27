import { useTranslation } from "@/app/i18n";

import "./mission.scss";

async function Technology({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="mission_section" className="mission">
      <div className="mission__container">
        <div className="mission__inner">
          <div className="mission__left">
            <div className="mission__subtitle">{t("mission__subtitle")}</div>
            <h3 className="mission__title">{t("mission__title")}</h3>
            <div className="mission__text">{t("mission__text_1")}</div>
            <div className="mission__text">{t("mission__text_2")}</div>
            <div className="mission__text">{t("mission__text_3")}</div>
          </div>
          <div className="mission__right">
            <div className="mission__item">
              <div className="mission__item_title">
                {t("mission__item1_title")}
              </div>
              <div className="mission__item_text">
                {t("mission__item1_text_1")}
              </div>
              <div className="mission__item_text">
                {t("mission__item1_text_2")}
              </div>
            </div>
            <div className="mission__item">
              <div className="mission__item_title">
                {t("mission__item2_title")}
              </div>
              <div className="mission__item_text">
                {t("mission__item2_text_1")}
              </div>
              <div className="mission__item_text">
                {t("mission__item2_text_2")}
              </div>
            </div>
            <div className="mission__item">
              <div className="mission__item_title">
                {t("mission__item3_title")}
              </div>
              <div className="mission__item_text">
                {t("mission__item3_text_1")}
              </div>
              <div className="mission__item_text">
                {t("mission__item3_text_2")}
              </div>
            </div>{" "}
            <div className="mission__item">
              <div className="mission__item_title">
                {t("mission__item4_title")}
              </div>
              <div
                className="mission__item_text"
                dangerouslySetInnerHTML={{ __html: t("mission__item4_text_1") }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
