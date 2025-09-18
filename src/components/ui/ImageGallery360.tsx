// src/components/ImageGallery360.tsx

import 'aframe'
import { Entity, Scene } from 'aframe-react'
import { useEffect } from 'react'

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
  className?: string
  onDeviceMotionAllowed?: () => void
}

function ImageGallery360({
  imageUrl,
  autoRotate = true,
  className,
  onDeviceMotionAllowed
}: ImageGallery360Props) {

  useEffect(() => {
    let hasGrantedPermission = false;

    function handleDeviceOrientation() {
      if (!hasGrantedPermission) {
        hasGrantedPermission = true;
        onDeviceMotionAllowed?.();
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      }
    }

    // Only add listener if the callback is provided
    if (onDeviceMotionAllowed) {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }

    return () => {
      // Clean up the listener if component unmounts or callback changes
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [onDeviceMotionAllowed]); // Re-run effect if callback changes

  return (
    <div className={`fixed inset-0 w-full h-full ${className || ''}`}>
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