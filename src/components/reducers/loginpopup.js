
const loginpopupReducre = (state = false,action) =>{
    switch(action.type){
        case 'SHOWLOGINMODEL':
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
export default loginpopupReducre;