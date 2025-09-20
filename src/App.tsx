import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ImageGallery360 } from '@/components/ui/ImageGallery360'
import { Label } from "@/components/ui/label"
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [showSignUpForm, setShowSignUpForm] = useState(false)
  const [deviceMotionAllowed, setDeviceMotionAllowed] = useState(false) // Add this state

  useEffect(() => {
    let timer: number; // Changed from NodeJS.Timeout to number
    if (deviceMotionAllowed) { // Only start timer if device motion is allowed
      timer = setTimeout(() => {
        setShowSignUpForm(true)
      }, 5000)
    }

    return () => clearTimeout(timer)
  }, [deviceMotionAllowed]) // Re-run effect when deviceMotionAllowed changes

  return (
    
    <div className="flex flex-col items-center justify-center min-h-svh p-4">
   
      
        <ImageGallery360
          className="z-0"
          imageUrl="/images/360/bakgrunn.avif"
          autoRotate={true}
          onDeviceMotionAllowed={() => setDeviceMotionAllowed(true)} // Pass callback
        />
        
        {showSignUpForm && deviceMotionAllowed && ( // Render only if both conditions are true
          <div className="relative z-10 w-[55svh]">
          <div className="relative h-[10svh] w-[55svh] flex justify-center  text-white pt-4"><Label htmlFor="email" className="uppercase col-span-3 text-2xl md:text-3xl">Mine damer og herrer!</Label></div>
          <div className="relative bg-white/20 text-white p-2 border rounded-xl border-white md:p-4 backdrop-blur-lg pointer-events-auto pointer-events-auto">
        <div className="grid w-full max-w-sm items-center gap-1 flex justify-center">
      
        
        <Sheet>
          <SheetTrigger className="w-full bg-black text-white py-2 px-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed uppercase cursor-pointer">Karpe World i 3D!</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Velkommen til Karpe World</SheetTitle>
              <SheetDescription>
               Åpne AR-kameran for å oppleve Karpe World i 3D!
              </SheetDescription>
              <div className="pt-2 rounded-md">
                <a
                  href="/ar.html"
                  className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors uppercase"
                >
                  kom en kom alle
                </a>
              </div>
            </SheetHeader>
          </SheetContent>
          <div className="w-full text-[8px] md:text-xs mt-2 text-left text-white-500">Ved å clike på knappen over godtar du <a className="underline" href="/personvern">personvernerklæringen</a></div>
        </Sheet>
        </div>
      </div>
      </div>
        )}
    </div>
  )
}

export default App
