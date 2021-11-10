import React from "react";
import ReactDOM from 'react-dom'
import App  from './App';
//import * as ServiceWorker from './serviceWorker';
import { createStore } from "redux";
import allReducers  from "./reducers";
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';


// ReactDOM.render(
//   <React.StrictMode>
//   <Provider store={store}>
//   <App/> 
//   </Provider></React.StrictMode>,
//   document.getElementById('app'));
//ServiceWorker.unregister();

function Index() {
  const store = createStore(
    allReducers
  );
  return (
    <Provider store={store}>
    <App/> 
    </Provider>
  );
}

export default Index;
if (document.getElementById('app')) {ReactDOM.render(<Index />, document.getElementById('app'));}