//Speed is higher when the delay is lower, trigger the bookmarklet again to stop scrolling
avascript:if (typeof stop !== 'undefined') {stop=!stop;}else{stop=false;}(function recursion(){if(!stop){setTimeout(function(){window.scrollBy(0,1); recursion(); },300);}})();
