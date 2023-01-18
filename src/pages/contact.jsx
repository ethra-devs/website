import Hero from "../components/hero";
import { motion } from "framer-motion";
import { BackButton } from "../components/backButton";
import { Container } from "../components/container";
import { Form } from "../components/contactForm";

const data = [ {first:"contact"} ]

const Contact = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <BackButton/>
            <Container>
                <Hero data={data} />
                <Form />
            </Container>
        </motion.div>
    )
}

export default Contact