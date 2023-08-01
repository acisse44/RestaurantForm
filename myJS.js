function createEmail() {
    var first = document.getElementById("uname").value[0];
    var add = "@brooklyn.cuny.edu";

    var last = document.getElementById("Lname").value.substring(0,4);
    var userName = first.concat(last);
    window.alert("Hello", userName + add);

}