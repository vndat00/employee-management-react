import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path='/' exact component={ListEmployeeComponent} />
            <Route path='/employees' component={ListEmployeeComponent} />
            <Route path='/home' component={ListEmployeeComponent} />
            <Route path='/add-employee' component={CreateEmployeeComponent} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
