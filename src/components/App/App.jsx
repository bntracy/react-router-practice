import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';

import { HashRouter as Router, Route, Link } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                <h1 className="App-title">GitHub Student List</h1>
                </header>
                <br/>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/allStudents">Students</Link>
                </nav>
                <Route path="/home">
                    <StudentForm />
                </Route>
                <Route path="/about">
                    <p>A list of student GitHub names.</p>
                </Route>
                <Route path="/allStudents">
                    <p>Student list:</p>
                    <StudentList />
                </Route>
            </div>
        </Router>
    );
}

export default App;
