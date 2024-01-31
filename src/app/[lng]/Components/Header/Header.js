"use client";
// import { useTranslation } from "@/app/i18n";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import Container from "../Container/Container";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import AboutList from "./AboutList/AboutList";
import Hamburger from "./Hamburger/Hamburger";
import useWindowSize from "../../../hooks/useWindowSize";

import "./header.scss";

function Header({ lng }) {
  const { t } = useTranslation(lng);

  const { width } = useWindowSize();

  return (
    <header className="header">
      <Container>
        <div className="header__logo_text">
          <img src="/images/logo.svg" alt="logo" className="header__logo" />
        </div>
        <nav className="header__links">
          {width < 1440 ? <Hamburger lng={lng} /> : <AboutList lng={lng} />}

          <div className="header__link">
            <Link href="#mission_section">{t("header__mission")}</Link>
          </div>
          <div className="header__link">
            <Link href="#mission_section">{t("header__benefits")}</Link>
          </div>
          <div className="header__link">
            <Link href="#team_section">{t("header__team")}</Link>
          </div>
          <div className="header__link">
            <Link href="#newsList_section">{t("header__news")}</Link>
          </div>
          <div className="header__link">
            <Link href="#contacts_section">{t("header__contacts")} </Link>
          </div>
          <LangSwitcher lng={lng} />
        </nav>
      </Container>
    </header>
  );
}

export default Header;
