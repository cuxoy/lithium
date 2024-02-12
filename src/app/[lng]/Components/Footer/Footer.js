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
              <Link href={`/${lng}/legal-notice`}>
                {t("footer__policy_legal")}
              </Link>
            </div>
            <div className="footer__policy_item">
              <Link href={`/${lng}/privacy-policy`}>
                {t("footer__policy_privacy")}
              </Link>
            </div>
            <div className="footer__policy_item">
              <Link href={`/${lng}/cookies-policy`}>
                {t("footer__policy_cookies")}
              </Link>
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
              <div className="footer__contacts_item_text">
                <a href="tel:+380675316272">{t("footer__contacts_phone_2")}</a>
              </div>
            </div>
            <div className="footer__contacts_item">
              <div className="footer__contacts_item_title">
                {t("footer__contacts_title_mail")}
              </div>
              <div className="footer__contacts_item_text">
                <a href="mailto:artemtaran1984@gmail.com">
                  {t("footer__contacts_mail")}
                </a>
              </div>
              <div className="footer__contacts_item_text">
                <a href="mailto:nikolaialiev@gmail.com">
                  {t("footer__contacts_mail_2")}
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
              <Link href="#team_section">{t("footer__team_link")}</Link>
            </div>
            <div className="footer__links_link">
              <Link href="#newsList_section">{t("footer__news_link")}</Link>
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
          <Link href="https://www.linkedin.com/company/ulicor/">
            <img src="/images/social_2.png" alt="social image" />
          </Link>
        </div>
        <div className="footer__policy mobile-only">
          <div className="footer__policy_item">
            <Link href={`/${lng}/legal-notice`}>
              {t("footer__policy_legal")}
            </Link>
          </div>
          <div className="footer__policy_item">
            <Link href={`/${lng}/privacy-policy`}>
              {t("footer__policy_privacy")}
            </Link>
          </div>
          <div className="footer__policy_item">
            <Link href={`/${lng}/cookies-policy`}>
              {t("footer__policy_cookies")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
