// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

var map = new Map([['sapo', false], ['pato', false], ['gato', false], ['rato', false]]);

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

    itensRegiao = 0;
    mostrarJoinha(param) {
        var obj = param ? this.joinhaPrefab : this.opostoJoinhaPrefab;
        var joinha = cc.instantiate(obj);
        this.node.addChild(joinha);
        joinha.setPosition(150, -10);
    }

    mostrarAtualizar() {
        var atualizar = cc.instantiate(this.atualizarPrefab);
        this.node.addChild(atualizar);
        atualizar.setPosition(-50, -220);
        atualizar.on('touchstart', function(){
            cc.director.loadScene('Letras_01');
        });
    }

    mostrarAvancar() {
        var avancar = cc.instantiate(this.avancarPrefab);
        this.node.addChild(avancar);
        avancar.setPosition(-50, -220);
        avancar.on('touchstart', function(){
            cc.director.loadScene('Conclusao');
        });
    }

    youWin() {
        if (map.get('sapo') && this.itensRegiao < 2) {
            console.log("You Win")
            this.mostrarJoinha(true)
            this.mostrarAvancar()
        }
    }

    youLose() {
        var contador = 0;
        if (map.get('pato') || map.get('gato') || map.get('rato')) {
            console.log("You Lose")
            this.mostrarJoinha(false)
            this.mostrarAtualizar();
        }
        /*
        map.forEach(function (letra, i) {
            if(letra && i != 'bola') contador ++;
            if(contador == 1) {
                console.log("You Lose")
                this.mostrarAtualizar();
            }
            //console.log('[forEach]', letra, i);
        })*/        
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        this.itensRegiao++;
        if (self.node.name == 'sp-letra') {
            map.set(other.node.name, true);
        }
        //console.log("Map: " + map.get(other.node.name))
    }

    onCollisionExit(other: cc.Collider, self: cc.Collider) {
        this.itensRegiao--;
        if (self.node.name == 'sp-letra') {
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
