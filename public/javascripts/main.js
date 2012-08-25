
(function() {

    var code = document.getElementById( 'code' );
    var reset = document.getElementById( 'reset' );
    var keys = document.querySelectorAll( '.key' );

    for ( var i=0; i<keys.length; i++ ) {
        keys[ i ].addEventListener( 'click', function() {
            code.value += this.value;
        });
    }

    reset.addEventListener( 'click', function() {
        code.value = '';
    });

})();

