import React, { useContext } from "react"
import { Context } from "../index"
import '../site.css'
import { observer } from "mobx-react-lite"
import { NavLink } from "react-router-dom"
import { ADMIN_ROUTE, HOME_ROUTE, INSTRUCTOR_ROUTE, LOGIN_ROUTE } from "../utils/consts"

const NavBar = observer(() => {
    const {user} = useContext(Context)

    const logout = () => {
        user.setUser(null)
        user.setIsAuth(false)
    }

    return (
        <nav className="navbar">
            <NavLink to={HOME_ROUTE} className="navlink">Home</NavLink>
            <NavLink to={INSTRUCTOR_ROUTE} className="navlink">Instructors</NavLink>
            {user.isAuth ?
                <>
                    <NavLink to={ADMIN_ROUTE} className="navlink">Admin</NavLink>
                    <NavLink to={HOME_ROUTE} className="navlink" onClick={logout}>Logout</NavLink>
                </>
                :
                <NavLink to={LOGIN_ROUTE} className="navlink">Login</NavLink>
            }
        </nav>
    )
})

export default NavBar