function L4dayz(){
    player1=document.getElementById("Inp1").value
    player2=document.getElementById("Inp2").value
    localStorage.setItem("p1",player1)
    localStorage.setItem("p2",player2)
    window.location="game_page.html"
}

