# Dummy.js

## Introduction

Dummy.js is a simple, no-nonsense library for injecting dummy text in html pages. It is extremely easy to start using `Dummy.js`. It is as easy as adding a script tag at the end of your body and adding an attribute to the elements you want dummy text in. I found it very cumbersome working with dummy text while designing web pages. In order to fix this issue for myself and all those facing it, I wrote this library.

## Website

This section will be updated once we have an official website for Dummy.js.

## Getting Started

```html
  <body>

    <!-- The /s plural is just for the semantics. You are well-off with 5,sentence -->

    <h1 data-dummy="5,word(/s)"></h1>
    <p data-dummy="6,sentence"></p>
    <p data-dummy="1,paragraph"></p>
    ...
    <script src="/path/to/dummy.min.js"></script>

  </body>
```

There! Dummy.js is at your service.
Here's a [working demo(broken at the moment)](https://github.com/shreyasminocha/Dummy.js#).

## CDN

This section will be updated once Dummy.js has an official CDN.

## Disable

If you would like to disable Dummy.js, this can be done without removing it from your web page.

```html
<script src="/path/to/Dummy.js" data-dummy="disable"></script>
```

## MIT License

I have licensed this library under the MIT License (look for the `LICENSE` file). For those who don't know, it means that you can use this project for commercial projects, modify it, distribute it as well as use it for private use. Enjoy!

## Contributing

Thanks for taking the time to explore my library. If this has helped you, please consider contributing to this library. If you would like to contribute code to this library, or fix a bug, please use [airbnb formatted javascript](http://airbnb.io/javascript). I use [jscs](http://jscs.info) for formatting my javascript code. I have included a `.jscsrc` file with the airbnb preset set up. To use jscs, run `npm install -g jscs`, assuming you have npm installed on your system.

## Thanks

I would like to thank all those who have taken the time to contribute to this library by fixing bugs, contributing code, or spreading the word. 
