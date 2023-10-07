import Navbar from '../components/Navbar';

function NavbarContainer(): JSX.Element {

    return (
        <Navbar menus={[
            {
                title: 'Showcase',
                href: '/'
            },
            {
                title: 'Docs',
                href: '/'
            },
            {
                title: 'Blog',
                href: '/'
            },
            {
                title: 'Analytics',
                href: '/'
            },
            {
                title: 'Templates',
                href: '/'
            },
            {
                title: 'Enterprise',
                href: '/'
            }
        ]}  search_placeholder='Search documentation...'/>
    );
}

export default NavbarContainer;
