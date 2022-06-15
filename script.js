





var ctr = 0;

var dgre = 281;


function lol(){
    if (ctr < 13){
        dgre += 1;
        document.getElementById("wkwk").style.background = `linear-gradient(${dgre}deg, rgba(18,90,112,1) 0%, rgba(67,139,154,1) 92%) no-repeat`;
    } else {
        document.getElementById("wkwk").style.background = "none";
        document.getElementById("lol").style.display = "none";        
        document.getElementById("audd").setAttribute("autoplay", true);
        document.getElementById("box1").style.display = "flex";
        document.getElementById("box2").style.display = "flex";
        document.getElementById('trashtalk').style.display = "none";
        for (let obj of document.getElementsByClassName("box")){
            obj.style.display = "flex";
        }
        clearInterval(yee);
        setInterval(hbd, 550);
        setInterval(teks, 200);
    }
}

var yee = setInterval(lol, 10);


function hbd(){
    var rand1 = Math.floor(Math.random() * 256);
    var rand2 = Math.floor(Math.random() * 256);
    var rand3 = Math.floor(Math.random() * 256);        
    document.getElementById("wkwk").style.backgroundColor = `rgba(${rand1}, ${rand2}, ${rand3})`;
}

function teks(){
    var elem = document.createElement('h1');
    var yyy = document.createTextNode("happy bird day daddy dortox");
    elem.appendChild(yyy);
    document.getElementById("frame").appendChild(elem);
}


const arr = [
    "lol?",
    "click it quick",
    "bro u so noob man",
    "why?",
    "just click it ",
    "bruh",
    "are u g4y?",
    "bruh",
    "...",
    "come on...",
    "alright",
    "imma turn off the hack"
]

function klik(){
    var top = Number(document.getElementById("lol").style.top.slice(0,-2));
    var left = Number(document.getElementById("lol").style.left.slice(0,-2));    
    if (ctr++ < 14){
        if (ctr < 4){
            top += 100;
            left += 100;        
            document.getElementById("lol").style.top = `${top}px`;
            document.getElementById("lol").style.left = `${left}px`;                 
        } else if (ctr == 13){
            clearInterval(yes);            
            document.getElementById("lol").style.display = "none";
            setInterval(hbd, 500);
        }else if (ctr >= 7){
            left -= 100;        
            document.getElementById("lol").style.left = `${left}px`;        
        } else if (ctr >= 4){
            top -= 100;
            left += 100;        
            document.getElementById("lol").style.top = `${top}px`;
            document.getElementById("lol").style.left = `${left}px`;             
        } 
        var y = document.getElementById("trashtalk");
        var z = document.createElement('h1');
        var mm = document.createTextNode(arr[ctr-1]);
        z.appendChild(mm);
        y.appendChild(z);
        console.log(arr[ctr-1]);
    }
}

