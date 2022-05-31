import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ movies }) {
  return (
    <div className="">
      <Head>
        <title>Hulu with NextJS</title>
        <link
          rel="icon"
          href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fhulu-icon&psig=AOvVaw2M3rPxBnqYfWwPCC5JHq1s&ust=1653840412368000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDroInKgvgCFQAAAAAdAAAAABAD"
        />
      </Head>

      <Header />
      <Nav />
      <Results results={movies} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const response = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      movies: response.results,
    },
  };
}
