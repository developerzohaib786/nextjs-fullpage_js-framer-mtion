'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'motion/react'

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}


function ImageFour() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    return (
        <section id='4' className="img-container bg-blue-200">
            <motion.div initial={{ opacity: 0, y: -70 }}         
      whileInView={{ opacity: 1, y: 0 }}       
      transition={{ duration: 2, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }} ref={ref} className="bg-blue-200">
  <img src="/4.png" alt="My Image" className="w-full max-w-md bg-blue-200 mx-auto"    />            
    </motion.div>
        </section>
    )
}


export default ImageFour

    
