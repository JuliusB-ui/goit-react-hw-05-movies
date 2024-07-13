import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const HeaderLayout = () => {
  return (
    <>
      <header>
          <nav>
              <NavLink to="/" end>Home</NavLink>
              <NavLink to='/movies'>Movies</NavLink>
          </nav>
      </header>

      <Suspense fallback={<div>Loading page... please wait</div>}>
      <Outlet/>
      </Suspense>
    </>
  )
}