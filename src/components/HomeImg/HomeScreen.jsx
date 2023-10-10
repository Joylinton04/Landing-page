import team from '../../assets/team.webp'

const HomeScreen = () => {
  return (
    <section className="landing-page-screen">
        <h1>Landing template for startups</h1>
        <p>Our landing page template works on all devices, so you only have to</p>
        <p>set it up once, and get beautiful results forever.</p>
        <span className="button">
            <button>Start free trial</button>
            <button>Learn more</button>
        </span>
        <div className="landing-page-img">
            <img src={team} alt="team" />
        </div>
    </section>
  )
}

export default HomeScreen;