const links = [
    { name: 'Home', href: '#' },
    { name: 'Characters', href: '#' },
    { name: 'Comics', href: '#' },
    { name: 'Movies', href: '#' },
]

function nav() {
    return (
        links.map(link => (
            <li key={link.name}>
                <a href={link.href}>{link.name}</a>
            </li>
        )))
}

export default function Header() {
    return (
        <header className="header">
            <img src="/dc-logo.png" alt="DC Comics Logo" className="logo" />
        </header>
    )
}