const expect = chai.expect;

describe( 'Dummy.js', () => {

    it( 'should attach Dummy object to global context', () => {

        expect( window.dummy ).to.be.an( 'object' );

    } );

    describe( 'should give correct configuration feedback', () => {

        it( 'should have isEnabled attribute', () => {

            const config = window.dummy.getConfig();

            expect( config ).to.be.an( 'object' );

            expect( config.isEnabled ).to.be.true;
            expect( config.isEnabled ).to.be.a( 'boolean' );

        } );

        it( 'should have debug attribute', () => {

            const config = window.dummy.getConfig();

            expect( config ).to.be.an( 'object' );

            expect( config.debug ).to.be.true;
            expect( config.debug ).to.be.a( 'boolean' );

        } );

    } );

    describe( 'should populate fields', () => {

        describe( 'should fill paragraph with 1 sentence of three words', () => {

            const element = document.getElementById( 'threeWordFill' );

            it( 'should exist', () => {

                expect( element ).is.not.null;

            } );

            it( 'should be of three words', () => {

                expect( element.innerText.split( ' ' ).length ).to.equal( 3 );

            } );

        } );

        describe( 'should fill paragraph with 3 sentence', () => {

            const element = document.getElementById( 'threeSentenceFill' );

            it( 'should exist', () => {

                expect( element ).is.not.null;

            } );

            it( 'should be of three sentences', () => {

                const sentences = element.innerText.split( '.' ).filter( ( sentence ) => {

                    return( sentence !== "" );

                } );

                expect( sentences.length ).to.equal( 3 );

            } );

            it( 'should have sentences of word length between 5 and 8', () => {

                const wordsA = element.innerText.split( '. ' )[ 0 ].split( ' ' );
                const wordsB = element.innerText.split( '. ' )[ 1 ].split( ' ' );
                const wordsC = element.innerText.split( '. ' )[ 2 ].split( ' ' );

                expect( wordsA.length ).to.gte( 5 ).and.lte( 8 );
                expect( wordsB.length ).to.gte( 5 ).and.lte( 8 );
                expect( wordsC.length ).to.gte( 5 ).and.lte( 8 );

            } );

        } );

        describe( 'should fill a block with 3 paragraphs', () => {

            const element = document.getElementById( 'threeParagraphFill' );

            it( 'should exist', () => {

                expect( element ).is.not.null;

            } );

            it( 'should be of three paragraphs', () => {

                expect( element.innerText.split( '\n\n' ).length ).to.equal( 4 );

            } );

            it( 'should have paragraphs of 18-20 sentences', () => {

                expect( element.innerText.split( '\n\n' )[ 0 ].split( '. ' ).length ).to.gte( 18 ).and.lte( 20 );

                expect( element.innerText.split( '\n\n' )[ 1 ].split( '. ' ).length ).to.gte( 18 ).and.lte( 20 );

                expect( element.innerText.split( '\n\n' )[ 2 ].split( '. ' ).length ).to.gte( 18 ).and.lte( 20 );

            } );

            it( 'should have sentences of length between 3 and 5', () => {

                const paragraphA = element.innerText.split( '\n\n' )[ 0 ];
                const paragraphB = element.innerText.split( '\n\n' )[ 1 ];
                const paragraphC = element.innerText.split( '\n\n' )[ 2 ];

                for( let i = 0; i < paragraphA.split( '. ' ).length; i++ ) {

                    const sentence = paragraphA.split( '. ' )[ i ];
                    expect( sentence.split( ' ' ).length ).to.gte( 3 ).and.lte( 5 );

                }

                for( let i = 0; i < paragraphB.split( '. ' ).length; i++ ) {

                    const sentence = paragraphB.split( '. ' )[ i ];
                    expect( sentence.split( ' ' ).length ).to.gte( 3 ).and.lte( 5 );

                }

                for( let i = 0; i < paragraphC.split( '. ' ).length; i++ ) {

                    const sentence = paragraphC.split( '. ' )[ i ];
                    expect( sentence.split( ' ' ).length ).to.gte( 3 ).and.lte( 5 );

                }

            } );

        } );

    } );

} );
