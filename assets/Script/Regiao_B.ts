// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

var letra_b = false;
var letra_o = false;


@ccclass
export default class NewClass extends cc.Component {

    onCollisionEnter (other: cc.Collider, self: cc.Collider) {

        console.log(other.node.name + " - "+self.node.name)
        //game over
        if ( ( (other.node.name) == ('b') )&&((self.node.name) == ('sprite_b'))
        ){

            letra_b = true;
        }

        if ( ( (other.node.name) == ('o') )&&((self.node.name) == ('sprite_b'))
        ){

            letra_o = true;
        }
    }

    
update() {
    if(letra_b && letra_o) {
        console.log("Passou de fase")
    }
}
}
