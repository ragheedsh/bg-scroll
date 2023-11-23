import Lottie, { InteractivityProps } from "lottie-react"
import { useEffect, useState } from "react"
import { motion, useScroll, Variants } from "framer-motion"

const firstInteractivity: Omit<InteractivityProps, "lottieObj"> | undefined = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 1],
      type: "seek",
      frames: [0, 101],
    },
  ],
}
const secondInteractivity: Omit<InteractivityProps, "lottieObj"> | undefined = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.25],
      type: "seek",
      frames: [0],
    },
    {
      visibility: [0.25, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "seek",
      frames: [45, 100],
    },
  ],
}

function App() {
  const [first, setfirst] = useState<any>()
  const [second, setsecond] = useState<any>()
  const { scrollXProgress } = useScroll()

  useEffect(() => {
    import("./animation/first-animation.json").then((file) => setfirst(file))
    import("./animation/second-animation.json").then((file) => setsecond(file))
  }, [])

  const textVariants: Variants = {
    offscreen: {
      y: 200,
    },
    onscreen: {
      y: -200,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.8,
      },
    },
  }

  if (!first || !second) {
    return <>Loading...</>
  } else
    return (
      <div>
        <section style={{ height: 1000, background: "black", color: "white" }}>Section 1</section>

        <section style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%" }}>
            <Lottie
              animationData={first}
              loop={false}
              interactivity={firstInteractivity}
              style={{ width: "100%", height: "100%", transform: "translate3d(0px, 3px, 0px)" }}
            />
          </div>
        </section>

        <section
          style={{ height: 500, background: "linear-gradient(180deg, rgba(80,126,133,1) 0%, rgba(150,224,234,1) 100%)", color: "white" }}
        >
          <motion.div initial="offscreen" whileInView="onscreen" style={{ textAlign: "center" }} variants={textVariants}>
            <div>
              <h2 style={{ fontSize: 40, margin: "0 0 30px" }}>In search of quality, cost-effective delivery solutions?</h2>
              <br />
              <h2 style={{ fontSize: 40, margin: "0 0 30px" }}>Experiencing customer loss due to delayed or missed delivers?</h2>
              <br />
              <h2 style={{ fontSize: 40, margin: "0 0 30px" }}>Considering environmentally friendly delivery options?</h2>
              <br />
              <h2 style={{ fontSize: 40, margin: "0 0 30px" }}>Aiming to maintain competitiveness in a fast paced market? </h2>
            </div>
          </motion.div>
        </section>

        <section style={{ display: "flex", justifyContent: "center" }}>
          <Lottie animationData={second} loop={false} interactivity={secondInteractivity} style={{ width: "100%", height: "100%" }} />
        </section>

        <section style={{ height: 1000, background: "black", color: "white" }}>Section 3</section>
      </div>
    )
}

export default App
