//Spinner
$('.btn--spinner-demo--a').on('click', function() {
    $('.demo--a').spinner('show');
});

$('.btn--spinner-clear-a').on('click', function() {
    $('.demo--a').spinner('hide');
});

$('.btn--spinner-demo--b').on('click', function() {
    $('.demo--b').spinner({
        text: 'Loading...',
        spinnerClass: 'spinner__element--simple'
    });

    $('.demo--b').spinner('show');
});

$('.btn--spinner-clear-b').on('click', function() {
    $('.demo--b').spinner('hide');
});

$('.btn--spinner-body').on('click', function() {
    $('body').spinner({
        text: 'Loading...',
        show: true,
        closeable: true
    });
    setTimeout(function() {
        $('body').spinner('hide')
    }, 2000);
});


// Modal
$(document).ready(function() {
    $('#demo--full').on('click', function(e) {
        e.preventDefault();
        $('body').modal({
            content: '<div class="modal__header"><h1 class="h2">Modal Title</h1><button type="button" title="close" data-close="modal" class="modal__close"><i class="icon icon--close" aria-hidden="true"></i><span class="invisible">close</span></button></div><div class="modal__body" data-region="modal-body">Modal Content</div><div class="modal__footer"><div class="btn-group align-right"><button type="button" class="btn btn--primary" data-close="modal">Accept</button></div></div>'
        });
        $('body').modal('show');
    });

    $('#demo--target').on('click', function(e) {
        e.preventDefault();
        if (!$('.demo--target').hasClass('modal-parent')) {
            $('.demo--target').modal({
                content: '<div class="modal__header"><span class="h2">Modal Title</span><button type="button" title="close" data-close="modal" class="modal__close"><i class="icon icon--close" aria-hidden="true"></i><span class="invisible">close</span></button></div><div class="modal__body" data-region="modal-body">Modal Content</div><div class="modal__footer"><div class="btn-group"><button type="button" class="btn btn--primary" data-close="modal">Accept</button></div></div>'
            });
            $('.demo--target').modal('show');
        };

    });
});


// Utils
$(document).on('click', '[data-toggle]', function() {
    var target = $($(this).attr('data-toggle'))
    actualText = ''
    newText = '';

    if (target.hasClass('show')) {
        actualText = "box show";
        newText = "box hide";
    } else {
        actualText = "box hide";
        newText = "box show";
    }

    $('#toggling-content span.s').each(function() {
        var text = $(this).text();
        text = text.replace(actualText, newText);
        $(this).text(text);
    });

    $($(this).attr('data-toggle')).toggleClass('hide').toggleClass('show');

});