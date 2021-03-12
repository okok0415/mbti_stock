import React from "react";
import {QuestionDB} from "../component/QuestionDB";
import Result from "./calculate_result";
import "../css/home.css";
import calculate_result from "./calculate_result";
// ISFP



class App extends React.Component{
    state = {
        link : 0,
        count: 1,
        ie: 0,
        sn: 0,
        ft: 0,
        pj: 0,
        array : {},
        button1 : 0,
        button2 : 0,
        mbti: "",
    }
    addCount = () =>{
        if(this.state.count < 12){
            this.setState(current => ({ count : current.count + 1 }));
        }
    };
    addLink = () =>{
        this.setState(current =>({ link: current.link + 1}));
    };
    addButton1 = () =>{
        this.setState(current =>({ button1: current.button1 + 1}));
    }
    addButton2 = () =>{
        this.setState(current =>({ button2: current.button2 + 1}));
    }
    calculated(){
        if(this.state.array.mbti1 === "I" && this.state.array.mbti2 === "E"){
            if (this.state.button1 === 1){
                this.state.ie += 1;
            }
            else if(this.state.button2 === 1){
                this.state.ie -= 1;
            }
        }
        else if(this.state.array.mbti1 === "E" && this.state.array.mbti2 === "I"){
            if (this.state.button1 === 1){
                this.state.ie -= 1;
            }
            else if(this.state.button2 === 1){
                this.state.ie += 1;
            }
        }
        else if(this.state.array.mbti1 === "S" && this.state.array.mbti2 === "N"){
            if (this.state.button1 === 1){
                this.state.sn += 1;
            }
            else if(this.state.button2 === 1){
                this.state.sn -= 1;
            }
        }
        else if(this.state.array.mbti1 === "N" && this.state.array.mbti2 === "S"){
            if (this.state.button1 === 1){
                this.state.sn -= 1;
            }
            else if(this.state.button2 === 1){
                this.state.sn += 1;
            }
        }
        else if(this.state.array.mbti1 === "F" && this.state.array.mbti2 === "T"){
            if (this.state.button1 === 1){
                this.state.ft += 1;
            }
            else if(this.state.button2 === 1){
                this.state.ft -= 1;
            }
        }
        else if(this.state.array.mbti1 === "T" && this.state.array.mbti2 === "F"){
            if (this.state.button1 === 1){
                this.state.ft -= 1;
            }
            else if(this.state.button2 === 1){
                this.state.ft += 1;
            }
        }
        else if(this.state.array.mbti1 === "P" && this.state.array.mbti2 === "J"){
            if (this.state.button1 === 1){
                this.state.pj += 1;
            }
            else if(this.state.button2 === 1){
                this.state.pj -= 1;
            }
        }
        else if(this.state.array.mbti1 === "J" && this.state.array.mbti2 === "P"){
            if (this.state.button1 === 1){
                this.state.pj -= 1;
            }
            else if(this.state.button2 === 1){
                this.state.pj += 1;
            }
        }
        this.state.button1 = 0;
        this.state.button2 = 0;
    };
    render(){
        this.calculated();
        if(this.state.link === 0){
            return (
                <div>
                    <div className = "main">
                        <div className = "main_title">
                            퍼스널 주식 테스트
                        </div>
                        <div className = "main_subtitle">
                            주식 종목으로 알아보는 나의 성향 테스트
                        </div>
                        <div className = "start_button" onClick = {this.addLink}>시작하기</div>
                    </div>
                    <div>
                        <a >
                           현재까지 총<img src="https://www.cutercounter.com/hits.php?id=hxkndao&nd=6&style=3" height = "16" border="0" alt="website counter"/>명이 참여했어요.
                        </a>
                    </div>
                    <div className = "adfit"> </div>
                </div>
            )
        }
        else if(this.state.link < 13){
            this.state.array = QuestionDB[this.state.link];
            return (
            <div>
                <div className = "adfit"> </div>
                <div className = "question">
                    <div className = "num">
                        Q{this.state.array.id}
                    </div>
                    <div className = "question-txt">
                    {this.state.array.question}
                    </div>
                </div>
                <div>
                <span onClick = {this.addLink}>
                    <button className = "button option-btn" onClick = {this.addButton1}>{this.state.array.answer1}</button>
                </span>
                </div>
                <div>
                <span onClick = {this.addLink}>
                    <button className = "button option-btn" onClick = {this.addButton2}>{this.state.array.answer2}</button>
                </span>
                </div>
                <div className = "adfit"> </div>

            </div>

            );
        }
        else {
            return (
                <div>
                    <Result
                        ie = {this.state.ie}
                        sn = {this.state.sn}
                        ft = {this.state.ft}
                        pj = {this.state.pj}
                        mbti = {this.state.mbti}
                    />
                </div>
            );
        }
    }
}
export default App;