import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ImageGallery360 } from '@/components/ui/ImageGallery360'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [showSignUpForm, setShowSignUpForm] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSignUpForm(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    
    <div className="flex flex-col items-center justify-center min-h-svh p-4">
   
      
        <ImageGallery360 className="z-0"
          imageUrl="/images/360/bakgrunn.avif"
          autoRotate={true}
        />
        
        {showSignUpForm && (
          <div className="relative z-10 w-[55svh]">
          <div className="relative h-[15svh]  w-[55svh] flex justify-center  text-white pt-4"><Label htmlFor="email" className="uppercase col-span-3 text-2xl md:text-4xl">utsolgt!</Label></div>
          <div className="relative bg-white/20 text-white p-2 border rounded-xl border-white md:p-4 backdrop-blur-lg pointer-events-auto pointer-events-auto">
        <div className="grid w-full max-w-sm items-center gap-3 flex justify-center">
        <Input className="w-full px-1 py-2 rounded-none border-t-0 border-r-0 border-l-0 border-b-1 border-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed" type="email" id="email" placeholder="Din epost" />
        
        <Sheet>
          <SheetTrigger className="w-full bg-black text-white py-2 px-4  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed uppercase cursor-pointer">KARPE WORLD NYHETSBREV</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>HEI</SheetTitle>
              <SheetDescription>
              RING MEG .
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
          <div className="w-full text-[8px] md:text-xs mt-2 text-left text-white-500">Ved å melde deg på godtar du <a className="underline" href="/personvern">personvernerklæringen</a></div>
        </Sheet>
        </div>
      </div>
      </div>
        )}
    </div>
  )
}

export default App
