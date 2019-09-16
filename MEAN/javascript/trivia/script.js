$(document).ready(function (){

    function getQuestions(){
        $.get(`https://opentdb.com/api.php?amount=10&type=multiple`, displayQuestions)
        return false;
    }            
    getQuestions();

    function displayQuestions(data, displayData){
        results = data.results
        console.log(results);
        for( var i = 0; i < results.length; i++){
            var category = results[i].category;
            var difficulty = results[i].difficulty;
            var points = 0;
            if (difficulty == 'easy'){
                points = 100;
            } else if (difficulty == 'medium'){
                points = 200;
            }else {
                points = 300;
            }
            var question = results[i].question;
            var correct_answer = results[i].correct_answer;
            var incorrect_answers = results[i].incorrect_answers;
            var answers = [];
            answers.push(correct_answer)
            var answers = answers.concat(incorrect_answers)
            shuffle(answers);
            console.log(answers);
            $('#container').append(
                `<div class="card"><h1 class="points">${points}</h1></div>
                <div class="card_back"><h3 class=questions>${question}</h3>
                <ul><li>${answers[0]}</li><li>${answers[1]}</li><li>${answers[2]}</li><li>${answers[3]}</li></div>`
            )
        }
            $(document).on('click', '.card', function(){ 
                $(this).next('.card_back').toggle().css('display','inline-block');
                $(this).hide(); 
                $('.card_back').click(function() {
                    $(this).prev('.card').toggle()
                    $(this).hide();                
                });
            })
        }
    
    

    function shuffle(array) {
        let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
         return array;
        }
    








});