let list = []
let result = 0;
let x;
let p;
let xValue;
let s;
let number;
let input = document.getElementById('tt');
let d;
let e;
let doc = document.getElementById('result');

function print(){
        doc.innerHTML = '';
        x = document.getElementById('tt');
        p = document.createElement('p')
        number = document.createElement('p')
        xValue = x.value;
        if (xValue){
                p.innerText = xValue
        }
        doc.append(number)
        doc.appendChild(p)
        p.style = 'font-weight:bold; font-size:50px; margin-top:50px';
        number.style = 'margin:auto, text-align:center';
}
function colorChange(){
        s = p.innerText
        let n =/\w+/g
        let char = /./g
        number.innerText = s.match(char).length;
        p.style.color ='green'
        if(s.match(char).length >=145/2 || s.match(char).length <=140){
                p.style.color = 'blue';

        }
        if (s.match(char).length >=140){
                p.style.color ='red';
                console.log(s.match(n))
                
        }

        
}
function render (){
        document.getElementById('tt').addEventListener('keyup', print)
        document.getElementById('tt').addEventListener('keyup', colorChange)
}
render()
function myFunction(){
        let doc = document.getElementById('result');
        doc.innerHTML = '';
        
        if (xValue){
                p.innerText = xValue
        }
        else{
                alert("please enter a number")
        }
        doc.appendChild(p)
        p.style = 'font-weight:bold; font-size:50px; margin-top:50px'
        x.value = ''
}


/*function add(){
        let p = document.getElementById('tt');
        let d =parseInt(p.value)
        if (d>=0){
                result += d;
                p.value =''
                console.log(result)
        }
        else{
                alert("please enter a number")
        }
}*/
