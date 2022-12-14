import {Link, useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'
function Ex04(){

    const nav = useNavigate();

     const [inputId, setInputId] = useState('');
     const [inputPw, setInputPw] = useState('');
     const [inputNick, setInputNick] = useState('');


     const [result, setResult] = useState('로그인 실패')
     
    function getId(e){
        setInputId(e.target.value);
    }
    function getPw(e){
        setInputPw(e.target.value);
    }
    // function chResult(){
    //     if(inputId == 'smhrd' && inputPw =='123'){
    //         setResult("smhrd님 환영합니다")
            
    //     }
    //    else{
    //     setResult("다시 입력해주세요")
    //    }
    // }
    useEffect(function(){
        if(inputId == 'smhrd' && inputPw =='123'){
            setResult("smhrd님 환영합니다")
            nav("/about?id=smhrd&noci="+inputNick);
            
        }
       else{
            setResult("다시 입력해주세요")
       }
    },[inputNick])
    return(
        <>
            ID : <input onChange={getId}></input>
            <br></br>
            PW : <input onChange={getPw}></input>
            <br></br>
            Nick : <input onChange={(e)=>setInputNick(e.target.value)}></input>{/* 닉네임 input */}
            {/* <button onClick={chResult}>로그인</button> */}
            <h1>{result}</h1>
            <Link to="/">메인 페이지로 이동</Link>
        </>
    )
}
export default Ex04;