var selectionTypeArr = ["ipa", "stout", "pilsner", "lager"];

var selections =[ // descriptions from beeradvocate.com
  {name: "Imperial IPA",
  description: "We have west coast American brewers to thank for this somewhat reactionary style. Take an India Pale Ale and feed it steroids, and you'll end up with a Double or Imperial IPA. Although generally recognizable alongside its sister styles in the IPA family, you should expect something more robust, malty, and alcoholic with a characteristically intense hop profile in both taste and aroma. In short, these are boldly flavored, medium-bodied beers that range in color from deep gold to medium amber. The 'imperial' usage comes from Russian Imperial Stout, a style of strong Stout originally brewed in England during the late 1700s for the Russian imperial court. Today Double IPA is often the preferred name in the United States.",
  image: "assets/images/ipa.jpg"},
  {name: "English Stout",
  description: "Stouts are typically dark brown to pitch black in color. A common profile among Stouts, but not in all cases, is the use of roasted barley (unmalted barley that is kilned to the point of being charred) which lends a dry character to the beer as well as a huge roasted flavor that can range from burnt to coffee to chocolate. Traditional English Stout recipes rely on bitterness from the roasted grain to provide a dry finish and consequently tend to show very little hop character.",
  image: "assets/images/stout.jpg"},
  {name: "Bohemian Pilsner",
  description: "The Bohemian Pilsener has a slightly sweet and evident malt character and a toasted, biscuit-like, bready malt character. Hop bitterness is perceived as medium with a low to medium-low level of noble-type hop aroma and flavor. This style originated in 1842, with “pilsener” originally indicating an appellation in the Czech Republic. Classic examples of this style used to be conditioned in wooden tanks and had a less sharp hop bitterness despite the similar IBU ranges to German-style Pilsener. Low-level diacetyl is acceptable. Bohemian-Style Pilseners are darker in color and higher in final gravity than their German counterparts.",
  image: "assets/images/pilsner.jpg"},
  {name: "American Light Lager",
  description: "The Light Lager is generally a lighter version of a brewery's premium lager, some are lower in alcohol but all are lower in calories and carbohydrates compared to other beers. Typically a high amount of cereal adjuncts like rice or corn are used to help lighten the beer as much as possible. Very low in malt flavor with a light and dry body. The hop character is low and should only balance with no signs of flavor or aroma. European versions are about half the alcohol (2.5-3.5% ABV) as their regular beer, yet show more flavor (some use 100 percent malt) then the American counterparts. For the most part, this style has the least amount of flavor than any other style of beer.",
  image: "assets/images/lager.jpg"},
];

// click handler for buttons to change data in suggestions area of site.

$(".options").on("click", function () {
  var selectedTypeIndex = selectionTypeArr.indexOf(this.id);

  $("#selected-style-name").text(selections[selectedTypeIndex].name);
  $("#selected-style-description").text(selections[selectedTypeIndex].description);
  $("#selected-style-image").attr("src", selections[selectedTypeIndex].image);
});

// API Time!

