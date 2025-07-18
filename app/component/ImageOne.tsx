'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'motion/react'

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}


function ImageOne() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    return (
        <section id='1' className="img-container bg-green-300">
            <motion.div ref={ref}  initial={{ opacity: 0, y: -70 }}         
      whileInView={{ opacity: 1, y: 0 }}       
      transition={{ duration: 2, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}>
  <img   src="/1.png" alt="My Image" className="w-full bg-green-300 max-w-md mx-auto" />
              </motion.div>
        </section>
    )
}


export default ImageOne

    
