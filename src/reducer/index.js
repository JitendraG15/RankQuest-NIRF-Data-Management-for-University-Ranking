import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/AuthSlice"
import profileReducer from "../slices/ProfileSlice";
import TransactionReducer from "../slices/TransactionSlice";
import Sidebar from "../slices/Sidebar";
import Admin from "../slices/Admin";


const rootReducer  = combineReducers({
    auth: authReducer,
    profile:profileReducer,
    transaction:TransactionReducer,
    sidebar:Sidebar,
    admin:Admin
    
})

export default rootReducer;