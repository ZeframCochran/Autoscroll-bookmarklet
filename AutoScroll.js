//Speed is higher when the delay is lower.
javascript:stop=false;(function recursion(){if(!stop){setTimeout(function(){window.scrollBy(0,1); recursion(); },300);}})();