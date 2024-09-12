// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = process.env.REACT_APP_MOVIE_BASE_URL
const apikey = process.env.REACT_APP_APIKEY

export const movieApi = createApi({
    reducerPath: "movies",
    baseQuery: fetchBaseQuery({baseUrl:`${baseUrl}`}),
    endpoints: (builder) => ({
        getAllNowPlayingMovies: builder.query({
            query:()=>(`/now_playing?api_key=${apikey}`)
        })
    })
})
export const {useGetAllNowPlayingMoviesQuery} = movieApi