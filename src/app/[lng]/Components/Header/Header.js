import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import Container from "../Container/Container";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import About from "./About/About";
import "./header.scss";

async function Header({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <header className="header">
      <Container>
        <div className="header__logo_text">
          <img src="/images/logo.svg" alt="logo" className="header__logo" />
        </div>
        <nav className="header__links">
          <About lng={lng} />
          <div className="header__link">
            <Link href="#mission_section">{t("header__mission")}</Link>
          </div>
          <div className="header__link">{t("header__benefits")}</div>
          <div className="header__link">{t("header__team")}</div>
          <div className="header__link">{t("header__news")}</div>
          <div className="header__link">{t("header__contacts")}</div>
          <LangSwitcher lng={lng} />
        </nav>
      </Container>
    </header>
  );
}

export default Header;
