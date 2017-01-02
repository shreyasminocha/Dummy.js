# Dummy.js

*A simple, no-nonsense library for injecting dummy text in html pages.*

*****

![Dummy.js demo gif](demo.gif)

## Introduction

It is extremely easy to start using Dummy.js. It is as easy as adding a script tag at the end of your body and adding an attribute to the elements you want dummy text in. We found it very cumbersome working with dummy text while designing web pages. In order to fix this issue for myself and all those facing it, we wrote this library.

## Website

[Dummy.js Official website](https://shreyasminocha.me/Dummy.js)

## Getting Started

```html
    <body>

        <!-- The /s plural is just for the semantics. -->
        <!-- You are well of with `5-sentence` -->

        <h1 data-dummy-fill="5,word(/s)"></h1>
        <p data-dummy-fill="6,sentence"></p>
        <p data-dummy-fill="1,paragraph"></p>
        ...
        <script src="/path/to/dummy.min.js"></script>

    </body>
```

There! Dummy.js is at your service.
Here's a [working demo](https://shreyasminocha.me/Dummy.js/demo.html).

## Configuration

As of version 2.0.0, you can choose to manually configure the number of words in each sentence and the number of sentences in each paragraph.

### Number of words in a sentence

The following example will fill the `<p>` tag with 5 sentences of dummy text with each sentence having 4-12 words at random.

```html
<p data-dummy-fill="5,sentences,4-12 words"></p>
```

### Number of sentences in a paragraph

You can also manually configure the number of sentences in each paragraph. If you would like to have a paragraph with 15-18 sentences(inclusive), you could use the following markup:

```html
<p data-dummy-fill="1,paragraph,15-18 sentences"></p>
```

### Number of words in each sentence of a paragraph

You can generate a paragraph with 6-9 words per sentence by using the following markup:

```html
<p data-dummy-fill="1,paragraph,6-9 words"></p>
```

The example above would fill our `<p>` tag with a paragraph of 15-18 sentences(at random) with each sentence having a length of anywhere from 6 to 9 words.

## CDN

We have an official CDN URL! You can now use Dummy.js without downloading it to your server. Here's the link: [https://cdn.jsdelivr.net/dummyjs/latest/dummy.min.js](https://cdn.jsdelivr.net/dummyjs/latest/dummy.min.js).

## Disable

If you would like to disable Dummy.js, this can be done without removing it from your web page.

```html
<script src="/path/to/Dummy.js" data-dummy="disable"></script>
```

## Upcoming

In upcoming versions, we plan to introduce some new features:

- [x] Add a configuration flow, for example, allow configuration of the number of words in a sentence in a paragraph.

- [ ] Add support for dummy images.

## Versions
The current version of the library is `2.0.0`.

### Version History

* __v2.0.0__
  * Made the configuration API more semantic.
* __v1.1.0__
 * Added configuration flow, allowing customization of number of sentences in a paragraph.
* __v1.0.2__
 * Fixes issue #3.
* __v1.0.1__
 * Fixed a bug which caused the first two words in each sentence to be capital.
* __v1.0.0__
 * Initial release.


## MIT License

We have licensed this library under the MIT License (look for the `LICENSE` file). For those who don't know, it means that you can use this project for commercial projects, modify it, distribute it as well as use it for private use. Enjoy!

## Contributing

Thanks for taking the time to explore my library. If this has helped you, please consider contributing to this library. Please try to follow the code conventions used throughout this library.

## Thanks

We extend our gratitude to all those who have taken the time to contribute to this library by fixing bugs, contributing code, or spreading the word.

Made with ♥ by @shreyasminocha.
