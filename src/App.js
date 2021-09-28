import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import ContactPage from './Components/ContactPage';
import FirstParagraph from './Components/FirstParagraph';


function App() {

  return (
    <>
      {/* <div style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/numbers.png'})`
      }}> */}
      <Route path='/' exact component={HomePage} />
      <Route path='/game' exact component={FirstParagraph} />
    </>
  );
}

export default App;
