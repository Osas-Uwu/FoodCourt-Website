document.addEventListener('DOMContentLoaded', function() {

    const navbar = $('#divScroll')
    const navlink = $('#divScroll .anchor')

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        if(scrollPosition > 0) {
            // divScroll.classList.add('bg-white');
            navbar.addClass('bg-white')
            navlink.addClass('text-black').removeClass('text-white')
            
        } else{
            divScroll.classList.remove('bg-white');
            navlink.addClass('text-white').removeClass('text-black')
        }
        
    });

    $(document).ready(function() {
        // Get references to the image elements
        const originalImage = $('#original-image');
        const replacementImage = $('#replacement-image');
    
        // Function to handle scroll event
        $(window).scroll(function() {
          // Check if the scroll position is greater than a certain value (adjust as needed)
          if ($(this).scrollTop() > 0) {
            // Replace the original image with the replacement image
            originalImage.hide();
            replacementImage.show();
          } else {
            // Show the original image and hide the replacement image
            originalImage.show();
            replacementImage.hide();
          }
        });
      });
    const anchorElement = document.getElementsByClassName('anchor');

    window.addEventListener('scroll', function() {
        const scrollpositi = window.scrollY;

        if (scrollpositi > 0) {
            anchorElement.classList.remove('text-white');
            anchorElement.classList.add('text-black');
        } else{
            anchorElement.classList.remove('text-black');
            anchorElement.classList.add('text-white');
        }
    });

    const buttonElement = document.getElementsByClassName('button1');

    window.addEventListener('scroll', function() {
        const scrollup = window.scrollY;

        if (scrollup > 100) {
            buttonElement.classList.remove('bg-white');
            buttonElement.classList.add('bg-red-700');
        } else{
            buttonElement.classList.remove('bg-red-700');
            buttonElement.classList.add('bg-white');
        }
    });

    
});