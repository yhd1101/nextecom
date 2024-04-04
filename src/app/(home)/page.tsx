
import Image from "next/image";
import {Metadata} from "next";
import Link from "next/link";
import Movie from "../../../components/movie";
import styles from "../../styles/home.module.css"


export const metadata: Metadata = {
    title: "Home",
    description: "best movies",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovives() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch(API_URL);
    const json = await response.json();

    return json;
}
export default async function HomePage() {
    const movies = await getMovives();
  return (
    <div className={styles.container}>
        {movies.map((movie) => (
           <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path} />
        ))}
    </div>
  );
}
