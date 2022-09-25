// import { useState } from 'react'
import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import AuthRouter from "./routers/unit/authRouter.jsx";
import { setToken } from "@/redux/modules/global/action";
import {connect} from "react-redux"
function App(props) {
    console.log(props)
    if(!props.token){
        // console.log('111', props.global)
        props.setToken('111')
    }
  return (
      <HashRouter>
          <AuthRouter>
              <Router />
          </AuthRouter>
      </HashRouter>
  )
}
const mapStateToProps = (state) =>{
    return {
        global:state.global
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setToken:(token)=>dispatch({type:'token',token})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
