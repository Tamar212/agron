
import store from '../store'

export const crud = store => next => action =>{
if(action.type = "LOGIN_EMP"){

 return  next(action)
}
if(action.type = "GET_EMP_ID"){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            Accept: "application/json",
            'content-type': 'application/json',
          },
      };
      
      fetch("localhost:58505/api/GetId", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            action.payload = result                   }
            )
        .catch(error => console.log('error', error));
    return next(action)
   }

    if(action.type = "GET_EMPLOYEE_BY_ID"){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            Accept: "application/json",
            'content-type': 'application/json',
          },
      };
      
      fetch("localhost:58505/api/employee/GetEmployeeById", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            action.payload = result                   }
            )
        .catch(error => console.log('error', error));
    return next(action)
   }

// GET = () => {
//     return dispatch => {
//         console.log("ddddddddddddddddddd")
//         dispatch({ type:"LOAD" })
//         axios.get("/api/Emp").then(x => {
// dispatch({type:"ALLSONG",payload:x.data})
//             console.log(x)
//         }).finally(() => {
//             dispatch({ type:"UN_LOAD" })
//         })
//     }
// }

}