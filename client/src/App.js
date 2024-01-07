import React from 'react'
import { useContext, useState, useEffect } from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './http/userApi';

const App = observer(() => {
        const {user} = useContext(Context)
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                check()
                    .then(data => {
                        if (data === undefined) {
                            user.setUser(null);
                            user.setIsAuth(false);
                        }
                        else {
                            user.setUser(true);
                            user.setIsAuth(true);
                        }

                    })
                    .catch(e => console.error(e))
                    .finally(() => setLoading(false));
            }, 1000)
        },[])

        if (loading) {
            return <p>Loading...</p>
        }

        return (
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        )
    }
)
export default App