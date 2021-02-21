import React from "react";
import {Link} from "react-router-dom";
import {QuestionDB} from "./questiondb";
import Result from "../result/result";
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
        button2 : 0
    };
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
                    <a onClick={this.addLink}>
                        <img className="main-img" src="https://images.ktestone.com/introImages/personalColor-intro.png"/> 
                    </a>
                </div>
            )
        }
        else if(this.state.link < 13){
            this.state.array = QuestionDB[this.state.link];
            return (
            <div>
                <div>{this.state.array.question}</div>
                <div onClick = {this.addLink}>
                    <button onClick = {this.addButton1}>{this.state.array.answer1}</button>
                </div>
                <div onClick = {this.addLink}>
                    <button onClick = {this.addButton2}>{this.state.array.answer2}</button>
                </div>
    
                <div className="question-count">
                    <h3>{this.state.array.id}  / 12</h3>
                </div>
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
                    />
                </div>
            );
        }
    }
}
export default App;