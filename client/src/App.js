import {BrowserRouter as Router} from 'react-router-dom';
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question';
import {fetchAllUsers} from './actions/Users'
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import RoutesPage from './RoutesPage'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <RoutesPage/>
      </Router>
    </div>
  );
}

export default App;
