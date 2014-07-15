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
            this.d = 0;
            this.p1 = new Phaser.Point(200, 300);
            this.p2 = new Phaser.Point(300, 300);
        },

        update : function update() {
            this.p1.rotate(this.p2.x, this.p2.y, this.game.math.wrapAngle(this.d), true);
            this.d++;
        },

        render : function render () {
            var ball = new Phaser.Rectangle(this.p1.x, this.p1.y, 10,10);
            this.game.debug.geom(ball, '#3AFD5D');

        }
    }
});

$(document).ready(function(){
    window.app = new App();
});