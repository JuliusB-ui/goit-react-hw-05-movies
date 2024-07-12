import { Route, Routes } from "react-router-dom";
import { HeaderLayout } from "./HeaderLayout/HeaderLayout";
import { Homepage } from '../pages/Homepage/Homepage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage/MovieDetailsPage';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage';
import { ErrorNotFound } from '../pages/ErrorNotFound/ErrorNotFound';
import { Reviews } from './Reviews/Reviews';
import { Casts } from './Casts/Casts';

export const App = () => {
  return (
<Routes>
  <Route path='/' element={<HeaderLayout/>}/>
  <Route index element={<Homepage/>}/>
  <Route path='/movies' element={<MoviesPage/>}/>
  <Route path='/movies/:movieID' element={<MovieDetailsPage/>}>
  <Route path='/movies/:movieID/cast' element={<Casts/>}/>
  <Route path='/movies/:movieID/reviews' element={<Reviews/>}/>
  </Route>
  <Route path='*' element={<ErrorNotFound/>}/>
</Routes>
  );
};
