
import Image from "next/image";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Home",
    description: "best movies",
};
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovives() {
    await new Promise((resolve) => setTimeout(resolve, 1000)) //5초동안 멈추게하다.
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}
export default async function HomePage() {
    const movies = await getMovives();
  return (
    <div>
        {JSON.stringify(movies)}
    </div>
  );
}
