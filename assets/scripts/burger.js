let isOpen = false;

function OpenClose(isOpen){

    

    $('.burger_line2').css ({
      'transform' : isOpen ? 'rotate(45deg)' : 'rotate(0deg)' 
    });

    $('.burger_line1').css ({
      'transform' : isOpen ? 'translateY(10px) rotate(-45deg)' : 'translateY(0px) rotate(0deg)' 
    });

    $('.burger_line3').css ({
      'display' : isOpen ? 'none' : 'block'
    });

    $('.burger_menu').css ({
      'transform' : isOpen ? 'scaleY(1)' : 'scaleY(0)',
      'transition' : '0.2s all ease-in-out'
    });
    
    $('.burger_menu').css ({
          'display' : isOpen ? 'flex' : 'none'
        });
}

$(document).on('click', '.burger_button', function() {
    isOpen = !isOpen;
    OpenClose(isOpen);
});