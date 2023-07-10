import { Component } from 'react';
import Button from './components/Button'
import Images from './components/Images'
import './App.css';

const Item = ({ text }) => {
  return <p>
    {text.split("\n").map((txt) => (
        <>
          {txt}
          <br />
        </>
      ))}
  </p>;
};


  class App extends Component {
    render(){
      return(
        <div>
          {/* <img className="Topimage" src={topimage} alt='Topimage' /> */}
          <img className="Image" src={Images.Topimage} alt="topimage"/>
          
          <p className="Toptext">웹툰 무료 미리보기 사이트 TOP 10 (2023년 최신)</p>
          <p className="Introtext">INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~ INTRO ~~~~~</p>
          <Item text={"\n\n"}/>
          <hr></hr>

          <Item text={"\n"}/>

          <img className="Image" src={Images.Bamdokkilogo} alt="bamdokkilogo"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          1. 밤도끼 설명~~~~~~~~~~~~~~~~~
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          <p><Button main onClick={() => window.open('https://axe11.com/Toon', '_blank')}>밤도끼 바로가기</Button></p>
          </p>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Blocktoon} alt="blacktoon"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          2. 블랙툰 설명~~~~~~~~~~~~~~~~~
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          <p><Button main onClick={() => window.open('https://blacktoon247.com/', '_blank')}>블랙툰 바로가기</Button></p>
          </p>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Agitoon} alt="agitoon"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          3. 아지툰 설명~~~~~~~~~~~~~~~~~
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          <p><Button main onClick={() => window.open('https://agit311.com/', '_blank')}>아지툰 바로가기</Button></p>
          </p>
          <img className="UpdateImage" src={Images.Updateimage} alt="updateimage"/>
          <hr></hr>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Bottomimage} alt="bootomimage"/>

          <p className="Toptext">웹툰 무료 미리보기 사이트 TOP 10 (2023년 최신)</p>
          <p className="Introtext">OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~ OUTTRO ~~~~~</p>
          <Item text={"\n\n\n"}/>
        </div>          
       
      );
    }
}

export default App;
