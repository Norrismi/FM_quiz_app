


const questions = [
    {

        q: "Which of the following is not a real eCommerce platform?",
        a: [
            "Shopify",
            "WooCommerce",
            "ShopCommerce",
            "BigCommerce"
        ],
        correct: 1,
        number: 1,
    },
    {
        q: "If Shopify is so good, why are Shopify developers necessary?",
        a: [
            "To save time on things like store setups and migrations",
            "To extend the limited design options and functionalities of themes with custom code",
            "To provide support with a deep understanding of how the platform works and what its limitations are",
            "All the above"
        ],
        correct: 2,
        number: 2,

    },
    {
        q: "Which of the following is true about Shopify developers?",
        a: [
            "They are paid extremely well",
            "There is a high demand for them",
            "They need to know web development, the platform itself, and the liquid template language",
            "All the above"
        ],
        correct: 2,
        number: 3,

    }

]




// const quest = document.querySelector('#quest')

// questions.map(question => {
//     let questP = document.createElement('p')
//     questP.innerHTML = question.q
//     quest.appendChild(questP)

//     let choicesP = document.createElement('p')
//     choicesP.innerHTML = question.a
//     quest.appendChild(choicesP)

//     console.log(question.q)
// })



let quizEl = document.querySelector('#quest')
function init() {


    let quizStr = ''
    //let questStr = ''
    let answerStr = ''

    questions.map(question => {
        let answerStr = ''
        question.a.map(answer => {
            answerStr += `
            <li>
             <label htmlFor="">
                <input type="radio"/>
                ${answer}
             </label>
            
            </li>
            
            `
            
        })
        
         
        quizStr += `
            
            
            <p>${question.q}</p>
                <ul>
                    <ul>
                        ${answerStr}
                    </ul>
                </ul>
            `
    })

    quizEl.innerHTML = quizStr + answerStr
}
init()






//questions.map(question => console.log(question.a))



//let questions = document.getElementsByClassName('question')




// function to remove show_active and add to clicked
function setNewActive(el) {
    for (var question of questions) {
        //select all .quiz_body
        let quizbodies = document.getElementsByClassName('quiz_body')
        // remove('show-active')
        for (var quizBody of quizBodies) {
            quizBody.classList.remove('show_active')
        }
        //add .show_active (back) to clicked
    }

}



//select radio inputs and loop through
var radios = document.getElementsByName('myradio')
for (var radio of radios) {
    //add a click listner to each input
    radio.addEventListner('click', function (e) {
        //setNewActive(e)
        console.log(e)

        // look up console.log
    })
}















//show desired question and answers choices


//click on the next button to show next question


//record user answer selections



