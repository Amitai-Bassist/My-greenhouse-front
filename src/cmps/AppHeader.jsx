import { NavLink, withRouter } from 'react-router-dom'
import kolseption from '../assets/imgs/kolseption.png'

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
                    <NavLink to="/dashboards" >Dashboards</NavLink>
                </nav>
            </section>
        </header>
    )
}


export const AppHeader = withRouter(_AppHeader)