"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { languages } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n";
import "./switcher.scss";

const LangSwitcher = ({ lng }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.className !== "lang"
    ) {
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
    <div className="lang-switcher" ref={dropdownRef}>
      <div className="lang" onClick={toggleDropdown}>
        {lng}
      </div>
      {isOpen && (
        <div className="other-langs">
          {languages
            .filter((l) => lng !== l)
            .map((l) => (
              <div key={l}>
                <Link href={`/${l}`}>
                  <p>{l}</p>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
