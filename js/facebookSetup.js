//You should insert it directly after the opening <body> tag on each page you want to load it:
//<script type="text/javascript" src="../js/facebookSetup.js"></script>

window.fbAsyncInit = function() {
    FB.init({
            appId      : '752986251511997',
            xfbml      : true,
            version    : 'v2.5'
            });
};

function importFacebookSDK(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
};

importFacebookSDK(document, 'script', 'facebook-jssdk'));
