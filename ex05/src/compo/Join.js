import {useState, useRef} from 'react'

import {useNavigate} from 'react-router-dom'

//useRef : 컴포넌트 안에 특정DOM(요소) 선택할 수 있게끔 도와주는 기능이다 !!

import {useSelector} from 'react-redux';

function Join(){
    const test = useSelector((state) => state.id);
    // const [inputs, setInputs] = useState({
    //     id: "",
    //     pw: "",
    //     nick: "",
    //   });

    // const { id, pw, nick } = inputs;
    // const onChange = (e) => {
    //   const { id, value } = e.target;
     
    //   setInputs({
    //     ...inputs,
    //     [id]: value,
    //   });
    // };
     
    
    // const onReset = () => {
    //     setInputs({
    //         id: "",
    //         pw: "",
    //         nick: ""
    //     });
    // }

    const useId = useRef();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [nick, setNick] = useState('');

    function reset(){
        setId('');
        setPw('');
        setNick('');
        //ref.current -> ref가 적용된 태그를 의미!
        useId.current.focus();
    }
    // const nav = useNavigate();
    // function tryJoin(){
    //     nav("/Login?id="+id+"&pw="+pw+"&nick="+nick);
    // }

    //form : 주소값으로 이동하면서 form 태그 안에 있는 내용도 같이 전달
 
    return(
        <>

            <h1>회원가입페이지 입니다{test}</h1>
            <form action='/Login'>
            ID : <input placeholder="Test" name="id" onChange={(e)=>setId(e.target.value)} value={id} ref={useId}></input>
            <br></br>
            PW : <input placeholder="123" name="pw" onChange={(e)=>setPw(e.target.value)} value={pw}></input>
            <br></br>
            NICK : <input placeholder="점심짜장면저녁냉면" name="nick" onChange={(e)=>setNick(e.target.value)} value={nick}></input>
            <br></br>
            <button>Join</button>
            <button onClick={reset} type="button">초기화</button>
            
            </form>

        </>
           
    );
}
export default Join;