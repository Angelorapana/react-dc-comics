
import GRUPPOCARD from "../components/GruppoCard";
import Info from "../components/Info";


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
                <GRUPPOCARD />
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
