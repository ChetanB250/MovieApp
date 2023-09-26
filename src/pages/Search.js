import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Card from '../components/Card'




const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data:movies } = useFetch(apiPath, queryTerm);

  
  useEffect(()=>{
    document.title = `Search Results for ${queryTerm} / CineMate`
  });

  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No-Result Found for "${queryTerm}"`: `Results for "${queryTerm}"` }</p>
      </section>
    <section className='max-w-7xl py-5 mx-auto'>
      <div className='flex flex-wrap justify-center p-4'>
       {movies.map((movie) => {
        return <Card key={movie.id} movie={movie}/>
       })} 
      </div>
    </section>
  </main>
  )
}

export default Search
