import React, { useEffect, useRef } from 'react'

const Hero = () => {
    const VideoRef =useRef();
    useEffect(()=>{
        if(VideoRef.current) VideoRef.current.playbackRate=2;

    },[])
  return (
    <section id='hero'>
        <div>
            <h1> Macbook Pro</h1>
            <img src='/public/title.png' />

        </div>
        <video ref={VideoRef} src='/public/videos/hero.mp4' autoPlay  muted playsInline/>
        <button>
            Buy
        </button>
        <p> From ₹1,29,999 or ₹11,999 for 12 months</p>
    </section>
  )
}

export default Hero