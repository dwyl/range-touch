range-touch
===========

Use **HTML5 range** input on **touch** devices 
(iPhone, iPad &amp; Android) *without bloatware*!

## Background

Today I had to add a range ("slider") to our (HTML5) iPad App. <br />
Unfortunately, at the time of writing, *Mobile* Safari 
***[does not support](http://caniuse.com/#feat=input-range)*** (touch/drag)
`<input type="range">` ... so I had to search.



### Why Not Use JQuery UI...?

Our project does *not* include JQuery UI I was *reluctant* to add it 
*just* for the slider feature. <br />
[jquery-ui-1.10.3](http://code.jquery.com/ui/1.10.3/jquery-ui.js) is **436kb**!
Even ***minified** 
[jquery-ui.min.js](http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js)
is still **228kb** and then you *also* need the CSS file (another **32kb**): 
[](http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css) 
(So unless you need *several* of Jquery UI's features, loading it on a mobile
divice is going to be *painfully slow*!) <br />

I tried building a *custom* JQuery UI script with just the *bare essentials*:
http://jqueryui.com/download/ but this was still over **140kb**!





## Research 

My first search for a solution took me to **StackOverflow**:

- http://stackoverflow.com/questions/5484540/recreating-the-html5-range-input-for-mobile-safari-webkit
- http://stackoverflow.com/questions/16732569/zepto-js-tap-event-doesnt-fire

### Alternatives

- noUiSlider: http://refreshless.com/nouislider/ + 
https://github.com/leongersen/noUiSlider
- TouchPunch [**Requires JQuery UI**!!]: http://touchpunch.furf.com/ +
https://github.com/furf/jquery-ui-touch-punch
- fd-slider [*bloated*!] https://github.com/freqdec/fd-slider