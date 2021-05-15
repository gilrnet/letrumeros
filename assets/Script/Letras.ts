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

    @property (cc.Prefab)
    joinhaPrefab: cc.Prefab = null; 

    @property
    xMin: number = -656;
    @property 
    xMax: number = 200;
    @property 
    yMin: number =300;
    @property
    yMax: number = 312;

    win() {
        var joinha = cc.instantiate(this.joinhaPrefab);
        this.node.addChild(joinha);
        var posx = this.xMin + Math.random() * (this.xMax - this.xMin);
        var posy = this.yMin + Math.random() * (this.yMax - this.yMin);
        joinha.setPosition(posx,posy);
    }

    onLoad ()  {
        console.log("------ Início Onload --------")
        var manager  = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;

        var game = cc.director.getPhysicsManager();
        game.enabled = true;

        console.log("------ Término Onload --------")

        this.win()
    }

}