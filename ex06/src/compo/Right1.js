import Right2 from "./Right2";
import{useDispatch} from 'react-redux';

function Right1(){
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Right1</h1>
            <Right2 onClick={()=>dispatch({type:'name'})}></Right2>
        </div>
    )
}

export default Right1;