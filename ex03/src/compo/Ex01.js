import {useEffect, useState} from 'react';

function Ex01(){
    const [data, setData] = useState(0);
    const [data1, setData1] = useState(0);
    //useEffect : 렌더링 되자마자 이거부터 실행해 주세요!
    useEffect(
        function(){
        console.log("test")
    },[data]) // [data] -->data라는 상태값이 바뀌었을때만 실행시켜주세요

    function add() {
        setData(data+1);
    }
    function minus(){
        setData(data-1);
    }
    function add1() {
        setData1(data1+1);
    }
    function minus1(){
        setData1(data1-1);
    }


    return(
        <>
            <h1>useEffect 첫번째</h1>
            <button onClick={add}>+</button>
            <button>{data}</button>
            <button onClick={minus}>-</button>
            <br></br>
            <button onClick={add1}>+</button>
            <button>{data1}</button>
            <button onClick={minus1}>-</button>
        </>
    )
}

export default Ex01;