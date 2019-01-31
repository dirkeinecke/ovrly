# Ovrly

Ovrly is small javascript library used to overlay images on top of the current page. It is easy to set up and works with all modern browsers.

- **Releases and Changelog**. Viewable on the [Github Releases page](https://github.com/dirkeinecke/ovrly/releases)
- **License.** Ovrly is licensed under the MIT License. [Github license page](https://github.com/dirkeinecke/ovrly/blob/master/LICENSE)

by [Dirk Einecke](http://www.dirkeinecke.de)

---

## Getting started

1. [Download](https://github.com/dirkeinecke/ovrly/archive/master.zip) the latest version as a zip file.
2. Open up the zip file and take a peek at the working example that is included in the `/examples` folder.
3. Ready to set Ovrly up on your page? Start by including the Ovrly JavaScript. You can grab these file from the `/dist/js` folder.
   - Include the JavaScript at the bottom of your page before the closing `</body>` tag:  
     `<script src="path/to/ovrly.js"></script>`
3. Add a `onclick` attribute to any image link. For example:  
   `<a href="images/image-1.jpg" onclick="return ovrly.open(this);">Image #1</a>`
   
## License

Ovrly is licensed under [The MIT License](https://github.com/dirkeinecke/ovrly/blob/master/LICENSE).

* 100% Free. Ovrly is free to use in both commercial and non-commercial work.
* Attribution is required. This means you must leave my name, my homepage link, and the license info intact. None of these items have to be user-facing and can remain within the code.

## Help

Have a question about how to use Ovrly?

Follow the steps below to get help. Make sure you have looked at the included example first.

1. Search [Stackoverflow](http://stackoverflow.com/questions/tagged/ovrly) to see if other people have run into the same issue you are having.
2. If your issue is unique, then [post a new question on Stackoverflow](http://stackoverflow.com/questions/ask). Use the `ovrly` tag.

Do not use Github Issues to report personal support requests.

### Found a bug?

If you found a bug: [report the issue](https://github.com/dirkeinecke/ovrly/issues/new).
