


const questions = [
    {

        q: "Which of the following is not a real eCommerce platform?",
        a: [
            "Shopify",
            "WooCommerce",
            "ShopCommerce",
            "BigCommerce"
        ],
        //correct: 0,
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
        //correct: 2,
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
        //correct: 2,
        number: 3,

    }
    
]





let correctAnswer = 0;


//Question One
let questOneSelection = document.querySelectorAll('.question_one input')
questOneSelection.forEach(selection => {
    selection.addEventListener('change', e => {
       let selected = e.target.value.toLowerCase()
       let correct = questions[0].a[0].toLowerCase()

       console.log(selected )
        if(selected == correct ){
            correctAnswer++
        }
    })
})

//Question Two
let questTwoSelection = document.querySelectorAll('.question_two input')
questTwoSelection.forEach(selection => {
    selection.addEventListener('change', e=> {
        let selected = e.target.value.toLowerCase()
        let correct = 'all the above'

        if(selected === correct){
            correctAnswer++
            // console.log('you are correct ' + correctAnswer)
        }
    })
})

//Question Three
let questThreeSelection = document.querySelectorAll('.question_three input')
questThreeSelection.forEach(selection => {
    selection.addEventListener('change', e=> {
        let selected = e.target.value.toLowerCase()
        let correct = 'all the above'

        if(selected === correct){
            correctAnswer++
             console.log('you are correct ' + correctAnswer)
        }
    })
})



let questionOneBtn = document.querySelector('.question_one_submit')
let questionTwoBtn = document.querySelector('.question_two_submit')
let questionThreeBtn = document.querySelector('.question_three_submit')
let result = document.querySelector('.quiz_result')



let questionOne = document.querySelector('.question_one')
let questionTwo = document.querySelector('.question_two')
let questionThree = document.querySelector('.question_three')


    //show question one
    document.addEventListener('DOMContentLoaded', (e) => {
        e.preventDefault()
        questionOne.style.display = 'block'
        questionTwo.style.display = 'none'
        questionThree.style.display = 'none'
        result.style.display = 'none'
    })



    questionOneBtn.addEventListener('click', e=>{
        e.preventDefault()
        questionOne.style.display = 'none'
        questionTwo.style.display = 'block'
        questionThree.style.display = 'none'
        result.style.display = 'none'
    })


    questionTwoBtn.addEventListener('click', e=>{
        e.preventDefault()
        questionOne.style.display = 'none'
        questionTwo.style.display = 'none'
        questionThree.style.display = 'block'
        result.style.display = 'none'
    })


    questionThreeBtn.addEventListener('click', e=>{
        e.preventDefault()
        questionOne.style.display = 'none'
        questionTwo.style.display = 'none'
        questionThree.style.display = 'none'
        result.style.display = 'block'
    })


    result.innerHTML = `Thanks for taking the quiz your result is ${correctAnswer}/3 `






