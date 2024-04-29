document.addEventListener('DOMContentLoaded', function() {
 
    const squares = document.querySelectorAll('.square');

    
    squares.forEach(square => {
        square.addEventListener('click', function() {
            squares.forEach(otherSquare => {
                otherSquare.style.top = '0px';
            });
            square.style.top = '-10px'; 
        });
    });
});