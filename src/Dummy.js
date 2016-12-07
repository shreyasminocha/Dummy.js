( () => {

    let Dummy             = {}
      , dummyTextFillTags = []
      , isEnabled         = true
      , debug             = true;

    Dummy = {

        log( message ) {

            if( debug ) console.debug( `Dummy.js Debug: ${ message }` );

        },

        resolveConfig() {

            const scriptTags = document.getElementsByTagName( 'script' );

            for( let i = 0; i < scriptTags.length; i++ ) {

                const currentTag = scriptTags[ i ]
                     , src       = currentTag.getAttribute( 'src' );

                if( src && ( src.toLowerCase().indexOf( 'dummy' ) > 0 ) ) {

                    let configTags = currentTag.getAttribute( 'data-dummy' );

                    this.log( 'found anchoring tag in DOM' );

                    if( !configTags ) {

                        this.log( 'did not find any `data-dummy` attribute; configuration done' );
                        return;

                    }

                    configTags = configTags.split( ',' );
                    configTags.forEach( ( configTag ) => {

                        this.log( `resolved; \`${ configTag }\`` );

                        if( configTag === 'debug' ) debug = true;
                        if( configTag === 'disable' || configTag === 'disabled' ) {

                            isEnabled = false;
                            this.log( 'SCRIPT DISABLED' );

                        }

                    } );

                }

            }

        },

        indexElements() {

            const textTags = document.querySelectorAll( 'p, span' );

            if( !textTags || textTags.length === 0 ) {

                this.log( 'no \'p\' or \'span\' elements found' );
                return;

            }

            for( let i = 0; i < textTags.length; i++ ) {

                const currentElement = textTags[ i ]
                    , dummyDataValue = currentElement.getAttribute( 'data-dummy-fill' );

                if( dummyDataValue !== null ) {

                    dummyTextFillTags.push( currentElement );

                }

            }

            if( dummyTextFillTags.length === 0 ) {

                this.log( 'no DummyJS-enabled DOM elements found in current tree' );

            } else {

                this.log( `indexd ${ dummyTextFillTags.length } elements in current DOM tree` );

            }

        },

        dummy() {

            for( let i = 0; i < dummyTextFillTags; i++ ) {

                // we're looking at something like:
                // data-dummy-fill="3,sentences"

                const currentElement = dummyTextFillTags[ i ]
                    , dummyConfig    = currentElement.getAttribute( 'data-dummy-fill' ).split( ',' );

                currentElement.innerText = this.generateLoremBlock( parameters[ 1 ], parameters[ 0 ] );

            }

        },

        generateLoremBlock( type, count ) { 

            const ipsumArray = []; //Stores considerably large dictionary of ipsum words.

            switch (type) {
                case 'word':
                    return this.loremWords(ipsumArray, number);
                case 'sentence':
                    return this.loremSentences(ipsumArray, number);
                case 'paragraph':
                    return this.loremParagraphs(ipsumArray, number);
                default :
                    console.log("Invalid 'type' parameter supplied to Dummy.lorem(type, number)");
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

            if( !isEnabled ) {
                return;
            }

            this.indexElements();
            this.dummy();

        },

    };

    Dummy.init(); //Call for global context.

})();
