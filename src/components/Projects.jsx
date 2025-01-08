import project01 from "../assets/assets/projects/project.png";
import project02 from "../assets/assets/projects/project2.png";
import project03 from "../assets/assets/projects/project3.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{ opacity:1, y:0}}
      initial={{ opacity: 0,y: -100}}
      transition={{ duration: 0.5}}
      className="my-20 text-center text-4xl">Projects</motion.h2>

      <motion.h4 
      whileInView={{ opacity:1 , x:0}}
      initial={{ opacity:0 , x:-100}}
      transition={{duration: 1}}
      className="my-20 text-2xl">Academic Projects</motion.h4>
      <div className="mb-8 space-y-10 lg:space-y-0 lg:flex lg:flex-wrap lg:justify-center lg:gap-10">
        {/* Project 1 */}
        <div className="lg:flex lg:gap-6">
          <motion.div 
          whileInView={{opacity:1 , x:0 }}
          initial={{ opacity:0 , x: -100}}
          transition={{duration:2}}
          className="w-full lg:w-1/3">
            <img
              src={project01}
              width={300}
              height={300}
              alt="project-1"
              className="mb-6 rounded lg:mb-0 lg:h-full lg:object-cover"
            />
          </motion.div>
          <motion.div 
          whileInView={{ opacity:1, x:0}}
          initial={{ opacity:0, x:100}}
          transition={{ duration: 1}}
          className="w-full lg:w-2/3">
            <h6 className="mb-2 font-semibold">Student - Agent Management System</h6>
            <p className="mb-4 text-neutral-400">
              Developed a MERN-based system to manage profiles, schedule
              appointments, and handle documents, scholarships, and job listings.
            </p>
            <div className="mb-6">
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                HTML
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                CSS
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                JavaScript
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                MERN Stack
              </span>
            </div>
          </motion.div>
        </div>

        {/* Project 2 */}
        <div className="lg:flex lg:gap-6">
          <motion.div 
          whileInView={{opacity:1 , x:0 }}
          initial={{ opacity:0 , x: -100}}
          transition={{duration:2}}
          className="w-full lg:w-1/3">
            <img
              src={project02}
              width={300}
              height={300}
              alt="project-2"
              className="mb-6 rounded lg:mb-0 lg:h-full lg:object-cover"
            />
          </motion.div>
          <motion.div 
          whileInView={{ opacity:1, x:0}}
          initial={{ opacity:0, x:100}}
          transition={{ duration: 1}}
          className="w-full lg:w-2/3">
            <h6 className="mb-2 font-semibold">Online Shopping Management System</h6>
            <p className="mb-4 text-neutral-400">
              Built a responsive shopping system with user management, product
              browsing, and order processing using Java, MySQL, and MVC
              architecture.
            </p>
            <div>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                HTML
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                CSS
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                JavaScript
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                MySQL
              </span>
            </div>
          </motion.div>
        </div>

        {/* Project 3 */}
        <div className="lg:flex lg:gap-6">
          <motion.div 
          whileInView={{opacity:1 , x:0 }}
          initial={{ opacity:0 , x: -100}}
          transition={{duration:2}}
          className="w-full lg:w-1/3">
            <img
              src={project03}
              width={300}
              height={300}
              alt="project-3"
              className="mb-6 rounded lg:mb-0 lg:h-full lg:object-cover"
            />
          </motion.div>
          <motion.div 
          whileInView={{ opacity:1, x:0}}
          initial={{ opacity:0, x:100}}
          transition={{ duration: 1}}
          className="w-full lg:w-2/3">
            <h6 className="mb-2 font-semibold">Task Management Mobile Application</h6>
            <p className="mb-4 text-neutral-400">
              Created a mobile app with task management, stopwatch, CRUD
              operations, and efficient data handling using RecyclerView and
              ViewModel.
            </p>
            <div>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                Kotlin
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                Android Studio
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                MySQL
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                RecyclerView
              </span>
              <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                ViewModel
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
