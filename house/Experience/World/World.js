import Room from "./Room"
import Environment from "./Environment"
import Experience from "../Experience";
import * as THREE from "three"

export default class World{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        //Creates world after receiving "ready" event
        this.resources.on("ready", ()=> {
            this.environment = new Environment();
            this.room = new Room();
        });

    }

    resize(){

    }

    update(){

        
    }
}