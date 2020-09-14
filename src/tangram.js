import React from 'react'
import { motion } from 'framer-motion'

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Tangram ({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256.15 268.88"
      style={style}
    >
      {/* M277,56.3c0,28.47-22.14,40.8-40.8,40.8C213.55,97.1,197.1,80.5,197.1,58c0-25.3,19-40.64,40.17-40.64C261.63,17.4,277,34.64,277,56.3Z */}
      <motion.path
        initial={{
          d: `
            M 277 56.3
            c 0 28.47 -22.14 40.8 -40.8 40.8
            C 213.55 97.1 197.1 80.5 197.1 58
            c 0 -25.3 19 -40.64 40.17 -40.64
            C 261.63 17.4 277 34.64 277 56.3
            Z          
          `,
          strokeWidth: '2px',
          scale: 0.2,
          x: -1000
        }}
        animate={{
          d: `
            M 277 56.3
            c 0 28.47 -22.14 40.8 -40.8 40.8
            C 213.55 97.1 197.1 80.5 197.1 58
            c 0 -25.3 19 -40.64 40.17 -40.64
            C 261.63 17.4 277 34.64 277 56.3
            Z          
          `,
          stroke: '#c69925',
          strokeWidth: ['2px', '10px', '2px'],
          scale: 1,
          x: 0
        }}
        transition={{ strokeWidth: { loop: Infinity }, duration: 1 }}
        fill="#e8bd4b"
        strokeWidth="0"
        stroke="#c69925"
        transform="translate(-22.28 -15.63)"
      />
      <motion.path
        fill="#1d7186"
        stroke="#1d7186"
        strokeMiterlimit="10"
        initial={{
          d: `M 276 146
            L 111 143
            A 2 2 0 0 0 109 147
            L 199 230
            A 2 2 0 0 0 202 230
            L 277 150
            A 2 2 0 0 0 276 146
            Z`,
          x: -1000,
          y: -1000    
        }}
        animate={{
          d: `M 276 146
            L 111 143
            A 2 2 0 0 0 109 147
            L 199 230
            A 2 2 0 0 0 202 230
            L 277 150
            A 2 2 0 0 0 276 146
            Z`,
          rotate: 360,
          x: 0,
          y: 0
        }}
        transition={{ duration: 2 }}
        transform="translate(-22.28 -15.63)"
      />
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#e8bd4b"
        stroke="#e8bd4b"
        strokeWidth="0.75"
        d="M78,18.66,74.08,56.88A2.4,2.4,0,0,1,71.44,59L26.05,54a2.41,2.41,0,0,1-1-4.44L74.34,16.38A2.41,2.41,0,0,1,78,18.66Z"
        transform="translate(-22.28 -15.63)"
      />
      <motion.path
        fill="#7ebf40"
        stroke="#7ebf40"
        strokeMiterlimit="10"
        d="M85.66,19,79.47,79.08a2.41,2.41,0,0,0,.79,2L118,114.75a2.41,2.41,0,0,0,4-1.56l6.42-62.33a2.42,2.42,0,0,0-.86-2.11L89.59,17.39A2.41,2.41,0,0,0,85.66,19Z"
        transform="translate(-22.28 -15.63)"
      />
      <motion.path
        fill="#239140"
        stroke="#239140"
        strokeMiterlimit="10"
        d="M104.12,152.43l136.4,127.4a2.41,2.41,0,0,1-1.65,4.17l-144.66-.43a2.41,2.41,0,0,1-2.4-2.57l8.26-127A2.41,2.41,0,0,1,104.12,152.43Z"
        transform="translate(-22.28 -15.63)"
      />
      <motion.path
        fill="#1d7186"
        stroke="#1d7186"
        strokeMiterlimit="10"
        d="M89.87,151,24.39,211.77a2.4,2.4,0,0,0-.23,3.4L80.36,276a2.41,2.41,0,0,0,4.22-1.4L93.87,153A2.41,2.41,0,0,0,89.87,151Z"
        transform="translate(-22.28 -15.63)"
      />
      <motion.path
        fill="#7ebf40"
        stroke="#7ebf40"
        strokeMiterlimit="10"
        d="M26.85,198.82,65.18,163.2a2.42,2.42,0,0,0,0-3.52l-38.36-33a2.41,2.41,0,0,0-4.06,1.63l0,68.67A2.41,2.41,0,0,0,26.85,198.82Z"
        transform="translate(-22.28 -15.63)"
      />
      <motion.path
        fill="#239140"
        stroke="#239140"
        strokeMiterlimit="10"
        d="M25.33,111.93,73.1,85.69a2.41,2.41,0,0,1,3,.18l38.61,34.88a2.41,2.41,0,0,1-.11,3.67L73.23,154.84a2.41,2.41,0,0,1-3.23-.2l-45-39A2.41,2.41,0,0,1,25.33,111.93Z"
        transform="translate(-22.28 -15.63)"
      />
    </svg>
  )
}

export default Tangram
