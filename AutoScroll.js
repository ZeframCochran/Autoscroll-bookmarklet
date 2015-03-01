//Speed is higher when the delay is lower, trigger the bookmarklet again to stop scrolling
javascript:if ("intervalNumber" in window) { clearInterval(window.intervalNumber); delete window.intervalNumber; }else{ begin = (function begin(){ window.intervalNumber = setInterval(function(){ window.scrollBy(0,1); },delay=300); }); begin(); }


Pretty version:

if ("intervalNumber" in window) {
	clearInterval(window.intervalNumber);
	delete window.intervalNumber;
}else{
	begin = (function begin(){
			window.intervalNumber = setInterval(function(){
				window.scrollBy(0,1);
			},delay=300);
	});
	begin();
}
