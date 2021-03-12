import React from "react";
import {BrowserRouter, Route} from  "react-router-dom";
import Home from "./routes/home";

import ISFP from "./routes/MBTI/ISFP";
import ISFJ from "./routes/MBTI/ISFJ";
import ISTP from "./routes/MBTI/ISTP";
import ISTJ from "./routes/MBTI/ISTJ";

import INFP from "./routes/MBTI/INFP";
import INFJ from "./routes/MBTI/INFJ";
import INTP from "./routes/MBTI/INTP";
import INTJ from "./routes/MBTI/INTJ";

import ESFP from "./routes/MBTI/ESFP";
import ESFJ from "./routes/MBTI/ESFJ";
import ESTP from "./routes/MBTI/ESTP";
import ESTJ from "./routes/MBTI/ESTJ";

import ENFP from "./routes/MBTI/ENFP";
import ENFJ from "./routes/MBTI/ENFJ";
import ENTP from "./routes/MBTI/ENTP";
import ENTJ from "./routes/MBTI/ENTJ";


function App() {
  return (
    <BrowserRouter>
    <Route path="/mbti_stock" exact = {true} component = {Home}/>
    <Route path="/mbti_stock/result/ISFP" component = {ISFP}/>
    <Route path="/mbti_stock/result/ISFJ" component = {ISFJ}/>
    <Route path="/mbti_stock/result/ISTP" component = {ISTP}/>
    <Route path="/mbti_stock/result/ISTJ" component = {ISTJ}/>

    <Route path="/mbti_stock/result/INFP" component = {INFP}/>
    <Route path="/mbti_stock/result/INFJ" component = {INFJ}/>
    <Route path="/mbti_stock/result/INTP" component = {INTP}/>
    <Route path="/mbti_stock/result/INTJ" component = {INTJ}/>

    <Route path="/mbti_stock/result/ESFP" component = {ESFP}/>
    <Route path="/mbti_stock/result/ESFJ" component = {ESFJ}/>
    <Route path="/mbti_stock/result/ESTP" component = {ESTP}/>
    <Route path="/mbti_stock/result/ESTJ" component = {ESTJ}/>

    <Route path="/mbti_stock/result/ENFP" component = {ENFP}/>
    <Route path="/mbti_stock/result/ENFJ" component = {ENFJ}/>
    <Route path="/mbti_stock/result/ENTP" component = {ENTP}/>
    <Route path="/mbti_stock/result/ENTJ" component = {ENTJ}/>
    </BrowserRouter>
  )
}

export default App;
