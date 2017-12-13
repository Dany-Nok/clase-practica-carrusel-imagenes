$(document).ready(function() {
  var imgItems = $('.slider li').length; // ESTA VARIABLE CUENTA LA CANTIDAD DE IMÁGENES PARA MOSTRAR EN CARRUSEL
  var imgPosition = 1;

  for(i = 1; i <= imgItems; i++) {
    $('.pagination').append('<li><i class="fa fa-paw fa-2x"></i></li>');
  }
  /* $(".pagination").append('<li><span class="fa fa-paw fa-2x" aria-hidden="true"></span></li>');
  ESTO VA A IR AGREGANDO "HUELLITAS" A MEDIDA QUE VAR IMGITEMS LE INDIQUE LA CANTIDAD DE IMAGENES QUE TIENE */

  $('.slider li').hide(); // ESCONDE TODAS LAS IMÁGENES QUE SE VAN A COLOCAR EN EL CARRUSEL
  $('.slider li:first').show(); // MUESTRA SOLO LA PRIMERA IMAGEN
  $('.pagination li:first').css({'color': 'blue'}); // LE DA COLOR A LA "PRIMERA HUELLITA" QUE INDICA EL N° DE LA IMAGEN QUE SE ESTA MOSTRANDO


  // FUNCIONES QUE SE VAN A EJECUTAR
  $('.pagination li').click(pagination);
  $('right span').click(nextSlider);
  $('left span').click(prevSlider);


  setInterval(function(){
    nextSlider();
  }, 5000);

  //FUNCIONES A DEFINIR
  function pagination(){

    var paginationPosition = $(this).index() + 1; /* MUESTRA LA POSICION DE LA IMAGEN SELECCIONADA */

    $('.slider li').hide(); /* OCULTA TODAS LAS IMAGENES */
    $('.slider li:nth-child('+ paginationPosition +')').fadeIn(); /* MUESTRA LA IMAGEN SELECCIONADA */

    /* DEFINE ESTILOS A LA IMAGEN SELECCIONADA AL HACERLE CLICK */
    $(".pagination li").css({'color':'#858585'});
    $(this).css({'color':'blue'});

    imgPosition = paginationPosition;
  }

  function nextSlider() {
    if(imgPosition >= imgItems) {
      imgPosition = 1;
    } else {
      imgPosition++;
    }

    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child(' + imgPosition + ')').css({'color': 'blue'});

    $('.slider li').hide(); /* OCULTA TODAS LAS IMAGENES */
    $('.slider li:nth-child('+ imgPosition +')').fadeIn(); /* MUESTRA LA IMAGEN SELECCIONADA */

  }

  function prevSlider() {
    if(imgPosition <= 1) {
      imgPosition = imgItems;
    } else {
      imgPosition--;
    }

    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+ imgPosition +')').css({'color':'blue'});

    $('.slider li').hide(); /* OCULTA TODAS LAS IMAGENES */
    $('.slider li:nth-child('+ imgPosition +')').fadeIn(); /* MUESTRA LA IMAGEN SELECCIONADA */

  }

});
