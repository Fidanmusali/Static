import React from 'react'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
    const routes = [
        { id: 0, element: <Home />, path: '/' },
        { id: 1, element: <About />, path: '/about' },
        { id: 2, element: <Contact />, path: '/contact' }

    ];

    return (
        <Routes>
            {routes.map(({ id, element, path }) => {
                return <Route key={id} element={element} path={path} />
            })}

        </Routes>

    )
}

export default Router