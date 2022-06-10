let list = []
let result = 0;
let x;
let p;
let xValue;
let s;
let number;
<<<<<<< HEAD


function print(){
        let doc = document.getElementById('result');
        doc.innerHTML = '';
        x = document.getElementById('tt');
        p = document.createElement('p')
        number = document.createElement('p')
        

=======
let input = document.getElementById('tt');
let d;
let e;
let doc = document.getElementById('result');

function print(){
        doc.innerHTML = '';
        x = document.getElementById('tt');
        p = document.createElement('p')
>>>>>>> e42d584aa8da9c71fd4abc0afb75dc698dca352e
        xValue = x.value;
        if (xValue){
                p.innerText = xValue
        }
<<<<<<< HEAD
        doc.appendChild(p)
        doc.append(number)
        p.style = 'font-weight:bold; font-size:50px; margin-top:50px';
}
function colorChange(){
        s = p.innerText
        let n =/\w+/g
        number.innerText = s.match(n).length;
        if (s.match(n).length >=10){
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
=======
        u = doc.appendChild(p)
        u.id = "love"
        console.log(result)
        p.style = 'font-weight:bold; font-size:50px; margin-top:50px';
}
let o = document.getElementById('love')
function render (){
        document.body.addEventListener('keypress', print)
        document.body.addEventListener('keyup', print)
        
}
function flush(){
        input.value = ''
}
render()
/*
function myFunction(){
>>>>>>> e42d584aa8da9c71fd4abc0afb75dc698dca352e
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
<<<<<<< HEAD


function add(){
        let p = document.getElementById('tt');
        let d =parseInt(p.value)
        if (d>=0){
                result += d;
                p.value =''
                console.log(result)
=======
*/


function add(){
        d = parseInt(input.value)
        list.push(1)
        if (d>=0){
                result += d;
                o.style.color ='green'
                input.value =''
>>>>>>> e42d584aa8da9c71fd4abc0afb75dc698dca352e
        }
        else{
                alert("please enter a number")
        }
<<<<<<< HEAD
}

function sub(){
        let p = document.getElementById('tt');
        let d =parseInt(p.value)
=======
        console.log(list)
        console.log(result)
        
}

function sub(){
        list.push(2)
        d = parseInt(input.value)
>>>>>>> e42d584aa8da9c71fd4abc0afb75dc698dca352e
        if (d>=0){
                if (result===0){
                        result=d
                }
                else{
                        result -= d;
<<<<<<< HEAD
                }
                p.value =''
                console.log(result)
=======
                        
                }
                o.style.color ='green'
                input.value =''
>>>>>>> e42d584aa8da9c71fd4abc0afb75dc698dca352e
        }
        else{
                alert("please enter a number")
        }
<<<<<<< HEAD
}
=======
        console.log(list)
        console.log(result)
}

function equals(){
        console.log(input.value)
        d = parseInt(input.value)
        if (list[-1]==1){
                result = result + d;
        }
        else if (list[-1] ==2){
                result -=d
        }
        o.innerText = result;
        console.log(result)
}

function del(){
        
        result = 0
        input.value = ''
        o.innerText = result
        o.style.color = 'black'
}
>>>>>>> e42d584aa8da9c71fd4abc0afb75dc698dca352e
