import Layout from "./assets/components/Layout";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Search from "./pages/Search";
import Adding from "./pages/Adding";
import Edit from "./pages/Edit";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="employee" element={<Employee/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="addemployee" element={<Adding/>}/>
        <Route path="edit/:id" element={<Edit/>}/>
        <Route path="edit/:id/employee" element={<Employee/>}/>
        <Route path="edit/:id/search" element={<Search/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;