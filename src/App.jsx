import { MainLayout } from "./layout/MainLayout/MainLayout";
import { Home } from "./pages/Home/Home";
import { Plakater } from "./pages/Plakater/Plakater";
import { OmOs } from "./pages/OmOs/OmOs";
import { Kontakt } from "./pages/Kontakt/Kontakt";
import { Login } from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>}/>
          <Route path="/plakater" element={<Plakater/>}/>
          <Route path="/om" element={<OmOs/>}/>
          <Route path="/kontakt" element={<Kontakt/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<Error/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
