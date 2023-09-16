import logo from './logo.svg';
import './about'
import './App.css';
import './assets/css/bootstrap.min.css'
const App = () => {
  return (
    <>
    <nav id='navbar' className='col-md-12'>
      <h1>LegarB</h1>
      <ul className='Naval'>
      <li className='no1'><a href='about.jsx'>About</a></li>
      <li>Contact</li>
      </ul>
    </nav>
    <div className='homepage'></div>
    </>
  );
}

export default App;
