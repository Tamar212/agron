import React from "react";
import { Card, Container, Row } from "reactstrap";
import './Home.css'; 
import EmptyHeader from "components/Headers/EmptyHeader.js";
import {useSelector,useDispatch} from "react-redux"
import actions from "../redux/action"

// export default Home;
function Home() {
    // constructor(props) {
    //   super(props);
    //   this.state = { userid: '' };
    // }
    const myChangeHandler = (event) => {
      this.setState({userid: event.target.value});
    }
   
    // render() {
       const dispatch = useDispatch();
       const data = useSelector(state => this.state.employee)
      return (
        <>
        <form className="home" onSubmit={()=>dispatch(actions.loginEmp(this.state.userid))} >
            
            <EmptyHeader/><br></br>
       {/* Home content */}
       <p className="p"></p>
        <h1 className="home">  {this.state.userid}: מספר זהות </h1>
       
        <button type="submit" className="button" style={{backgroundColor: "#FFD700"}}>אישור</button>
        <input
          type='text'
          placeholder="       הקישי מספר זהות"
          onChange={this.myChangeHandler}
        />
        
        </form>
        <button onClick={()=> dispatch(actions.getEmpId())}></button>
        </>
      );
    //}
  }
  
//   ReactDOM.render(<Home />, document.getElementById('root'));
   export default Home;