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
        cc.director.getCollisionManager();
        var manager = cc.director.getCollisionManager();
            manager.enabled = true;
            manager.enabledDebugDraw = true;
            manager.enabledDrawBoundingBox = true;

        var game = cc.director.getPhysicsManager();
            game.enabled=true;
            
    }

    onBeginContact(contact, selfCollider, otherCollider) {       
        
        console.log(selfCollider.node.name+ '-----TESTE------' +otherCollider.node.name);
        
    }

    onCollisionEnter (other: cc.Collider, self: cc.Collider) {
        //game over
        cc.log("game over");
    }

    start () {

    }

    // update (dt) {}
}