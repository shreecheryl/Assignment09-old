
$(function () {
    "use strict";
    
    $('#responsive-menu').mobileMenu();
    
    // General Tool Tip
    $(document).tooltip();
    
    // Home Page Tabs
    $("#tabs").tabs();
    
    // Home Page Accordion
    $("#accordion").accordion();
    
    // About Us Tabs
    
    $("#tabsManagement").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabsManagement li").removeClass("ui-corner-top").addClass("ui-corner-left");
    
    // Contact Form Radio Buttons and Checkboxes
    
    $(":checkbox, :radio").checkboxradio();

}); // end of document ready
        
