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
        p.id = "txx"
        p.style = 'font-weight:bold; font-size:50px; margin-top:50px; flex-wrap:wrap';
}
function colorChange(){
        s = p.innerText
        let n =/\w+/g
        let char = /.|\s|\n+/g
        console.log(s.match(char).length)

        number.innerText = (145 - s.match(char).length);
        
        if(s.match(char).length <=145/2){

                p.style.color ='green'
        }
        else if(s.match(char).length >=145/2 && s.match(char).length <135){
                p.style.color = 'blue';

        }
        else if(s.match(char).length >=135 && s.match(char).length<=145){
                p.style.color ='red';
                console.log(s.match(n));
                
        }

        else if(s.match(char).length >145){
                number.innerText= "You are " + (s.match(char).length - 145) +" characters more than expected.";
                p.style.visibility ='hidden'
        }

        
}
function render (){
        document.getElementById('tt').addEventListener('keyup', print)
        document.getElementById('tt').addEventListener('keyup', colorChange)
}
render()
function myFunction(){
        let ll = document.getElementById('txx')
        var blob = new Blob([ll.innerText], {
                type: "text/plain;charset=utf-8;",
            });
        saveAs(blob, "thing.txt");

}
