import './App.css';
import { lazy, Suspense } from 'react';
import Loader from './components/loader/Loader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Calculator = lazy (() => import('./components/pages/Calculator'))

function App() {
  return (
   <Suspense fallback={<Loader/>}>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Calculator/>} />
    </Routes>
    </BrowserRouter>
   </Suspense>
  );
}

export default App;
