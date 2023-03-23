import {Component,Fragment} from "react";
import axios from "axios";
import App3 from "./App3";

class App4 extends Component{
    constructor(props) {
        super(props);
        // 멤버변수 설정 => state
        // 이벤트 등록
        this.state={
            category:[],
            cno:1
        }
    }
    buttonClick(cno)
    {
        axios.get("http://localhost/food/category_react",{
            params:{
                cno:cno
            }
        }).then(response=>{
            console.log(response.data)
            this.setState({category:response.data})
            // setState => render 재호출 (데이터 변경)
        })
    }
    componentDidMount() {
       // let _this=this
        axios.get("http://localhost/food/category_react",{
            params:{
                cno:this.state.cno
            }
        }).then(response=>{
            console.log(response.data)
            this.setState({category:response.data})
            // setState => render 재호출 (데이터 변경)
        })
    }

    render() {
        const html=this.state.category.map(cate=>
            <div className="col-md-4">
                <div className="thumbnail">
                        <img src={cate.poster} alt="Lights" style={{"width":"100%"}} />
                            <div className="caption">
                                <p>{cate.title}</p>
                            </div>
                </div>
            </div>
        )
        return (
            <Fragment>
                <div className={"row"}>
                    <div className={"text-center"}>
                        <input type={"button"} value={"믿고보는 맛집 리스트"}
                               className={"btn btn-lg btn-success"} style={{"marginLeft":"5px"}}
                               onClick={this.buttonClick.bind(this,1)}
                        />
                        <input type={"button"} value={"지역별 맛집 리스트"}
                               className={"btn btn-lg btn-info"} style={{"marginLeft":"5px"}}
                               onClick={this.buttonClick.bind(this,2)}
                        />
                        <input type={"button"} value={"메뉴별 인기 맛집 리스트"}
                               className={"btn btn-lg btn-warning"} style={{"marginLeft":"5px"}}
                               onClick={this.buttonClick.bind(this,3)}
                        />
                    </div>
                </div>
                <div style={{"height":"20px"}}></div>
                <div className={"row"}>
                    {html}
                </div>
            </Fragment>
        );
    }
}

export default App4;