import React, { useState } from "react";
import Arrow from "../../assets/uparrow.svg";
import "./ScrollToTop.css";
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  const buttonStyle = {
    position: "fixed",
    bottom: "40px",
    right: "40px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    padding: "3px",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    display: visible ? "block" : "none",
  };

  return (
    <div className="scrolldiv">
      <button style={buttonStyle} onClick={scrollToTop}>
        <img className="arrowImg" src={Arrow} alt="^" />
      </button>
    </div>
  );
}

export default ScrollToTopButton;
