import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
const cursirRef = useRef(null);
const cursorBorderRef = useRef(null);


//Mobile screen cursor hide
const isMobile= typeof window !== "undefined" && window.matchMedia("(max-width:768px)").matches;
if(isMobile)
{
    return null;
}

useEffect(()=>{
    //get cursor
    const cursor = cursirRef.current;
    const cursorBorder = cursorBorderRef.current

gsap.set([cursor,cursorBorder],{
    xPercent: -50,
    yPercent: -50,
})
const xTo = gsap.quickTo(cursor,"x",{
    duration:0.2, ease:"power3.out"
})

const yTo = gsap.quickTo(cursor,"y",{
    duration:0.2, ease:"power3.out"
})
const xToBorder = gsap.quickTo(cursorBorder,"x",{
    duration:0.5, ease:"power1.out"
})
const yToBorder = gsap.quickTo(cursorBorder,"y",{
    duration:0.5, ease: "power3.out"
})

const handlemouseMove = (e)=>{
    xTo(e.clientX)
    yTo(e.clientY)
    xToBorder(e.clientX)
    yToBorder(e.clientY)
}

window.addEventListener("mousemove",handlemouseMove)

document.addEventListener("mousedown",()=>{
    gsap.to([cursor,cursorBorder],{
        scale:0.6,
        duration:0.2,

    })
})

document.addEventListener("mouseup",()=>{
    gsap.to([cursor,cursorBorder],{
        scale:0.6,
        duration:0.2,

    })
})

},[])

  return (
<>
<div
ref={cursirRef}
className='fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference'
/>
<div
ref={cursorBorderRef}
className='fixed top-0 left-0 w-[40px] h-[40px] border rounded-full border-white pointer-events-none z-[999] mix-blend-difference opacity-50 '
/>
</>
)
}

export default CustomCursor