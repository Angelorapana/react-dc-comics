

function SingolaCard({ datiCard }) {
    const { id, title, thumb, } = datiCard;
    return (
        <div className="col-2 m-5">
            <img src={thumb} className="card-img-top" alt={title} />
            <div className="card-body">

                <h5 className="card-title">{title}</h5>
            </div>
        </div>

    );

}

export default SingolaCard;
