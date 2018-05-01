$.getJSON("https://api.github.com/repos/SiG-FSTM/sig-fstm.github.io/contributors", function (data) {

	$.each(data, function (i, field) {
		$("#members").append("<div class='member-badge'>" + field.login + "</div>");
	});
});