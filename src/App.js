import './App.css';

import React, { useState, useEffect  } from "react"

function App() {

    const  [text, setText] = useState("")

    const  [timeremaing, setTime] = useState(5)

    function handleChange(e){
      const {value} = e.target
      setText(value)
    }

    function calculateWordCount(text) {
      const wordsArr = text.trim().split(" ")
      return wordsArr.filter(word => word !== "").length
  }

  useEffect(() => {
    if(timeremaing > 0) {
        setTimeout(() => {
            setTime(time => time - 1)
        }, 1000)
    }
}, [timeremaing])


    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
            
            onChange={handleChange}
            value={text}
            />
            <h4>Time reminaing: {timeremaing}</h4>
            <button onClick={() => calculateWordCount(text)}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
