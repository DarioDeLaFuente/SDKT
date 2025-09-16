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
          imageUrl="/images/360/bakgrunn.avif"
          autoRotate={true}
        />
      
      <div className="relative z-3">
      <Sheet>
        <SheetTrigger className="text-white bg-black hover:bg-gray-800 p-4">Meld deg på forhåndssalget</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>HEI DET ER MEG</SheetTitle>
            <SheetDescription>
            RING MEG MIKE @ KARPEWORLD.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
    </div>
  )
}

export default App
