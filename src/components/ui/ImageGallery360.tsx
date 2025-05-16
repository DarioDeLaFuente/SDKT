// src/components/ImageGallery360.tsx

import 'aframe'
import { Entity, Scene } from 'aframe-react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': any;
      'a-entity': any;
      'a-assets': any;
      'a-sky': any;
    }
  }
}

interface ImageGallery360Props {
  imageUrl: string
  title?: string
  autoRotate?: boolean
}

function ImageGallery360({ 
  imageUrl, 
  autoRotate = true 
}: ImageGallery360Props) {
  return (
    <div className="fixed inset-0 w-full h-full z-1">
      <Scene
        embedded
        vrModeUi="enabled: false"
        renderer="antialias: true"
        deviceOrientationPermissionUi="enabled: false"
      >
        <Entity primitive="a-assets">
          <img id="skyTexture" src={imageUrl} crossOrigin="anonymous" />
        </Entity>

        <Entity
          primitive="a-sky"
          src="#skyTexture"
          rotation="0 -90 0"
        />

        {autoRotate && (
          <Entity
            animation="property: rotation; to: 0 360 0; loop: true; dur: 100000; easing: linear"
          />
        )}

        <Entity camera look-controls>
          <Entity
            primitive="a-cursor"
            id="cursor"
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
            animation__fusing="property: fusing; startEvents: fusing; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500"
          />
        </Entity>
      </Scene>
    </div>
  )
}

export { ImageGallery360 }