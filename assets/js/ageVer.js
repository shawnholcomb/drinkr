// Timeout to trigger modal
setTimeout(function(){
    $('#modal').toggle();
}, 500);

// Function to check age based on user input
function checkAge() {
    var min_age = 21;
    var year = parseInt(document.forms["age_form"]["year"].value);
    var month = parseInt(document.forms["age_form"]["month"].value);
    var day = parseInt(document.forms["age_form"]["day"].value);
    var theirDate = new Date((year + min_age), month, day);
    var today = new Date;
    var age = (today.getTime() - theirDate.getTime());
    console.log(today-theirDate);

    if ((today.getTime() - theirDate.getTime()) < 0) {
        window.location.href = ("http://www.nickjr.com/paw-patrol/");
        return false;
    }
    else {

        $('#modal').toggle();

        return false;
    }
}

$('#age-submit').on("click", checkAge);

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=348556779073518&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  FB.api('/me', {fields: 'last_name'}, function(response) {
    console.log(response);
  });