import { useTranslation } from "@/app/i18n";
import Container from "../Container/Container";

import "./team.scss";

async function Team({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section className="team">
      <Container>
        <div id="team_section" className="team__inner">
          <h3 className="team__title">{t("team__title")}</h3>
          <div className="team__list">
            <div className="team__item">
              <div className="team__item_photo">
                <img src="/images/team_photo_1.jpg" alt="team member photo" />
              </div>
              <div className="team__item_name">{t("team__item_1_name")}</div>
              <div className="team__item_position">
                {t("team__item_1_position")}
              </div>
              <div className="team__item_text">{t("team__item_1_text")}</div>
            </div>
            <div className="team__item">
              <div className="team__item_photo">
                <img src="/images/team_photo_2.jpg" alt="team member photo" />
              </div>
              <div className="team__item_name">{t("team__item_2_name")}</div>
              <div className="team__item_position">
                {t("team__item_2_position")}
              </div>
              <div className="team__item_text">{t("team__item_2_text")}</div>
            </div>
            <div className="team__item">
              <div className="team__item_photo">
                <img src="/images/team_photo_3.jpg" alt="team member photo" />
              </div>
              <div className="team__item_name">{t("team__item_3_name")}</div>
              <div className="team__item_position">
                {t("team__item_3_position")}
              </div>
              <div className="team__item_text">{t("team__item_3_text")}</div>
            </div>
            <div className="team__item">
              <div className="team__item_photo">
                <img src="/images/team_photo_4.jpg" alt="team member photo" />
              </div>
              <div className="team__item_name">{t("team__item_4_name")}</div>
              <div className="team__item_position">
                {t("team__item_4_position")}
              </div>
              <div className="team__item_text">{t("team__item_4_text")}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Team;
