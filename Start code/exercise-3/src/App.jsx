import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [sum, setSum] = useState(0);
  const [warningError, setWarning] = useState("");

  const isNumber = (event) => {
    const isNum = !isNaN(+event.target.value);
    return isNum;
  };

  const warning = () => {
    if (isNumber) {
      setWarning("A and B shall be number !");
    }
  };


  const handleA = (e) => {
    setNumA(e.target.value);
  };
  const handleB = (e) => {
    setNumB(e.target.value);
  };

  const handleSum = () => {
    setSum(numA + numB);
  };
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={handleA} type="text" value={numA} />
      <label>B =</label>
      <input type="text" value={numB} onChange={handleB} />
      <label>A + B =</label>
      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input 
        disabled 
        value={sum}
        // { warningError ? warningError : value={sum} }
        />
      <button onClick={handleSum}>Compute</button>
    </main>
  );
}

export default App;
