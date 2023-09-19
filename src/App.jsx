import { MainLayout } from "./layout/MainLayout/MainLayout";
import { Home } from "./pages/Home/Home";
import { Plakater } from "./pages/Plakater/Plakater";
import { OmOs } from "./pages/OmOs/OmOs";
import { Kontakt } from "./pages/Kontakt/Kontakt";
import { Login } from "./pages/Login/Login";
import { Details } from "./pages/Details/Details";
import { Cart } from "./pages/Cart/Cart"
import { Error } from "./pages/Error/Error"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  //dirigere og håndtere trafikken på app
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/plakater" element={<Plakater />} />
          <Route path="/om" element={<OmOs />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:slug" element={<Details />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
