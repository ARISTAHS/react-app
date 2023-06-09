import PropTypes from "prop-types";

function Movie({coverImg, title, summary,genres}){
  return (
  <div>
    <img src={coverImg} alt={title} />
    <h2>{title}</h2>
    <p>{summary}</p>
    <ul>
      {genres.map((g)=>(
        <li key={g}>{g}</li>
      ))}
    </ul>
  </div>
  );
}

Movie.protoType ={
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  genre : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie