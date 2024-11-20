import React from 'react'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

function Root() {
    return (
        <>
            <div className='container'>
                <header className='header'>
                    <h1>Header</h1>
                    <div>
                        <Link to='/cart' className='nav-link'>Cart (10)</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                </header>
                <Outlet />
                <footer>
                    <h1>Footer</h1>
                </footer>
            </div>
        </>
    )
}

export default Root