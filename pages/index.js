import Head from "next/head";
import Heading from "../components/Heading";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div className="min-h-screen flex justify-center items-center">
      <Heading text="api_nextjs" />
    </div>
  </>
);

export default Home;
