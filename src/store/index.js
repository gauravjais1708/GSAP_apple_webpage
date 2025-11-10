
import { create } from "zustand";   
const useMacbookStore = create((set) =>({

    color:'#2e2c2e',
    setColor :(color)=> set({color}),
    
    texture: '/videos/feature-1.mp4',
    setTexture: (texture) => set({ texture }),

    scale:0.08,
    setScale:(scale)=> set({scale}),
    reset:()=> set({color : '#2e2c2e',scale:0.08,texture: '/videos/feature-1.mp4'}),

    
}))
export default useMacbookStore;