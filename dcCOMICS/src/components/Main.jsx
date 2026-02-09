

const info = [
    { id: 1, text: "DIGITAL COMICS", img: "/img/buy-comics-digital-comics.png" },
    { id: 2, text: "DC MERCHANDISE", img: "/img/buy-comics-merchandise.png" },
    { id: 3, text: "SUBSCRIPTION", img: "/img/buy-comics-subscriptions.png" },
    { id: 4, text: "COMIC SHOP LOCATOR", img: "/img/buy-comics-shop-locator.png" },
    { id: 5, text: "DC POWER VISA", img: "/img/buy-dc-power-visa.svg" },
];

function Info() {
    return (
        <div className="container">
            <ul>
                {info.map(item => (
                    <li key={item.id}>
                        <img src={item.img} /> {item.text}
                    </li>
                ))}
            </ul>
        </div >
    )
}


export default function Main() {
    return (
        <main>
            <div className="container">
                <h1 className="my-4">Content goes here</h1>
            </div>
            <Info />
        </main>
    )
}
