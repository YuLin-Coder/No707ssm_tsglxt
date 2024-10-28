$(function() {

$("#isbn").blur(
		function() {
			$("#isbn_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#isbn").after("<span id='isbn_msg' style='color: red'>ISBN不能为空</span>");
			}
	});

$("#booksname").blur(
		function() {
			$("#booksname_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#booksname").after("<span id='booksname_msg' style='color: red'>图书名称不能为空</span>");
			}
	});

$("#cateid").blur(
		function() {
			$("#cateid_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#cateid").after("<span id='cateid_msg' style='color: red'>图书类型不能为空</span>");
			}
	});

$("#image").blur(
		function() {
			$("#image_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#image").after("<span id='image_msg' style='color: red'>图书图片不能为空</span>");
			}
	});

$("#author").blur(
		function() {
			$("#author_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#author").after("<span id='author_msg' style='color: red'>图书作者不能为空</span>");
			}
	});

$("#publisher").blur(
		function() {
			$("#publisher_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#publisher").after("<span id='publisher_msg' style='color: red'>出版社不能为空</span>");
			}
	});

$("#storage").blur(
		function() {
			$("#storage_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#storage").after("<span id='storage_msg' style='color: red'>库存数量不能为空</span>");
			}
	});

$("#contents").blur(
		function() {
			$("#contents_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#contents").after("<span id='contents_msg' style='color: red'>图书介绍不能为空</span>");
			}
	});







$('#sub').click(function(){
var isbn = $("#isbn").val();
var booksname = $("#booksname").val();
var cateid = $("#cateid").val();
var image = $("#image").val();
var author = $("#author").val();
var publisher = $("#publisher").val();
var storage = $("#storage").val();
var contents = $("#contents").val();
$("#isbn_msg").empty();
$("#booksname_msg").empty();
$("#cateid_msg").empty();
$("#image_msg").empty();
$("#author_msg").empty();
$("#publisher_msg").empty();
$("#storage_msg").empty();
$("#contents_msg").empty();
if (isbn == "" || isbn == null) {
	$("#isbn").after("<span id='isbn_msg' style='color: red'>ISBN不能为空</span>");
	return false;
}
if (booksname == "" || booksname == null) {
	$("#booksname").after("<span id='booksname_msg' style='color: red'>图书名称不能为空</span>");
	return false;
}
if (cateid == "" || cateid == null) {
	$("#cateid").after("<span id='cateid_msg' style='color: red'>图书类型不能为空</span>");
	return false;
}
if (image == "" || image == null) {
	$("#image").after("<span id='image_msg' style='color: red'>图书图片不能为空</span>");
	return false;
}
if (author == "" || author == null) {
	$("#author").after("<span id='author_msg' style='color: red'>图书作者不能为空</span>");
	return false;
}
if (publisher == "" || publisher == null) {
	$("#publisher").after("<span id='publisher_msg' style='color: red'>出版社不能为空</span>");
	return false;
}
if (storage == "" || storage == null) {
	$("#storage").after("<span id='storage_msg' style='color: red'>库存数量不能为空</span>");
	return false;
}
if (contents == "" || contents == null) {
	$("#contents").after("<span id='contents_msg' style='color: red'>图书介绍不能为空</span>");
	return false;
}
});
$('#res').click(function() {
$("#isbn_msg").empty();
$("#booksname_msg").empty();
$("#cateid_msg").empty();
$("#image_msg").empty();
$("#author_msg").empty();
$("#publisher_msg").empty();
$("#storage_msg").empty();
$("#contents_msg").empty();
});

});
