import AllTasks from "@pages/AllTasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTasks />} />
      </Routes>
    </Router>
  );
}

export default App;
