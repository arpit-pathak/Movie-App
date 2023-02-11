import React, { useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
    bottom: "20px",
    right: "20px",
    background: "#fff",
    color: "#333",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    display: visible ? "block" : "none",
  };

  return (
    <div className="scroll-to-top">
      <button style={buttonStyle} onClick={scrollToTop}>
        {/* <i className="fa fa-chevron-up"></i> */} ^
      </button>
    </div>
  );
}

export default ScrollToTopButton;
