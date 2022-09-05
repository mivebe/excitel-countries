import "../styles/Card.css"

const Card = ({ data }) => (

    <div className="card">
        <div className="card-header">
            <img src={data.flag} alt="flag" />
        </div>
        <h1>{data.name}</h1>
        <div className="card-body">
            <div className="card-body_row">
                <p className="tag">{data.name}</p>
                <p className="tag">{data.capitalName}</p>
            </div>
            <div className="card-body_row">
                Coordinates: {data.latLng.map(coordinate => <p>{coordinate}</p>)}
            </div>
            <p>
                The current population is of {data.name} is: {data.population}
            </p>
            <div className='card-body_row'>
                <p className="tag">{data.region}</p>
                <p className="tag">{data.subregion}</p>
            </div>
        </div>
    </div>
);
export default Card;