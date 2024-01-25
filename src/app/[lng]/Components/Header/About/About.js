"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "@/app/i18n/client";
import "./about.scss";

const About = ({ lng }) => {
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
      <div className="about" onClick={toggleDropdown}>
        {t("header__about")}
      </div>
      {isOpen && (
        <div className="about__list">
          <div
            className="about__link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {t("header__about")}
          </div>
          <div
            className="about__link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {t("about_partnership")}
          </div>
          <div
            className="about__link"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {t("about_technology")}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
