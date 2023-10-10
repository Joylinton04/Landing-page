import FeatureCard from "./FeatureCard";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LanguageIcon from '@mui/icons-material/Language';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const Feature = () => {
  return (
    <section className="feature">
        <h1>The majority of our customers do not</h1>
        <h1>understand their workflows.</h1>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
        <p>mollit anim id est laborum.</p>
        <div className="feature-cards">
            <FeatureCard icon={<StarOutlineIcon fontSize="large"/>}/>
            <FeatureCard icon={<EditNoteIcon fontSize="large"/>}/>
            <FeatureCard icon={<LanguageIcon fontSize="large"/>}/>
            <FeatureCard icon={<PsychologyIcon fontSize="large"/>}/>
            <FeatureCard icon={<ThumbUpIcon fontSize="large"/>}/>
            <FeatureCard icon={<ModeCommentIcon fontSize="large"/>}/>
        </div>
        <span className="span"></span>
    </section>
  )
}

export default Feature;