import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// reactstrap components
import { Card, Container, Row } from "reactstrap";
import './Home.css'; 
// core components
import EmptyHeader from "components/Headers/EmptyHeader.js";
// import { getEmploy } from "redux/actiotn/employeAction";
import axios from 'axios';
// const Home = () => {
//   return (
//     <>
//     <h1>נא הקישי מספר זהות:</h1>
//       <EmptyHeader />
//       {/* Home content */}
//       <input type="text" placeholder="מספר זהות" ></input>
       
//     </>
//   );
// };

// export default Home;
const Temp = ()=>{
  axios.get('http://localhost:58505/api/Emp')

  return(<div>
  <href href="http://localhost:58505/api/Emp">uuu</href>
  
  </div> )
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   console.log("i in useEffect")
  //   dispatch(getEmploy())
  // },[])
  // const employe=useSelector(({employeReducer})=>employeReducer)
  // return employe?(
  // <div>{employe} tt</div>
  // ):<h1>error yy</h1>
}
    // constructor(props) {
    //   super(props);
    //   this.state = { userid: '' };
    // }
    // myChangeHandler = (event) => {
    //   this.setState({userid: event.target.value});
    // }
    // render() {
    //   return (
    //     <form className="home">
            
    //         <EmptyHeader/><br></br>
    //    {/* Home content */}
    //    <p className="p"></p>
    //     <h1 className="home">  {this.state.userid}: מספר זהות </h1>
    //     <button className="a" >OK</button>
    //     {/* <button className="button" style={{backgroundColor: "#FFD700"}}>אישור</button> */}
    //     <input
    //       type='text'
    //       placeholder="       הקישי מספר זהות"
    //       onChange={this.myChangeHandler}
    //     />
        
    //     </form>
    //   );
  //   }
  // }
  
//   ReactDOM.render(<Home />, document.getElementById('root'));
   export default Temp;