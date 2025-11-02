export default function VenueCard({card}){
    return(
        <>
            <div className="venue-card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={card.thumbnail} 
                        className="img-fluid rounded-start"
                         alt={card.title}
                        //  style={{width: "100%", borderRadius: "10px"}}
                         />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.address}</p>
                            <p className="card-text">⭐ Rating:{card.rating}</p>
                            <a href={card.website} target="_blank" rel="noreferrer"><small className="text-body-secondary">Visit Website</small></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}