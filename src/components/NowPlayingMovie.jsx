import React from 'react'
import { useGetAllNowPlayingMoviesQuery } from '../service/Api';
import style from './NowPlayingMovies.module.css'

const NowPlayingMovie = () => {
    // console.log(useGetAllNowPlayingMoviesQuery)
    const {data, isLoading, isError } = useGetAllNowPlayingMoviesQuery();
    console.log(data)

  
    if(isLoading){
        return <div>Loading...</div>
    };

    if(isError){
        return<div><h1>An error occured</h1></div>
    }

  return(
    <div className={style.mainWrapper}>
        <div className={style.container}>
            {data?.results?.map((movie)=>(
                <div className={style.movie} key={movie.id}>
                <p>{movie.title}</p>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <p>{}</p>
            </div>
        ))}
        </div>
        </div>
  )
}

export default NowPlayingMovie
