import {Component,Fragment} from "react";
// Class형태, Function형식 (state=> Hooks)
class App1 extends Component{
    constructor(props) {
        super(props); // 생성자
        /*
             1. 변수 선언
             2. 이벤트 등록
         */
    }
    componentDidMount() {
        //mounted:function() => axios
    }
    // <App1 /> =render() => return값을 받는다 => root.innerHTML
    render() {
        // 화면 UI => html작성
        return (
            <Fragment>
                <div>
                    <h1 style={{"color":"red"}}>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                    <h1>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                    <h1>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                    <h1>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                    <h1>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                    <h1>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                </div>
                <div>
                    <h1>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                    <h1>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                    <h1>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                    <h1>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                    <h1>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                    <h1>Hello React!!</h1>
                    <h3>Hello React!!</h3>
                </div>
            </Fragment>
        )
    }
}

export default App1;