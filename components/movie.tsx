"use client"
import Link from "next/link";
import styles from "../src/styles/movie.module.css"
import {useRouter} from "next/navigation";


interface IMovieProps {
    title: string,
    id : string
    poster_path: string
}
//typeScript라 타입을 정해줘야함.
export default function Movie({title, id, poster_path} : IMovieProps) {
    const router = useRouter()
    const onClick = () => {
        router.push(`/movies/${id}`)
    }
    return(
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    )
}