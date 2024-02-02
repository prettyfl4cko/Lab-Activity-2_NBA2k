function Games(props) {
    const gamesClasses = "gamesClasses"; 
  
    return (
      <div className={gamesClasses}>
        <div>
          <img src={props.gamesObj.photoName} alt={props.gamesObj.name} />
        </div>
        <div>
          <p>{props.gamesObj.name}</p>
        </div>
      </div>
    );
  }
  
  export default Games;