cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         //this.node.opacity=160;
         this.node.on ('touchstart', function(){
             //this.opacity=255;
         },this.node);
         
         
         this.node.on('touchmove',function(e){
             //this.opacity=255;
             var pos = e.touch.getDelta();
             this.x+= pos.x;
             this.y+=pos.y;
         },this.node);
    }
})