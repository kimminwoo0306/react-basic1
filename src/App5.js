import {Component,Fragment} from "react";
import axios from "axios";
import App4 from "./App4";

class App5 extends Component {
    constructor(props) {
        super(props);
        // 멤버변수 설정 => state
        // 이벤트 등록
        this.state = {
            category: [],
            fno: 1
        }
    }

    componentDidMount() {
        // let _this=this
        axios.get("http://localhost/food/location_react", {
            params: {
                fno: this.state.fno
            }
        }).then(response => {
            console.log(response.data)
            this.setState({category: response.data})
            // setState => render 재호출 (데이터 변경)
        })
    }
    render() {
        const html=this.state.category.map(cate=>
            <div className="col-md-4">
                <div className="thumbnail">
                    <img src={cate.poster} alt="Lights" style={{"width":"100%"}} />
                    <div className="caption">
                        <p>{cate.name}</p>
                    </div>
                </div>
            </div>
        )
        return (
            <Fragment>
                <div className={"row"}>

                </div>
                <div style={{"height":"20px"}}></div>
                <div className={"row"}>
                    {html}
                </div>
            </Fragment>
        );
    }
}

export default App5;