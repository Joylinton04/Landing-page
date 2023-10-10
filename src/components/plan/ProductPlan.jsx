import Plan from "./Plan";
import Illustration1 from '../../assets/Illustration1.webp'
import Illustration2 from '../../assets/Illustration2.webp'
import Illustration3 from '../../assets/Illustration3.webp'

const ProductPlan = () => {
  return (
    <section className="productPlan">
        <span className="goal">Reach goals that matter</span>
        <h1>One product, unlimited solutions</h1>
        <p className="f">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
        <p>mollit anim id est laborum.</p>
        <section className="plan">
            <Plan icon={Illustration1}/>
            <Plan icon={Illustration2}/>
            <Plan icon={Illustration3}/>
        </section>
        <span className="span"></span>
    </section>
  )
}

export default ProductPlan;