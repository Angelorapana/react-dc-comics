
import { Button } from "bootstrap";
import GruppoCard from "../components/GruppoCard";
import Info from "../components/Info";
import SingolaCard from "../components/SingolaCard";
import "./Main.css";



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

            <div className="text-white bg-comics"> </div>
            <div className="container bg-dark">
                <button className="btn btn-primary fw-bold bposition">
                    CURRENT SERIES
                </button>

                <GruppoCard />

                <button className="btn btn-primary fw-bold bpositionend">
                    LOAD MORE
                </button>
                <div className="mt-5">
                    <Info />
                </div>
            </div>

            <div className="container bg-dc text-white">
                <div className="row">
                    {colonne.map((column) => (
                        <div key={column.id} className="col-6 mt-5">
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
        </main >
    );
}
