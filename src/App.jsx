import { useState } from "react"


function App() {
  const [color, setColor] = useState("pink")
  return (
  <>
    <div className="duration-200"
    style={{backgroundColor: color,
      height: "100vh",
      width : "100vw",
    }}
    >
<div className="button-wrapper">
        <button className="button"
        onClick={() => setColor("rgb(224,214,255)")}>
          Purple
          </button>
        <button className="button"
        onClick={() => setColor("#102A71")}>
          Blue
          </button>
        <button className="button"
         onClick={() => setColor("#F5C400")}>
          Yellow</button>
      </div>
      <style>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
        }
        .button-wrapper {
          
          position:absolute;
          top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
       
        }
        .button {
          background-color: color;
          color: black;
          font-weight: bold;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          margin: 10px;
          cursor: pointer;
        }
        .button:hover {
          background-color:  #dcedc1;
        }
      `}</style>

      </div>
    
    </>
    
  )
}

export default App
