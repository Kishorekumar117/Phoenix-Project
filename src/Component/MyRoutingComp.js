import React, { Component } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
// import SigninSide from './SigninSide'
import VideoCom from './VideoCom'
import NavComp from './NavComp'
// import AboutComp from './AboutComp'
import SignUpComp from './SignUpComp'
import SignInSide from './SignInSide'
import UserDash from './UserDash'
import AdminDash from './AdminDash'
import SideBarAdmin from './SideBarAdmin'
import CartComp from './CartComp'
// import ParentComponent from './ParentComponent'

export class MyRoutingComp extends Component {
    render() {
        return (
            <div>
             <BrowserRouter>
                <Routes>
                    <Route path='' element={<NavComp></NavComp>}></Route>
                    <Route path='login' element={<SignInSide></SignInSide>}></Route>
                    <Route path='register' element={<SignUpComp/>}></Route>

                    <Route path='userdash' element={<UserDash></UserDash>}></Route>
                    <Route path='SideBarAdmin' element={<SideBarAdmin></SideBarAdmin>}></Route>
                    <Route path='home' element={<NavComp></NavComp>}></Route>
                    <Route path='cart' element={<CartComp></CartComp>}></Route>



                </Routes>
             </BrowserRouter>

             {/* <BrowserRouter>
             <Routes>
                <Route path='login' element={<SignInSide></SignInSide>}></Route>
             </Routes>
             </BrowserRouter> */}

             {/* <BrowserRouter>
                <Routes>
                    
                    <Route path='register' element={<SignUpComp/>}></Route>
                </Routes>
             </BrowserRouter> */}




             
            </div>
        )
    }
}

export default MyRoutingComp
