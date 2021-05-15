// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

var map = new Map([['2', false], ['3', false], ['4', false]]);

@ccclass
export default class LetraBola extends cc.Component {

    @property (cc.Prefab)
    joinhaPrefab: cc.Prefab = null; 

    @property (cc.Prefab)
    opostoJoinhaPrefab: cc.Prefab = null; 

    @property (cc.Prefab)
    atualizarPrefab: cc.Prefab = null; 

    @property (cc.Prefab)
    avancarPrefab: cc.Prefab = null; 

    mostrarJoinha(param) {
        var obj = param ? this.joinhaPrefab : this.opostoJoinhaPrefab;
        var joinha = cc.instantiate(obj);
        this.node.addChild(joinha);
        joinha.setPosition(150, -20);
    }

    mostrarAtualizar() {
        var atualizar = cc.instantiate(this.atualizarPrefab);
        this.node.addChild(atualizar);
        atualizar.setPosition(-100, -180);
        atualizar.on('touchstart', function(){
            cc.director.loadScene('Numeros');
        });
    }

    mostrarAvancar() {
        var avancar = cc.instantiate(this.avancarPrefab);
        this.node.addChild(avancar);
        avancar.setPosition(-100, -180);
        avancar.on('touchstart', function(){
            cc.director.loadScene('Numeros_01');
        });
    }

    youWin() {
        if (map.get('2')) {
            console.log("You Win")
            this.mostrarJoinha(true)
            this.mostrarAvancar()
        }
    }

    youLose() {
        if (map.get('3') || map.get('4') ) {
            console.log("You Lose")
            this.mostrarJoinha(false)
            this.mostrarAtualizar();
        }     
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (self.node.name == 'result1') {
            map.set(other.node.name, true);
        }
        console.log("Map: " + map.get(other.node.name))
    }

    onCollisionExit(other: cc.Collider, self: cc.Collider) {
        if (self.node.name == 'result1') {
            map.set(other.node.name, false);
        }
    }

    update() {
        this.youWin()
        this.youLose()
        /*
        map.forEach(function (letra, i) {
            console.log('[forEach]', letra, i);
        })*/
    }
}
