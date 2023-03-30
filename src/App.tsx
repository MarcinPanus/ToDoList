import AllTasks from "@pages/AllTasks";
import OneTask from "@pages/OneTask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/task/:id" element={<OneTask/>} />
      </Routes>
    </Router>
  );
}

export default App;
