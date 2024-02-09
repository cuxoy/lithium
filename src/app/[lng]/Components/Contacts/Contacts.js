import { useTranslation } from "@/app/i18n";
import Form from "./Form/Form";
import Link from "next/link";

import "./contacts.scss";

async function Contacts({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="contacts_section" className="contacts">
      <div className="contacts__container">
        <div className="contacts__inner">
          <div className="contacts__left">
            <div className="contacts__subtitle">{t("contacts__subtitle")}</div>
            <h3 className="contacts__title">{t("contacts__title")}</h3>
            <div
              className="contacts__text"
              dangerouslySetInnerHTML={{ __html: t("contacts__text_1") }}
            />
            <div
              className="contacts__text"
              dangerouslySetInnerHTML={{ __html: t("contacts__text_2") }}
            />

            <div className="contacts__data">
              <div className="contacts__item">
                <div className="contacts__item_name">
                  {t("contacts__item_1_name")}
                </div>
                <div className="contacts__item_position">
                  {t("contacts__item_1_position")}
                </div>
                <div className="contacts__item_mail">
                  <a href="mailto:info@ulicor.com">
                    {t("contacts__item_1_mail")}
                  </a>
                </div>
              </div>
              <div className="contacts__item">
                <div className="contacts__item_name">
                  {t("contacts__item_2_name")}
                </div>
                <div className="contacts__item_position">
                  {t("contacts__item_2_position")}
                </div>
                <div className="contacts__item_mail">
                  <a href="mailto:nikolaialiev@gmail.com">
                    {t("contacts__item_2_mail")}
                  </a>
                </div>
              </div>
            </div>
            <div className="contacts__social">
              <Link href="https://www.linkedin.com/company/ulicor/">
                https://www.linkedin.com/company/ulicor/
              </Link>
            </div>
            <div className="contacts__social">
              <Link href="https://www.facebook.com/share/7LFDqyJvWe2KHm8H/?">
                https://www.facebook.com/share/7LFDqyJvWe2KHm8H
              </Link>
            </div>
          </div>
          <div className="contacts__right">
            <Form lng={lng} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
