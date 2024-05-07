import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Carrers from './Pages/Carrers/Carrers';
import Services from './Pages/Services/Services';
import Work from './Pages/Work/Work';
import Case_study from './Pages/casestudy/case_study';
import About_Us from './Pages/About_us/About_Us';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
<Route
      path={"/"}
      element={
        <>

     <Home/>
        </>
      }
    />
<Route
      path={"/Contact"}
      element={
        <>

<Contact/>
        </>
      }
    />

<Route
      path={"/Carrers"}
      element={
        <>

<Carrers/>
        </>
      }
    />

<Route
      path={"/Services"}
      element={
        <>
<Services/>
        </>
      }
    />

<Route
      path={"*"}
      element={
        <>
<Home/>
        </>
      }
    />
<Route
      path={"/Our-Work"}
      element={
        <>
<Work/>
        </>
      }
    />
<Route
      path={"/case_study"}
      element={
        <>
<Case_study/>
        </>
      }
    />
<Route
      path={"/about-us"}
      element={
        <>
<About_Us/>
        </>
      }
    />
   

</Routes>
</BrowserRouter>
</>
  );
}

export default App;
