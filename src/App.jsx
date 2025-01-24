import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Redux Counter</h1>
      <div style={styles.counterBox}>
        <button style={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <p style={styles.count}>{count}</p>
        <button style={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <button style={styles.resetButton} onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
    color: "#fff",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  counterBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    background: "#ffffff40",
    padding: "20px 40px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  count: {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: 0,
  },
  button: {
    fontSize: "1.5rem",
    background: "#ffffff",
    color: "#2193b0",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "transform 0.2s ease, background 0.2s ease",
  },
  resetButton: {
    fontSize: "1rem",
    background: "#ff4757",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "transform 0.2s ease, background 0.2s ease",
  },
  buttonHover: {
    background: "#e3f2fd",
    transform: "scale(1.1)",
  },
};

// Add some hover styles with a pseudo-class
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.1)";
      button.style.background = "#e3f2fd";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
      button.style.background = button === buttons[2] ? "#ff4757" : "#ffffff";
    });
  });
});

export default App;
