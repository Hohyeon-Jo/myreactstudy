import {useState} from 'react'


function Ex02(){

    const [todoArray, setTodoArray] = useState([])
    const [inputData,setInputData] = useState("");
    function getText(e){
        setInputData(e.target.value);
    }
    function setTodo(){
        //todoArray에 inputData 추가 !
        //리액트에서 배열에 값을 추가할때는! -> push가 아니라 concat을 사용한다!

        //불변성 유지 : 상태값을 업데이트 할때는 기존 상태를 그대로 두면서
        //새로운 값으로 상태를 업데이트 해줘야함!!
        setTodoArray(todoArray.concat(inputData))
    }
    function deleteData(e){
        //e.target.value
        setTodoArray(todoArray.filter(function(data, index){
            return index != e.target.value;
        }));
    }


    return(
        <>
            <h1>TodoList</h1><br></br>
            <input onChange={getText}></input>
            <button onClick={setTodo}>추가</button>
            {todoArray.map(function(data, index){
                return <div>
                            <h1>{data}</h1>
                            <button value={index} onClick={deleteData}>삭제</button>
                       </div>
            })}
        </>
    )
}
export default Ex02;