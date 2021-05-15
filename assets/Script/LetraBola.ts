// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import Letras from './Letras';

var map = new Map([['b', false], ['o', false], ['l', false], ['a', false], ['i', false], ['j', false]]);

@ccclass
export default class LetraBola extends cc.Component {

    @property (cc.Prefab)
    joinhaPrefab: cc.Prefab = null; 

    @property (cc.Prefab)
    atualizarPrefab: cc.Prefab = null; 

    @property (cc.Prefab)
    avancarPrefab: cc.Prefab = null; 

    mostrarJoinha() {
        var joinha = cc.instantiate(this.joinhaPrefab);
        this.node.addChild(joinha);
        joinha.setPosition(10, 200);
    }

    mostrarAtualizar() {
        var atualizar = cc.instantiate(this.atualizarPrefab);
        this.node.addChild(atualizar);
        atualizar.setPosition(-250, 120);
    }

    mostrarAvancar() {
        var avancar = cc.instantiate(this.avancarPrefab);
        this.node.addChild(avancar);
        avancar.setPosition(-250, 120);
    }

    youWin() {
        if (map.get('b') && map.get('o') && map.get('l') && map.get('a')) {
            console.log("You Win")
            this.mostrarJoinha()
            this.mostrarAvancar()
            //console.log(">>>>> "+this.node.getChildByName("b").setPosition(20, 0))
            //this.node.getChildByName("o").setPosition(20, 0)
            //this.node.getChildByName("l").setPosition(40, 0)
            //this.node.getChildByName("a").setPosition(40, 0)
        }
    }

    youLose() {
        var contador = 0;
        map.forEach(function (letra, i) {
            if(letra) contador ++;
            if(contador == 4) {
                console.log("You Lose")
                this.mostrarAtualizar()
            }
            //console.log('[forEach]', letra, i);
        })
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (self.node.name == 'sp-letra') {
            map.set(other.node.name, true);
        }
        this.youWin()
        this.youLose()
        //console.log("Map: " + map.get(other.node.name))
    }

    onCollisionExit(other: cc.Collider, self: cc.Collider) {
        if (self.node.name == 'sp-letra') {
            map.set(other.node.name, false);
        }
    }

    update() {
        
    }
}
