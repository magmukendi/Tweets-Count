
let doc = document.getElementById('result');

export default function readability(x){

    if(!x){
        x = document.getElementById('tt').value;
    }
    let words = countWord(x)
    let letters = countLetter(x)
    let sentences = countSentence(x)
    let grade = colemanIndex(words, letters, sentences)
    
    if(grade === false){
        return 0;
    }
    
    console.log(`Letter: ${letters}\nWords:${words}\nSentence:${sentences}`)
    if (grade <= 1)
    {
        grade = "Before grade 1"

    }

    // check if the grade is greater than  16.
    else if (grade >= 16)
    {
        grade = "Grade 16+";
    }
    else{
        grade = `Grade ${grade}\n`
    }
    let userGrade = document.createElement('p')
    userGrade.innerText = `This text is ${grade}`
    userGrade.id = "grade"
    console.log(userGrade.innerText)
    doc.append(userGrade)
    
    return grade;
    
}

function countLetter(l){
    let count = 0;

    l.split("").map((item)=>{
        
        if(item.match(/[a-z]/i)){
            count += 1
        }
    })

    return count;

}
function countWord(s)
{

    let count = 1 ;
    for(let i = 0; i < s.length; i++)
    {
        if(s.charCodeAt(i) == 32 ){
            count += 1
        }
    }

    return count
}
function countSentence(sentence)
{
    let count = 0;

    sentence.split("").map((snt) =>{
        if (snt.charCodeAt(0) === 33 || snt.charCodeAt(0) === 63 || snt.charCodeAt(0) === 46 || snt === '\n')
        {
            count += 1
        }
    })
    return count
}
function colemanIndex(words, letters, sentences)
{   
    if (words < 10){
        console.log("Please type at least 10 words.");
        return false;
    }
    let L = letters / words * 100 ;
    let S =  sentences / words * 100;
    let index = 0.0588 * L -  0.296 * S - 15.8;
    return index.toFixed(0)
}


