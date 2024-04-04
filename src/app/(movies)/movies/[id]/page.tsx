import {API_URL} from "@/app/(home)/page";
import MovieVideos from "../../../../../components/movie-videos";
import {Suspense} from "react";
import MovieInfo from "../../../../../components/movie-info";




export default async function MovieDetail({params: {id }} : {params: {id: string}}) {
    return (
        <div>
            <h2>Movie detail page</h2>
            <Suspense fallback={<h1> Loading </h1>}>
                <MovieInfo id={id}/>
            </Suspense>
            <h1>video</h1>
            <Suspense fallback={<h1> Loading </h1>}>
                <MovieVideos id={id}/>
            </Suspense>

        </div>
    )
}