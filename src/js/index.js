function scrollToTarget2(target) {
    jQuery('html, body').animate({
        scrollTop: jQuery("#"+target).offset().top
    }, 600)
}

function toggleMenu(that) {
    menuList = jQuery("#menu-content li")
    for(i=1;i<menuList.length;i++) {
        jQuery(menuList[i]).toggle()
    }
    if(jQuery(that).attr("status") == "true") {
        jQuery(that).text("Ẩn nội dung")
        jQuery(that).attr('status', "false")
    } else {
        jQuery(that).text("Hiện nội dung")
        jQuery(that).attr('status', "true")
    }
}