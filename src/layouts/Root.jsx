import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto px-4">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root;