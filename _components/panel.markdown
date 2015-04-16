---
layout: component
title:  "Panel"
---

Panel is used to wrap any content inside a box and  if you need you can add dropdown funcionality transform it to dropdown only add "panel--dropdown" class modifier.

##panel

<div class="penguin-example">
    <section class="panel">
	    <h1 class="panel__title">Panel title</h1>
	    <div class="panel__content">Panel content</div>
	</section>
</div>
{% highlight html %}
<section class="panel">
    <h1 class="panel__title">Panel title</h1>
    <div class="panel__content">Panel content</div>
</section>
{% endhighlight %}


##dropdown panel

<div class="penguin-example">
	<section class="panel panel--dropdown">
	    <div class="dropdown dropdown--stacked dropdown--selected" data-selected="">
	        <h1 class="panel__title">Panel title</h1>
	        <a data-rel="dropdown" href="#content">
	        	<i class="icon" aria-hidden="true">
	        		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
						<polygon points="206.422,462 134.559,390.477 268.395,256 134.559,121.521 206.422,50 411.441,256 "/>
					</svg>
	        	</i>
	       	</a>
	        <div id="content" class="panel__content" data-dropdown="">Panel content</div>
	    </div>
	</section>
</div>
{% highlight html %}
<section class="panel panel--dropdown">
    <div class="dropdown dropdown--stacked dropdown--selected" data-selected>
        <h1 class="panel__title">Panel title</h1>
        <a data-rel="dropdown" href="#content">
            <i class="icon">*Your icon here*</i>
        </a>
        <div id="content" class="panel__content" data-dropdown>Panel content</div>
    </div>
</section>
{% endhighlight %}


##how to use

| Class modifier     | Description           |
|--------------------|-----------------------|
| .paginator--inline | Places items in-line. |
| .paginator--bar    | Places items in bar.  |