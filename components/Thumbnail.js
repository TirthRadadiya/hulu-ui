import Image from "next/image";

const Thumbnail = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <>
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
      <h1>Trial</h1>
    </>
  );
};

export default Thumbnail;
