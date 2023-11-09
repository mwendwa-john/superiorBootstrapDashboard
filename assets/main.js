// $('#bar').click(function() {
//     $(this).toggleClass('open');
//     $('#page-content-wrapper, #sidebar-wrapper').toggleClass('toggled');
// });

// Get the 'bar' element by its ID
var bar = document.getElementById('bar');

// Get the elements with IDs 'page-content-wrapper' and 'sidebar-wrapper'
var pageContentWrapper = document.getElementById('page-content-wrapper');
var sidebarWrapper = document.getElementById('sidebar-wrapper');

// Add a click event listener to the 'bar' element
bar.addEventListener('click', function() {
    // Toggle the 'open' class on the 'bar' element
    if (bar.classList.contains('open')) {
        bar.classList.remove('open');
    } else {
        bar.classList.add('open');
    }

    // Toggle the 'toggled' class on the 'page-content-wrapper' and 'sidebar-wrapper' elements
    if (pageContentWrapper.classList.contains('toggled')) {
        pageContentWrapper.classList.remove('toggled');
        sidebarWrapper.classList.remove('toggled');
    } else {
        pageContentWrapper.classList.add('toggled');
        sidebarWrapper.classList.add('toggled');
    }
});
