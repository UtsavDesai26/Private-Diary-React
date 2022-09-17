import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is iNotebook React Project" />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;