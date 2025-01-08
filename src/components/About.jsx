import aboutimg from "../assets/assets/profile.png";
import { motion }from "framer-motion";

const About = () => {
  return ( 
  <div className="border-b border-neutral-900 pb-4">
    <h1 className="my-20 text-center text-4xl">About
        <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{opacity: 0, x: -100}}
            transition={{ duration: 0.5}}           
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutimg} alt="about" />
            </div>
            </motion.div>
            <motion.div 
            whileInView={{ opacity:1, x:0 }}
            initial={{ opacity:0, x:100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6">I’m an aspiring front-end developer with a passion for building responsive, user-friendly websites. Skilled in React, HTML, CSS, and JavaScript, alongside a strong background in backend technologies like Java, SQL, and Node.js, I bring a full-stack mindset to every project. 
                    With tools like Figma, Git, and Postman, I design seamless, intuitive digital experiences. Currently diving into web design and UI/UX, I’m eager to collaborate, learn, and contribute to innovative projects that make a real impact.</p>
            </div>
            </motion.div>
        </div>
  </div>
  );
};

export default About;