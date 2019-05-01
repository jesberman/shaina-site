function menuFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(document).ready(function () {
    $(".nav-collections-share").mouseover(function () {
        // $("#nav-collections-div").fadeIn(200);
        $("#nav-collections-div").removeClass("hide");
        $("#nav-collections-div").addClass("show");

    });
    $(".nav-collections-share").mouseout(function () {
        $("#nav-collections-div").removeClass("show");
        $("#nav-collections-div").addClass("hide");
    });

    $(".nav-about-share").mouseover(function () {
        // $("#nav-about-div").fadeIn(200);
        $("#nav-about-div").removeClass("hide");
        $("#nav-about-div").addClass("show");
    });
    $(".nav-about-share").mouseout(function () {
        $("#nav-about-div").removeClass("show");
        $("#nav-about-div").addClass("hide");
    });

    $(".nav-contact-share").mouseover(function () {
        $("#nav-contact-div").removeClass("hide");
        $("#nav-contact-div").addClass("show");
    });
    $(".nav-contact-share").mouseout(function () {
        $("#nav-contact-div").removeClass("show");
        $("#nav-contact-div").addClass("hide");
    });

    $(".nav-blog-share").mouseover(function () {
        $("#nav-blog-div").removeClass("hide");
        $("#nav-blog-div").addClass("show");
    });
    $(".nav-blog-share").mouseout(function () {
        $("#nav-blog-div").removeClass("show");
        $("#nav-blog-div").addClass("hide");
    });
});
