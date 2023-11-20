import StickyBox from "react-sticky-box"
import { useEffect, useState } from "react"

const imagesArr = [
  "https://plus.unsplash.com/premium_photo-1699534955989-26a13746d060?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1700422300144-713dad3a1c4a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1700427296131-0cc4c4610fc6?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687982423-295485af248a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1700159915592-004562ddcf6f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]
const imageHeight = 600

function App() {
  const [scrollPosition, setScrollPosition] = useState(document.documentElement.scrollTop)
  const [CurrentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(document.documentElement.scrollTop)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      const visibleImageIndex = Math.floor((scrollPosition + imageHeight / 2) / imageHeight)
      console.log(visibleImageIndex)

      visibleImageIndex < imagesArr.length && setCurrentImageIndex(visibleImageIndex)
    })
  }, [scrollPosition])

  return (
    <div>
      <section style={{ minHeight: 500, border: "1px solid" }}>
        <div>Section 1</div>
      </section>
      <section id="selected-section" style={{ minHeight: imagesArr.length * imageHeight }}>
        <StickyBox offsetTop={0} offsetBottom={0}>
          <div
            className="image-style"
            style={{
              backgroundImage: `url(${imagesArr[CurrentImageIndex]})`,
              height: imageHeight,
            }}
          />
        </StickyBox>
      </section>
      <section style={{ minHeight: 500, border: "1px solid" }}>
        <div>Section 3</div>
      </section>
    </div>
  )
}

export default App
