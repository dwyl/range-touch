range-touch
===========

Lets you use **HTML5 range** input on **touch** devices <br />
(iPhone, iPad &amp; Android) with a *single* **2kb** JS file (*no bloatware*)!

## Try it: https://range-touch.herokuapp.com

## Requirements

1. Let touch devices interact with the
**&lt;input type&#61;&quot;range&quot;&gt;** element
2. Do not *force* people to use any *extra* styles or script.
3. Do not modify markup on the page (other scripts do wierd things!)
4. Degrade gracefully for people with JavaScript disabled (desktop only)
5. Works with [JQuery](http://code.jquery.com/jquery-1.10.2.min.js) [**96kb**]
***or*** [Zepto](http://zeptojs.com/zepto.min.js) [**26kb**]

## Results

#### iPhone (Safari Mobile iOS 7)

!["range-touch iPhone"](http://i.imgur.com/hpkWznf.jpg)

#### Android (Samsung Galaxy S3 - Default Browser 4.2)

!["range-touch Android"](http://i.imgur.com/ZraQBwG.png)


#### iPad (Safari Mobile iOS 7)

!["range-touch iPad"](http://i.imgur.com/Y20bJN6.jpg)


- - -

## Background

Today I had to add a range ("slider") to our (HTML5) iPad App. <br />
Unfortunately, at the time of writing, *Mobile* Safari
***[does not support](http://caniuse.com/#feat=input-range)*** (touch/drag)
`<input type="range">` ... so I had to search.

### Why Not Use JQuery UI...?

A (*non-technical*) person in the office *asked* (in *patronizing* tone):

> "*Why don't you just use Jquery UI Slider...?*"
> http://jqueryui.com/slider/

Our project does *not* include JQuery UI I was *reluctant* to add it
*just* for the slider feature. <br />
[jquery-ui-1.10.3.js](http://code.jquery.com/ui/1.10.3/jquery-ui.js)
is **436kb**!! Even the ***minified*** version
[jquery-ui.min.js](http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js)
is a whopping **228kb** and you *also* need the CSS file (another **32kb**):
[jquery-ui.css](http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css)
(So unless you need *several* of Jquery UI's features, loading **260kb**
on a mobile device is going to be *painfully slow*!) <br />

I tried building a *custom* JQuery UI script with just the *bare essentials*:
<br /> http://jqueryui.com/download/ but this was *still* **140kb**+!

## Research

My first search for a solution took me to **StackOverflow**:

- http://stackoverflow.com/questions/5484540/recreating-the-html5-range-input-for-mobile-safari-webkit
- http://stackoverflow.com/questions/16732569/zepto-js-tap-event-doesnt-fire
- http://stackoverflow.com/questions/3556157/how-to-customize-the-html5-input-range-type-looks-using-css
- http://stackoverflow.com/questions/5165287/how-to-achive-background-color-in-html5-inputtype-range

But none of the answers solved the problem *satisfactorily*.
All of them require a CSS file which overrides styles we have in our project!
We need a lightweight solution that ***only*** adds touch support and no styles!

### Alternatives

- JQuery Mobile:
http://view.jquerymobile.com/1.3.2/dist/demos/widgets/sliders/ +
http://jquerymobile.com/download-builder/ [still *huge*!]
- TouchPunch [**Requires JQuery UI**!!]: http://touchpunch.furf.com/ +
https://github.com/furf/jquery-ui-touch-punch
- fd-slider [*bloated*!] https://github.com/freqdec/fd-slider
- noUiSlider [**38kb**]: http://refreshless.com/nouislider/ +
https://github.com/leongersen/noUiSlider
- Jquery Tools: https://github.com/jquerytools/jquerytools
- Range Polyfill: https://github.com/jonstipe/range-polyfill
- Modernizr: https://github.com/Modernizr/Modernizr/

### Bibliography

- Intro to &lt;input type&#61;&quot;range&quot;&gt;:
http://www.html5tutorial.info/html5-range.php
- Quirksmode Confirms Not Currently Supported in Safari Mobile:
http://www.quirksmode.org/html5/inputs_mobile.html
- http://www.developerdrive.com/2013/09/how-to-style-range-sliders-in-webkit/
- http://fusiongrokker.com/post/using-the-zepto-js-touch-events-plugin-for-more-responsive-phonegap-apps-without-zepto
- http://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider

