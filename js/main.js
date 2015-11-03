$(document).ready(function() {
  $('#myContainer').multiscroll({
    sectionsColor: ['#fff', '#FFF', '#fff', '#fff', '#fff'],
    anchors: ['first', 'second', 'third', 'fourth', 'fifth'],
    menu: '#menu',
    css3: true,
    paddingTop: '70px',
    paddingBottom: '70px',
    afterLoad: function(anchorLink, index){
      if(index === 1){
        console.log('index 1') // debug
        $('#header_img').removeClass('resize');
      } else {
        $('#header_img').addClass('resize');
      }
    }
  });
});
