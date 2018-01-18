(global => {
    ///////////////
    // Constants //
    ///////////////
    const dictionary = 'lorem,ipsum,dolor,sit,amet,consectetur,adipiscing,elit,proin,accumsan,lacus,ut,tristique,ante,est,vehicula,risus,eget,ornare,tortor,libero,sed,donec,porttitor,felis,non,massa,vestibulum,maecenas,urna,pretium,sodales,in,semper,a,leo,morbi,luctus,nisl,id,eleifend,lacinia,quam,orci,consequat,neque,dui,eu,nullam,condimentum,nibh,pulvinar,at,sem,viverra,auctor,mauris,euismod,vulputate,pharetra,suspendisse,quis,bibendum,eros,duis,egestas,venenatis,volutpat,magna,convallis,vivamus,maximus,malesuada,aliquam,ultricies,nisi,laoreet,interdum,turpis,vel,sagittis,ullamcorper,ultrices,velit,placerat,mollis,suscipit,diam,ligula,cursus,scelerisque,porta,vitae,lectus,primis,faucibus,et,posuere,cubilia,curae,sollicitudin,tincidunt,justo,ac,aenean,purus,arcu,finibus,facilisis,varius,dignissim,dapibus,congue,gravida,etiam,mi,cras,molestie,fusce,nunc,blandit,tempus,quisque,aliquet,sapien,erat,fringilla,nam,mattis,nec,rutrum,pellentesque,iaculis,ex,hendrerit,tellus,dictum,odio,praesent,elementum,metus,enim,nulla,augue,feugiat,efficitur,commodo,rhoncus,imperdiet,lobortis,integer,curabitur,phasellus,fames,aptent,taciti,sociosqu,ad,litora,torquent,per,conubia,nostra,inceptos,himenaeos,fermentum'.split(
        ',',
    );

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

    ////////////////
    // Real Stuff //
    ////////////////
    function initialize() {
        let elements = document.querySelectorAll('[data-dummy]');

        for (let element of elements) {
            const config = parseConfig(element.getAttribute('data-dummy'));
            element.innerText = generate(config);
        }
    }

    function parseConfig(config) {
        const segments = config.split(' ');

        return { count: segments[0], type: segments[1] };
    }

    function generate(config) {
        switch (config.type) {
            case 'word':
            case 'words':
                let words = '';

                for (let i = 0; i < config.count; i++) {
                    words += randomElement(dictionary) + ' ';
                }

                return sentenceCase(words.trim());
            case 'sentence':
            case 'sentences':
                let sentences = '';

                for (let i = 0; i < config.count; i++) {
                    sentences += sentenceCase(
                        generate({
                            count: randomInteger(5, 12),
                            type: 'words',
                        }),
                    );

                    sentences += '. ';
                }

                return sentences;
            case 'paragraph':
            case 'paragraphs':
                let paragraphs = '';

                for (let i = 0; i < config.count; i++) {
                    paragraphs += generate({
                        count: randomInteger(8, 14),
                        type: 'sentences',
                    });

                    paragraphs += '\n';
                }

                return paragraphs;
            default:
                console.error(
                    `Error: Invalid dummy fill type '${config.type}'`,
                );

                return '';
        }
    }

    global.onload = initialize;
})(this);
