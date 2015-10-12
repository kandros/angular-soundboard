(function($) {

  // domCaching
  var $body = $('body'),
      $navToggle = $('#toggle');


  var soundBoard = {
    init: function() {
      this.events();
    },
    events: function() {
      $navToggle.on("click", this.toggleNavigation);
    },
    toggleNavigation: function() {
      $body.toggleClass("navigation-open");
      $navToggle.toggleClass("on");
    }
  };
  $(function() {
    soundBoard.init();
  });
})(jQuery);
