import Experience from "../Experience"
import * as THREE from "three"

export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;

        this.setModel();
        
    }

    setModel(){
        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.11, 0.11, 0.11)
        this.actualRoom.rotation.y = Math.PI;
    }

    
    resize(){

    }

    update(){

        
    }
}