// Questionnaire script

function isInputNumber(evt) {
  var ch = String.fromCharCode(evt.which);
  if (!(/[0-9]/.test(ch))) {
    evt.preventDefault();
  }
}


$(document).ready(function () {

  $('#quiz-modal-bg').show();
  questionaire.startGame();
  $(document).on('click', '.option', questionaire.userChoice);
  $('#input').hide()

});

var userBeer;
var userZip;

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

    $('#game').show();

    $('#results').html('');

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
      // $('#results').hide();
      $('#zip').show();

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
      resultId = setTimeout(questionaire.userResult, 500);
    }
    else if ($(this).text() === secondOption) {
      $(this).addClass('btn-light').removeClass('btn-primary');

      questionaire.lager++;
      clearInterval(questionaire.timerId);
      resultId = setTimeout(questionaire.userResult, 500);
    }
    else if ($(this).text() === thirdOption) {
      $(this).addClass('btn-light').removeClass('btn-primary');

      questionaire.stout++;
      clearInterval(questionaire.timerId);
      resultId = setTimeout(questionaire.userResult, 500);
    }
    else if ($(this).text() === fourthOption) {
      $(this).addClass('btn-light').removeClass('btn-primary');

      questionaire.ipa++;
      clearInterval(questionaire.timerId);
      resultId = setTimeout(questionaire.userResult, 500);
    }

  },

  userResult: function () {

    questionaire.currentSet++;

    $('.option').remove();
    $('#results h3').remove();

    questionaire.nextQuestion();
  }
};

function finalResults() {
  userZip = $('#inputZip').val();
  
  $('#quiz-modal-bg').hide();
  
  var ipa = questionaire.ipa;
  var stout = questionaire.stout;
  var lager = questionaire.lager
  var pilsner = questionaire.pilsner;

  if ((lager >= stout) && (lager >= ipa) && (lager >= pilsner)) {
    userBeer = "lager";
  } else if ((pilsner >= stout) && (pilsner >= ipa) && (pilsner > lager)) {
    userBeer = "pilsner";
  } else if ((ipa >= stout) && (ipa > pilsner) && (ipa > lager)) {
    userBeer = "ipa";
  } else {
    userBeer = "stout";
  }
  
};

$('#zip-submit').on('click', finalResults);


// Results page script

var selectionTypeArr = ["ipa", "stout", "pilsner", "lager"];

var selectedTypeIndex;

var selections = [ // descriptions from beeradvocate.com
  {
    name: "Imperial IPA",
    description: "We have west coast American brewers to thank for this somewhat reactionary style. Take an India Pale Ale and feed it steroids, and you'll end up with a Double or Imperial IPA. Although generally recognizable alongside its sister styles in the IPA family, you should expect something more robust, malty, and alcoholic with a characteristically intense hop profile in both taste and aroma. In short, these are boldly flavored, medium-bodied beers that range in color from deep gold to medium amber. The 'imperial' usage comes from Russian Imperial Stout, a style of strong Stout originally brewed in England during the late 1700s for the Russian imperial court. Today Double IPA is often the preferred name in the United States.",
    image: "assets/images/ipa.jpg"
  },
  {
    name: "English Stout",
    description: "Stouts are typically dark brown to pitch black in color. A common profile among Stouts, but not in all cases, is the use of roasted barley (unmalted barley that is kilned to the point of being charred) which lends a dry character to the beer as well as a huge roasted flavor that can range from burnt to coffee to chocolate. Traditional English Stout recipes rely on bitterness from the roasted grain to provide a dry finish and consequently tend to show very little hop character.",
    image: "assets/images/stout.jpg"
  },
  {
    name: "Bohemian Pilsner",
    description: "The Bohemian Pilsener has a slightly sweet and evident malt character and a toasted, biscuit-like, bready malt character. Hop bitterness is perceived as medium with a low to medium-low level of noble-type hop aroma and flavor. This style originated in 1842, with “pilsener” originally indicating an appellation in the Czech Republic. Classic examples of this style used to be conditioned in wooden tanks and had a less sharp hop bitterness despite the similar IBU ranges to German-style Pilsener. Low-level diacetyl is acceptable. Bohemian-Style Pilseners are darker in color and higher in final gravity than their German counterparts.",
    image: "assets/images/pilsner.jpg"
  },
  {
    name: "American Light Lager",
    description: "The Light Lager is generally a lighter version of a brewery's premium lager, some are lower in alcohol but all are lower in calories and carbohydrates compared to other beers. Typically a high amount of cereal adjuncts like rice or corn are used to help lighten the beer as much as possible. Very low in malt flavor with a light and dry body. The hop character is low and should only balance with no signs of flavor or aroma. European versions are about half the alcohol (2.5-3.5% ABV) as their regular beer, yet show more flavor (some use 100 percent malt) then the American counterparts. For the most part, this style has the least amount of flavor than any other style of beer.",
    image: "assets/images/lager.jpg"
  },
];

// click handler for buttons to change data in suggestions area of site.

$("#zip-submit").on("click", function () {
  var selectedTypeIndex = selectionTypeArr.indexOf(userBeer);

  $("#selected-style-name").text(selections[selectedTypeIndex].name);
  $("#selected-style-description").text(selections[selectedTypeIndex].description);
  $("#selected-style-image").attr("src", selections[selectedTypeIndex].image);
});

// Untappd API usage

function grabBeerInfo() {

  $('#recommended-beer-table').empty();

  var beerType = userBeer;

  if (beerType === "ipa") {
    beerType = "Imperial+IPA"
  } else if (beerType === "stout") {
    beerType = "English+Stout"
  } else if (beerType === "pilsner") {
    beerType = "Bohemian+Pilsner"
  } else if (beerType === "lager") {
    beerType = "American+Light+Lager"
  }

  var untapUrl = "https://api.untappd.com/v4/search/beer?access_token=8FE59E16FA14827F03E47654E9309EC100D785A8&q=" + beerType + "&limit=5"

  $.ajax(untapUrl)
    .then(function (response) {

      var results = response.response.beers.items;

      results.forEach(function (results) {

        var beerName = results.beer.beer_name;
        var brewName = results.brewery.brewery_name;
        var brewWeb = results.brewery.contact.url;
        var beerLabel = results.beer.beer_label;
        var beerDescrip = results.beer.beer_description;

        var createTD = $('<td>');
        var labelDiv = $('<div>').addClass('recommended-beer-row col-md-2 p-0');
        var labelImage = $('<img>').addClass("recommended-beer-label").attr('src', beerLabel);

        labelDiv.append(labelImage);
        createTD.append(labelDiv);

        var detailsDiv = $('<div>').addClass("col-md-10");
        var nameP = $('<p>').addClass('recommended-beer-name').text(beerName);
        var brewA = $('<a>').addClass('recommended-beer-url').text(brewName).attr("href", brewWeb).attr('target', '_blank');
        var descripP = $('<p>').addClass('recommended-beer-description').text(beerDescrip);

        detailsDiv.append(nameP, brewA, descripP);
        createTD.append(detailsDiv);

        $('#recommended-beer-table').append(createTD);

      });
    });
};

$(document).on('click', '#zip-submit', grabBeerInfo);

// Google Maps  - API key and callback linked at bottom of results.html per Google's documentation

var geocoder;
var infowindow;
var map;
var service; 
var address;
// var searchLoc = new google.maps.LatLng(32.78397, -96.7867089);



// Creates map
function initMap() {
  geocoder = new google.maps.Geocoder();
  var searchLoc = new google.maps.LatLng(32.78397, -96.7867089);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(document.getElementById('map'), {
    center: searchLoc,
    zoom: 17,
  });

  // Search for bars in searchLoc
  var request = {
    location: searchLoc,
    type: ['bar'],
    rankBy: google.maps.places.RankBy.DISTANCE
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
};

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
};

// Creates marker on map
function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function () {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
};

// Geocide converts zipcode to coordinates
function codeAddress() {
  address = userZip;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
    }
  });
  console.log(codeAddress);
}

$('#submit').on('click', codeAddress);
$('#submit').on('click', initMap);
$('#submit').on('click', callback);
$('#submit').on('click', createMarker);