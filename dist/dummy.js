'use strict';

(function () {
    function initialize() {
        var elements = document.querySelectorAll('[data-dummy]');

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var element = _step.value;

                var config = element.getAttribute('data-dummy');
                config = config.split(' ');
                element.innerText = generate(config[1], config[0]);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    window.onload = initialize;

    function generate(type, count) {
        var fill = '';

        switch (type) {
            case 'word':case 'words':
                for (var i = 0; i < count; i++) {
                    fill += randomElement(wordBank) + ' ';
                }

                fill = sentenceCase(fill.trim());
                break;
            case 'sentence':case 'sentences':
                for (var _i = 0; _i < count; _i++) {
                    fill += sentenceCase(generate('words', randomInteger(5, 12)));

                    fill += '. ';
                }

                break;
            case 'paragraph':case 'paragraphs':
                for (var _i2 = 0; _i2 < count; _i2++) {
                    fill += generate('sentences', randomInteger(8, 14));
                    fill += '\n';
                }

                break;
            default:
                console.error('Error: Invalid dummy fill type \'' + type + '\'');
        }

        return fill.trim();
    }

    var wordBank = 'a,ac,accumsan,ad,adipiscing,aenean,aliquam,aliquet,amet,ante,aptent,arcu,at,auctor,augue,bibendum,blandit,commodo,condimentum,congue,consectetur,consequat,conubia,convallis,cras,cubilia,curabitur,curae,cursus,dapibus,diam,dictum,dignissim,dolor,donec,dui,duis,efficitur,egestas,eget,eleifend,elementum,elit,enim,erat,eros,est,et,etiam,eu,euismod,ex,facilisis,fames,faucibus,felis,fermentum,feugiat,finibus,fringilla,fusce,gravida,hendrerit,himenaeos,iaculis,id,imperdiet,in,inceptos,integer,interdum,ipsum,justo,lacinia,lacus,laoreet,lectus,leo,libero,ligula,litora,lobortis,lorem,luctus,maecenas,magna,malesuada,massa,mattis,mauris,maximus,metus,mi,molestie,mollis,morbi,nam,nec,neque,nibh,nisi,nisl,non,nostra,nulla,nullam,nunc,odio,orci,ornare,pellentesque,per,pharetra,phasellus,placerat,porta,porttitor,posuere,praesent,pretium,primis,proin,pulvinar,purus,quam,quis,quisque,rhoncus,risus,rutrum,sagittis,sapien,scelerisque,sed,sem,semper,sit,sociosqu,sodales,sollicitudin,suscipit,suspendisse,taciti,tellus,tempus,tincidunt,torquent,tortor,tristique,turpis,ullamcorper,ultrices,ultricies,urna,ut,varius,vehicula,vel,velit,venenatis,vestibulum,vitae,vivamus,viverra,volutpat,vulputate'.split(',');

    // inclusive
    function randomInteger() {
        var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomElement(array) {
        return array[randomInteger(array.length)];
    }

    function sentenceCase(string) {
        var firstLetter = string.charAt(0).toUpperCase();
        var rest = string.slice(1);
        return '' + firstLetter + rest;
    }
})();