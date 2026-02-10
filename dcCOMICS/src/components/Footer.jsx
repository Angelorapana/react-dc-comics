const social = [
    { nome: "Facebook", img: "/img/footer-facebook.png", link: "#" },
    { nome: "Periscope", img: "/img/footer-periscope.png", link: "#" },
    { nome: "Pinterest", img: "/img/footer-pinterest.png", link: "#" },
    { nome: "Twitter", img: "/img/footer-twitter.png", link: "#" },
    { nome: "YouTube", img: "/img/footer-youtube.png", link: "#" },
]


function Social() {
    return (
        <div className="bg-dark" style={{ height: "80px" }}>
            <div className="container d-flex justify-content-between align-items-center">

                <button className="btn btn-outline-primary fw-bold mt-3">SIGN-UP NOW!</button>
                <div className="social d-flex align-items-center gap-3 mt-3">
                    <span className="fw-semibold text-white">FOLLOW US</span>
                    <ul className="list-unstyled d-flex gap-3 mb-0 align-items-center mt-3">
                        {social.map(oggetto => (
                            <li key={oggetto.nome}>
                                <a href={oggetto.link}>
                                    < img src={oggetto.img} alt={oggetto.nome} style={{ height: "20px" }} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>)
}

export default Social;