import { Component } from 'react';
import SignIn from "../src/pages/SignIn"
import Student from "../src/pages/Student"
import StudentQuiz from "../src/pages/StudentQuiz"
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

        {/* ternary that says 
        
          isLoggedinStudent ?
=======
                <Navbar />
 main
          <Route exact path="/" component={SignIn} />
          <Route path="/Student" component={Student} />
          <Route path="/StudentQuiz" component={StudentQuiz} />
          :
          <Route path="/Teacher" component={Teacher} />
           */}
          <Route exact path="/" component={SignIn} />
          <Route path="/student" component={Student} />
          <Route path="/studentquiz" component={StudentQuiz} />
          <Route path="/teacher" component={Teacher} />
      </BrowserRouter>

    );
  }
}

export default App;