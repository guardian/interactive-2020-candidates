const elementSelector = '.uit-maybes__table--titling'
let windowTop, elementPosition, elementHeight;

export default {
    init: function() {
        this.bindings();
        this.setHeights();
        this.onScroll();
    },

    bindings: function() {
        $(window).scroll(function() {
            this.onScroll();
        }.bind(this));

        $(window).resize(function() {
            this.setHeights();
            this.onScroll();
        }.bind(this));

        $(window).on('load', function() {
            this.setHeights();
            this.onScroll();
        }.bind(this));
    },

    setHeights: function() {
        elementPosition = $(elementSelector).removeClass('is-fixed').removeAttr('style').offset().top;
        elementHeight = $(elementSelector).height();
    },

    onScroll: function() {
        windowTop = window.pageYOffset || document.documentElement.scrollTop;

        if (windowTop > elementPosition) {
            $(elementSelector).addClass('is-fixed');
            $(elementSelector).next().attr('style', 'padding-top: ' + elementHeight + 'px;');
        } else {
            $(elementSelector).removeClass('is-fixed');
            $(elementSelector).next().removeAttr('style');
        }
    }
};
