import { useTranslation } from "../i18n";

import Header from "./Components/Header/Header";
import Top from "./Components/Top/Top";
import About from "./Components/About/About";
import Technology from "./Components/Technology/Technology";
import Partnership from "./Components/Partnership/Partnership";
import Mission from "./Components/Mission/Mission";
import Benefits from "./Components/Benefits/Benefits";
import Team from "./Components/Team/Team";
import NewsList from "./Components/NewsList/NewsList";
import Contacts from "./Components/Contacts/Contacts";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <Header lng={lng} />
      <Top lng={lng} />
      <About lng={lng} />
      <Partnership lng={lng} />
      <Technology lng={lng} />
      <Mission lng={lng} />
      <Benefits lng={lng} />
      <Team lng={lng} />
      <NewsList lng={lng} />
      <Contacts lng={lng} />
    </>
  );
}
