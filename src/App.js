import logo from './logo.svg';
import './App.css';
/*
      index.js  App호출
                <App /> => App()  ==> jsx => javascript + xml
      function com() { } => <com/>

      문법
      1) XML 형식
         = 함수명 / 클래스명 => 첫자는 무조건 대문자
         = 화면을 출력 => HTML (태그명은 무조건 소문자)
         = HTML을 제작시에는 무조건 루트가 존재해야 한다
         = 트리형태
         <div> --------- 전체를 감싸는 루트태그가 존재해야 함, 없을시 오류
           <div>
             <h1></h1>
           </div>
           <div>
             <h3></h3>
           </div>
         </div> --------
         = 속성명은 반드시 ""
         = CSS => <a className="">
         = <div style={{"height:20px"}}>
         = <img src=""> => <img :src="">(vue), <img th:src="">, <img src="${}">
           <img src={}>
         = 여는 태그와 닫는 태그가 동일
           <div>
             <img src={}> ==> 오류
             <img src={} /> ==> 정상
           </div>

         index.js <App /> => return값 ==> index.html => <div id="root"></div>

         react : MVC   - View역할

         = props (고정값)
         = state (변경값)
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
