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
   
      
        <ImageGallery360 className="z-[-2]"
          imageUrl="/images/360/bakgrunn.avif"
          autoRotate={true}
        />
        
        {showSignUpForm && (
          <div className="relative z-[-1] w-[55svh]">
          <div className="relative h-[15svh]  w-[55svh] flex justify-center  text-white pt-4"><Label htmlFor="email" className="text-xl">Meld deg på forhåndssalget</Label></div>
          <div className="relative bg-white/80 text-black p-8 backdrop-blur-lg pointer-events-auto">
        <div className="grid w-full max-w-sm items-center gap-3 flex justify-center">
        <Input type="email" id="email" placeholder="Din epost" />
        
        <Sheet>
          <SheetTrigger className="text-white bg-black hover:bg-gray-800 p-5 w-[40svh] flex justify-center">Meld deg på</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>HEI</SheetTitle>
              <SheetDescription>
              RING MEG .
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        </div>
      </div>
      </div>
        )}
    </div>
  )
}

export default App
