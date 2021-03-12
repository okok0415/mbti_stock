import React from "react";
import {ResultDB} from "../../component/ResultDB";
import NAVER from "../../component/NAVER.png";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Link} from "react-router-dom";

class ENTJ extends React.Component{
    state = {
        value : 0,
        array : {}
    }
    copythat = () => {
        alert("성공적으로 복사되었어요!");
    }
    render(){
        const{location} = this.props;
        for(let i = 0;i< ResultDB.length;i++){
            if("ENTJ" === ResultDB[i].id){
                this.state.value = i;
                break;
            } 
        }
        return (
            <div>
            <div className = "adfit"> </div>
            <div className = "result_explain">
                <div className ="result_subtitle">
                    {ResultDB[this.state.value].subtitle}<div> </div>
                </div>
                <div className = "result_title">
                    {ResultDB[this.state.value].stock}
                </div>
                <div className = "result_img">
                    <img src = {NAVER} height = '150' weight = '200'/>
                </div>
                <div className = "result_personal">
                    <ul className = "result_personal_font">
                        <li className = "result_personal_line">
                            {ResultDB[this.state.value].personal1}
                        </li>
                        <li className = "result_personal_line">
                            {ResultDB[this.state.value].personal2}
                        </li>
                        <li className = "result_personal_line">
                            {ResultDB[this.state.value].personal3}
                        </li>
                        <li className = "result_personal_line">
                            {ResultDB[this.state.value].personal4}
                        </li>
                        <li className = "result_personal_line">
                            {ResultDB[this.state.value].personal5}
                        </li>
                    </ul>
                </div>
                <div className = "result_best">
                    <div className = "result_best_title">
                        <div className = "result_font">같이 떡상할 종목</div>
                        <ul className = "result_padding">
                            <li className = "result_padding_bottom">{ResultDB[this.state.value].good1}</li>
                            <li className = "result_padding_bottom">{ResultDB[this.state.value].good2}</li>
                            <li className = "result_padding_bottom">{ResultDB[this.state.value].good3}</li>
                        </ul>
                    </div>
                </div>
                <div className = "result_worst">
                    <div className = "result_worst_title">
                    <div className = "result_font">같이 떡락할 종목</div>
                    <ul className = "result_padding">
                        <li className = "result_padding_bottom">{ResultDB[this.state.value].bad1}</li>
                        <li className = "result_padding_bottom">{ResultDB[this.state.value].bad2}</li>
                        <li className = "result_padding_bottom">{ResultDB[this.state.value].bad3}</li>
                    </ul>
                    </div>
                </div>
            </div>
            <CopyToClipboard text = {`https://okok0415.github.io/mbti_stock/result/ENTJ`}>
            <div className = "link_copy" onClick={this.copythat}>
                링크복사
            </div>
            </CopyToClipboard>
            <Link to ="/mbti_stock">
                <div className = "restart">
                    다시 하기
                </div>
            </Link>
            <div className = "adfit"> </div>
            </div>
        )
    } 
}

export default ENTJ;