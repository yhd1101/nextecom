import {API_URL} from "@/app/(home)/page";

async function getMovie(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch(`${API_URL}/${id}`)
    return response.json();
}

async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const response = await fetch(`${API_URL}/${id}/videos`)
    return response.json();
}

export default async function MovieDetail({params: {id }} : {params: {id: string}}) {
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
    return (
        <div>
            <h1>{movie.title}</h1>
            <h3>{videos.map(video => {video.id})}</h3>
        </div>
    )
}