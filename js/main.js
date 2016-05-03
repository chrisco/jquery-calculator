$(document).ready(function() {

	$("#calc").click(function() {
		var calcThis = $("#screen").text();
		var result = eval(calcThis);
		$("#screen").text(result);
	})

	$("span").click(function() {
		$("#screen").append($(this).text());
	})

	$("#cancel").click(function() {
		$("#screen").text("");
	})
})
