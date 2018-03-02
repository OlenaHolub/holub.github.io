import React from 'react'
import Link from 'gatsby-link'

const ListLink = props =>
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

const Header = () => (
    <div
        style={{
            background: 'rebeccapurple',
            marginBottom: '1.45rem',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <h1 style={{ margin: 0, display: `flex` }}>
                <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                >
                    Gatsby
                </Link>
            </h1>
            <ul style={{ listStyle: `none`, dislay: `flex` }}>
                <ListLink to='/'>Home</ListLink>
                <ListLink to='about'>About</ListLink>
                <ListLink to='contact'>Contact</ListLink>
            </ul>
        </div>
    </div>
)

export default Header