(function ($) {
    $(function () {

        $('.amber__title').addClass("amber").removeClass('hidden');

        $('.amber__line_top').addClass("amberLine").removeClass('hidden');

        $('.amber__text').addClass("amberText").removeClass('hidden');

        $('.fadeInAnimate').addClass("hidden").viewportChecker({
            classToAdd: 'visible',
            classToRemove: 'hidden',
            offset: 30
        });

        $('.contacts__form').addClass("hidden").viewportChecker({
            classToAdd: 'visible',
            classToRemove: 'hidden',
            removeClassAfterAnimation: true,
            offset: 30
        });

        $('#projects').addClass("hidden").viewportChecker({
            classToAdd: 'projects',
            classToRemove: 'hidden',
            offset: 30
        });

        $('#research').addClass("hidden").viewportChecker({
            classToAdd: 'research',
            classToRemove: 'hidden',
            offset: 30
        });

        $('#smart').addClass("hidden").viewportChecker({
            classToAdd: 'smart',
            classToRemove: 'hidden',
            offset: 30
        });

        $('#chart').addClass("hidden").viewportChecker({
            classToAdd: 'chart',
            classToRemove: 'hidden',
            offset: 30
        });

        $('#leaf').addClass("hidden").viewportChecker({
            classToAdd: 'leaf',
            classToRemove: 'hidden',
        });

        $('#stem').addClass("hidden").viewportChecker({
            classToAdd: 'stem',
            classToRemove: 'hidden',
        });

        $('#fl-1').addClass("hidden").viewportChecker({
            classToAdd: 'fl-1',
            classToRemove: 'hidden',
        });

        $('#fl-2').addClass("hidden").viewportChecker({
            classToAdd: 'fl-2',
            classToRemove: 'hidden',
        });

        $('#fl-3').addClass("hidden").viewportChecker({
            classToAdd: 'fl-3',
            classToRemove: 'hidden',
        });

        $('#fl-4').addClass("hidden").viewportChecker({
            classToAdd: 'fl-4',
            classToRemove: 'hidden',
        });

        $('#fl-5').addClass("hidden").viewportChecker({
            classToAdd: 'fl-5',
            classToRemove: 'hidden',
        });

        // Маска ввода телефона
        $('#phone').mask('+7 (999) 999-9999', {autoclear: false});

        // Плавная прокрутка
        $('.menuAnchor').on('click', e => {
            e.preventDefault();

            const link = $(e.target).attr('href');

            let top = $(link).offset().top;
            $('body, html').animate({scrollTop: top}, 1000);
        })
    })
})(jQuery);
