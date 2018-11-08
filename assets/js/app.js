// inside out project STEP-106

window.onload = init();

function init() {

    window.addEventListener('scroll', function(e) {
      console.log();
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


    apiCaller(3);
    getPage(314);

    $.ajax({
        method: 'GET',
        url: 'https://me.inside-out-project.com/wp-json/wp-api-menus/v2/menus/12',
        dataType: 'json',
        success: function (data) {
            var menu = menuBuilder(data.items, 'genLinks', 'footer-ul');
            $('#genLinks').replaceWith(menu);
            $('#genLinks li a').click(function () {
                getPage($(this).data("pgid"));
            });
        },
        error: function () {
            errorHandler('We are having issues loading the General Links Menu.');
        }
    });
}

function apiCaller(pgId,currentMenu){
  let curMenu = '';
  curMenu = currentMenu;

  $.ajax({
      method: 'GET',
      url: 'https://me.inside-out-project.com/wp-json/wp-api-menus/v2/menus/'+pgId,
      dataType: 'json',
      success: function(data) {
          $('nav').hide();
          var menu = menuBuilder(data.items);
          if(curMenu == 'mainMenu'){
            $('nav').html(menu).slideDown();
            $('nav li a').click(function() {
                getPage($(this).data("pgid"));
            });
          }
          $("#loaderDiv").fadeOut("slow");
      },
      error: function() {
          errorHandler('We are having issues loading the Main Menu.');
      }
  });


}


function errorHandler(erMsg){
  console.log('all is not good');
  let msg = '<div class="alert alert-danger" role="alert" style="text-align:center;">';
  msg = msg+'There is curently a technical problem with the site.';
  msg = msg+'<br>'+erMsg;
  msg = msg+'<br>Please try again in a few minutes.';
  msg = msg+'<br>If the problem continues please feel free to contact us at 555-555-5555.';
  msg = msg+'</div>'
  $('#main').prepend(msg).slideDown();
  $("#loaderDiv").fadeOut("slow");
}

function menuBuilder(obj, targetEl, classInfo) {

    var theMenu = '';
    if (obj.length > 0) {
      //console.log(targetEl);
        let target = (targetEl)?' id="'+targetEl+'"':'';
        let elClass = (classInfo)?' class="'+classInfo+'"':'';
        theMenu = theMenu + '<ul' + target + ''+ elClass + '>';
        //console.log(target);
        obj.forEach(function (item) {
            theMenu = theMenu + '<li><a href="#" data-pgid="' + item.object_id + '">' + item.title + '</a>';
           if (item.children) {
                theMenu = theMenu + menuBuilder(item.children);
            }
            theMenu = theMenu + '</li>';
        });
        theMenu = theMenu + '</ul>';
    } else {
        //console.log('no data');
    }
    return theMenu;
}

function getPage(obj) {
    $("#loaderDiv").fadeIn("slow");
    $.ajax({
        method: 'GET',
        url: 'https://me.inside-out-project.com/wp-json/wp/v2/pages/' + obj,
        dataType: 'json',
        success: function(data) {
            var pgbuild = '';
            pgbuild = '<section><div class="container">' + data.content.rendered + '</div></section>';
            $("#content").fadeOut(function() {
                $('html').animate({
                    scrollTop: 0
                }, 'slow'); //IE, FF
                $('body').animate({
                    scrollTop: 0
                }, 'slow'); //chrome, don't know if Safari works
                $(this).html(pgbuild).fadeIn();
                $("#loaderDiv").fadeOut("slow");
            });
        },
        error: function() {
            errorHandler('We are having issues loading the page.');
        }
    });
}
