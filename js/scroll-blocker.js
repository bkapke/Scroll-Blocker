/*
 * Just pass in an element with jQuery and the document will not scroll when the element passed in is hovered or swiped
 * great for modals!
*/

var ScrollLock = function(element) {    
    element.bind("touchmove", scrollPhone, false);
    
    function scrollPhone(e) {
        e.preventDefault()
    };
    
    //in case you need top dynamically unbind.
    this.removeListener = function() {
        element.unbind("mousewheel DOMMouseScroll MozMousePixelScroll");
    };
    
    this.addListener = function () {
        element.bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(e){
            e.preventDefault();
        });
    };
    
    this.addListener()
    
};

var NestedScroller = function(element) {
    var delta;
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    
    element.bind("mousewheel wheel DOMMouseScroll MozMousePixelScroll", function(e){
        if(e.originalEvent.wheelDeltaY) {
            delta = e.originalEvent.wheelDeltaY;
        }
        
        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            if(!e.originalEvent.wheelDeltaY && e.originalEvent.deltaY) {
                //inverted for firefox
                delta = (e.originalEvent.deltaY) * -1
            }
        }
        
        var bottom = false;
        var elem = $(e.currentTarget);
        
        if (delta > 0) {
            if(elem.scrollTop() != 0) {

                e.stopPropagation();
            }
        }
        if (delta < 0 && elem[0].scrollHeight - elem.scrollTop() != elem.outerHeight()){
            e.stopPropagation();
        }
    });
}
