import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import "./ip.scss";
import img from "../../images/whatsapp.webp";

function LandingPage({ setShowModal }) {
  const navigate = useNavigate();
  const redirectToRegisterPage = () => {
    // navigate("/signup");
    setShowModal(true);
    // Replace '/register' with the actual URL of your register page: ;
  };
  return (
    <>
      <div
        className="main"
        onClick={() => window.open("https://wa.me/+918534888880")}
      >
        <div
          className="whts-app"
          onClick={() => window.open("https://wa.me/+918534888880")}
        >
          <img src="../../images/whatsapp.webp" alt="jj" />
        </div>
      </div>{" "}
      <div
        className="signu-image"
        onClick={(e) => {
          e.stopPropagation();
          setShowModal(true);
        }}
      ></div>
    </>
  );
}

export default LandingPage;
