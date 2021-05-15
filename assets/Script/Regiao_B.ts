// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

var letra_b = false;
var letra_o = false;
var letra_l = false;
var letra_a = false;
var letra_i = false;
var letra_g = false;

var map = new Map([['b', false], ['o', false], ['l', false], ['a', false], ['i', false], ['j', false]]);


@ccclass
export default class NewClass extends cc.Component {

    onLoad() {
        map.forEach(function (nome, i) {
            console.log('[forEach]', nome, i);
        })
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (self.node.name == 'sp-letra') {
            map.set(other.node.name, true);
        }
        console.log("Map: " + map.get(other.node.name))
    }

    onCollisionExit(other: cc.Collider, self: cc.Collider) {
        if (self.node.name == 'sp-letra') {
            map.set(other.node.name, false);
        }
    }

    update() {
        if (map.get('b') && map.get('o') && map.get('l') && map.get('a')) {
            console.log("You Win")
        }

        var contador = 0;
        map.forEach(function (letra, i) {
            if(letra) contador ++;
            if(contador == 4) {
                console.log("You lose");
            }
        })

    }
}
