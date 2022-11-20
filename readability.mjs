


/* The function to do all the readability test in one*/
export default function readability(x){
    
    let userGrade = document.getElementById('grade');
    if(!x){
        x = document.getElementById('tt').value;
    }
    let words = countWord(x)
    let letters = countLetter(x)
    let sentences = countSentence(x)
    let grade = colemanIndex(words, letters, sentences)
    
    if(grade === false){
        userGrade.style.color = "red"
        userGrade.style.fontSize = '10px'
        userGrade.innerText = "Please type more than 10 words"
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
    userGrade.innerText = `This text is ${grade}`
    console.log(userGrade.innerText)
    
    
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


