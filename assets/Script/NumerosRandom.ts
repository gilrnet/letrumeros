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
    num1: cc.Label = null;

    @property(cc.Label)
    num2: cc.Label = null;

    @property(cc.Label)
    resp1: cc.Label = null;

    @property(cc.Label)
    resp2: cc.Label = null;

    @property(cc.Label)
    resp3: cc.Label = null;

    onLoad ()  {
        var manager  = cc.director.getCollisionManager();
        manager.enabled = true;
        var game = cc.director.getPhysicsManager();
        game.enabled = true;

        this.num1.string = Math.floor(Math.random() * 10).toString()
        this.num2.string = Math.floor(Math.random() * 10).toString()

        this.resp1.string = (parseInt(this.num1.string) + parseInt(this.num2.string)).toString()
        this.resp2.string = (parseInt(this.num1.string) + parseInt(this.num2.string) + 1).toString()
        this.resp3.string = (parseInt(this.num1.string) + parseInt(this.num2.string) -1).toString()

        var temp = Math.floor(Math.random() * 3)
        var p1;
        var p2;
        var p3;
        console.log(">>>>> "+temp)
        if(temp == 0) {
            p1 = -340;
            p2 = -170;
            p3 = -10;
        } else if(temp == 1) {
            p1 = -170;
            p2 = -10
            p3 = -340
        } else {
            p1 = -10
            p2 = -340
            p3 = -170
        }
        this.resp1.node.setPosition(p1, -120);
        this.resp2.node.setPosition(p2, -120);
        this.resp3.node.setPosition(p3, -120);

        console.log("Num 1: "+this.num1)
    }

}