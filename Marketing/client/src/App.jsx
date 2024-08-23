import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/login/Login";
import SignUp from "./Components/SignUp/SignUp";
import LandingPage from "./Components/LandingPage/LandingPage";
import Modal from "antd/es/modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route
            path="/"
            element={<LandingPage setShowModal={setShowModal} />}
          />
        </Routes>
      </Router>
      <Modal open={showModal} footer={null} onCancel={handleClose}>
        <SignUp setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}

export default App;
