import {useState} from 'react'
// useState : react에서 기본적으로 제공하는 기능(Hooks)
// ---> 상태값을 만들수 있는 기능제공!
// 상태값 : 화면이 보인후에도 값이 바뀌면 화면도 바뀔 수 있는 값

function Ex02(){

    const [result2, setResult2] = useState("일단 야근");//useState("초기값")
    //result2 --> 상태값을 나타낼 수 있는 값
    //setResult2 --> 상태값을 바꿀수 있는 함수!
    //비구조 할당 방법!!

    let result ="야근"

    function chResult(){
        result = "칼퇴!!"
        console.log("1 : "+result)

        setResult2("칼퇴") //마지막 순서로 실행 되어짐 
        console.log("2 : "+result2)
    }
    return(
        <>
            <h1>두번째 컴포 useState</h1>
            <h1>오늘은 {result}</h1>
            <h1>오늘은 {result2}</h1>
            <button onClick={chResult}>바꾸기</button> <br></br><hr></hr>
        </>
    )
}
export default Ex02;