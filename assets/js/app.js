// JavaScript Document

window.onload = init();

function init() {

    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header, "smaller");
        } else {
            if (classie.has(header, "smaller")) {
                classie.remove(header, "smaller");
            }
        }
    });

    $.ajax({
        method: 'GET',
        url: 'https://me.inside-out-project.com/wp-json/wp-api-menus/v2/menus/3',
        dataType: 'json',
        success: function (data) {
            $('nav').hide();
            $('#main').html('');
            var menu = menuBuilder(data.items);
            $('nav').html(menu).slideDown();
           // $('nav').append(menu);
            $("#loaderDiv").fadeOut("slow");
        },
        error: function () {console.log('all is not good');
        }
    });

}


function menuBuilder(obj) {
    let styCls = '';
    var theMenu = '';
    if (obj.length > 0) {
        theMenu = theMenu + '<ul>';
        obj.forEach(function (item) {
            theMenu = theMenu + '<li><a href="#">' + item.title + '</a>';
            if (item.children) {
                theMenu = theMenu + menuBuilder(item.children);
            }
            styCls = (styCls == '')?' class="color"':'';
            $('#main').append('<section'+styCls+'><div class="container"><h1>' + item.title + '</h1></div></section>');
            theMenu = theMenu + '</li>';
        });
        theMenu = theMenu + '</ul>';
    } else {console.log('no data');}
    return theMenu;
}
