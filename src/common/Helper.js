import StorageManager from './StorageManager';
/*
window.location.hash: "#2"
window.location.host: "localhost:4200"
window.location.hostname: "localhost"
window.location.href: "http://localhost:4200/landing?query=1#2"
window.location.origin: "http://localhost:4200"
window.location.pathname: "/landing"
window.location.port: "4200"
window.location.protocol: "http:"
window.location.search: "?query=1"*/

export const getCompanyName = () => {
    const domainName =  window.location.hostname;
    StorageManager.removeCompany();
    StorageManager.setCompany(1);
    return StorageManager.getCompany();
   
}
// export const isAuthenticated = () => {
//     if(StorageManager.getIsLoggedIn()){
//         return true; 
//     }else{
//         return false;
//     }
// }

export const getUser = () => {
    const user = StorageManager.getUser();
    return user;  
   
}
export const getUserID = () => {
    const user = StorageManager.getUser().id;
    return user;  
   
}
export const Capitalize = str =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

export const readMore = (myStr,maxLength) =>{
    if($.trim(myStr).length > maxLength){
        var newStr = myStr.substring(0, maxLength);
        var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
        return newStr+'';
    }else {
        return myStr;
    }
}