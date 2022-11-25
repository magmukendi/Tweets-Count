import readability from './readability.mjs'
let x;
let p;
let xValue;
let s;
let number;
let userGrade;
let robot = document.getElementById('robot-check')
//let input = document.getElementById('tt');

let doc = document.getElementById('result');
let words;

function createGrade(){
        
}

createGrade()
function print(){
        doc.innerHTML = '';
        x = document.getElementById('tt');
        p = document.createElement('p')
        number = document.createElement('p')
        words = document.createElement('p')
        userGrade = document.createElement('p')
        
        

        

        

        if(x.value){
                xValue = x.value
        }
        else{
                xValue=""
        }
        if (xValue){
                console.log(xValue)
                //p.innerText = '" ' + xValue + ' "' 
                doc.append(number)
                doc.append(words)
                doc.append(userGrade)
                //doc.appendChild(p)
                //p.id = "txx"
                number.id = "charCount"
                words.id = "wordCount"
                userGrade.innerText=""
                userGrade.id = "grade"
                //p.style = 'font-weight:bold; font-size:40px; margin-top:5px; flex-wrap:wrap';
        }
        
        
        xValue !== undefined && colorChange(xValue)
}
function colorChange(value){
        if(value !== undefined){
                s = value
                console.log(value)
                let word =/\w+/g
        let char = /.|\s|\n+/g
        console.log(s.match(char).length)

        number.innerText = (280 - s.match(char).length) + " characters left";
        
        words.innerText = s.match(word).length +" words"
        if(s.match(char).length <=280/2){

                //p.style.color ='green'
                //p.style = 'font-weight:bold; font-size:40px; margin-top:5px; flex-wrap:wrap';
                number.style.color = 'green'
                words.style.color = 'green'
                //p.style.textAlign = 'center'
        }
        else if(s.match(char).length >=280/2 && s.match(char).length <270){
                //p.style = 'font-weight:bold; font-size:25px; margin-top:5px; flex-wrap:wrap';
                //p.style.color = '#1DA1F2';
                //p.style.textAlign = 'center'


        }
        else if(s.match(char).length >=270 && s.match(char).length<=280){
                p.style = 'font-weight:bold; font-size:18px; margin-top:5px; flex-wrap:wrap';
                p.style.color ='red';
                number.style.color ='red';
                p.style.textAlign = 'center'
                words.style.color = 'red'
                console.log(s.match(n));
                
        }

        else if(s.match(char).length >280){
                number.innerText= "You have " + (s.match(char).length - 280) +" more characters than expected.";
                //p.style.visibility ='hidden'
                p.innerText= "Sorry, we cannot display your text.\n You typed over 280 characters.";
                number.style.color="red"
                p.style.textAlign = 'center'
        }

        }
        else{
                s = "Hello"
        }
        
        
}
function render (){
        document.getElementById('tt').addEventListener('keyup', print)
        document.getElementById('readability').addEventListener('click', ()=>readability(xValue))
        document.getElementById('copy').addEventListener('click', ()=>copy())
        document.getElementById('close').addEventListener('click', ()=>clear())

        
}

function clear(){
        let x = document.getElementById('tt');
        x.value= ""
        words.innerText = ""
        number.innerText = ""



}
render()

function copy(){
        let target = document.getElementById('tt')
        let r = target.value !== undefined ? target.value : ""
        navigator.clipboard.writeText(r).then(() =>{
                console.log("Successfully copied")
                alert("You text was copied in the clipboard")
        })
}



/*
function myFunction(){
        let ll = document.getElementById('txx')
        var blob = new Blob([ll.innerText], {
                type: "text/plain;charset=utf-8;",
            });
        saveAs(blob, "thing.txt");
}*/