# Dummy.js

> A simple script for injecting dummy text into html pages.

![Screenshot of Dummy.js in action](https://i.imgur.com/VI0UyJY.jpg)

## Getting Started

```html
<head>
    <script src="/path/to/dummy.min.js"></script>
</head>

<body>
    <h1 data-dummy="5 words"></h1>
    <p data-dummy="6 sentences"></p>
    <!-- Both `1 paragraph` and `1 paragraphs` will work -->
    <p data-dummy="1 paragraph"></p>
</body>
```

There! Dummy.js is at your service.

## CDN

`https://cdn.jsdelivr.net/gh/shreyasminocha/Dummy.js@[insert version number]0/dist/dummy.min.css`

Make sure to replace `[insert version number]` with the [tag of the latest version](https://github.com/shreyasminocha/Dummy.js/releases/latest).

## Usage

### Words

The following snippet would fill `<h1>` with 5 words of dummy text.

```html
<h1 data-dummy="5 words"></h1>
```

### Sentences

The following snippet would fill `<p>` with 8 sentences of dummy text.

```html
<p data-dummy="8 sentences"></p>
```

### Paragraphs

The following snippet would fill `<p>` with 3 paragraphs of dummy text.

```html
<p data-dummy="3 paragraphs"></p>
```

## Ready to ditch pseudo-Latin?

You can temporarily disable Dummy.js, by simply commenting out the script tag that imports it. Once you have your copy ready, you could use the regular expression`data-dummy=([\"\'])[\d\w ]*\1` to match all `data-dummy` attributes(and remove them).

## License

[MIT License](https://shreyas.mit-license.org/2016)
