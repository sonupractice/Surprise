function verifyName(name) {
    name = name.toLowerCase();
    if(name === "priyanka" || name === "priya") {
        return true;
    } else {
        return false;
    }
}

function respond() {
    var name = document.getElementById("name").value;
    var parentEle = document.getElementById("main");
    if(verifyName(name)) {
        var imgEle = document.createElement("img");
        imgEle.src = "https://media.tenor.com/images/0a1652de311806ce55820a7115993853/tenor.gif";
        parentEle.append(imgEle);

        var msgEle = document.createElement("h2");
        msgEle.innerHTML = "Love you Baby";
        parentEle.appendChild(msgEle);
    } else {
        var msgEle = document.createElement("h4");
        msgEle.innerHTML = "Baby this is not your Name.";
        parentEle.appendChild(msgEle);
    }
}