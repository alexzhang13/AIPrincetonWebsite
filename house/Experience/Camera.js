import * as THREE from "three"

import Experience from "./Experience"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);        
    }
    
    //Creates a Camera, with parameters FOV, aspect ratio, near, far)
    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(70, this.sizes.aspect, .1, 1000);
        this.perspectiveCamera.position.z = 5;
        this.scene.add(this.perspectiveCamera)
    }

    //Creates an orthographic camera with necessary parameters
    createOrthographicCamera(){
        this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) /2,
            (this.sizes.aspect * this.sizes.frustrum) /2,
            this.sizes.frustrum/2,
            -this.sizes.frustrum/2,
            -100,
            100
        );
        this.scene.add(this.orthographicCamera)

        //grid helper and axes helper 
        const size = 10;
        const divisions = 10;
        const gridHelper = new THREE.GridHelper( size, divisions );
        this.scene.add( gridHelper );
        const axesHelper = new THREE.AxesHelper( 10 );
        this.scene.add( axesHelper ); 
    }

    //Resizes the camera parameters when window size changes
    resize(){
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        this.orthographicCamera.left = (-this.sizes.aspect *this.sizes.frustrum) /2;
        this.orthographicCamera.right = (this.sizes.aspect *this.sizes.frustrum) /2;
        this.orthographicCamera.top = this.sizes.frustrum/2;
        this.orthographicCamera.bottom = -this.sizes.frustrum/2;
        this.orthographicCamera.updateProjectionMatrix();
    }

    update(){

        this.controls.update();
    }
}


