import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ImageGallery360 } from '@/components/ui/ImageGallery360'
import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh p-4">
   
      
        <ImageGallery360 
          imageUrl="/images/360/sdkt.jpg"
          autoRotate={true}
        />
      
      <div className="relative z-3">
      <Sheet>
        <SheetTrigger className="text-white bg-black hover:bg-gray-800 p-4">Ta kontakt for å avtale et møte.</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>SDKT Entertainment</SheetTitle>
            <SheetDescription>
            SDKT representerer for øyeblikket 7 forskjellige kunstnere som alle har hver sin måte å uttrykke seg på, enten det er via billedkunst, klær, musikk eller underholdning.
            Ta kontakt for å avtale et møte.
            </SheetDescription>
            <SheetDescription>
            SDKT representerer for øyeblikket 7 forskjellige kunstnere som alle har hver sin måte å uttrykke seg på, enten det er via billedkunst, klær, musikk eller underholdning.
            Ta kontakt for å avtale et møte.
            </SheetDescription>
            <SheetDescription>
            SDKT representerer for øyeblikket 7 forskjellige kunstnere som alle har hver sin måte å uttrykke seg på, enten det er via billedkunst, klær, musikk eller underholdning.
            Ta kontakt for å avtale et møte.
            </SheetDescription>
            <SheetDescription>
            SDKT representerer for øyeblikket 7 forskjellige kunstnere som alle har hver sin måte å uttrykke seg på, enten det er via billedkunst, klær, musikk eller underholdning.
            Ta kontakt for å avtale et møte.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
    </div>
  )
}

export default App
