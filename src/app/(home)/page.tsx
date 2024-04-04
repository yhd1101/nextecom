
import Image from "next/image";
import {Metadata} from "next";
import Link from "next/link";


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
    <div>
        {movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
    </div>
  );
}
