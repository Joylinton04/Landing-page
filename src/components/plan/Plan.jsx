

const Plan = ({icon}) => {
  return (
    <section className="plan-section-1">
        <div className="plan-info">
            <span>More speed. less spend</span>
            <h1>Keep projects on schedule</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="plan-img">
            <img src={icon} alt="" />
        </div>
    </section>
  )
}

export default Plan;