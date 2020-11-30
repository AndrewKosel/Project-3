import { Component } from 'react';
import SignIn from "../src/pages/SignIn"
import Student from "../src/pages/Student"
import QuizTime from "./pages/Quiz"
import Teacher from "../src/pages/Teacher"


import {
  BrowserRouter,
  Route
} from "react-router-dom";
import "./App.css";


class App extends Component {
  render() {
    return (
      
      <BrowserRouter basename="/">

      <Route path="/quiz" component={QuizTime} />

         <Route path="/student" component={Student} />

      {/* <Navbar /> */}
      <Route exact path="/" component={SignIn} />
        {
          localStorage.user === "student" ? 
          <>
          
          <Route path="/student" component={Student} />
          {/* <Route path="/quiz" component={QuizTime} /> */}
          </>
          :
          <>
        
          <Route path="/teacher" component={Teacher} />
          </>
        }
          {/* {/* <Route exact path="/" component={SignIn} />
          <Route path="/student" component={Student} />

          <Route path="/studentquiz" component={QuizTime} />
      <Route path="/teacher" component={Teacher} /> */}

      </BrowserRouter> 

    );
  }
}

export default App;