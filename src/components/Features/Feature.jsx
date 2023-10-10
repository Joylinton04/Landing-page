import FeatureCard from "./FeatureCard";


const Feature = () => {
  return (
    <section className="feature">
        <h1>The majority of our customers do not</h1>
        <h1>understand their workflows.</h1>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
        <p>mollit anim id est laborum.</p>
        <div className="feature-cards">
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
        </div>
        <span className="span"></span>
    </section>
  )
}

export default Feature;