import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Movie({ id, corverImg, title, summary, genres }) {
    return (
        <div>
            <img src={corverImg} alt={title} />
            <h2>
                <Link to={`/moive/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div >
    );
}

Movie.protoType = {
    id: PropTypes.number.isRequired,
    corverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;