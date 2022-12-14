import {useState} from 'react'

function Ex03(){

    const [inputData, setInputData] = useState("");
    let data = "";
    function getData(e){
        console.log(e.target.value);
        data = e.target.value;
    }

    function chData(){
        setInputData(data)
    }

    return(
        <>
            <input onChange={getData}></input>
            <button onClick={chData
            }>상태값 바꾸기</button>
            <h1>{inputData}</h1>


        </>
    )
}
export default Ex03;