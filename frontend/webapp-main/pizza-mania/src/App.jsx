import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import AppLayout from './ui/AppLayout';



export default function App() { 
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout></AppLayout>}>
            <Route
              index
              element={<Navigate replace to="home"></Navigate>}
            ></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="menu" element={<Menu></Menu>}></Route>
            <Route path="contact" element={<Contact></Contact>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
