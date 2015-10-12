(function($) {
  var soundBoard = {
    init: function() {
      this.domCaching();
      this.events();
    },
    domCaching: function() {
      this.$body = $('body');
      this.$navToggle = $('.nav-toggle');
    },
    events: function() {
      this.$navToggle.on("click", this.toggleNavigation);
    },
    toggleNavigation: function() {
      $('body').toggleClass("navigation-open");
    }
  };
  $(function() {
    soundBoard.init();
  });
})(jQuery);
