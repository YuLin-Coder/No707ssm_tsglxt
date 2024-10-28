$(function() {

$("#ordersid").blur(
		function() {
			$("#ordersid_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#ordersid").after("<span id='ordersid_msg' style='color: red'>预约单不能为空</span>");
			}
	});

$("#usersid").blur(
		function() {
			$("#usersid_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#usersid").after("<span id='usersid_msg' style='color: red'>用户不能为空</span>");
			}
	});

$("#booksid").blur(
		function() {
			$("#booksid_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#booksid").after("<span id='booksid_msg' style='color: red'>图书不能为空</span>");
			}
	});

$("#num").blur(
		function() {
			$("#num_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#num").after("<span id='num_msg' style='color: red'>评分不能为空</span>");
			}
	});

$("#contents").blur(
		function() {
			$("#contents_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#contents").after("<span id='contents_msg' style='color: red'>内容不能为空</span>");
			}
	});

$("#addtime").blur(
		function() {
			$("#addtime_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#addtime").after("<span id='addtime_msg' style='color: red'>发布日期不能为空</span>");
			}
	});







$('#sub').click(function(){
var ordersid = $("#ordersid").val();
var usersid = $("#usersid").val();
var booksid = $("#booksid").val();
var num = $("#num").val();
var contents = $("#contents").val();
var addtime = $("#addtime").val();
$("#ordersid_msg").empty();
$("#usersid_msg").empty();
$("#booksid_msg").empty();
$("#num_msg").empty();
$("#contents_msg").empty();
$("#addtime_msg").empty();
if (ordersid == "" || ordersid == null) {
	$("#ordersid").after("<span id='ordersid_msg' style='color: red'>预约单不能为空</span>");
	return false;
}
if (usersid == "" || usersid == null) {
	$("#usersid").after("<span id='usersid_msg' style='color: red'>用户不能为空</span>");
	return false;
}
if (booksid == "" || booksid == null) {
	$("#booksid").after("<span id='booksid_msg' style='color: red'>图书不能为空</span>");
	return false;
}
if (num == "" || num == null) {
	$("#num").after("<span id='num_msg' style='color: red'>评分不能为空</span>");
	return false;
}
if (contents == "" || contents == null) {
	$("#contents").after("<span id='contents_msg' style='color: red'>内容不能为空</span>");
	return false;
}
if (addtime == "" || addtime == null) {
	$("#addtime").after("<span id='addtime_msg' style='color: red'>发布日期不能为空</span>");
	return false;
}
});
$('#res').click(function() {
$("#ordersid_msg").empty();
$("#usersid_msg").empty();
$("#booksid_msg").empty();
$("#num_msg").empty();
$("#contents_msg").empty();
$("#addtime_msg").empty();
});

});
