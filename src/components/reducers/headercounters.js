
const headercounters = (state = false,action) =>{
    switch(action.type){
        case 'upate':
            state =true;
            return state
        case 'HIDELOGINMODEL':
            state =false;
            return state
        default:  
            state =false;
            return state
    }
}
export default headercounters;