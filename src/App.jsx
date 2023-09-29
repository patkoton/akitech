import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Lazy from './layout/Lazy';

export default function App() {
  const Home = lazy(()=> import('./pages/Home'))
  const Success = lazy(()=> import('./pages/Success'))
  const Failed = lazy(()=> import('./pages/Failed'))
  const NotFound = lazy(()=> import('./components/NotFound'))

  
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <Suspense fallback={<Lazy/>}>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/failed' element={<Failed/>}/>
          <Route path='/404' element={<NotFound/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Suspense>
  );
}
