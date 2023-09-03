import React, { useState } from "react";

function App() {

  const [isCount, setIsCount] = useState(false)

  function startCount() {
    let count = 1;

    setIsCount(true)
    const inter = setInterval(() => {
      console.log(count);
      count++;

      if (count > 10) {
        clearInterval(inter)
        setIsCount(false);
      }
    }, 1000)


  }
  return (

    <div className="App">
      <h1>Count</h1>
      <button onClick={startCount}>I'm feeling Lucky</button>



    </div>
  );
}

export default App;
