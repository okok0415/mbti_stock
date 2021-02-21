import React from "react";
import {BrowserRouter, Route} from  "react-router-dom";
import Home from "./routes/home";

import ISFP from "./result/ISFP";
import ISFJ from "./result/ISFJ";
import ISTP from "./result/ISTP";
import ISTJ from "./result/ISTJ";

import INFP from "./result/INFP";
import INFJ from "./result/INFJ";
import INTP from "./result/INTP";
import INTJ from "./result/INTJ";

import ESFP from "./result/ESFP";
import ESFJ from "./result/ESFJ";
import ESTP from "./result/ESTP";
import ESTJ from "./result/ESTJ";

import ENFP from "./result/ENFP";
import ENFJ from "./result/ENFJ";
import ENTP from "./result/ENTP";
import ENTJ from "./result/ENTJ";

function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact = {true} component = {Home}/>

    <Route path="/result/ISFP" component = {ISFP}/>
    <Route path="/result/ISFJ" component = {ISFJ}/>
    <Route path="/result/ISTP" component = {ISTP}/>
    <Route path="/result/ISTJ" component = {ISTJ}/>

    <Route path="/result/INFP" component = {INFP}/>
    <Route path="/result/INFJ" component = {INFJ}/>
    <Route path="/result/INTP" component = {INTP}/>
    <Route path="/result/INTJ" component = {INTJ}/>

    <Route path="/result/ESFP" component = {ESFP}/>
    <Route path="/result/ESFJ" component = {ESFJ}/>
    <Route path="/result/ESTP" component = {ESTP}/>
    <Route path="/result/ESTJ" component = {ESTJ}/>

    <Route path="/result/ENFP" component = {ENFP}/>
    <Route path="/result/ENFJ" component = {ENFJ}/>
    <Route path="/result/ENTP" component = {ENTP}/>
    <Route path="/result/ENTJ" component = {ENTJ}/>
    
    </BrowserRouter>
  )
}

export default App;
