$("#search-button").on("click", function () {

    var searchValue = $("#search").val();

    var request = $.ajax({
        url: "https://api.github.com/search/users?q=" + searchValue,
        method: "GET"
    });

    request.done(function (response) {
        console.log(response);
        for (var i = 0; i < 3; i++) {

            var login_name = response.items[i].login;
            var avatar = response.items[i].avatar_url;
            var imgAndInfo = $("#first");
            var item = $('<div class="card col-3 offset-1" style="width: 18rem;">' +
                '<img class="card-img-top" src="' + avatar + '" alt="Card image cap">' +
                '<div class="card-body">' +
                '<p class="card-text">' + login_name + '</p>' +
                '</div>' +
                '</div>')

            imgAndInfo.append(item);


        }
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

});
