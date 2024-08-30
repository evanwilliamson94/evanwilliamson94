import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"


import work1 from "../../assets/Images/work1.png"
import work2 from "../../assets/Images/work2.png"
import work3 from "../../assets/Images/work3.png"

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "Ultraverse NFT WORLD",
      year: "2024",
      img: work1,
      title: "Front-end Developer Internship",
      detail: "Working at Ultraverse NFT World allowed me to contribute to multiple projects from inception to completion. I played a key role in developing core features and enhancing the user experience.",
      url: "https://ultraverse-tau.vercel.app" 
    },
    {
      client: "Patch To Life (sold company)",
      year: "2019-2023",
      img: work2,
      title: "Founder & Lead Developer",
      detail: "Leading development at Patch to Life allowed me to transform numerous projects from concept to completion. As a key figure, I drove the development of our e-commerce platform, implementing advanced features and ensuring an exceptional user experience.",
    },
    {
      client: "Twitter-Clone",
      url: "https://tweet-clone-beryl.vercel.app/",
      year: "2024",
      img: work3,
      title: "Full Stack Developer",
      detail: "Developing the full-stack Twitter Clone allowed me to create a comprehensive social media platform from the ground up. I implemented essential features such as user authentication, real-time updates, and responsive design. This project utilized React, Redux, Firebase, and Tailwind CSS, demonstrating my proficiency in handling both front-end and back-end development tasks, ensuring a seamless and engaging user experience.",
      
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Explore a meticulously curated portfolio showcasing projects that exemplify problem-solving, creativity, and technical expertise with every line of code.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
