(function () {
  var Dummy = {}; //Stores Dummy.js codebase.
  var dummyTextTags = []; //Array of tags with 'data-dummy' attribute
  var isEnabled = true;
  Dummy = {
    resolveConfig: function () { //Checks if disabled tag is present.
      var scriptTags = document.getElementsByTagName('script');
      for (var i = 0; i < scriptTags.length(); i++) {
        var currentTag = scriptTags[i];
        var src = currentTag.getAttribute('src');
        if (src == null || src.toLowerCase().indexOf('dummy') == -1) {
          continue;
        }

        if (src.indexOf('#disabled') != -1) {
          isEnabled = false;
          break;
        }
      }
    },

    indexElements: function () { //Generates index of all elements to inject dummy text in.
      var textTags = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, l1. a');
      if (textTags == null || textTags.length <= 0) {
        console.log('Dummy.js Debug: No supported text elements found.');
        return;
      }

      for (var i = 0; i < textTags.length(); i++) {
        var currentElement = textTags[i];
        var dummyDataValue = currentElement.getAttribute('data-dummy');
        if (dummyDataValue == null) {
          continue;
        } else {
          dummyTextTags.push(currentTag);
        }
      }

      if (dummyTextTags.length() == 0) {
        console.log("Dummy.js Debug: No elements with 'data-dummy' attribute found");
      } else {
        console.log('Dummy.js: Indexed ' + dummyTextTags.length() + ' elements.');
      }
    },

    dummy: function () {
      for (var i = 0; i < dummyTextTags; i++) {
        var currentElement = dummyTextTags[i];
        var dummyAttribute = currentElement.getAttribute('data-dummy');
        var parameters = dummyAttribute.split('-');
        currentElement.textContent = this.lorem(parameters[1], parameters[0]);
      }
    },

    lorem: function (type, number) {
      var ipsumText = 'lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqut ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum';
      var ipsumArray = ipsumText.split(' ');
      switch (type) {
        case 'word':
          return this.loremWords(ipsumArray, number);
        case 'sentence':
          return this.loremSentences(ipsumArray, number);
        case 'paragraph':
          return this.loremParagraphs(ipsumArray, number);
        default :
          console.log("Invalid 'type' parameter supplied to Dummy.lorem(type, number)");
          return;
      }
    },

    loremWords: function (dict, number) { //String[] dict is an array of ipsum words.
      var ipsumString = '';
      for (var i = 0; i < number; i++) {
        ipsumString = ipsumString + dict[Math.floor(Math.random() * (ipsumArray.length()))] + ' ';
      }

      return ipsumString;
    },

    loremSentences: function (dict, number) {
      var ipsumString = '';
      for (var i = 0; i < number; i++) {
        sentenceLength = Math.floor(Math.random() * (5) + 3);
        ipsumString = ipsumString + this.capitalize(this.loremWords(dict, 1)) + this.loremWords(dict, sentenceLength) + this.loremWords(dict, 1).trim() + '. ';
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
    },

  };
  Dummy.init(); //Call for global context.
})();
