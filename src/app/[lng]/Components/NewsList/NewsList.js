import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import Container from "../Container/Container";
import Slider from "./Slider";

import "./newsList.scss";

async function NewsList({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section className="newsList">
      <Container>
        <div id="newsList_section" className="newsList__inner">
          <h3 className="newsList__title">{t("newsList__title")}</h3>
          <div className="newsList__list no-mobile">
            <div className="newsList__item">
              <div className="newsList__item_photo">
                <img src="/images/news_photo_1.png" alt="news image 1" />
              </div>
              <div className="newsList__item_content">
                <div className="newsList__item_date">
                  {t("newsList__item_1_date")}
                </div>
                <div className="newsList__item_title">
                  <Link href={`/${lng}/news/1`}>
                    {t("newsList__item_1_title")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="newsList__item">
              <div className="newsList__item_photo">
                <img src="/images/news_photo_1.png" alt="news image 1" />
              </div>
              <div className="newsList__item_content">
                <div className="newsList__item_date">
                  {t("newsList__item_2_date")}
                </div>
                <div className="newsList__item_title">
                  <Link href={`/${lng}/news/2`}>
                    {t("newsList__item_2_title")}
                  </Link>
                </div>
              </div>
            </div>
            <div className="newsList__item">
              <div className="newsList__item_photo">
                <img src="/images/news_photo_1.png" alt="news image 1" />
              </div>
              <div className="newsList__item_content">
                <div className="newsList__item_date">
                  {t("newsList__item_3_date")}
                </div>
                <div className="newsList__item_title">
                  <Link href={`/${lng}/news/3`}>
                    {t("newsList__item_3_title")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="news__slider">
            <Slider lng={lng} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NewsList;
