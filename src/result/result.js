import React from "react";
import {Link} from "react-router-dom";

function result({ie, sn, ft, pj}){
    if(ie >= 0){
        if(sn >= 0){
            if(ft >= 0){
                if(pj >= 0){
                    return (
                    <div>
                        <Link to="/result/ISFP" >결과 확인하기</Link>
                    </div>
                    );
                }
                else{
                    return (
                        <div>
                            <Link to="/result/ISFJ" >결과 확인하기</Link>
                        </div>
                    );
                }
            }
            else{
                if(pj >= 0){
                    return (
                        <div>
                            <Link to="/result/ISTP" >결과 확인하기</Link>
                        </div>
                    );
                }
                else{
                    return (
                        <div>
                            <Link to="/result/ISTJ" >결과 확인하기</Link>
                        </div>
                    );
                }
            }
        }
        else{
            if(ft >= 0){
                if(pj >= 0){
                    return (
                        <div>
                            <Link to="/result/INFP" >결과 확인하기</Link>
                        </div>
                    );
                }
                else{
                    return (
                        <div>
                            <Link to="/result/INFJ" >결과 확인하기</Link>
                        </div>
                    );
                }
            }
            else{
                if(pj >= 0){
                    return (
                        <div>
                            <Link to="/result/INTP" >결과 확인하기</Link>
                        </div>
                    );
                }
                else{
                    return (
                        <div>
                            <Link to="/result/INTJ" >결과 확인하기</Link>
                        </div>
                    );
                }
            }
        }
    }
    else{
        if(sn >= 0){
            if(ft >= 0){
                if(pj >= 0){
                    return (
                        <div>
                            <Link to="/result/ESFP" >결과 확인하기</Link>
                        </div>
                    );
                }
                else{
                    return (
                        <div>
                            <Link to="/result/ESFJ" >결과 확인하기</Link>
                        </div>
                    );
                }
            }
            else{
                if(pj >= 0){
                    return (
                        <div>
                            <Link to="/result/ESTP" >결과 확인하기</Link>
                        </div>
                    );
                }
                else{
                    return (
                        <div>
                            <Link to="/result/ESTJ" >결과 확인하기</Link>
                        </div>
                    );
                }
            }
        }
        else{
            if(ft >= 0){
                if(pj >= 0){
                    return (
                        <div>
                            <Link to="/result/ENFP" >결과 확인하기</Link>
                        </div>
                    );
                }
                else{
                    return (
                        <div>
                            <Link to="/result/ENFJ" >결과 확인하기</Link>
                        </div>
                    );
                }
            }
            else{
                if(pj >= 0){
                    return (
                        <div>
                            <Link to="/result/ENTP" >결과 확인하기</Link>
                        </div>
                    );
                }
                else{
                    return (
                        <div>
                            <Link to="/result/ENTJ" >결과 확인하기</Link>
                        </div>
                    );
                }
            }
        }
    }
}

export default result;