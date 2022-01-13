import "./App.scss";
import { Route, Routes } from "react-router-dom";

import AppAppBar from "./modules/views/AppAppBar";
import Home from "./modules/views/Home";
import Education from "./modules/views/Education";
import Skills from "./modules/views/Skills";
import More from "./modules/views/More";
import Work from "./modules/views/Work";

function App() {
  return (
    <div className="App">
      <AppAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
