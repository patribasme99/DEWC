function loadJSON() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var JSONObject = JSON.parse(xhr.responseText);

            for (i = 0; i < JSONObject.length; i++) {
                document.getElementById('listado').innerHTML += '<p>Title: ' + JSONObject[i].title + '</p>'+
                    '<p>Body: ' + JSONObject[i].body + '</p>';
            }
        }
    }
    xhr.open("GET", "http://jsonplaceholder.typicode.com/posts", true);
    xhr.send();
}