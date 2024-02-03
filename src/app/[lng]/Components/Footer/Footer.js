import { useTranslation } from "@/app/i18n";
import Link from "next/link";

import "./footer.scss";

async function Contacts({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section id="footer_section" className="footer">
      <div className="footer__container">
        <div className="footer__title">{t("footer__title")}</div>
        <div className="footer__inner">
          <div className="footer__policy no-mobile">
            <div className="footer__policy_item">
              {t("footer__policy_legal")}
            </div>
            <div className="footer__policy_item">
              {t("footer__policy_privacy")}
            </div>
            <div className="footer__policy_item">
              {t("footer__policy_cookies")}
            </div>
          </div>
          <adress className="footer__contacts">
            <div className="footer__contacts_item">
              <div className="footer__contacts_item_title">
                {t("footer__contacts_title_phone")}
              </div>
              <div className="footer__contacts_item_text">
                <a href="tel:+41767429746">{t("footer__contacts_phone")}</a>
              </div>
            </div>
            <div className="footer__contacts_item">
              <div className="footer__contacts_item_title">
                {t("footer__contacts_title_mail")}
              </div>
              <div className="footer__contacts_item_text">
                <a href="mailto:info@ulicor.com">
                  {t("footer__contacts_mail")}
                </a>
              </div>
            </div>
            <div className="footer__contacts_item">
              <div className="footer__contacts_item_title">
                {t("footer__contacts_title_adress")}
              </div>
              <div className="footer__contacts_item_text">
                <p>{t("footer__contacts_adress")}</p>
              </div>
            </div>
          </adress>
          <nav className="footer__links">
            <div className="footer__links_link">
              <Link href="#about_section">{t("footer__about_link")}</Link>
            </div>
            <div className="footer__links_link">
              <Link href="#partnership_section">
                {t("footer__partnership_link")}
              </Link>
            </div>
            <div className="footer__links_link">
              <Link href="#technology_section">
                {t("footer__technology_link")}
              </Link>
            </div>
            <div className="footer__links_link">
              <Link href="#benefits_section">{t("footer__benefits_link")}</Link>
            </div>
            <div className="footer__links_link">
              <Link href="#tem_section">{t("footer__team_link")}</Link>
            </div>
            <div className="footer__links_link">
              <Link href="#news_section">{t("footer__news_link")}</Link>
            </div>
            <div className="footer__links_link">
              <Link href="#contacts_section">{t("footer__contacts_link")}</Link>
            </div>
          </nav>
        </div>

        <div className="footer__social">
          <Link href="https://www.linkedin.com/company/ulicor/">
            <img src="/images/social.png" alt="social image" />
          </Link>
        </div>
        <div className="footer__policy mobile-only">
          <div className="footer__policy_item">{t("footer__policy_legal")}</div>
          <div className="footer__policy_item">
            {t("footer__policy_privacy")}
          </div>
          <div className="footer__policy_item">
            {t("footer__policy_cookies")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
