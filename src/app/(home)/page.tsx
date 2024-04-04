"use client"
import Image from "next/image";
import {Metadata} from "next";
import {useEffect, useState} from "react";


// export const metadata: Metadata = {
//     title: "Home",
//     description: "best movies",
// };
export default function Page() {
    const [isLoading, setLoading] = useState(true)
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies")
        const json = await response.json();
        setMovies(json)
        setLoading(false)

    }
    useEffect(() => {
        getMovies()
    }, [])
  return (
    <div>
        {isLoading? "Loading...":JSON.stringify(movies)}
    </div>
  );
}
