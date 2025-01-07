import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AppLayout from './ui/AppLayout';
import Category from './pages/Category';
import MenuItems from './ui/menu/MenuItems';

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
            <Route path="category" element={<Category></Category>}></Route>
            <Route
              path="category/:type"
              element={<MenuItems></MenuItems>}
            ></Route>
            <Route path="contact" element={<Contact></Contact>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
