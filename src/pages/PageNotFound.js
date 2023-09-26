import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import PageNotFoundImg from '../assets/images/error-sign.jpg';
import Button from '../components/Button';

const PageNotFound = () => {

  useEffect(()=>{
    document.title = `404 - Page not Found`
  });

  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center'>
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Page Not Found</p>
          <div className='my-20 max-w-lg'>
            <img className='rounded' src={PageNotFoundImg} alt="PageNoteFound" />
          </div>
        </div>
      </section>
      <section className='sm: flex justify-center'>
        <Link to="/">
          <Button>Back To Main Page</Button>
        </Link>
      </section>
    </main>
  )
}

export default PageNotFound
