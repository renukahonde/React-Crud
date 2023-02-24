// import logo from './logo.svg';
// import './App.css';
// import Create  from './Components/Create';
// import Read from './Components/Read';
// import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";
// import Update from './Components/Update';

// //import Read from './Components/Read';

// function App() {
//   return (
//      <div> 
//     <BrowserRouter>
//      <Routes>
//       <Route exact path="/" element={<Create/>}>
//       </Route>
//       <Route exact path="/read" element={<Read/>}>
//       </Route>
//       <Route exact path="/update" element={<Update/>}>
//       </Route>


//      </Routes>
    
//     </BrowserRouter>
//     </div>
    
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;