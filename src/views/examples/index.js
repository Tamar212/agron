
import React, { useState } from "react";
import EmptyHeader from "../../components/Headers/EmptyHeader";
import {useSelector,useDispatch} from "react-redux"
import actions from "../redux/action"

function Home1({dispatch}){
    const [userId,setId] = useState(0)
    return <>
        <form className="home" onSubmit={()=>dispatch(actions.loginEmp(this.state.userid))} >
            
            <br></br>
       {/* Home content */}
       <p className="p"></p>
        <h1 className="home">  {userId}: מספר זהות </h1>
       
        <button type="submit" className="button" style={{backgroundColor: "#FFD700"}}>אישור</button>
        <input
          type='text'
          placeholder="       הקישי מספר זהות"
          onChange={(event)=>setId(event.target.value)}
        />
        
        </form>
        <button onClick={()=> dispatch(actions.getEmpId())}></button>

    </>
}

export default Home1;