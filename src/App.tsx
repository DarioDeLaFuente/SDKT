import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ImageGallery360 } from '@/components/ui/ImageGallery360'
import { ArtistList } from '@/components/ui/arteisList'
import './App.css'
import { useState, useEffect } from 'react'
import { ArtistButtonList } from "./components/ui/artisButtonList"

function App() {
  const [showSignUpForm, setShowSignUpForm] = useState(false)
  const [deviceMotionAllowed, setDeviceMotionAllowed] = useState(false) // Add this state
  const [showArtistList, setShowArtistList] = useState(false)

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


        <div className="mt-2">
          {showSignUpForm && deviceMotionAllowed && (
            <ArtistButtonList
              ariaLabel={showArtistList ? 'Hide artist' : 'Show artist'}
              title={showArtistList ? 'Hide artist' : 'Show artist'}
              onClick={() => setShowArtistList(v => !v)}
            />
          )}
        </div>

        {showArtistList && (
          <ArtistList/>
        )}



        {showSignUpForm && deviceMotionAllowed && ( // Render only if both conditions are true
          <div className="relative z-10 w-[55svh]">
          
        <div className="relative grid w-full mx-auto items-center gap-1 flex justify-center">
        <Sheet>
          <SheetTrigger className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black text-white py-2 px-4 rounded-md shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors uppercase flex justify-center items-center">Karpe World i AR!</SheetTrigger>
          <SheetContent className="bg-white/20 text-white p-2 border rounded-xl border-white md:p-4 backdrop-blur-lg pointer-events-auto pointer-events-auto">
          <div
    aria-hidden
    className="absolute inset-0 -z-10 border rounded-xl  bg-no-repeat scale-x-[-1]"
    style={{
      backgroundImage: "url('/images/Rage.png')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: '160px auto',
      backgroundPosition: 'left bottom',
      animation: 'fade-in 2s ease-in-out'
    }}
  />
            <SheetHeader className="text-white" style={{ animation: 'fade-in 4s ease-in-out' }}>
              <SheetTitle>… dere er snart klare til å oppleve Karpe World AR.</SheetTitle>
              <SheetDescription className="text-white">
               Oppgaven er enkel, men skjebnesvanger:
              </SheetDescription>
              <SheetDescription className="text-white">
              * Finn boksen.
              </SheetDescription>
              <SheetDescription className="text-white">
              * Scan den.
              </SheetDescription>
              <SheetDescription className="text-white">
              * Og se hva som popper opp…
              </SheetDescription>
              <SheetDescription className="text-white">
              Så spenn sansene, følg rytmen i bakken, og la magien begynne –
              for dette er ikke bare en kveld på sletta…
              </SheetDescription>
              <SheetDescription className="text-white">
              dette er en forestilling fra en annen verden.
              </SheetDescription>
              <div className="pt-2 rounded-md">
                <a
                  href="/ar.html"
                  className="inline-flex items-center justify-center rounded-md bg-pink-500 hover:bg-white-600 hover:bg-text-black px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors uppercase"
                >
                  kom en kom alle
                </a>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        </div>
      </div>
  
        )}
    </div>
  )
}

export default App
