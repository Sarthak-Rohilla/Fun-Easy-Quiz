Btn1 = document.querySelector("button").addEventListener("click", backgroundChangeB1);
Btn2 = document.querySelectorAll("button")[1].addEventListener("click", backgroundChangeB2);

function backgroundChangeB1() {
    var h = document.createElement("H1");
    var t = document.createTextNode("Oops, correct answer is 'Jahangir'."); 
    h.appendChild(t); 
    document.body.appendChild(h);
    this.style.backgroundColor = '#ff8080';
    document.querySelectorAll("button")[1].style.backgroundColor = "lightgreen";
    this.disabled = true;
    document.querySelectorAll("button")[1].disabled = true;
    h.style["color"] = 'red';
    h.style.position = "absolute";
    h.style.left = '440px';
    h.style.top = "380px";
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "> Next >";                   
    document.body.appendChild(btn); 
    btn.style.textDecoration = "underline";
    btn.style.color = "blue";
    btn.style.backgroundColor = '#DCDCDC';
    btn.style.border = "none";
    btn.style.width = "130px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "large";
    btn.style.height = "60px";
    btn.style.position = "absolute";
    btn.style.right = "140px";
    btn.style.bottom = "80px";
    btn.addEventListener("click", function() {
        window.open('file:///C:/Users/DELL/Desktop/MY%20projects/Project%204/Question%205/index.html');
        window.close('file:///C:/Users/DELL/Desktop/MY%20projects/Project%204/Question%204/index.html');
    })
}

function backgroundChangeB2() {
    this.style.backgroundColor = "lightgreen";
    document.querySelector("button").style.backgroundColor = '#ff8080';
    var h = document.createElement("H1");
    var t = document.createTextNode("Excellent Work, mate"); 
    h.appendChild(t); 
    document.body.appendChild(h);  
    this.disabled = true; 
    document.querySelector("button").disabled = true;
    h.style["color"] = 'green';
    h.style.position = "absolute";
    h.style.left = '550px';
    h.style.top = "380px";
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "> Next >";                   
    document.body.appendChild(btn); 
    btn.style.textDecoration = "underline";
    btn.style.color = "blue";
    btn.style.backgroundColor = "lightGrey";
    btn.style.border = "none";
    btn.style.width = "130px";
    btn.style.height = "60px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "large";
    btn.style.position = "absolute";
    btn.style.right = "140px";
    btn.style.bottom = "80px";
    btn.addEventListener("click", function() {
        window.open('file:///C:/Users/DELL/Desktop/MY%20projects/Project%204/Question%205/index.html');
        window.close('file:///C:/Users/DELL/Desktop/MY%20projects/Project%204/Question%204/index.html');
    })
}

