import Thumbnail from "./Thumbnail";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";

{
  /* <Thumbnail key={result.id} result={result} />; */
}
const Results = ({ results }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, [loading]);

  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="my-10 px-5 sm:grid md:grid-cols-2 lg:grid-cols-4 3xl:flex flex-wrap justify-center">
      {results.map((result) => {
        return (
          <div
            className="group cursor-pointer transition-all duration-200 ease-in-out sm:hover:scale-[1.05] sm:z-50 p-2"
            key={result.id}
          >
            <Image
              layout="responsive"
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              alt="not available"
              width={1920}
              height={1080}
            />
            <div className="p-2">
              <p className="truncate max-w-md group-hover:font-bold">
                {result.overview}
              </p>
              <h2 className="mt-2 text-xl text-white ">
                {result.title || result.original_name}
              </h2>
              <p className="flex items-center opacity-0 group-hover:opacity-100">
                {result.media_type && `${result.media_type} •`}
                {result.release_date || result.first_air_date} •
                <ThumbUpIcon className="h-5 mx-2" />
                {result.vote_count}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
