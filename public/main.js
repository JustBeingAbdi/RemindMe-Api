function createApiKey() {
    document.getElementById("buttontext").textContent = "Creating....";
    let request = new XMLHttpRequest();
    request.open("GET", "/api/key");
    request.send();

    setTimeout(function() {
        let respons = request.response;
        if(!respons) return document.getElementById("buttontext").textContent = "Error! Something went wrong :(";
        console.log(`Api key: ${respons}`);

        document.getElementById("buttontext").textContent = `Your new Api key is: ` + "`" + respons + "`";

    }, 2000)
}