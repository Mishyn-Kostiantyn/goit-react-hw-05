import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Loader from './components/Loader';

import Navigation from './components/Navigation';
import MovieCast from './components/MovieCast';
import MovieReviews from './components/MovieReviews';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
function App() {

  return (
    <>
      <header className='container'>
      <Navigation/>
      </header>
            <main>
        <Toaster position="top-center" reverseOrder={true} />
        <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />} > 
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          
          <Route path='*' element={<NotFoundPage />} />
          
    </Routes>
        </Suspense>
        </main>
            
    </>
  )
}

export default App












































































