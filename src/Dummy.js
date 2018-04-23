'use strict';

(global => {
    const wordBank = 'a,ac,accumsan,ad,adipiscing,aenean,aliquam,aliquet,amet,ante,aptent,arcu,at,auctor,augue,bibendum,blandit,commodo,condimentum,congue,consectetur,consequat,conubia,convallis,cras,cubilia,curabitur,curae,cursus,dapibus,diam,dictum,dignissim,dolor,donec,dui,duis,efficitur,egestas,eget,eleifend,elementum,elit,enim,erat,eros,est,et,etiam,eu,euismod,ex,facilisis,fames,faucibus,felis,fermentum,feugiat,finibus,fringilla,fusce,gravida,hendrerit,himenaeos,iaculis,id,imperdiet,in,inceptos,integer,interdum,ipsum,justo,lacinia,lacus,laoreet,lectus,leo,libero,ligula,litora,lobortis,lorem,luctus,maecenas,magna,malesuada,massa,mattis,mauris,maximus,metus,mi,molestie,mollis,morbi,nam,nec,neque,nibh,nisi,nisl,non,nostra,nulla,nullam,nunc,odio,orci,ornare,pellentesque,per,pharetra,phasellus,placerat,porta,porttitor,posuere,praesent,pretium,primis,proin,pulvinar,purus,quam,quis,quisque,rhoncus,risus,rutrum,sagittis,sapien,scelerisque,sed,sem,semper,sit,sociosqu,sodales,sollicitudin,suscipit,suspendisse,taciti,tellus,tempus,tincidunt,torquent,tortor,tristique,turpis,ullamcorper,ultrices,ultricies,urna,ut,varius,vehicula,vel,velit,venenatis,vestibulum,vitae,vivamus,viverra,volutpat,vulputate'.split(',');

    function initialize() {
        let elements = document.querySelectorAll('[data-dummy]');

        for (let element of elements) {
            const config = parseConfig(element.getAttribute('data-dummy'));
            element.innerText = generate(config.type, config.count);
        }
    }

    function parseConfig(config) {
        const segments = config.split(' ');

        return {
            count: segments[0],
            type: segments[1]
        };
    }

    function generate(type, count) {
        let fill = '';

        switch (type) {
            case 'word':
            case 'words':
                for (let i = 0; i < count; i++) {
                    fill += randomElement(wordBank) + ' ';
                }

                fill = sentenceCase(fill.trim());
                break;
            case 'sentence':
            case 'sentences':
                for (let i = 0; i < count; i++) {
                    fill += sentenceCase(
                        generate('words', randomInteger(5, 12)),
                    );

                    fill += '. ';
                }

                break;
            case 'paragraph':
            case 'paragraphs':
                for (let i = 0; i < count; i++) {
                    fill += generate('sentences', randomInteger(8, 14));
                    fill += '\n';
                }

                break;
            default:
                console.error(`Error: Invalid dummy fill type '${type}'`);
        }

        return fill;
    }

    global.onload = initialize;

    //////////////////////
    // Helper Functions //
    //////////////////////

    function randomInteger(min = 0, max = 1) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomElement(array) {
        return array[randomInteger(array.length)];
    }

    function sentenceCase(string) {
        const firstLetter = string.charAt(0).toUpperCase();
        const rest = string.slice(1);
        return `${firstLetter}${rest}`;
    }
})(this);
