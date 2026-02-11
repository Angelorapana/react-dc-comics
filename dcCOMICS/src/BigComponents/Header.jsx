const links = [
    { id: 1, text: "CHARACTERS", url: '#', current: false },
    { id: 2, text: 'COMICS', url: '#', current: true },
    { id: 3, text: 'MOVIES', url: '#', current: false },
    { id: 4, text: 'TV', url: '#', current: false },
    { id: 5, text: 'GAMES', url: '#', current: false },
    { id: 6, text: 'COLLECTIBLES', url: '#', current: false },
    { id: 7, text: 'VIDEOS', url: '#', current: false },
    { id: 8, text: 'FANS', url: '#', current: false },
    { id: 9, text: 'NEWS', url: '#', current: false },
    { id: 10, text: 'SHOP', url: '#', current: false },
];

function Nav() {
    return (
        <nav>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {links.map(link => (
                    <li key={link.id} className="nav-item">
                        <a
                            className={`nav-link ${link.current ? 'active fw-bold border-bottom border-primary' : ''}`}
                            href={link.url}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img
                            src="img/dc-logo.png"
                            alt="DC Comics Logo"
                            style={{ height: '60px' }}
                        />
                    </a>

                    <Nav />
                </div>
            </nav>
        </header>
    );
}


