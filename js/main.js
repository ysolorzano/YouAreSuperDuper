
 $(document).ready(function() {
          $('#myContainer').multiscroll({
            sectionsColor: ['#fff', '#FFF', '#fff', '#fff', '#fff'],
            anchors: ['first', 'second', 'third', 'fourth', 'fifth'],
            menu: '#menu',
            css3: true,
            paddingTop: '70px',
            paddingBottom: '70px'
          });

          var header = document.getElementById('header');
          var active = document.getElementsByClassName("active")

          active.addEventListener('wheel', function() {
            if (classie.has(header,"smaller")) {
              classie.remove(header,"smaller");
            }
            else {
              classie.add(header, "smaller");
            }
          });
        });
