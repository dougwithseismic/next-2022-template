import { useState, useEffect } from 'react'

/** useScrollProgress Hook -
 *
 */

export const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0.001)

    useEffect(() => {
        const clamp = (value, min, max) => Math.max(Math.min(value, max), min) // We don't want to be below 0 or above 1

        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight
            const ratio = window.scrollY / (totalHeight - window.innerHeight) // Because of the way the scrollY position is calculated, the ratio never reaches 0 or one unless we subtract the window height from the total height.
            const clamped = clamp(ratio, 0.001, 1) // We don't want to return a zero value because we'll end up passing NaN into the width and that won't be class.
            setScrollProgress(clamped)
        }

        window.addEventListener('scroll', (e) => handleScroll(e))

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return { scrollProgress, setScrollProgress }
}
