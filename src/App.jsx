import './App.css'
import myCalculatorLogo from './images/my-calculator-logo.png'
import Button from './components/Button';

function App() {

  return (
    <div className='App'>
      <div className='logo-calculator-container'>
        <img
          src={myCalculatorLogo}
          className='logo-calculator-image'
          alt='My calculator logo' />
      </div>
      <div className='calculator-container'>
<div className='file'><Button>1</Button></div>
<div className='file'></div>
<div className='file'></div>
<div className='file'></div>
<div className='file'></div>
      </div>
    </div>

  );
}

export default App
