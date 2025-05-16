/// <reference types="aframe" />

// src/types/aframe.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "a-scene": any;
    "a-entity": any;
    "a-assets": any;
    "a-sky": any;
  }
}

declare module "aframe-react" {
  import { Component } from "react";
  export class Entity extends Component<any> {}
  export class Scene extends Component<any> {}
}
