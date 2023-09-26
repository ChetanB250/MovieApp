import React,  { useEffect }  from 'react'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch';

const MoviesList = ({apiPath, title}) => {
  const { data:movies } = useFetch(apiPath);

  useEffect(()=>{
    document.title = `${title} / CineMate`
  });

  return (
    <main> 
      <section className='py-5 mx-auto'>
        <div className='flex flex-wrap justify-center p-4'>
         {movies.map((movie) => {
          return <Card key={movie.id} movie={movie}/>
         })} 
        </div>
        
      </section>
    </main>
  )
}

export default MoviesList