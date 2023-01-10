import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./Components/LoginForm";
import PersonalInfo from "./Pages/PersonalInfo";
import HomePage from "./Pages/HomePage";
import ResidencyInfo from "./Pages/ResidencyInfo";
import BankVerification from "./Pages/BankVerification";
import Completed from "./Pages/Completed";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/personal" element={<PersonalInfo />} />
          <Route path="/residency" element={<ResidencyInfo />} />
          <Route path="/verification" element={<BankVerification />}/>
          <Route path="/completed" element={<Completed />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
