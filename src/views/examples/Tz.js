import React from "react";
import { Card, Container, Row } from "reactstrap";
import './Home.css'; 
import EmptyHeader from "components/Headers/EmptyHeader.js";

class Tz extends React.Component {
    constructor(props) {
      super(props);
      this.state = { userid: '' };
    }
    myChangeHandler = (event) => {
      this.setState({userid: event.target.value});
    }
    render() {
      return (
        <form className="home">   
            <EmptyHeader/><br></br>
       {/* Home content */}
       <p className="p"></p>
        
        <h1 className="home">  {this.state.userid}: מספר זהות </h1>
<button style={{backgroundColor: "red"}} onClick={() => checking(this.state.userid)}>
       Click me!
       </button>
       <br></br>
       <p>yyyyyyyyyyyyyyyy</p>
        {/* <button className="button" style={{backgroundColor: "#FFD700"}}>אישור</button> */}
        {/* <button id="Check" onClick={ //Check if message failed
        (this.state.userid === 0)
          ? <div>  You are not registered in the system  </div> 
          : <div>  hello  </div>
      }>אישור</button> */}
       
     <br></br>
      

      
  
        
        {/* <div className="CheckID">
      { //Check if message failed
        (this.state.userid === 0)
          ? <div>  You are not registered in the system  </div> 
          : <div>  hello  </div>
      }
    </div> */}
        
        
        <input
          type='text'
          placeholder="       הקישי מספר זהות"
          onChange={this.myChangeHandler}
        />
        
        </form>
      );
    }
    
  }
  function checking(number) {
      if(number==0){
          console.log("false");
          return false;
      }
      console.log("true");
    return <div>hello</div>;
  }
//   const mapDispatchToProps = dispatch => {
//     return {
       
//         Check: (tz) => dispatch(Check_tz(tz))     
//     }
//   }
//   const  Check_tz = props =>{
//     useEffect(() => {
//         console.log(props)
//     if( props.songs.length===0){
//         console.log()
//         props.songs = props.getAll();
//     }
// },[])
    
//    return ( <div>{props.songs.map((x) => <Song song={x} />)}</div>)
// }
  
//   ReactDOM.render(<Home />, document.getElementById('root'));
   export default Tz;


// import { connect } from 'react-redux';
// import Song from './Song';
// import { GET } from './reducers/action'
// import { useEffect } from 'react';

// const ShowSongs = props =>{
//     useEffect(() => {
//         console.log(props)
//     if( props.songs.length===0){
//         console.log()
//         props.songs = props.getAll();
//     }
// },[])
    
//    return ( <div>{props.songs.map((x) => <Song song={x} />)}</div>)
// }

// const mapDispatcToProps = dispatch => {
//     return {
//         getAll: ()=>dispatch(GET())
//     }
// }

// const mapStateToProps = state => {
//     return {
//         songs: state.songs
//     }
// }
// export default connect(mapStateToProps,mapDispatcToProps)(ShowSongs)