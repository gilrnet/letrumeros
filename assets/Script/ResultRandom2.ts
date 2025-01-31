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

    joinha = null;
    status = 0;
    obj = null;
    avancar = null;
    atualizar = null;
    itensRegiao = 0;
    mostrarJoinha(param) {
        this.obj = param ? this.joinhaPrefab : this.opostoJoinhaPrefab;
        this.joinha = cc.instantiate(this.obj);
        this.node.addChild(this.joinha);
        this.joinha.setPosition(-100, 120);
    }

    mostrarAtualizar() {
        this.atualizar = cc.instantiate(this.atualizarPrefab);
        this.node.addChild(this.atualizar);
        this.atualizar.setPosition(-100, -180);
        this.atualizar.on('touchstart', function(){
            cc.director.loadScene('SubtracaoRandom');
        });
    }

    mostrarAvancar() {
        this.avancar = cc.instantiate(this.avancarPrefab);
        this.node.addChild(this.avancar);
        this.avancar.setPosition(-100, -180);
        this.avancar.on('touchstart', function(){
            cc.director.loadScene('Conclusao');
        });
    }

    youWin() {
        if (this.status == 1) {
            console.log("You Win")
            this.mostrarJoinha(true)
            this.mostrarAvancar()
            this.status = 0;
        }
    }

    youLose() {
        console.log("You Lose")
        if (this.status == 2) {
            console.log("You Lose")
            this.mostrarJoinha(false)
            this.mostrarAtualizar();
            this.status = 0;
        }     
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        this.itensRegiao++;
        console.log("Colision enter: >>>>>>>> "+self.node.name+ " " + other.node.name)
        if ((self.node.name == 'result1') && (other.node.name == 'resp2') || 
                    (self.node.name == 'result1') && (other.node.name == 'resp3')) {
                        console.log("status 2")
            this.status = 2;
        } else if (((self.node.name == 'result1') && (other.node.name == 'resp1')) && this.itensRegiao < 2) {
            this.status = 1;
        };
    }

    onCollisionExit(other: cc.Collider, self: cc.Collider) {
        this.status = 0;
        this.itensRegiao--;
        if(this.joinha != null) this.joinha.destroy();
        if(this.avancar != null) this.avancar.destroy();        
        if(this.atualizar != null) this.atualizar.destroy();      
    }

    update() {
        
        if(this.status != 0) {
            console.log("verificar status")
            this.youWin()
            this.youLose()
        }
        /*
        map.forEach(function (letra, i) {
            console.log('[forEach]', letra, i);
        })*/
    }
}
