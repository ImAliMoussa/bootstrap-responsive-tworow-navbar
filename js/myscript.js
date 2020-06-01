$(document).ready(function () {
    let resizeTimer;
    const divEl = $('#trdiv');
    const bottom_row = $('#navbar-bottom-row');
    const milliseconds = 150;

    const collapseOnResize = () => {
      console.log('function is called');
      if (divEl.is(':visible')) {
        bottom_row.collapse('hide');
      } else {
        bottom_row.collapse('show');
      }
    }
    $(window).on('resize', function (e) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(collapseOnResize, milliseconds);
    });
  });