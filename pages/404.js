import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading.js";
import Head from "next/head.js";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(redirect);
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen bg-red-500 text-white">
      <Head>
        <title>Error</title>
      </Head>
      <div className="text-center animate-slide-in-left">
        <Heading className="text-6xl font-bold " text="404" />

        <Heading
          className="text-lg"
          tag="h2"
          text="Something is going wrong..."
        />
      </div>
    </div>
  );
};

export default Error;
