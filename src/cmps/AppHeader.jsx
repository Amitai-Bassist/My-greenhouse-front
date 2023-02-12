import { NavLink, withRouter } from 'react-router-dom'
// import {UserNav} from '../cmps/UserNav'

import kolseption from '../assets/imgs/kolseption.png'
import userImg from '../assets/imgs/user-img.png'

function _AppHeader(props) {
    
    return (
        <header className="app-header">
            <section className="container flex space-between">
                <NavLink exact to="/"  className='logo flex space-between'>
                    <img className='header-logo' src={kolseption} alt="" />
                    <div>My-greenhouse</div>
                </NavLink>
                <nav className='flex space-between app-nav'>
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/dashboards" >Dashboard</NavLink>
                    <NavLink to="/solution" >My-Solution</NavLink>
                    <img src={userImg} alt="" className='user-img'/>
                </nav>
            </section>
            {/* <UserNav></UserNav> */}
        </header>
    )
}


export const AppHeader = withRouter(_AppHeader)