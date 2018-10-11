

window.onload = init();


// the following function is what resizes the header on scroll

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });



        $.ajax({
            method: 'GET',
            url: 'assets/data/menu.json',
            dataType: 'json',
            success: function (data) {

                console.log('all good');
                console.log(data.menu.length);
                console.log(data.menu);

                if (data.menu.length > 0) {
                      $('nav').html('');
                    data.menu.forEach(function (data) {

                        console.log(data.MenuName);
                        console.log(data.MenuLink);

                        $('nav').append('<a href="' + data.MenuLink + '">' + data.MenuName + '</a>');

                    });
                }else{
                  console.log("no menu items");
                }

            },
            error: function () {
                console.log('all is not good');
            }
        });







}
