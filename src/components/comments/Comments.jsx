import CommentCard from "./CommentCard";
import fill from '../../assets/Fill 1.webp'

const Comments = () => {
  return (
    <section className="comments"> 
        <h1>Don't take our word for it</h1>
        <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus</p>
        <p>nulla at volutpat diam ut venenatis tellus—in ornare.</p>
        <div className="comment-card">
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
        </div>
        <div className="contact">
            <div className="fill">
                <img src={fill} alt="" />
            </div>
            <div className="contact-mess">
                <h1>Stay in the loop</h1>
                <p>Join our newsletter to get top news before anyone else.</p>
            </div>
            <div className="form">
                <input type="text" placeholder="Your best email..."/>
                <button>Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default Comments;