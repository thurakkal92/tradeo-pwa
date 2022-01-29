import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routesArr from 'router/config'

function CsrRouter() {
    return (
        <Router>
            <Routes>
                {routesArr.map((route, idx) => (
                    <Route {...route} key={idx} />
                ))}
            </Routes>
        </Router>
    )
}

export default CsrRouter