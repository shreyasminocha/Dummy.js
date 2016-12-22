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

        } );

        describe( 'should fill a block with 3 paragraphs', () => {

            const element = document.getElementById( 'threeParagraphFill' );

            it( 'should exist', () => {

                expect( element ).is.not.null;

            } );

            it( 'should be of three paragraphs', () => {

                expect( element.innerText.split( '\n\n' ).length ).to.equal( 4 );

            } );

        } );

    } );

} );
