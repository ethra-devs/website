import Hero from "../components/hero";
import { motion } from "framer-motion";
import { BackButton } from "../components/backButton";
import { Container } from "../components/container";
import { AboutUs } from "../components/aboutUs";

const data = [ {first:"About"} ]

const About = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <BackButton/>
            <Container>
                <Hero data={data}/>
                <AboutUs/>
            </Container>
        </motion.div>
    )
}
export default About