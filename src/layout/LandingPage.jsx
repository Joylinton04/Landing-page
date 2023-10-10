import Navbar from "../components/header/Navbar";
import HeaderImg from "../components/header/HeaderImg";
import HomeScreen from "../components/HomeImg/homeScreen";
import Feature from "../components/Features/Feature";
import ProductPlan from "../components/plan/ProductPlan";
import Comments from "../components/comments/Comments";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="Landing-page">
      <HeaderImg/>
      <Navbar/>
      <HomeScreen/>
      <Feature/>
      <ProductPlan/>
      <Comments/>
      <Footer/>
    </div>
  )
}

export default LandingPage;