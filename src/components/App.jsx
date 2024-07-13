import { Route, Routes } from "react-router-dom";
import { HeaderLayout } from "./HeaderLayout/HeaderLayout";
import { lazy } from "react";

const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const ErrorNotFound = lazy(() => import('../pages/ErrorNotFound/ErrorNotFound'));
const Casts = lazy(() => import('./Casts/Casts'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
<Routes>
  <Route path='/' element={<HeaderLayout/>}>
  <Route index element={<Homepage/>}/>
  <Route path='/movies' element={<MoviesPage/>}/>
  <Route path='/movies/:movieID' element={<MovieDetailsPage/>}>
    <Route path='/movies/:movieID/casts' element={<Casts/>}/>
    <Route path='/movies/:movieID/reviews' element={<Reviews/>}/>
  </Route>
  <Route path='*' element={<ErrorNotFound/>}/>
  </Route>
</Routes>
  );
};
