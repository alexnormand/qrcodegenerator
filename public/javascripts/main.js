(function (window, document, undefined) {
    
     getQRCode = function (e) {
        e.preventDefault();
        e.stopPropagation();
    
         var text = encodeURIComponent(document.querySelector('input').value.trim());
         
    

        window.location = window.location.href + text;        
    };


    document.querySelector('button')
            .addEventListener('click', getQRCode, false);

    document.querySelector('input').addEventListener('keypress', function(e) {
         if (e.keyCode === 13) {
             getQRCode(e);
         }
    }, false);
                              
                                                     
})(this, this.document);
