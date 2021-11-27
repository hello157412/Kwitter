function adduser()
{
    username = document.getElementById("type").value;
    localStorage.setItem("Username",username);
    window.location = "kwitter_room.html";
}