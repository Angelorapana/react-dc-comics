
const info = [
    { id: 1, text: "DIGITAL COMICS", img: "/img/buy-comics-digital-comics.png" },
    { id: 2, text: "DC MERCHANDISE", img: "/img/buy-comics-merchandise.png" },
    { id: 3, text: "SUBSCRIPTION", img: "/img/buy-comics-subscriptions.png" },
    { id: 4, text: "COMIC SHOP LOCATOR", img: "/img/buy-comics-shop-locator.png" },
    { id: 5, text: "DC POWER VISA", img: "/img/buy-dc-power-visa.svg" },
];

function Info() {
    return (

        <div className="bg-primary">
            <div className="container py-4">
                <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0">
                    {info.map(item => (
                        <li key={item.id}
                            className="d-flex align-items-center gap-2 text-white">
                            <img
                                src={item.img}
                                alt={item.text}
                                style={{ height: "40px" }}
                            />
                            <span className="fw-semibold small">{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Info;