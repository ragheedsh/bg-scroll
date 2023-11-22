import Lottie, { InteractivityProps } from "lottie-react"
import { useEffect, useState } from "react"

const firstInteractivity: Omit<InteractivityProps, "lottieObj"> | undefined = {
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
      frames: [45, 60],
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
      frames: [45, 60],
    },
  ],
}

function App() {
  const [first, setfirst] = useState<any>()
  const [second, setsecond] = useState<any>()

  useEffect(() => {
    import("./animation/first-animation.json").then((file) => setfirst(file))
    import("./animation/second-animation.json").then((file) => setsecond(file))
  }, [])

  if (!first || !second) {
    return <>Loading...</>
  } else
    return (
      <div>
        <section style={{ height: 500, background: "black", color: "white" }}>Section 1</section>

        <section style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%" }}>
            <Lottie animationData={first} loop={false} interactivity={firstInteractivity} style={{ width: "100%", height: "100%" }} />
          </div>
        </section>

        <section style={{ height: 500, background: "black", color: "white" }}>Section 2</section>

        <section style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%" }}>
            <Lottie animationData={second} loop={false} interactivity={secondInteractivity} style={{ width: "100%", height: "100%" }} />
          </div>
        </section>

        <section style={{ height: 500, background: "black", color: "white" }}>Section 3</section>
      </div>
    )
}

export default App
