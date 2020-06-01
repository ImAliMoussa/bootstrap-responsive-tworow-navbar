$(document).ready(function () {
    const divEl = $('#trdiv');
    const bottom_row = $('#navbar-bottom-row');
    const milliseconds = 150;
    
    const collapseOnResize = () => {
        if (divEl.is(':visible')) {
            bottom_row.collapse('hide');
        } else {
            bottom_row.collapse('show');
        }
    }
    
    
    // call on init in case window was opened initially in a small screen
    collapseOnResize(); 
    
    
    // window resize event
    let resizeTimer;
    $(window).on('resize', (e) => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(collapseOnResize, milliseconds);
    });
  });