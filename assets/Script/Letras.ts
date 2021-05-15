// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    //@property
    //text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () 
    {
        console.log("------ Início Onload --------")
        var manager  = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;

        var game = cc.director.getPhysicsManager();
        game.enabled = true;

        console.log("------ Término Onload --------")
    }
        
        

    onCollisionEnter (other: cc.Collider, self: cc.Collider) {
        //game over
        console.log("------ Colisão --------")
    }

    onBeginContact(contact, selfCollider, otherCollider) {       

        console.log("------ Colisão --------")
        
        console.log(selfCollider.node.name+ '-----' +otherCollider.node.name);
        
    }

}