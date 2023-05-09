
let pawns = document.querySelectorAll('.pawn-icon');
document.addEventListener('click', function(e){
  let classPawn = e.target.classList;
  if(!classPawn.contains('active')){
    pawns.forEach(function(pawn){
      pawn.classList.remove('active');
    });
    classPawn.add('active');
    console.log(e.target.getAttribute('data-rating'));
  }
});

