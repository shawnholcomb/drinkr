$(document).ready(function () {

  $("#start").on('click', questionaire.startGame);
  $(document).on('click', '.option', questionaire.userChoice);
  $('#input').hide()

})

var questionaire = {
  pilsner: 0,
  lager: 0,
  stout: 0,
  ipa: 0,
  currentSet: 0,

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
  },
  options: {
    q1: ['Yes', 'No', 'Sometimes', 'No, but I Drink It'],
    q2: ['Price', 'Quality of Ingredients', 'Aging Process', 'Alcohol Content'],
    q3: ['It\'s Refreshing', 'Absolutely Nothing', 'I Love the Rich Flavor', 'Hops! Hops! Hops!'],
    q4: ['At Home', 'A Party (night club)', 'At a Restaurant', 'At a Craft Bar'],
    q5: ['You Mean Water?', 'They\'re Good', 'Now We\'re Talking', 'No Thanks'],
    q6: ['Is There Any Other Kind?', 'Don\'t Make Me Puke', 'They\'re Good', 'No Thanks'],
    q7: ['Bitter', 'Citrus', 'Light', 'Spicy'],
    q8: ['Fried Foods', 'Seafood', 'BBQ', 'Cheese'],
    q9: ['Intoxication', 'Buzzed', 'Wasted', 'Lit'],
  },
  answers: {
    //pilsner, lager, stout, ipa
    q1: ['No', 'No, but I Drink It', 'Sometimes', 'Yes'],
    q2: ['Quality of Ingredients', 'Price', 'Aging Process', 'Alcohol Content'],
    q3: ['It\'s Refreshing', 'Absolutely Nothing', 'I Love the Rich Flavor', 'Hops! Hops! Hops!'],
    q4: ['At Home', 'A Party (night club)', 'At a Restaurant', 'At a Craft Bar'],
    q5: ['They\'re Good', 'Now We\'re Talking', 'You Mean Water?', 'No Thanks'],
    q6: ['No Thanks', 'Don\'t Make Me Puke', 'Is There Any Other Kind?', 'They\'re Good'],
    q7: ['Citrus', 'Light', 'Bitter', 'Spicy'],
    q8: ['Cheese', 'Seafood', 'BBQ', 'Fried Foods'],
    q9: ['Wasted', 'Lit', 'Intoxication', 'Buzzed'],
  },

  startGame: function () {
    questionaire.currentSet = 0;
    questionaire.pilsner = 0;
    questionaire.lager = 0;
    questionaire.stout = 0;
    questionaire.ipa = 0;
    clearInterval(questionaire.timerId);

    $('#game').show();

    $('#results').html('');

    $('#start').hide();

    questionaire.nextQuestion();

  },

  nextQuestion: function () {
    if (!questionaire.timerOn) {
      questionaire.timerId = setInterval(questionaire.showResults);
    }

    var questionContent = Object.values(questionaire.questions)[questionaire.currentSet];
    $('#question').text(questionContent);

    var questionOptions = Object.values(questionaire.options)[questionaire.currentSet];

    $.each(questionOptions, function (index, key) {
      $('#options').append($('<button class="option btn btn-primary btn-lg">' + key + '</button>'));
    })

  },

  showResults: function () {
    if (questionaire.currentSet === Object.keys(questionaire.questions).length) {

      $('#results')
        .html('<h3>Results:</h3>' +
          '<p>Pilsner: ' + questionaire.pilsner + '</p>' +
          '<p>Lager: ' + questionaire.lager + '</p>' +
          '<p>Stout: ' + questionaire.stout + '</p>' +
          '<p>Ipa: ' + questionaire.ipa + '</p>');

      $('#game').hide();
    }

  },

  userChoice: function () {
    var resultId;

    var firstOption = Object.values(questionaire.answers)[questionaire.currentSet][0];
    var secondOption = Object.values(questionaire.answers)[questionaire.currentSet][1];
    var thirdOption = Object.values(questionaire.answers)[questionaire.currentSet][2];
    var fourthOption = Object.values(questionaire.answers)[questionaire.currentSet][3];

    if ($(this).text() === firstOption) {
      $(this).addClass('btn-light').removeClass('btn-primary');

      questionaire.pilsner++;
      clearInterval(questionaire.timerId);
      resultId = setTimeout(questionaire.userResult, 1000);
    } else if ($(this).text() === secondOption) {
      $(this).addClass('btn-light').removeClass('btn-primary');

      questionaire.lager++;
      clearInterval(questionaire.timerId);
      resultId = setTimeout(questionaire.userResult, 1000);
    } else if ($(this).text() === thirdOption) {
      $(this).addClass('btn-light').removeClass('btn-primary');

      questionaire.stout++;
      clearInterval(questionaire.timerId);
      resultId = setTimeout(questionaire.userResult, 1000);
    } else if ($(this).text() === fourthOption) {
      $(this).addClass('btn-light').removeClass('btn-primary');

      questionaire.ipa++;
      clearInterval(questionaire.timerId);
      resultId = setTimeout(questionaire.userResult, 1000);
    }

  },

  userResult: function () {

    questionaire.currentSet++;

    $('.option').remove();
    $('#results h3').remove();

    questionaire.nextQuestion();
  }

}