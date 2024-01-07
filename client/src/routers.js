import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Enrollment from './pages/Enrollment'
import Instructor from './pages/Instructors'
import Home from './pages/Home'
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE,
    INSTRUCTOR_ROUTE, ENROLLMENT_ROUTE} from './utils/consts'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: INSTRUCTOR_ROUTE + '/:id',
        Component: Instructor
    },
    {
        path: ENROLLMENT_ROUTE,
        Component: Enrollment
    }
]
