"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import "./hamburger.scss";

const Hamburger = ({ lng }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { t } = useTranslation(lng, "footer");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClick = (event) => {
      handleClickOutside(event);
    };

    if (isOpen) {
      // Добавляем обработчик события click при открытии
      document.addEventListener("click", handleClick);
    }

    // Убираем обработчик события click при закрытии
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isOpen]);

  return (
    <div className="hamburger__wrapper" ref={dropdownRef}>
      <div className="hamburger_dropdown" onClick={toggleDropdown}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <div className="hamburger_dropdown__list">
          <div
            className="hamburger_dropdown__link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href="#about_section">{t("header__about")}</Link>
          </div>
          <div
            className="about_dropdown__link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href="#partnership_section"> {t("about_partnership")}</Link>
          </div>
          <div
            className="about_dropdown__link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href="#technology_section">{t("about_technology")}</Link>
          </div>

          <div
            className="about_dropdown__link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href="#mission_section">{t("header__mission")}</Link>
          </div>
          <div
            className="about_dropdown__link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href="#benefits_section">{t("header__benefits")}</Link>
          </div>
          <div
            className="about_dropdown__link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href="#team_section">{t("header__team")}</Link>
          </div>
          <div
            className="about_dropdown__link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href="#newsList_section">{t("header__news")}</Link>
          </div>
          <div
            className="about_dropdown__link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link href="#contacts_section">{t("header__contacts")}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
