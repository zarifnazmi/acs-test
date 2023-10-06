import React, { useState } from 'react';
import './App.css';

function App(): JSX.Element {
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [total, setTotal] = useState('');

  const handleFirstChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFirstNum(value);
  }

  const handleSecondChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSecondNum(value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const temp = Number(firstNum) + Number(secondNum);
    setTotal(temp.toString());
  }


  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-left">
          {/* <!-- LOGO --> */}
          <div className="logo">AEON</div>

          {/* <!-- NAVIGATION MENU --> */}
          <ul className="nav-links">

            {/* <!-- USING CHECKBOX HACK --> */}
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

            {/* <!-- NAVIGATION MENUS --> */}
            <div className="menu">

              <li><a href="/">Showcase</a></li>
              <li><a href="/">Docs</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Analytics</a></li>
              <li><a href="/">Templates</a></li>
              <li><a href="/">Enterprise</a></li>
            </div>
          </ul>
        </div>
        <form>
            <input type="text" className="nav-input" placeholder="Search documentation..." />
        </form>
      </nav>
      {/* <div className="App-header">
        <h2>Adding Two Numbers</h2>
        <form onSubmit={handleSubmit} className='App-form'>
            <input
              className='input'
              type="number"
              name="firstnumber"
              placeholder="First Number"
              value={firstNum}
              onChange={handleFirstChange}
            />
            <input
              className='input'
              type="number"
              name="secondnumber"
              placeholder="Second Number"
              value={secondNum}
              onChange={handleSecondChange}
            />
          <button type="submit" className="submit">Add Two Numbers</button>
          <p>Total: {total}</p>
        </form>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </div> */}
    </div>
  );
}

export default App;
