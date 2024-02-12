import { useTranslation } from "@/app/i18n";

import "./benefits.scss";

async function Benefits({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section className="benefits">
      <div className="benefits__container">
        <div className="benefits__inner" id="benefits_section">
          <div className="benefits__left">
            <div className="benefits__subtitle">{t("benefits__subtitle")}</div>
            <h3 className="benefits__title">{t("benefits__title")}</h3>
            <div className="benefits__text">{t("benefits__text_1")}</div>
            <div className="benefits__text">{t("benefits__text_2")}</div>
          </div>
          <div className="benefits__right">
            <div className="benefits__item">
              <div className="benefits__item_title">
                {t("benefits__item1_title")}
              </div>
              <div className="benefits__item_text">
                {t("benefits__item1_text")}
              </div>
            </div>
            <div className="benefits__item">
              <div className="benefits__item_title">
                {t("benefits__item2_title")}
              </div>
              <div className="benefits__item_text">
                {t("benefits__item2_text")}
              </div>
            </div>
            <div className="benefits__item">
              <div className="benefits__item_title">
                {t("benefits__item3_title")}
              </div>
              <div className="benefits__item_text">
                {t("benefits__item3_text")}
              </div>
            </div>
            <div className="benefits__item">
              <div className="benefits__item_title">
                {t("benefits__item4_title")}
              </div>
              <div className="benefits__item_text">
                {t("benefits__item4_text")}
              </div>
            </div>
            <div className="benefits__item">
              <div className="benefits__item_title">
                {t("benefits__item5_title")}
              </div>
              <div className="benefits__item_text">
                {t("benefits__item5_text")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
