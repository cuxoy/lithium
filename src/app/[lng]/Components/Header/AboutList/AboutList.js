"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import "./aboutList.scss";

const AboutList = ({ lng }) => {
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
    <div className="about__wrapper" ref={dropdownRef}>
      <div className="about_dropdown" onClick={toggleDropdown}>
        {t("header__about")}
      </div>
      {isOpen && (
        <div className="about_dropdown__list">
          <div
            className="about_dropdown__link"
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
        </div>
      )}
    </div>
  );
};

export default AboutList;
