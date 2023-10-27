"use client"
import { motion } from "framer-motion"

// const variants = {
//     hidden: { opacity: 0, x: -200, y: 0 },
//     enter: { opacity: 1, x: 0, y: 0 },
// }

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
            // variants={variants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "linear" }}
        >
            {children}
        </motion.main>
    )
}