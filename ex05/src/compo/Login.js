import {useState } from 'react';
import {useSearchParams, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';


function Login() {

    const joinId = useSelector((state) => state.id)
    const joinPw = useSelector((state) => state.pw)
    
    const nav = useNavigate();

    
    const [inputId, setInputId] = useState();
    const [inputPw, setInputPw] = useState();

    const [params, setParams] = useSearchParams();
    const id = params.get("id");
    const pw = params.get("pw");
    const nick = params.get("nick");
    
    
    // const [id, setId] = useState('');
    // const [pw, setPw] = useState('');
    // const [nick, setNick] = useState('');


    const [result, setResult] = useState('로그인 실패')


    // function getId(e){
    //     setId(e.target.value);
    // }
    // function getPw(e){
    //     setPw(e.target.value);
    // } 

    // function chResult(){
    //     if(id == 'aaa' && pw =='aaa'){
    //         setResult({nick}+"님 환영합니다")
    //     }
    //     else{
    //         setResult("다시 입력해 주세요")
    //     }
    // }
    function tryLogin(){
         if(id == inputId && pw == inputPw){
             nav('/Logins?nick='+nick)
             setResult({nick}+"님 환영합니다")
         }else{
             <h1>로그인 실패</h1>
             console.log('실패');
             setResult("다시 입력해 주세요")
         }
     }

    
    function tryJoin(){
        nav("/Login?id="+id+"&pw="+pw+"&ncik="+nick)
    }
    console.log(tryJoin);
    return(
        <>
            <h1>Login페이지</h1>
            {/* ID : <input placeholder="Test" onChange={(e)=>getId(e.target.value)}></input>
            <br></br>
            PW : <input placeholder="123" onChange={(e)=>getPw(e.target.value)}></input>
            <br></br> */}
            <form action={'/Home?nick='+ nick} >
            ID : <input placeholder="Test" onChange={(e)=>{setInputId(e.target.value)}}></input>
            <br></br>
            PW : <input placeholder="123" onChange={(e)=>{setInputPw(e.target.value)}}></input>
            <br></br>
            <button onClick={tryLogin}>로그인 시도</button>
            <h1>{result}</h1>
            </form>
        </>
    )
}
export default Login;