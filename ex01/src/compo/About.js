import {Link, useSearchParams} from 'react-router-dom'


function About(){

    const [paramsId, setParamsId] = useSearchParams();
    //쿼리스트링으로 넘긴 데이터는 paramId에 저장 되어있다!
    const id = paramsId.get("id");

    const [paramsNick, setParamsNick] = useSearchParams();
    
    const Nick = paramsNick.get("Nick");



    return(
        <>
            <h1>{id} 페이지 입니다</h1>
            <h1>별명은 {} 입니다</h1>
            <Link to="/">메인페이지로 이동</Link>
        </>
    )
}

export default About;