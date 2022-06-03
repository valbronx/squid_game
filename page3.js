//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "Comment s'appellait notre hote a Malaga ?",
        optionA: "Victor",
        optionB: "Lucas",
        optionC: "Pablo",
        optionD: "Juan",
        correctOption: "optionA"
    },

    {
        question: "Quel est le nom du protagoniste mechant dans Pulp fiction ?",
        optionA: "Bruce Willis",
        optionB: "Marcellus Wallas",
        optionC: "William Gallas",
        optionD: "Quentin Tarantino",
        correctOption: "optionB"
    },

    {
        question: "Who was the first President of USA ?",
        optionA: "Donald Trump",
        optionB: "Barack Obama",
        optionC: "Abraham Lincoln",
        optionD: "George Washington",
        correctOption: "optionD"
    },

    {
        question: "Quel est le nom de notre premier Jap ensemble ?",
        optionA: "Fukushima",
        optionB: "Ichikawa",
        optionC: "Fukuyama",
        optionD: "Okayama",
        correctOption: "optionC"
    },

    {
        question: "Quel etait le nom du quartier ou l'on sejournait a Amsterdam ?",
        optionA: "Diemen zuid",
        optionB: "Leidseplein",
        optionC: "De Pijp",
        optionD: "Amsterdam Oost",
        correctOption: "optionA"
    },

    {
        question: "Qu'a ton manger dans un restaurant en bord de plage a Royan ?",
        optionA: "Pizza",
        optionB: "Moules frites",
        optionC: "Fish & chips",
        optionD: "Burger frites",
        correctOption: "optionB"
    },

    {
        question: "Quel sport avons nous vu a Royan ?",
        optionA: "Beach soccer",
        optionB: "Paddle",
        optionC: "Pelote basque",
        optionD: "Course de cyclisme",
        correctOption: "optionC"
    },

    {
        question: "Qu'avait tu manger a Cabourg pas loin de la plage ?",
        optionA: "Crepe",
        optionB: "Barbapapa",
        optionC: "Miami peaks",
        optionD: "Panini",
        correctOption: "optionB"
    },

    {
        question: "a Nantes il fallait suivre la ligne de quelle couleur ?",
        optionA: "Jaune",
        optionB: "Rouge",
        optionC: "Bleue",
        optionD: "Verte",
        correctOption: "optionD"
    },

    {
        question: "Comment s'appelle le mari de Darlene Snell dans Ozark ?",
        optionA: "Franck",
        optionB: "Buddy",
        optionC: "Russ",
        optionD: "Jacob",
        correctOption: "optionD"
    },

    {
        question: "Comment s'appelle les gagnants de la derniere edition de Pekin Express ?",
        optionA: "Arthur et Alexis",
        optionB: "Brice et Bertrand",
        optionC: "Lucas et Nicolas",
        optionD: "Alex et Charlie",
        correctOption: "optionC"
    },

    {
        question: "Au Portugal comment s'appelle la ville du chateau tout en haut d'une colline ?",
        optionA: "Sintra",
        optionB: "Cascais",
        optionC: "Almada",
        optionD: "Porto",
        correctOption: "optionA"
    },


    {
        question: "Comment s'appellait le petit cochon au marche de noel de Yerres ?",
        optionA: "Arthur",
        optionB: "Tirelire",
        optionC: "Peggy",
        optionD: "Cagnotte",
        correctOption: "optionB"
    },

    {
        question: "Which national team won the football World cup in 2018 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionD"
    },

    {
        question: "Qu'avait on manger en entree a la cour, a Angers ?",
        optionA: "Tzatziki",
        optionB: "Guacamole",
        optionC: "Saucisson",
        optionD: "Saumon",
        correctOption: "optionA"
    },

    {
        question: "Qu'a t'on manger sur la plage a Dieppe ?",
        optionA: "Barbapapa",
        optionB: "Crepe",
        optionC: "Churros",
        optionD: "Chichi",
        correctOption: "optionC"
    }
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 15) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 15) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore == 16) {
        remark = "You won Audrey !!!"
        remarkColor = "Green"
		document.getElementById('won-modal').style.display = "flex"

    } else{
	    remark = "You missed it Audrey !!!"
        remarkColor = "Red"
	
		const playerGrade = (playerScore / 16) * 100

		//data to display to score board
		document.getElementById('remarks').innerHTML = remark
		document.getElementById('remarks').style.color = remarkColor
		document.getElementById('grade-percentage').innerHTML = playerGrade
		document.getElementById('wrong-answers').innerHTML = wrongAttempt
		document.getElementById('right-answers').innerHTML = playerScore
		document.getElementById('score-modal').style.display = "flex"
	}
}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
