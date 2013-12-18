range-touch
===========

Use **HTML5 range** input on **touch** devices 
(iPhone, iPad &amp; Android) *without bloatware*!

# Try: http://goo.gl/uWhbzg

## Requirement

Let touch devices interact with the 
**&lt;input type&#61;&quot;range&quot;&gt;**
element without any *extra* styles or script. 



## Works with JQuery and/or Zepto

- http://zeptojs.com/zepto.min.js [**26kb**]  (***or***)
- code.jquery.com/jquery-1.10.2.min.js [**96kb**]



- - -

## Background

Today I had to add a range ("slider") to our (HTML5) iPad App. <br />
Unfortunately, at the time of writing, *Mobile* Safari 
***[does not support](http://caniuse.com/#feat=input-range)*** (touch/drag)
`<input type="range">` ... so I had to search.

### Why Not Use JQuery UI...?

Someone in the office *proclaimed* (in a *patronizing* tone): 

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

But none of the answers solved the problem *satisfactorily*. 
All of them require a CSS file which overrides styles we have in our project!
We need a 

### Alternatives

- JQuery Mobile: 
http://view.jquerymobile.com/1.3.2/dist/demos/widgets/sliders/ +
http://jquerymobile.com/download-builder/ [still *huge*!]
- TouchPunch [**Requires JQuery UI**!!]: http://touchpunch.furf.com/ +
https://github.com/furf/jquery-ui-touch-punch
- fd-slider [*bloated*!] https://github.com/freqdec/fd-slider
- noUiSlider: http://refreshless.com/nouislider/ + 
https://github.com/leongersen/noUiSlider
- Jquery Tools: https://github.com/jquerytools/jquerytools
