
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Draft from "./pages/Draft";
import ChampionList from "./pages/ChampionList";

function App() {
  return (
      <BrowserRouter>
      <Header></Header>
      <Routes>
          <Route index element={<Draft />} />
          <Route path='champion-list' element={<ChampionList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
