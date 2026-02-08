// -------------------Default-------------------
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// ----------------1. Sample Function Example--------------
// import React from 'react';
// export default function Head() {
//   return <div>
//     <h1>Introduction to React JS</h1>
//     <h2>React Js is the library of JS</h2>
//   </div>
// };
// export default Head;



// --------------2. Employee Details Example--------------
// import React from 'react';
// import "./App.css"
// export default function Head() {
//   return <div>
//     <h1>------Employee Details-------</h1>
//     <p><b>Employee ID: </b>101</p>
//     <p><b>Employee Name:</b> Akriti Negi</p>
//     <p><b>Employee Company:</b> Google</p>
//     <p><b>Employee Salary:</b> 32LPA</p>
//     <p><b>Employee Location:</b> Bengaluru</p>
//     <p><b>Employee Phone Number:</b> 9237786868</p>
//   </div>
// };


// -----------------3. Login Details Example-----------------
// import React from 'react';
// // import "./App.css"
// export default function Head() {
//   return <div>
//     <h1>---------Login Details---------</h1>
//     <label>Username: </label>
//     <input
//     type="text"
//     placeholder="Enter your username"
//     ></input><br></br><br></br>
//     <label>Password: </label>
//     <input
//     type="password"
//     placeholder="Enter your password"
//     ></input><br></br><br></br>
//     <button>Log In</button>
//   </div>
// };


// ----------------------4. First React App----------------------
// import React from 'react';
// export default function App() {
//   return <h1>Hello</h1>
// };

// ---------------------5. Props Concept in React---------------------
// import React from 'react';
// import "./App.css"

// function Parent(props) {
//   return <div>
//     <h1>Hello, {props.name}</h1>
//     <p>I hope you are {props.regards}</p>
//     <p>It was nice to {props.gratitude}</p>
//   </div>
// };
// export default Child;

// function Child() {
//   return (
//     <Parent name = "Everyone" regards = "doing well." gratitude = "meet you."/>
//   )
// };

// --------------------------6. State Concept in React--------------------
// import React ,{useState} from 'react';
// import "./App.css"

// function State() {
//   const [message, setMessage] = useState("Hello");  // variable creation of new State concept
//   const [color, setColor] = useState("black");

//   const handleChange = () => {
//     setMessage("Anuska");
//     setColor("purple")
//   }
//   return (
//   <div className="state-container">
//     <h1 style={{color: color}}>{message}</h1>
//     <button onClick = {handleChange}>Change Text</button>
//   </div>
//   )
// };
// export default State;


// ----------------------7. Counting Buffer System-------------------------
// import React, { useState } from "react";
// import "./App.css";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="counter-container">
//       <h1>Count Buffering System</h1>
//       <p className="counter-value">{count}</p>

//       <div className="btn-group">
//         <button
//           className="decrement"
//           onClick={() => setCount(count - 1)}
//         >
//           Decrement
//         </button>

//         <button
//           className="increment"
//           onClick={() => setCount(count + 1)}
//         >
//           Increment
//         </button>

//         <button
//           className="reset"
//           onClick={() => setCount(0)}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Counter;


// -------------------------8. Youtube Login Page---------------------
// ------------------ Login Page UI (React) ------------------
// import React, { useState } from "react";
// import "./App.css";
// import { FaUser, FaLock, FaEye } from "react-icons/fa";

// function App() {
//   const [showPass, setShowPass] = useState(false);

//   return (
//     <div className="bg">
//       <div className="glass-card">

//         <h1 className="title">Youtube</h1>

//         <div className="profile-icon">
//           <img
//             src="/youtube/camera_icon.svg"
//             alt="camera"
//           />
//         </div>

//         {/* Username */}
//         <div className="input-row">
//           <FaUser className="icon" />
//           <input type="text" placeholder="Your user name" />
//         </div>

//         {/* Password */}
//         <div className="input-row">
//           <FaLock className="icon" />
//           <input
//             type={showPass ? "text" : "password"}
//             placeholder="Password"
//           />
//           <FaEye
//             className="eye"
//             onClick={() => setShowPass(!showPass)}
//           />
//         </div>

//         <div className="options">
//           <label>
//             <input type="checkbox" /> Remember me
//           </label>
//           <span className="forgot">Forgot Password?</span>
//         </div>

//         <button className="login-btn">Log In</button>

//         <p className="signup">
//           Don’t have an account? <span>Sign Up</span>
//         </p>

//       </div>
//     </div>
//   );
// }

// export default App;





