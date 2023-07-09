import { Component } from 'react';
import topimage from './img/topimage.jpg'
import './App.css';



  class App extends Component {
    render(){
      return(
        <div>
          <img className="Topimage" src={topimage} alt='Topimage' />
          <button onClick={() => window.open('https://axe11.com/Toon', '_blank')}>밤토끼 바로가기</button>
          <h1>111</h1>
        </div>

          
      );
    }
}

export default App;
