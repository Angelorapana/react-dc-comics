

const info = [
    { id: 1, text: "DIGITAL COMICS", img: "/img/buy-comics-digital-comics.png" },
    { id: 2, text: "DC MERCHANDISE", img: "/img/buy-comics-merchandise.png" },
    { id: 3, text: "SUBSCRIPTION", img: "/img/buy-comics-subscriptions.png" },
    { id: 4, text: "COMIC SHOP LOCATOR", img: "/img/buy-comics-shop-locator.png" },
    { id: 5, text: "DC POWER VISA", img: "/img/buy-dc-power-visa.svg" },
];
function Info() {
    return (
        <div className="bg-primary py-4">
            <div className="container">
                <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0">
                    {info.map(item => (
                        <li
                            key={item.id}
                            className="d-flex align-items-center gap-2 text-white"
                        >
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

const colonne = [
    {
        id: 1,
        titolo: "DC COMICS",
        sezioni: [
            "Characters",
            "Comics",
            "Movies",
            "TV",
            "Games",
            "Videos",
            "News",
        ],
    },
    {
        id: 2,
        titolo: "DC",
        sezioni: [
            "Terms Of Use",
            "Privacy Policy (New)",
            "Ad Choices",
            "Advertising",
            "Jobs",
            "Subscriptions",
            "Talent Workshops",
        ],
    },
    {
        id: 3,
        titolo: "SITES",
        sezioni: [
            "DC",
            "MAD Magazine",
            "DC Kids",
            "DC Universe",
            "DC Power Visa",
        ],
    },
    {
        id: 4,
        titolo: "SHOP",
        sezioni: [
            "Shop DC",
            "Shop DC Collectibles",
        ],
    },
];


export default function Main() {
    return (
        <main>
            <div className="bg-dark text-white py-5">
                <h4 className="ms-5 fw-bold mb-0">Content goes here</h4>
            </div>
            <Info />

            <div className="bg-dc text-white py-5">
                <div className="container ">
                    <div className="row">

                        {colonne.map((column) => (
                            <div key={column.id} className="col-6 col-md-3">
                                <h6 className="fw-bold">{column.titolo}</h6>
                                <ul className="list-unstyled text-secondary small">
                                    {column.sezioni.map((link, i) => (
                                        <li key={i}>{link}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>
            </div>



        </main>
    )
}
