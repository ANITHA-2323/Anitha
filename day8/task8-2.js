function formValidation()
{
	var uemail = document.registration.email;
	var passid = document.registration.passid;
	if(ValidateEmail(uemail))
	{
	if(passid_validation(passid,7,12))
	{

	}
	}
}

function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
window.location.reload()
return true;
}