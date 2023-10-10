

const FeatureCard = ({icon}) => {
  return (
    <div className="card">
        <div className="icon">{icon}</div>
        <div className="card-info">
            <h2>Instant Features</h2>
            <p>Duis aute irure dolor in reprehenderit in </p>
            <p>voluptate velit esse cillum dolore eu</p>
            <p>fugiat nulla pariatur. Excepteur sint</p>
            <p>occaecat cupidatat.</p>
        </div>
    </div>
  )
}

export default FeatureCard;