
quotes = [
    {
        text:"abraham",
        person:"Abraham Lincoln",
    },
    {
        text:" Akash Sanni",
        person:"Akash Sanni",
    },
    {
        text:"mahatama gandhi",
        person:"Mahatma Gandhi",
    },
    {
        text:"lkvinchi",
        person:"Vinchi",
    },
    {
        text:"Lam Monalisa",
        person:"Monalisa",
    },
    {
        text:"Pele g",
        person:"Pele",
    },
    {
        text:"Hitlergh",
        person:"Hitler",
    },
    {
        text:"asfjkhafkjsghdghywrgnhsdguhjsagdhuhfgn asdufghadgusgjksdhy",
        person:"Osama Bin-Laden",
    }
]

console.log(quotes)

const btn = document.querySelector('.button')
const person =document.querySelector('.person')
const textArea =document.querySelector('.text-area')

btn.addEventListener("click",function(){
    
    let random = Math.floor(Math.random() * quotes.length);
    person.innerText = quotes[random].person
    textArea.innerText = quotes[random].text
    
})