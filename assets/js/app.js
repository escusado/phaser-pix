Class('App').inherits(Widget)({
    prototype : {
        init : function init(config){
            Widget.prototype.init.call(this, config);

            this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
                preload: this.preload.bind(this),
                create: this.create.bind(this),
                update: this.update.bind(this),
                render: this.render.bind(this)
            });

            return;
        },

        preload : function preload() {
            console.log('>preload');
        },

        create : function create() {
            floor = new Phaser.Rectangle(0, 550, 800, 50);
        },

        update : function update() {
            console.log('>update');
        },

        render : function render () {
            this.game.debug.geom(floor,'#0fffff');
        }
    }
});

$(document).ready(function(){
    window.app = new App();
});