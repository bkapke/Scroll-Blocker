Scroll-Blocker
==============

A simple library to stop scrolling when the mouse wheel is used on top of fixed containers.  

###A simple jQuery backed scroll arrester</h2>
Quickly block un-intentional background scrolling when certain elements are scrolled or touched.
Un-intentional scrolling and bouncing can make an app's layout seem loose and sloppy.

[See the live demo here](http://yourshoesuntied.com/scroll-blocker-demo/).

####Implementation

Link to jquery and the scroll blocker library.

    //Hosted jquery link
     <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
     // make sure your path to the js file is correct
     <script src="your-path/js/scroll-blocker.js"></script>
    
Add the scroll lock to your page with one line of jQuery!

    var noBroNo = new ScrollBlocker($('#noBroNo'));
  
###Need to nest a scrollable element in one that is locked?

    var nestedScrollingDiv = new NestedScroller($('#nested-scroll'));


