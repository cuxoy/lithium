import Link from "next/link";
export default async function Page({ params: { lng } }) {
  return (
    <>
      <Link href={`/${lng}/#newsList_section`}>BACK TO MAIN</Link>
      <div className="">news one!!!!</div>
    </>
  );
}
