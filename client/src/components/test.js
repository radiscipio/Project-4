// Scroll event for bottom 10%

let tenPercent = () => {
  let scroll = $(window).scrollTop(), 
      docHeight = $(document).height(), 
      winHeight = $(window).height();
  let percent = (scroll / (height-windowHeight)) * 100;
    if (percent >= 90) {
      return true
    }
};

$(window).scroll = () => {
  if (tenPercent()) {
    $(this).off();
  }
  
  let pageHeight = $(document).height();
  let pageWidth = $(window).width();
  
  // Background to 'fade' the screen
  
  let fadeDiv = $('<div id="fadeDiv"></div>.appendTo('body');
      $(fadeDiv).css({
        'position':'fixed',
        'margin': '0 auto',
        'padding': '0',
        'top': '0',
        'left': '0',
        'background-color':'rgba(0,0,0,0.6)',
        'height' : '100%',
        'width' : '100%',
        'z-index': '2'
  });
  let popUp = $('<div id="popUp"></div>').appendTo($(fadeDiv));
$(popUp).empty();

$(popUp).css({
  'background-color':'rgba(255,255,255,0.8)',
  'position':'absolute',
  'left': '20%',
  'top': '15%',
  'z-index': '5',
  'height': '50%',
  'width': '50%'',
  'padding': '30px',
  'overflow': 'scroll'
});

// Close modal

let closeSpan = $('<span id="closeSpan"></span>').appendTo(popUp);
let closeBtn = $('<a id="closeBtn">Close</a>').appendTo($closeSpan));
closeBtn.css({
  'text-align': 'right'
});

$('#closeBtn'.click = () => {
  $(fadeDiv).fadeOut("slow");
});

// Marmot header in the pop up

let logoDiv = $('<div id="logoDiv"></div>').appendTo(popUp);
let logoName = $('<h3 id="logoName">Marmot</h3>').appendTo(logoDiv);
logoName.css({
  'text-align': 'left',
  'font-fmaily': 'ars_maquette_proregular,sans-serif'
});

// Stuff in Cart

let cartStuff = $('<div id="cartStuff"></div>').appendTo(popUp);

//Go to Cart

$('<a href="https://www.marmot.com/cart" id="checkout"><div id="checkoutBtn">Checkout </div></a>').appendTo(cartStuff);
$('#checkoutBtn').css({
  'display: block',
  'margin': '0 auto'
});
};

// Modal pop up on screen with cart info


VM1153:23 Uncaught SyntaxError: missing ) after argument list