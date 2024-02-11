import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { Manrope } from "next/font/google";
import { Unbounded } from "next/font/google";
import "../globals.scss";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});
const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
});

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={`${unbounded.variable} ${manrope.variable}`}
    >
      {/* <head /> */}
      <head>
        <title>UKRAINIAN LITHIUM CORPORATION</title>
        <meta
          name="description"
          content="ULC is a company that is working on Ukraine’s first “Gigafactory to meet the demand for battery cells for various EV and heavy-duty applications."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
