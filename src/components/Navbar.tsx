import React from 'react';

interface NavbarProps {
    menus: {
        title: string;
        href: string;
    }[];
    search_placeholder: string;
}

function Navbar(props: NavbarProps): JSX.Element {

    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className="logo">AEON</div>
                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <div className="menu">

                        {props.menus.map((e, i) => (
                            <li key={i}><a href={e.href}>{e.title}</a></li>
                        ))}
                    </div>
                </ul>
            </div>
            <form>
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                <input type="text" className="nav-input" placeholder={props.search_placeholder} />
            </form>
        </nav>
    );
}

export default React.memo(Navbar);
