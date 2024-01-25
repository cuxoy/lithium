import { useTranslation } from "../i18n";

import Header from "./Components/Header/Header";
import Top from "./Components/Top/Top";
import Form from "./Components/Form/Form";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Header lng={lng} />
      <Top lng={lng} />
      <h1>{t("title")}</h1>
      <Form lng={lng} />
    </>
  );
}
