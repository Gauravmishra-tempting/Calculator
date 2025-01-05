import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");

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
      <div className="container" style={{marginTop: "8%"}}>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-bg-danger">
              <div className="card-body">
                <h2 className="card-title text-center">Calculator</h2>
                <input type="text" value={input} disabled className="form-control" />
                <div className="mt-4">
                  <div className="row">
                    <div className="col-3">
                      <button onClick={() => handleClick("1")} type='button' className='btn btn-light w-100'>1</button>
                    </div>
                    <div className="col-3">
                      <button onClick={() => handleClick("2")} type='button' className='btn btn-light w-100'>2</button>
                    </div>
                    <div className="col-3">
                      <button onClick={() => handleClick("3")} type='button' className='btn btn-light w-100'>3</button>
                    </div>
                    <div className="col-3">
                      <button onClick={() => handleClick("+")} type='button' className='btn btn-light w-100'>+</button>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-3">
                      <button onClick={() => handleClick("4")} type='button' className='btn btn-light w-100'>4</button>
                    </div>
                    <div className="col-3">
                      <button onClick={() => handleClick("5")} type='button' className='btn btn-light w-100'>5</button>
                    </div>
                    <div className="col-3">
                      <button onClick={() => handleClick("6")} type='button' className='btn btn-light w-100'>6</button>
                    </div>
                    <div className="col-3">
                      <button onClick={() => handleClick("-")} type='button' className='btn btn-light w-100'>-</button>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-3">
                      <button onClick={() => handleClick("7")} type='button' className='btn btn-light w-100'>7</button>
                    </div>
                    <div className="col-3">
                      <button onClick={() => handleClick("8")} type='button' className='btn btn-light w-100'>8</button>
                    </div>
                    <div className="col-3">
                      <button onClick={() => handleClick("9")} type='button' className='btn btn-light w-100'>9</button>
                    </div>
                    <div className="col-3">
                      <button onClick={() => handleClick("*")} type='button' className='btn btn-light w-100'>*</button>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-6">
                      <button onClick={() => handleClick("0")} type='button' className='btn btn-light w-100'>0</button>
                    </div>
                    <div className="col-3">
                      <button onClick={clearInput} type='button' className='btn btn-light w-100'>C</button>
                    </div>
                    <div className="col-3">
                      <button onClick={() => handleClick("/")} type='button' className='btn btn-light w-100'>/</button>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12">
                      <button onClick={calculateResult} type='button' className='btn btn-light w-100'>=</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calculator;

