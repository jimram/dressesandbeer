/* Author:

*/


  WebFontConfig = {
    google: { families: [ 'Cabin:700:latin', 'Copse::latin' ] }
  };

  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  
  })();
  
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    var settings = {
      'minFontSize' : Number.NEGATIVE_INFINITY,
      'maxFontSize' : Number.POSITIVE_INFINITY
    };

    return this.each(function(){
      var $this = $(this); // store the object
var compressor = kompressor || 1; // set the compressor
        
      if ( options ) {
        $.extend( settings, options );
      }
        
      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).resize(resizer);
      
    });

  };

})( jQuery );
	
	$("#banner").find('h1').fitText(1.2, { minFontSize: '32px', maxFontSize: '72px' });


