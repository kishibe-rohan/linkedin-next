import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LinkedIn Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex bg-blue-300 text-red-700 text-center items-center justfiy-center">
        LinkedIn
      </div>
    </div>
  );
}
