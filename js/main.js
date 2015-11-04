$(document).ready(function() {
  $('#myContainer').multiscroll({
    sectionsColor: ['#93afcb', '#dbe8f5', '#93afcb', '#dbe8f5', '#93afcb'],
    anchors: ['first', 'second', 'third', 'fourth', 'fifth'],
    menu: '#menu',
    css3: true,
    paddingTop: '70px',
    paddingBottom: '70px',
    afterLoad: function(anchorLink, index){
      if(index === 1){
        $('#header_img').removeClass('resize');
      } else {
        $('#header_img').addClass('resize');
      }
    }
  });

});
