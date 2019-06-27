# toolbar

Getting Started

You need files to work: Import into your project: from the src: css / index.css folder from the build: widget.js folder

and from file index.html

classes toolbar-wrapper, show-bar, bar
```html
<div class="toolbar-wrapper">
    <!-- bar button -->
    <div class="show-bar">
         Show Bar
    </div>
    <!-- bar -->
    <div class="bar">
       <div class="bar-info">
          <span id="bar-text"></span>
             <span>Get widgets</span>
             <span id="bar-exit">X</span>
          </div>
       </div>
    </div>
</div>
-------------------------------------
javascript links and code to start

<script src="build/widget.js"></script>

<script type="text/javascript">
    window.addEventListener('DOMContentLoaded', function(e) {
        let bar = new Bar({
            message: "Add beautiful widgets to your website", 
            position: "top" //or bottom
        });
    });
</script>

and style link
<link rel="stylesheet" href="src/css/index.css">
-----------------------------------------------
Options:
You can change the position of the toolbar by changing position in the javascript code in index.html file. You can choose 'bottom' or 'top'.
---------------------------------------------------
MIT LICENSE

