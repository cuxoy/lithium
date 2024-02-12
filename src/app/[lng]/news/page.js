import { useTranslation } from "@/app/i18n";
import Link from "next/link";
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
import "./news.scss";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <section className="news">
        <Container>
          <Link className="back" href={`/#newsList`}>
            {t("news_back")}
          </Link>
          <div id="news_section" className="news__inner">
            <h3 className="news__title">{t("newsList__title")}</h3>
            <div className="news__list">
              <div className="news__item">
                <div className="news__item_date">
                  {t("newsList__item_1_date")}
                </div>
                <div className="news__item_photo">
                  <img src="/images/news_photo_1.png" alt="news image 1" />
                </div>
                <div className="news__item_content">
                  <div
                    className="news__item_title"
                    dangerouslySetInnerHTML={{
                      __html: t("news__text_1"),
                    }}
                  />
                </div>
              </div>
              <div className="news__item">
                <div className="news__item_date">
                  {t("newsList__item_2_date")}
                </div>
                <div className="news__item_photo">
                  <img src="/images/news_photo_2.png" alt="news image 1" />
                </div>
                <div className="news__item_content">
                  <div
                    className="news__item_title"
                    dangerouslySetInnerHTML={{
                      __html: t("news__text_2"),
                    }}
                  />
                </div>
              </div>
              <div className="news__item">
                <div className="news__item_date">
                  {t("newsList__item_4_date")}
                </div>
                <div className="news__item_photo">
                  <img src="/images/news_photo_4.png" alt="news image 1" />
                </div>
                <div className="news__item_content">
                  <div
                    className="news__item_title"
                    dangerouslySetInnerHTML={{
                      __html: t("news__text_4"),
                    }}
                  />
                </div>
              </div>
              <div className="news__item">
                <div className="news__item_date">
                  {t("newsList__item_5_date")}
                </div>
                <div className="news__item_photo">
                  <img src="/images/news_photo_5.png" alt="news image 1" />
                </div>
                <div className="news__item_content">
                  <div
                    className="news__item_title"
                    dangerouslySetInnerHTML={{
                      __html: t("news__text_5"),
                    }}
                  />
                </div>
              </div>
              <div className="news__item">
                <div className="news__item_date">
                  {t("newsList__item_3_date")}
                </div>
                <div className="news__item_photo">
                  <img src="/images/news_photo_3.png" alt="news image 1" />
                </div>
                <div className="news__item_content">
                  <div
                    className="news__item_title"
                    dangerouslySetInnerHTML={{
                      __html: t("news__text_3"),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer lng={lng} />
    </>
  );
}
