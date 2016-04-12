$(document).ready(function(){

  var squares = {
    positions: ['LT','LB','RT','RB'],
    growth: 100,
    growTime: 500,
    init: function(){
      this.cacheDom();
      this.centerElement(this.$center);
      this.bindEvents();
      this.quadSize();
      this.quadPositions(this.positions);
    },
    cacheDom: function(){
      this.$center = $('#center');
      this.$quad = $('.quad');
      this.$LT = $('#LT');
      this.$RT = $('#RT');
      this.$LB = $('#LB');
      this.$RB = $('#RB');
      this.$window = $(window);
      this.$body = $('body');
    },
    bindEvents: function(){
      this.$center.on('mouseenter',this.grow.bind(this.$center)).on('mouseleave',this.shrink.bind(this.$center));
      this.$LT.on('mouseenter',this.grow.bind(this.$LT)).on('mouseleave',this.shrink.bind(this.$LT));
      this.$LB.on('mouseenter',this.grow.bind(this.$LB)).on('mouseleave',this.shrink.bind(this.$LB));
      this.$RT.on('mouseenter',this.grow.bind(this.$RT)).on('mouseleave',this.shrink.bind(this.$RT));
      this.$RB.on('mouseenter',this.grow.bind(this.$RB)).on('mouseleave',this.shrink.bind(this.$RB));
      this.$LT.on('click',this.colorSwap.bind(this.$LT));
      this.$LB.on('click',this.colorSwap.bind(this.$LB));
      this.$RT.on('click',this.colorSwap.bind(this.$RT));
      this.$RB.on('click',this.colorSwap.bind(this.$RB));
    },
    centerElement: function($el){
      var desiredx = this.$window.width()/2-$el.width()/2;
      var desiredy = this.$window.height()/2-$el.height()/2;
      $el.css({left:desiredx,top:desiredy});
    },
    quadSize: function(){
      this.$quad.css({height:this.$window.height()/2,width:this.$window.width()/2});
    },
    quadPositions: function(array){
      for (var i = 0; i < array.length; i++) {
        if (array[i][0]==='L') {
          $('#'+array[i]).css({left:0});
        }
        else {
          $('#'+array[i]).css({left:squares.$window.width()/2});
        }
        if (array[i][1]==='T') {
          $('#'+array[i]).css({top:0});
        }
        else {
          $('#'+array[i]).css({top:squares.$window.height()/2});
        }
      }
    },
    grow: function(){
      this.css({zIndex:6});
      this.animate({
        width: "+="+squares.growth+"px",
        height:"+="+squares.growth+"px",
        top:"-="+squares.growth/2+"px",
        left:"-="+squares.growth/2+"px"
      }, squares.growTime);
    },
    shrink: function(){
      this.animate({
        width: "-="+squares.growth+"px",
        height:"-="+squares.growth+"px",
        top:"+="+squares.growth/2+"px",
        left:"+="+squares.growth/2+"px"
      }, squares.growTime);
      this.css({zIndex:1});
    },
    colorSwap: function(){
      var color = this.css("background-color");
      this.css({backgroundColor: squares.$center.css("background-color")});
      squares.$center.css({backgroundColor: color});
    }
  };
  squares.init();

}); //end
