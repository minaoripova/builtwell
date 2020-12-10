$(function () {
    const overlay = $('#myModal');
    const overlayImage = overlay.find('img');
    const overlayClose = overlay.find('.close');

    function hideModal(){
        overlay.hide();
        overlayImage.attr('src', '');
    }

    overlayClose.click(function(){
        hideModal();
    });

    $(document).on('click', '.gallery > div > img', function(event) {
        const elem = $(this);
        overlay.show();
        overlayImage.attr('src', elem.attr('src'));
    });
    
    overlay.click(function(){
        hideModal();
    });
});

