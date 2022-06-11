
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
        words = document.createElement('p')
        xValue = x.value;
        if (xValue){
                p.innerText = '" ' + xValue + ' "' 
        }
        doc.append(number)
        doc.append(words)
        doc.appendChild(p)
        p.id = "txx"
        number.id = "charCount"
        words.id = "wordCount"
        p.style = 'font-weight:bold; font-size:40px; margin-top:5px; flex-wrap:wrap';
}
function colorChange(){
        s = xValue
        let word =/\w+/g
        let char = /.|\s|\n+/g
        console.log(s.match(char).length)

        number.innerText = (145 - s.match(char).length) + " characters left";
        
        words.innerText = s.match(word).length +" words"
        if(s.match(char).length <=145/2){

                p.style.color ='green'
                p.style = 'font-weight:bold; font-size:40px; margin-top:5px; flex-wrap:wrap';
                number.style.color = 'green'
                words.style.color = 'green'
                p.style.textAlign = 'center'
        }
        else if(s.match(char).length >=145/2 && s.match(char).length <135){
                p.style = 'font-weight:bold; font-size:25px; margin-top:5px; flex-wrap:wrap';
                p.style.color = '#1DA1F2';
                p.style.textAlign = 'center'


        }
        else if(s.match(char).length >=135 && s.match(char).length<=145){
                p.style = 'font-weight:bold; font-size:18px; margin-top:5px; flex-wrap:wrap';
                p.style.color ='red';
                number.style.color ='red';
                p.style.textAlign = 'center'
                words.style.color = 'red'
                console.log(s.match(n));
                
        }

        else if(s.match(char).length >145){
                number.innerText= "You have " + (s.match(char).length - 145) +" more characters than expected.";
                //p.style.visibility ='hidden'
                p.innerText= "Sorry, we cannot display your text.\n You typed over 145 characters.";
                number.style.color="red"
                p.style.textAlign = 'center'
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
function copy(){
        document.getElementById('tt').value
        navigator.clipboard.writeText(xValue).then(() =>{
                console.log("Successfully copied")
                alert("Copied to clipboard")
        })
}