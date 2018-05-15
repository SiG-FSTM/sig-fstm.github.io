$.getJSON("https://api.github.com/repos/SiG-FSTM/sig-fstm.github.io/contributors", function (data) {

	$.each(data, function (i, member) {
		$("#members").append("<a href='"+ member.html_url +"' target='_blank'><div><img src='" + member.avatar_url + "'><div><p>" + member.login + "</p><p>" + member.contributions + " contributions!</p></div></div></a>");
	});
});