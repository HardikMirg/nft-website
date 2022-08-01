let move = document.getElementsByClassName("move");

document.onmousemove = (e) => {
    let x = e.clientX * 5 / window.innerHeight + "%";
    let y = e.clientY * 5 / window.innerHeight + "%";

    for ( let i = 0; i < 2; i++){
        setTimeout(() => {
            move[i].style.transform = "translate(-"+x+",-"+y+")";    
        }, 100);        
        
    }
}
