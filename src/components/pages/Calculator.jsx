import React, {useState} from 'react';

const Calculator = () => {
    const [input , setInput] = useState("");

    const handleClick = (value) => {
        setInput(input + value);
    };

    const calculateResult = () => {
        try {
            const result = eval(input);
            setInput(String(result));
        } catch (error) {
            setInput("Error");
        }
    }


    const clearInput = () => {
        setInput("");

    }

  return (
  <>
  <div className="container calculator text-bg-danger p-4 text-center align-items-center rounded" 
  style={{width:"25%", marginTop:"4%"}}>
    <div className="display">
        <h1>Calculator</h1>
      <input type="text" value={input} disabled />
    </div>
    <div className='button mt-4'>
       <button onClick={() => handleClick("1")} type='button' className='button-color'>1</button> 
       <button onClick={() => handleClick("2")} type='button' className='button-color'>2</button> 
       <button onClick={() => handleClick("3")} type='button' className='button-color'>3</button> 
       <button onClick={() => handleClick("+")} type='button' className='button-color'>+</button> 

       <button onClick={() => handleClick("4")} type='button' className='button-color'>4</button> 
       <button onClick={() => handleClick("5")} type='button' className='button-color'>5</button> 
       <button onClick={() => handleClick("6")} type='button' className='button-color'>6</button> 
       <button onClick={() => handleClick("-")} type='button' className='button-color'>-</button> 

       <button onClick={() => handleClick("7")} type='button' className='button-color'>7</button> 
       <button onClick={() => handleClick("8")} type='button' className='button-color'>8</button> 
       <button onClick={() => handleClick("9")} type='button' className='button-color'>9</button> 
       <button onClick={() => handleClick("*")} type='button' className='button-color'>*</button> 

       <button onClick={() => handleClick("0")} type='button' className='button-color'>0</button> 
       <button onClick={clearInput} type='button' className='button-color'>C</button> 
       <button onClick={() => handleClick("/")} type='button' className='button-color'>/</button> 
       <button onClick={calculateResult} type='button' className='button-color'>=</button> 
    </div>
  </div>
  </>
  )
}

export default Calculator;


