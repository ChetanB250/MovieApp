import { Routes, Route } from "react-router-dom";
import React from 'react'
import MovieItem from "../pages/MovieItem";
import MoviesList from "../pages/MoviesList";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";

const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
    <Routes>
        <Route path="/" element={<MoviesList apiPath="movie/now_playing" title="Home"/> }/>
        <Route path="movie/:id" element={<MovieItem/> }/>
        <Route path="movies/popular" element={<MoviesList apiPath="movie/popular" title="Popular"/> }/>
        <Route path="movies/top" element={<MoviesList apiPath="movie/top_rated" title="Top"/> }/>
        <Route path="movies/upcoming" element={<MoviesList apiPath="movie/upcoming" title="Upcoming"/> }/>
        <Route path="search" element={<Search apiPath="search/movie"/> }/>
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </div>
  )
}

export default AllRoutes
