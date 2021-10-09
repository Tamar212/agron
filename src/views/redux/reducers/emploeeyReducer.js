import produce from 'immer'
import execHandler from './reducerUtils'

const initialState = {
employees:[],
employeeId:[]
}



const employee ={
getAllEmployee(state,action){
    state.employees = action.payload
},

getEmpId(state,action){
    debugger
    state.employeeId = action.payload
    alert(state.employeeId)
}
,initialState}

export default produce((state,action)=>{
    execHandler(state,action, employee)
},initialState)




