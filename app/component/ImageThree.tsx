'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'motion/react'

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}


function ImageThree() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    return (
        <section id='3' className="img-container bg-red-500">
            <motion.div       initial={{ opacity: 0, y: -70 }}         
      whileInView={{ opacity: 1, y: 0 }}       
      transition={{ duration: 2, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }} ref={ref}>
                <img src="/3.png" alt="My Image" className="w-full bg-red-500 max-w-md mx-auto"/>
            </motion.div>
        </section>
    )
}


export default ImageThree
