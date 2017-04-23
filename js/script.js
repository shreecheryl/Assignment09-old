
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
    
    // Contact Form
    
    $(":checkbox, :radio").checkboxradio();
    $("#companysize").selectmenu();
    
    var dialog;
    dialog = $("#thankYou").dialog({
            autoOpen: false,
            height: 100,
            width: 350,
            modal: true,
            close: function() {
                $("#contactform").submit();
                window.history.go(0);
            }
    });
    $(":submit").on("click", function (event) {
        event.preventDefault();
        dialog.dialog("open");
        $("button").blur();
    });

}); // end of document ready
        
