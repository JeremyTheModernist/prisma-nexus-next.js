import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav>
            <ul style={NavStyles}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/create">Create</Link>
                </li>
            </ul>
        </nav>
    )
}

const NavStyles = {
    display: 'flex',
    flexFlow: 'row wrap',
    background: '#1a1a1a',
    color:'white',
    justifyContent: 'space-around',
    listStyleType: 'none',
    margin:0,
    padding: '15px',
    fontSize: '1.25rem'
}

export default Nav
