
function toggleAuthMode(mode) {
    const isSignup = mode === "login";

    $('.login_toggle').css({
        "pointer-events": isSignup ? "none" : "all",
        "background-color": isSignup ? "#4A6FFE" : "rgb(236, 235, 235)", 
        "color": isSignup ? "white" : "#4A6FFE"
    });

    $('.signup_toggle').css({
        "pointer-events": isSignup ? "all" : "none",
        "background-color": isSignup ? "rgb(236, 235, 235)" : "#4A6FFE", 
        "color": isSignup ? "#4A6FFE" : "white" 
    });

    $('.login_form').css({
        "display": isSignup ? "flex" : "none",
    });

    $('.signup_form').css({
        "display": isSignup ? "none" : "flex",
    });

    $('.login_signup_form').css({
        "height": isSignup ? "350px" : "500px",
    });


    $('.login_signup_form h4').html(isSignup ? "Вход" : "Регистрация");
}

$('.signup_toggle').on('click', function() {
    toggleAuthMode("signup");
});

$('.login_toggle').on('click', function() {
    toggleAuthMode("login");
});

$(document).ready(function() {
    $('.login_toggle').on('click', toggleAuthMode("login"));
    $('.signup_toggle').on('click', toggleAuthMode("signup"));

    toggleAuthMode("login");
});

