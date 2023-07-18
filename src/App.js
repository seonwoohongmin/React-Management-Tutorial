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
          <p className="Introtext">최근 만화/웹툰 시장은 기하급수적으로 커졌습니다.
            대형 플랫폼인 네이버, 다음, 카카오 등 웹툰을 제공하는 많은 플랫폼이 생겨났습니다.
            오래전부터 연재를 시작한 신의 탑, 노블레스 등 저 또한 웹툰을 즐겨보고 있습니다.
            웹툰은 보통 무료로 제공되지만 미리보기 등 유료웹툰 또한 존재합니다.
            또는 예전에 보았던 웹툰을 정주행 하려면 꽤 많은 결제가 필요합니다.
            이런 때를 위해 웹툰을 무료로 제공하는 사이트들을 소개해드리려 합니다.</p>
          <Item text={"\n\n"}/>
          <hr></hr>

          <Item text={"\n"}/>

          <img className="Image" src={Images.Bamdokkilogo} alt="bamdokkilogo"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          1. 최근 가장 많이 언급되는 사이트 중 하나입니다. 
          웹툰과 만화의 종류가 가장 방대해보이며 연재가 끝난 옛날 만화부터 업데이트가 빠르게 진행됩니다.
          또한 게시판이 존재하여 다른 사람들과 익명으로 소통 및 정보교환도 가능한 점이 독특합니다.
          사이트를 이용하시다 보면 작품의 잘림 현상이나 끊킴 또는 작품이 섞여 들어 보기힘든 경험을 해보셨을겁니다.
          이 사이트는 그런 점이 없어보여 작품을 즐기기에 번거로움이 없는 사이트 중 하나입니다.
          <p><Button main onClick={() => window.open('https://axe11.com/Toon', '_blank')}>밤도끼 바로가기</Button></p>
          </p>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Blocktoon} alt="blacktoon"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          2. 마찬가지로 인기사이트 중 하나입니다.
          분류가 잘 되어있는 느낌이 들어 작품을 고를때 가독력이 높아지는게 특징입니다.
          다만 작품 업데이트가 간혹 안되거나 몇일씩 몰아서 업데이트 되는 점이 단점이긴 합니다.
          접속속도도 빠르고 분류가 잘 되어있고 작품섬네일이 보기쉽다는 평이 많습니다.
          <p><Button main onClick={() => window.open('https://blacktoon247.com/', '_blank')}>블랙툰 바로가기</Button></p>
          </p>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Agitoon} alt="agitoon"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          3. 사이트 배경 자체가 흰색이라 전체적으로 밝은 느낌을 주는 사이트입니다.
          최근 웹소설 또한 업데이트를 하고 있어서 웹 소설을 즐기시는 분들이 이용하기에 좋아 보이는 사이트입니다.
          타 사이트와 마찬가지로 따로 회원가입을 하지 않아도 이용이 가능합니다.
          <p><Button main onClick={() => window.open('https://agit311.com/', '_blank')}>아지툰 바로가기</Button></p>
          </p>
          <img className="UpdateImage" src={Images.Updateimage} alt="updateimage"/>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Buzztoon} alt="buzztoon"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          4. 여러모로 기본적인 부분들이 탄탄하여 사용하기 용이하지만 잦은 접속 도메인 변경으로
          귀차니즘이 발생 할 수 있는 사이트 입니다.
          그외의 기능은 다른 사이트들 처럼 기본기에 충실한 느낌을 주는 사이트 입니다.
          <p><Button main onClick={() => window.open('https://buzztoon196.com/webtoon/weekly', '_blank')}>버즈툰 바로가기</Button></p>
          </p>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Newdokki} alt="newdokki"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          5. 웹툰 사이트 중 커뮤니티가 활발하게 활성화 된 사이트 입니다.
          커뮤니티를 즐기지 않는 분이시라면 큰 장점은 없지만, 커뮤니티 글 및 댓글을 보는 재미는 있어보입니다. 
          일본 만화를 가장 많이 업로드하며 북마크의 경우 로그인을 해야만 이용 할 수 있습니다.
          <p><Button main onClick={() => window.open('https://newtoki295.com/', '_blank')}>뉴토끼 바로가기</Button></p>
          </p>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Hodukomigseu} alt="hodukomigseu"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          6. 채팅창이 활성화 되어 있는 사이트 입니다.
          AI추천 이라는 기능도 있는데 웹툰 사이트 중에서는 흔하지 않는 특징을 가지고 있습니다.
          작품 요청 및 업데이트 요청 또한 채팅창에 올려달라고 하는 부분도 
          <p><Button main onClick={() => window.open('https://hodu317.net/webtoon_list/', '_blank')}>호두코믹스 바로가기</Button></p>
          </p>
          <img className="UpdateImage" src={Images.Updateimage} alt="updateimage"/>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Bamdokkilogo_2} alt="bamdokkilogo_2"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          7. 아마 웹툰 사이트가 조상격이 아닌가 싶습니다.
          사실 웹툰사이트들은 대다수가 비슷한 기능을 가지고 있습니다. 이 사이트는 가장 기본에 충실하도록
          요일별 분류, 업데이트 속도, 작품의 수 등 기본적인 부분들이 탄탄하게 되어있어 무난히 이용하기 좋은
          사이트 입니다.
          <p><Button main onClick={() => window.open('https://bam334co.com/toon', '_blank')}>밤토끼 시즌2 바로가기</Button></p>
          </p>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Copytoon} alt="copytoon"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          8. 네이버의 작품 분류법을 적용한 사이트 입니다.
          요일별로 세로로 나열한 부분이 눈에 띕니다.
          그외의 기능은 없고, 마찬가지로 기본에 충실한 사이트 입니다.
          <p><Button main onClick={() => window.open('https://copytoon655.com/', '_blank')}>카피툰 바로가기</Button></p>
          </p>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Funbe} alt="funbe"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          9. 툰코 라는 사이트와 많이 유사해 보이며 파생된 사이트로 보여지는 사이트 입니다.
          여러 사이트에서 작품을 가져오는 듯 한데 장점은 작품수가 방대하다는 점 입니다.
          다른사이트에 없는 작품을 찾을 때는 유용하지만 가독성과 몰입도를 해칠정도로 합성되어 있는 부분이 있습니다.
          <p><Button main onClick={() => window.open('https://funbe267.com/', '_blank')}>펀비 바로가기</Button></p>
          </p>
          <hr></hr>

          <Item text={"\n\n"}/>

          <img className="Image" src={Images.Tonnkor} alt="tonnkor"/>
          <Item text={"\n"}/>
          <p className="Descriptiontext">
          10. 북마크 기능이 존재하며, 일본 만화 및 성인콘텐츠도 조금 제공을 합니다.
          작품을 고르기 어려울때 세부화 된 장르별 분류가 용이해 보입니다.
          다만 작품의 깨짐현상 등 업로드가 고르지 못하다는 단점이 있습니다.
          <p><Button main onClick={() => window.open('https://toonkor270.com/', '_blank')}>툰코 바로가기</Button></p>
          </p>
          <Item text={"\n"}/>
          <hr></hr>

          <Item text={"\n\n\n"}/>

          <img className="Image" src={Images.Bottomimage} alt="bootomimage"/>

          <p className="Toptext">웹툰 무료 미리보기 사이트 TOP 10 (2023년 최신)</p>
          <p className="Introtext">앞서 소개한 무료 웹툰 사이트에서는 요일별 최신 웹툰 및 다양한 만화를 지원합니다.
          취향에 맞는 사이트에 접속하시어 원하시는 작품을 미리보거나 정주행을 하는 등 
          본인의 스타일대로 즐기실 수 있도록 여러 사이트를 소개해보았습니다.
          접속은 각 사이트마다 접속 링크를 걸어두었습니다.</p>
          <Item text={"\n\n\n"}/>
        </div>          
       
      );
    }
}

export default App;
