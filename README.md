# Dummy.js

*A simple, no-nonsense library for injecting dummy text in html pages.*

*****

## Introduction

It is extremely easy to start using Dummy.js. It is as easy as adding a script tag at the end of your body and adding an attribute to the elements you want dummy text in. I found it very cumbersome working with dummy text while designing web pages. In order to fix this issue for myself and all those facing it, I wrote this library.

## Website

[Dummy.js Official website](https://shreyasminocha.me/Dummy.js)

## Getting Started

```html
  <body>

    <!-- The /s plural is just for the semantics. You are well-off with 5,sentence -->

    <h1 data-dummy-fill="5,word(/s)"></h1>
    <p data-dummy-fill="6,sentence"></p>
    <p data-dummy-fill="1,paragraph"></p>
    ...
    <script src="/path/to/dummy.min.js"></script>

  </body>
```

There! Dummy.js is at your service.
Here's a [working demo](https://shreyasminocha.me/Dummy.js/demo.html).

## CDN

We have an official CDN URL! You can now use Dummy.js without downloading it to your server. Here's the link: [https://cdn.jsdelivr.net/dummyjs/latest/dummy.min.js](https://cdn.jsdelivr.net/dummyjs/latest/dummy.min.js).

## Disable

If you would like to disable Dummy.js, this can be done without removing it from your web page.

```html
<script src="/path/to/Dummy.js" data-dummy="disable"></script>
```

## Upcoming

In upcoming versions, we plan to introduce some new features:

- [ ] Add a configuration flow, for example, allow configuration of the number of words in a sentence in a paragraph.

## Versions
The current version of the library is `1.0.2`.

### Version History

* __v1.0.2__
 * Fixes issue #3.
* __v1.0.1__
 * Fixed a bug which caused the first two words in each sentence to be capital.
* __v1.0.0__
 * Initial release.


## MIT License

I have licensed this library under the MIT License (look for the `LICENSE` file). For those who don't know, it means that you can use this project for commercial projects, modify it, distribute it as well as use it for private use. Enjoy!

## Contributing

Thanks for taking the time to explore my library. If this has helped you, please consider contributing to this library. Please try to follow the code conventions used throughout this library.

## Thanks

I would like to thank all those who have taken the time to contribute to this library by fixing bugs, contributing code, or spreading the word.

Made with ♥ by @shreyasminocha.
