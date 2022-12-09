function DonationCard(props) {
    return (
      <div className="t-card">
        <div className="t-img">
          <img alt="img" src={props.img} />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
    );
  }
  export default DonationCard;
  