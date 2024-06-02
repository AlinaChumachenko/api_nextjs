import Head from "next/head";
import Heading from "../components/Heading.js";
import Socials from "../components/Socials.js";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials/`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials: data },
  };
};

const Home = ({ socials }) => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <div className="min-h-screen flex flex-col items-center justify-center gap-10">
      <Heading text="Social media" />

      <Socials socials={socials} />
    </div>
  </div>
);

export default Home;
