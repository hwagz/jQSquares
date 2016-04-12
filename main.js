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
      this.$center = $('.center');
      this.$quad = $('.quad')
      this.$LT = $('#LT');
      this.$RT = $('#RT');
      this.$LB = $('#LB');
      this.$RB = $('#RB');
      this.$window = $(window);
      this.$body = $('body');
    },
    bindEvents: function(){
      this.$center.on('mouseenter',this.grow(this.$center)).on('mouseleave',this.shrink(this.$center));
      //this.$quad.on('mouseenter',this.grow.bind(this));
    },
    centerElement: function($el){
      var desiredx = this.$window.width()/2-$el.width()/2;
      var desiredy = this.$window.height()/2-$el.height()/2;
      $el.css({left:desiredx,top:desiredy});
    },
    quadSize: function(){
      this.$quad.css({height:this.$window.height()/2,width:this.$window.width()/2})
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
    grow: function(el){
      el.animate({
        width: "+="+squares.growth+"px",
        height:"+="+squares.growth+"px",
        top:"-="+squares.growth/2+"px",
        left:"-="+squares.growth/2+"px"
      }, squares.growTime);
    },
    shrink: function(el){
      el.animate({
        width: "-="+squares.growth+"px",
        height:"-="+squares.growth+"px",
        top:"+="+squares.growth/2+"px",
        left:"+="+squares.growth/2+"px"
      }, squares.growTime);
    }
  };
  squares.init();


}); //end
