'use client'
import { motion, useScroll, useSpring } from "motion/react"
import ImageOne  from "./component/ImageOne"
import ImageTwo from "./component/ImageTwo"
import ImageThree from "./component/ImageThree"
import ImageFour from "./component/ImageFour"
import ImageFive from "./component/ImageFive"
import StyleSheet from "./component/StyleSheet"


export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div>

            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "blue",
                }}
            />
                  <ImageOne />
      <ImageTwo />
      <ImageThree />
      <ImageFour />
      <ImageFive />
      <StyleSheet />
    </div>
  )
}
