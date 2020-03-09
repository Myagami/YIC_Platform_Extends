$(document).ready(function () {
    //何かしらの処理
    $.ajax({
        type: 'get',
        url: "header.html",
        dataType: 'html',
        success: function (data) {
            $("header").append(data);
        }
    });

    $.ajax({
        type: 'get',
        url: "footer.html",
        dataType: 'html',
        success: function (data) {
            $("footer").append(data);
        }
    });
});