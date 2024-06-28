import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [password, setPassword] = useState("");

  function generatePass() {
    let charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (number) charset += "0123456789";
    if (symbol) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let password = ""
    for(let i = 0;i < length ; i++ ){
      const randomPass = Math.floor(Math.random() * charset.length)
      password += charset[randomPass]
    }
    setPassword(password)
  }
  
  
  function Copy(){
    navigator.clipboard.writeText(password)
    alert("Password Copied!!!")
  }
  return (
    <>
      <div className="main-box">
        <h2>Strong Password Generator</h2>
        <div className="content">
          <div className="length">
            <label htmlFor="num">Password Length</label>
            <input
              type="number"
              id="num"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="upper"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
            <label htmlFor="upper">Include Uppercase</label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="lower"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
            <label htmlFor="lower">Include Lowercase</label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="number"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
            />
            <label htmlFor="number">Include Number</label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="symbol"
              checked={symbol}
              onChange={(e) => setSymbol(e.target.checked)}
            />
            <label htmlFor="symbol">Include Symbol</label>
          </div>

          <button className="g-btn" onClick={generatePass}>
            Generate Password
          </button>
          <div className="generate-password">
            <input type="text" readOnly value={password} />
            <button className="btn-copy" onClick={Copy}>Copy</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
