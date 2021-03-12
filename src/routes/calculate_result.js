import React from "react";
import {Link} from "react-router-dom";
import "../css/result.css";
function calculate_result({ie, sn, ft, pj, mbti}){
    if(ie >= 0){
        if(sn >= 0){
            if(ft >= 0){
                if(pj >= 0){
                    mbti = "ISFP"
                }
                else{
                    mbti = "ISFJ";
                }
            }
            else{
                if(pj >= 0){
                    mbti = "ISTP";
                }
                else{
                   mbti = "ISTJ";
                }
            }
        }
        else{
            if(ft >= 0){
                if(pj >= 0){
                   mbti = "INFP";
                }
                else{
                   mbti = "INFJ";
                }
            }
            else{
                if(pj >= 0){
                   mbti = "INTP";
                }
                else{
                   mbti = "INTJ";
                }
            }
        }
    }
    else{
        if(sn >= 0){
            if(ft >= 0){
                if(pj >= 0){
                    mbti = "ESFP";
                }
                else{
                    mbti = "ESFJ";
                }
            }
            else{
                if(pj >= 0){
                    mbti = "ESTP";
                }
                else{
                    mbti = "ESTJ";
                }
            }
        }
        else{
            if(ft >= 0){
                if(pj >= 0){
                    mbti = "ENFP";
                }
                else{
                    mbti = "ENFJ";
                }
            }
            else{
                if(pj >= 0){
                    mbti = "ENTP";
                }
                else{
                    mbti = "ENTJ";
                }
            }
        }
    }

    return (
        <div>
            <div className = "adfit"> </div>
            <div className="question">
                결과는...
            </div>
            <Link to={{ 
                pathname : `/mbti_stock/result/${mbti}`
            }}>
                <button className="button option-rbtn">
                    결과 확인하기
                </button>
            </Link>
            <div className = "adfit"> </div>
        </div>
        );
}

export default calculate_result;