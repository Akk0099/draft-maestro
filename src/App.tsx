
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Draft from "./Draft";
import ChampionList from "./ChampionList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
          <Route index element={<Draft />} />
          <Route path='champion-list' element={<ChampionList />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
