import * as THREE from "three"

import Experience from "./Experience"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
//import { Camera } from "three";
import Camera from "./Camera"

export default class Renderer{


    constructor(){
        this.experience = new Experience();
        this.camera3 = new Camera();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;

        this.setRenderer();

    }

    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true});
    
        //Attributes for desired render output
        this.renderer.physicallyCorrectLights = true;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.CineonToneMapping; //enables tone map
        this.camera.toneMappingExposure = 1.75;
        this.renderer.shadowMap.enabled = true; //enables shadows
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio); //sets pixel ratio
    }

    resize(){
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio); 
    }

    update(){

        this.renderer.render(this.scene, this.camera.perspectiveCamera)
    }
}
