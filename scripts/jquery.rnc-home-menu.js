;
(function ($, window, document, undefined) {
  /* Create the defaults once */
  var pluginName = "homeMenu",
    defaults = {
      speed: 500
    },
    width = $(window).width(),
    sizedWidth = Math.floor(width * .80),
    left = sizedWidth,
    pieces = '.ui-header-fixed, .ui-footer-fixed',
    wrapper = 'rnc-page-wrapper',
    findParentPage = function(ptr) {
      return $(ptr).parents(":jqmData(role='page')");
    },
    myAnimate = function(animateTo, callback) {
      var $page = this.$page,
        speed = this.options.speed;

      $('#'+wrapper).animate({
          left: animateTo
        },{
          step: function(now, fx) {
            $page.find(pieces).css('left',now);
          },
          complete: function() {
            if(callback){ callback(); }
          }
        },
        this.options.speed);
    };

  function Plugin(element, options) {
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.element = element;
    this.state = false;
    this.$page = findParentPage(element);

    this.init();
  }

  Plugin.prototype = {
    init:function () {
      var that = this;

      $('.activator').click(function (evt) {
        evt.preventDefault();
        if(that.state){
          myAnimate.call(that, 0, function() {that.$page.unwrap();});
        } else {
          that.$page.wrap('<div id="' + wrapper + '" class="rnc-home-wrapper" />');
          myAnimate.call(that, left);
        }
        that.state = !that.state;
        return false;
      });
    }
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };

})(jQuery, window, document);