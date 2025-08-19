import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Journalist Toolbox</title>
        <meta name="description" content="A simple journalism student app" />
      </Head>

      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to the Journalist Toolbox
        </h1>
        <p className="text-lg text-gray-700">
          This is your starting point. Add your tools and features here!
        </p>
      </main>
    </>
  );
}
