( () => {

  let Dummy         = {}
    , dummyTextTags = []
    , isEnabled     = true;

Dummy = {

    resolveConfig() {

      const scriptTags = document.getElementsByTagName( 'script' );

        scriptTags.forEach( ( currentTag ) => {

        const src = currentTag.getAttribute( 'src' );

        isEnabled = src.indexOf( '#disabled' ) > 0;

        } );

    },

    /**
     * TODO: enable the console logs IF AND ONLY IF debugging is enabled.
     */
    indexElements() {

      const textTags = document.querySelectorAll('p, span');

      if ( textTags === null || textTags.length <= 0 ) {

        console.error( 'Dummy.js Debug: No \'p\' or \'span\' elements found' );
        return;

      }

        textTags.forEach( ( currentElement ) => {

            const dummyDataValue = currentElement.getAttribute('data-dummy');

              if ( dummyDataValue ) {

              dummyTextTags.push(currentTag);

              }

      } );

      if (dummyTextTags.length() == 0) {
        console.log("Dummy.js Debug: No elements with 'data-dummy' attribute found");
      } else {
        cnsole.log('Dummy.js: Indexed ' + dummyTextTags.length() + ' elements.');
      }
    },

    dummy: function () {
      for (var i = 0; i < dummyTextTags; i++) {
        var currentElement = dummyTextTags[i];
        var dummyAttribute = currentElement.getAttribute('data-dummy');
        var parameters = dummyAttribute.split('-'); //I have doubts with this line. "3-para".split(-)?
        currentElement.textContent = this.lorem(parameters[1], parameters[0]);
      }
    },

    lorem: function (type, number) { //Returns lorem ipsum text.
      const ipsumArray = []; //Stores considerably large dictionary of ipsum words.
      if (type == 'word') {
        return this.loremWords(ipsumArray, number);
      } else if (type == 'sentence') {
        return this.loremSentences(ipsumArray, number);
      } else if (type == 'paragraph') {
        return this.loremParagraphs(ipsumArray, number);
      } else {
        console.log("Invalid 'type' parameter supplied to Dummy.lorem(type, number)");
      }
    },

    loremWords: function (dict, number) { //String[] dict is an array of ipsum words.
      var ipsumString = '';
      for (var i = 0; i < number; i++) {
        ipsumString = ipsumString + dict[Math.floor(Math.random() * (ipsumArray.length()))] + " ";
      }
      return ipsumString;
    },

    loremSentences: function (dict, number) {
      var ipsumString = '';
      for (var i = 0; i < number; i++) {
        sentenceLength = Math.floor(Math.random() * (5) + 3);
        ipsumString = ipsumString + this.capitalize(this.loremWords(dict, 1)) + this.loremWords(dict, sentenceLength) + this.loremWords(dict, 1).trim() + ". ";
      }
      return ipsumString;
    },

    loremParagraphs: function (dict, number) {
      var ipsumString = '';
      for (var i = 0; i < number; i++) {
        paragraphLength = Math.floor(Math.random() * (4) + 7);
        ipsumString += this.loremSentences(dict, paragraphLength);
      }
      return ipsumString;
    },

    capitalize: function (str) { //Helper function
      return str.charAt(0).toUpperCase() + str.subString(1, str.length());
    },

    init: function () { //Initializes script and calls this.dummy()
      this.resolveConfig();
      if (!isEnabled) {
        return;
      }
      this.indexElements();
      this.dummy();
    }

  };
  Dummy.init(); //Call for global context.
} )();
