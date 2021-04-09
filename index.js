


const questions = [
    {

        q: "Which of the following is not a real eCommerce platform?",
        a: [
            "Shopify",
            "WooCommerce",
            "ShopCommerce",
            "BigCommerce"
        ],
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
        number: 3,

    }
    
]







//Question One
let questOneSelection = document.querySelectorAll('.question_1 input')
questOneSelection.forEach(selection => {
    selection.addEventListener('change', e => {
       let selected = e.target.value.toLowerCase()
       let correct = questions[0].a[0].toLowerCase()
       

       console.log(selected )
        if(selected == correct ){
            correctAnswer += 1
            console.log('you are correct ' + correctAnswer)
        }
    })
})

//Question Two
let questTwoSelection = document.querySelectorAll('.question_2 input')
questTwoSelection.forEach(selection => {
    selection.addEventListener('change', e=> {
        let selected = e.target.value.toLowerCase()
        let correct = 'all the above'
        

        if(selected === correct){
            correctAnswer += 1
             console.log('you are correct ' + correctAnswer)
        }
    })
})

//Question Three
let questThreeSelection = document.querySelectorAll('.question_3 input')
questThreeSelection.forEach(selection => {
    selection.addEventListener('change', e=> {
        let selected = e.target.value.toLowerCase()
        let correct = 'all the above'
        questionCount.innerHTML = 3

        if(selected === correct){
            correctAnswer += 1
             console.log('you are correct ' + correctAnswer)
        }
    })
})

//Selectors
let questionCount = document.querySelector('.quiz_question-count .quiz_question-count')
let questCountContainer = document.querySelector('.quiz_question-count')
let questionOneBtn = document.querySelector('.question_one_submit')
let questionTwoBtn = document.querySelector('.question_two_submit')
let questionThreeBtn = document.querySelector('.question_three_submit')
let result = document.querySelector('.quiz_result')

//Initial values
questionCount.innerHTML = 1
let correctAnswer = 0;


let questionOne = document.querySelector('.question_1')
let questionTwo = document.querySelector('.question_2')
let questionThree = document.querySelector('.question_3')


    //show question one
    document.addEventListener('DOMContentLoaded', (e) => {
        e.preventDefault()
        questionOne.style.display = 'block'
        questionTwo.style.display = 'none'
        questionThree.style.display = 'none'
        result.style.display = 'none'
    })


   //show question two
    questionOneBtn.addEventListener('click', e=>{
        e.preventDefault()
        questionOne.style.display = 'none'
        questionTwo.style.display = 'block'
        questionThree.style.display = 'none'
        result.style.display = 'none'
        questionCount.innerHTML = 2
    })

   //show question three
    questionTwoBtn.addEventListener('click', e=>{
        e.preventDefault()
        questionOne.style.display = 'none'
        questionTwo.style.display = 'none'
        questionThree.style.display = 'block'
        result.style.display = 'none'
        questionCount.innerHTML = 3
    })
    
    //show final screen
    questionThreeBtn.addEventListener('click', e=>{
        e.preventDefault()
        questionOne.style.display = 'none'
        questionTwo.style.display = 'none'
        questionThree.style.display = 'none'
        questCountContainer.style.display = 'none'
        result.style.display = 'block'

        result.innerHTML = `Thanks for taking the quiz your result is ${correctAnswer}/3 `
    })







