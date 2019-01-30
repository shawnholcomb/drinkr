//Questionaire page js
$(document).ready(function () {

  $("#start").on('click', questionaire.startQuestions);
  $(document).on('click', '.option', questionaire.guessChecker);
  $('#nextQ').hide();

})

var questionaire = {
  pilsner: 0,
  stout: 0,
  ipa: 0,
  lager: 0,

  questions: {
    q1: 'Is beer your drink of choice?',
    q2: 'What is the most important factor when buying beer?',
    q3: 'What do you enjoy about beer?',
    q4: 'Where are you most likely to be drinking a beer?',
    q5: 'What do you think about light beers?',
    q6: 'What do you think about dark beers?',
    q7: 'Which flavor do you prefer?',
    q8: 'What is your favorite food to eat with a beer?',
    q9: 'What is your preferred term for the effects of beer?',
    q10: 'Please enter your Zip Code'
  },
  options: {
    q1: ['Yes', 'No', 'Sometimes', 'No, but I drink it'],
    q2: ['Price', 'Quality of Ingredients', 'Aging Process', 'Alcohol Content'],
    q3: ['It\'s Refreshing', 'Absolutely nothing', 'I love the rich flavor', 'Hops! Hops! Hops!'],
    q4: ['At home', 'A party (night club)', 'At a restaurant', 'At a craft bar'],
    q5: ['You mean water?', 'They\'re good', 'Now we\'re talking', 'No thanks'],
    q6: ['Is there any other kind', 'Don\'t make me puke', 'They\'re good', 'No thanks'],
    q7: ['Bitter', 'Citrus', 'Light', 'Spicy'],
    q8: ['Fried foods', 'Seafood', 'BBQ', 'Cheese'],
    q9: ['Intoxication', 'Buzzed', 'Wasted', 'Lit'],
    q10: []
  },
  answers: {
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: ''
  },

  startQuestions: function () {
    questionaire.lager = 0;
    questionaire.pilsner = 0;
    questionaire.stout = 0;
    questionaire.ipa = 0;
    clearInterval(questionaire.timerId);

    $('#start').hide();
    $('#nextQ').show();

    questionaire.nextQuestion();

  },

  nextQuestion: function () {

    var questionContent = Object.values(questionaire.questions)[questionaire.lager];
    $('#question').text(questionContent);

    var questionOptions = Object.values(questionaire.options)[questionaire.lager];

    $.each(questionOptions, function (index, key) {
      $('#options').append($('<button class="option btn btn-primary btn-lg">' + key + '</button>'));
    });

    $.each(questionContent, function (index, key) {
      $('#next').append($('<button class="option btn btn-secondary">' + key + '</button>'));
    });

  },

  guessChecker: function () {

    var resultId;

    var currentAnswer = Object.values(questionaire.answers)[questionaire.lager];

    if ($(this).text() === currentAnswer) {
      $(this).addClass('btn-success').removeClass('btn-info');
      console.log(currentAnswer);

      questionaire.pilsner++;
      clearInterval(questionaire.timerId);
      resultId = setTimeout(questionaire.guessResult, 4000);
      $('#results').html('<h3>Correct!</h3>');
    } else {
      $(this).addClass('btn-success').removeClass('btn-info');

      questionaire.stout++;
      clearInterval(questionaire.timerId);
      resultId = setTimeout(questionaire.guessResult, 1000);
    }

  },
  guessResult: function () {

    questionaire.lager++;

    $('.option').remove();
    $('#results h3').remove();

    questionaire.nextQuestion();

  }

}