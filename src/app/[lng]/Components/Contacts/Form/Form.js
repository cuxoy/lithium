"use client";
import { useTranslation } from "@/app/i18n/client";
import React, { useState, useEffect } from "react";
import "./form.scss";

const Form = ({ lng }) => {
  const { t } = useTranslation(lng);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popUp, setPopUp] = useState(true);
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitAttempted, setSubmitAttempted] = useState(false);

  useEffect(() => {
    let timer;

    if (popUp) {
      timer = setTimeout(() => {
        setPopUp(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [popUp]);

  const validateName = (value) => {
    // const regex = /^[a-zA-Zа-яА-Я\s]+$/;
    const regex = /^[a-zA-Zа-яА-Я\s]+$/;
    if (value.length < 3) {
      return t("form__name_validation_1");
    }
    if (!regex.test(value)) {
      return t("form__name_validation_2");
    }
    return "";
  };

  const validatePhone = (value) => {
    const regex = /^[0-9\s()+-]+$/;
    if (!value) {
      return t("form__phone_validation_1");
    }
    if (!regex.test(value)) {
      return t("form__phone_validation_2");
    }
    return "";
  };

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return t("form__email_validation_1");
    }
    if (!regex.test(value)) {
      return t("form__email_validation_2");
    }
    return "";
  };

  const validateMessage = (value) => {
    if (value.length < 3) {
      return t("form__message_validation");
    }
    return "";
  };

  const validateForm = () => {
    const nameError = validateName(name);
    const phoneError = validatePhone(phone);
    const emailError = validateEmail(email);
    const messageError = validateMessage(message);

    setFormErrors({
      name: nameError,
      phone: phoneError,
      email: emailError,
      message: messageError,
    });

    return !(nameError || phoneError || emailError || messageError);
  };

  useEffect(() => {
    const validateAndSetError = (validator, value, key) => {
      const error = validator(value);
      setFormErrors((prevErrors) => ({ ...prevErrors, [key]: error }));
    };

    validateAndSetError(validateName, name, "name");
    validateAndSetError(validatePhone, phone, "phone");
    validateAndSetError(validateEmail, email, "email");
    validateAndSetError(validateMessage, message, "message");
  }, [name, phone, email, message]);

  const handleSubmit = async (e) => {
    const endpoint = "https://formspree.io/f/myyrkybe";
    e.preventDefault();
    setSubmitAttempted(true);

    if (validateForm()) {
      // Proceed with form submission
      console.log("Form submitted successfully!");
      setSubmitAttempted(false);
      setPopUp(true);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, message }),
      });
    } else {
      console.error("Form has validation errors.");
    }
  };

  return (
    <>
      {popUp ? (
        <div className="pop-up">
          <p
            className="pop-up_text"
            dangerouslySetInnerHTML={{ __html: t("form__pop-up") }}
          />
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            {t("form__name")}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {(submitAttempted || name) && (
              <span className="error">{formErrors.name}</span>
            )}
          </label>

          <label>
            {t("form__phone")}
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {(submitAttempted || phone) && (
              <span className="error">{formErrors.phone}</span>
            )}
          </label>

          <label>
            {t("form__email")}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {(submitAttempted || email) && (
              <span className="error">{formErrors.email}</span>
            )}
          </label>

          <label>
            {t("form__message")}
            <textarea
              maxLength="400"
              className="text-aria"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {(submitAttempted || message) && (
              <span className="error">{formErrors.message}</span>
            )}
          </label>

          <div className="submit__inner">
            <button type="submit" className="submit">
              {t("form__btn")}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
