---
layout: component
title:  "Navigation"
---

Contains links to other sections of the website.

##nav inline

<div class="penguin-example">
	<nav class="nav nav--inline" role="navigation">
	    <h1 class="invisible">Navigation</h1>
	    <ul class="nav__menu">
	        <li class="nav__menu__item nav__menu__item--selected"><a href="#" class="nav__menu__link">Item 1</a></li>
	        <li class="nav__menu__item"><a href="#" class="nav__menu__link">Item 2</a></li>
	        <li class="nav__menu__item nav__menu__item--lead"><a href="#" class="nav__menu__link">Item 3</a></li>
	        <li class="nav__menu__item"><a href="#" class="nav__menu__link">Item 4</a></li>
	    </ul>
	</nav>
</div>
{% highlight html %}
<nav class="nav nav--inline" role="navigation">
    <h1 class="invisible">Navigation</h1>
    <ul class="nav__menu">
        <li class="nav__menu__item nav__menu__item--selected">
            <a href="#" class="nav__menu__link">Item 1</a>
        </li>
        <li class="nav__menu__item">
            <a href="#" class="nav__menu__link">Item 2</a>
        </li>
        <li class="nav__menu__item nav__menu__item--lead">
            <a href="#" class="nav__menu__link">Item 3</a>
        </li>
        <li class="nav__menu__item">
            <a href="#" class="nav__menu__link">Item 4</a>
        </li>
    </ul>
</nav>
{% endhighlight %}


##nav inline dropdown

<div class="penguin-example">
	<nav class="nav nav--inline" role="navigation">
	    <h1 class="invisible">Navigation</h1>
	    <ul class="nav__menu">
	        <li class="nav__menu__item dropdown">
	            <a href="#menu11" class="nav__menu__link" data-rel="dropdown">Item 1</a>
	            <ul id="menu11" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	        <li class="nav__menu__item dropdown">
	            <a href="#menu12" class="nav__menu__link" data-rel="dropdown">Item 2</a>
	            <ul id="menu12" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	        <li class="nav__menu__item dropdown">
	            <a href="#menu13" class="nav__menu__link" data-rel="dropdown">Item 3</a>
	            <ul id="menu13" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	        <li class="nav__menu__item dropdown">
	            <a href="#menu14" class="nav__menu__link" data-rel="dropdown">Item 4</a>
	            <ul id="menu14" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	    </ul>
	</nav>
</div>
{% highlight html %}
<nav class="nav nav--inline" role="navigation">
    <h1 class="invisible">Navigation</h1>
    <ul class="nav__menu">
        <li class="nav__menu__item dropdown">
            <a href="#menu11" class="nav__menu__link" data-rel="dropdown">Item 1</a>
            <ul id="menu11" class="nav__submenu" role="menu" data-dropdown="">
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 1</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 2</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 3</a>
                </li>
            </ul>
        </li>
        <li class="nav__menu__item dropdown">
            <a href="#menu12" class="nav__menu__link" data-rel="dropdown">Item 2</a>
            <ul id="menu12" class="nav__submenu" role="menu" data-dropdown="">
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 1</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 2</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 3</a>
                </li>
            </ul>
        </li>
        <li class="nav__menu__item dropdown">
            <a href="#menu13" class="nav__menu__link" data-rel="dropdown">Item 3</a>
            <ul id="menu13" class="nav__submenu" role="menu" data-dropdown="">
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 1</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 2</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 3</a>
                </li>
            </ul>
        </li>
        <li class="nav__menu__item dropdown">
            <a href="#menu14" class="nav__menu__link" data-rel="dropdown">Item 4</a>
            <ul id="menu14" class="nav__submenu" role="menu" data-dropdown="">
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 1</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 2</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 3</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
{% endhighlight %}


##nav bar

<div class="penguin-example">
	<nav class="nav nav--bar" role="navigation">
	    <h1 class="invisible">Navigation</h1>
	    <ul class="nav__menu">
	        <li class="nav__menu__item nav__menu__item--selected"><a href="#" class="nav__menu__link">Item 1</a></li>
	        <li class="nav__menu__item"><a href="#" class="nav__menu__link">Item 2</a></li>
	        <li class="nav__menu__item nav__menu__item--lead"><a href="#" class="nav__menu__link">Item 3</a></li>
	        <li class="nav__menu__item"><a href="#" class="nav__menu__link">Item 4</a></li>
	    </ul>
	</nav>
</div>
{% highlight html %}
<nav class="nav nav--bar" role="navigation">
    <h1 class="invisible">Navigation</h1>
    <ul class="nav__menu">
        <li class="nav__menu__item nav__menu__item--selected">
            <a href="#" class="nav__menu__link">Item 1</a>
        </li>
        <li class="nav__menu__item">
            <a href="#" class="nav__menu__link">Item 2</a>
        </li>
        <li class="nav__menu__item nav__menu__item--lead">
            <a href="#" class="nav__menu__link">Item 3</a>
        </li>
        <li class="nav__menu__item">
            <a href="#" class="nav__menu__link">Item 4</a>
        </li>
    </ul>
</nav>
{% endhighlight %}


##nav fluid

<div class="penguin-example">
	<nav class="nav nav--fluid" role="navigation">
	    <h1 class="invisible">Navigation</h1>
	    <ul class="nav__menu">
	        <li class="nav__menu__item nav__menu__item--selected"><a href="#" class="nav__menu__link">Item 1</a></li>
	        <li class="nav__menu__item"><a href="#" class="nav__menu__link">Item 2</a></li>
	        <li class="nav__menu__item nav__menu__item--lead"><a href="#" class="nav__menu__link">Item 3</a></li>
	        <li class="nav__menu__item"><a href="#" class="nav__menu__link">Item 4</a></li>
	    </ul>
	</nav>
</div>

{% highlight html %}
<nav class="nav nav--fluid" role="navigation">
    <h1 class="invisible">Navigation</h1>
    <ul class="nav__menu">
        <li class="nav__menu__item nav__menu__item--selected">
            <a href="#" class="nav__menu__link">Item 1</a>
        </li>
        <li class="nav__menu__item">
            <a href="#" class="nav__menu__link">Item 2</a>
        </li>
        <li class="nav__menu__item nav__menu__item--lead">
            <a href="#" class="nav__menu__link">Item 3</a>
        </li>
        <li class="nav__menu__item">
            <a href="#" class="nav__menu__link">Item 4</a>
        </li>
    </ul>
</nav>
{% endhighlight %}


##nav bar dropdown

<div class="penguin-example">
	<nav class="nav nav--bar" role="navigation">
	    <h1 class="invisible">Navigation</h1>
	    <ul class="nav__menu">
	        <li class="nav__menu__item dropdown">
	            <a href="#menu1" class="nav__menu__link" data-rel="dropdown">Item 1</a>
	            <ul id="menu1" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	        <li class="nav__menu__item dropdown">
	            <a href="#menu2" class="nav__menu__link" data-rel="dropdown">Item 2</a>
	            <ul id="menu2" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	        <li class="nav__menu__item dropdown">
	            <a href="#menu3" class="nav__menu__link" data-rel="dropdown">Item 3</a>
	            <ul id="menu3" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	        <li class="nav__menu__item dropdown">
	            <a href="#menu4" class="nav__menu__link" data-rel="dropdown">Item 4</a>
	            <ul id="menu4" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	    </ul>
	</nav>
</div>

{% highlight html %}
<div class="penguin-example">
    <nav class="nav nav--bar" role="navigation">
        <h1 class="invisible">Navigation</h1>
        <ul class="nav__menu">
            <li class="nav__menu__item dropdown">
                <a href="#menu1" class="nav__menu__link" data-rel="dropdown">Item 1</a>
                <ul id="menu1" class="nav__submenu" role="menu" data-dropdown="">
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 1</a>
                    </li>
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 2</a>
                    </li>
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 3</a>
                    </li>
                </ul>
            </li>
            <li class="nav__menu__item dropdown">
                <a href="#menu2" class="nav__menu__link" data-rel="dropdown">Item 2</a>
                <ul id="menu2" class="nav__submenu" role="menu" data-dropdown="">
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 1</a>
                    </li>
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 2</a>
                    </li>
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 3</a>
                    </li>
                </ul>
            </li>
            <li class="nav__menu__item dropdown">
                <a href="#menu3" class="nav__menu__link" data-rel="dropdown">Item 3</a>
                <ul id="menu3" class="nav__submenu" role="menu" data-dropdown="">
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 1</a>
                    </li>
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 2</a>
                    </li>
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 3</a>
                    </li>
                </ul>
            </li>
            <li class="nav__menu__item dropdown">
                <a href="#menu4" class="nav__menu__link" data-rel="dropdown">Item 4</a>
                <ul id="menu4" class="nav__submenu" role="menu" data-dropdown="">
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 1</a>
                    </li>
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 2</a>
                    </li>
                    <li class="nav__submenu__item">
                        <a href="#" class="nav__submenu__link">Item 3</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</div>
{% endhighlight %}





## nav stacked

<div class="penguin-example">
	<nav class="nav nav--stacked" role="navigation">
	    <h1 class="invisible">Navigation</h1>
	    <ul class="nav__menu">
	        <li class="nav__menu__item nav__menu__item--selected"><a href="#" class="nav__menu__link">Item 1</a></li>
	        <li class="nav__menu__item"><a href="#" class="nav__menu__link">Item 2</a></li>
	        <li class="nav__menu__item nav__menu__item--lead"><a href="#" class="nav__menu__link">Item 3</a></li>
	        <li class="nav__menu__item"><a href="#" class="nav__menu__link">Item 4</a></li>
	    </ul>
	</nav>
</div>

{% highlight html %}
<nav class="nav nav--stacked" role="navigation">
    <h1 class="invisible">Navigation</h1>
    <ul class="nav__menu">
        <li class="nav__menu__item nav__menu__item--selected">
            <a href="#" class="nav__menu__link">Item 1</a>
        </li>
        <li class="nav__menu__item">
            <a href="#" class="nav__menu__link">Item 2</a>
        </li>
        <li class="nav__menu__item nav__menu__item--lead">
            <a href="#" class="nav__menu__link">Item 3</a>
        </li>
        <li class="nav__menu__item">
            <a href="#" class="nav__menu__link">Item 4</a>
        </li>
    </ul>
</nav>
{% endhighlight %}





##nav stacked dropdown
<div class="penguin-example">
	<nav class="nav nav--stacked" role="navigation">
	    <h1 class="invisible">Navigation</h1>
	    <ul class="nav__menu">
	        <li class="nav__menu__item dropdown dropdown--stacked">
	            <a href="#menu41" class="nav__menu__link" data-rel="dropdown">Item 1</a>
	            <ul id="menu41" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	        <li class="nav__menu__item dropdown dropdown--stacked">
	            <a href="#menu42" class="nav__menu__link" data-rel="dropdown">Item 2</a>
	            <ul id="menu42" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	        <li class="nav__menu__item dropdown dropdown--stacked">
	            <a href="#menu43" class="nav__menu__link" data-rel="dropdown">Item 3</a>
	            <ul id="menu43" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	        <li class="nav__menu__item dropdown dropdown--stacked">
	            <a href="#menu44" class="nav__menu__link" data-rel="dropdown">Item 4</a>
	            <ul id="menu44" class="nav__submenu" role="menu" data-dropdown="">
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
	                <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
	            </ul>
	        </li>
	    </ul>
	</nav>
</div>

{% highlight html %}
<nav class="nav nav--stacked" role="navigation">
    <h1 class="invisible">Navigation</h1>
    <ul class="nav__menu">
        <li class="nav__menu__item dropdown dropdown--stacked">
            <a href="#menu41" class="nav__menu__link" data-rel="dropdown">Item 1</a>
            <ul id="menu41" class="nav__submenu" role="menu" data-dropdown="">
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 1</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 2</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 3</a>
                </li>
            </ul>
        </li>
        <li class="nav__menu__item dropdown dropdown--stacked">
            <a href="#menu42" class="nav__menu__link" data-rel="dropdown">Item 2</a>
            <ul id="menu42" class="nav__submenu" role="menu" data-dropdown="">
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 1</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 2</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 3</a>
                </li>
            </ul>
        </li>
        <li class="nav__menu__item dropdown dropdown--stacked">
            <a href="#menu43" class="nav__menu__link" data-rel="dropdown">Item 3</a>
            <ul id="menu43" class="nav__submenu" role="menu" data-dropdown="">
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 1</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 2</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 3</a>
                </li>
            </ul>
        </li>
        <li class="nav__menu__item dropdown dropdown--stacked">
            <a href="#menu44" class="nav__menu__link" data-rel="dropdown">Item 4</a>
            <ul id="menu44" class="nav__submenu" role="menu" data-dropdown="">
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 1</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 2</a>
                </li>
                <li class="nav__submenu__item">
                    <a href="#" class="nav__submenu__link">Item 3</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>
{% endhighlight %}





## nav bar with icons

<div class="penguin-example">
	<nav class="nav nav--bar" role="navigation">
	    <h1 class="hidden">Navigation</h1>
	    <ul class="nav__menu">
	        <li class="nav__menu__item nav__menu__item--selected">
	        	<a href="#" class="nav__menu__link">
		        	<span class="icon-text">
		        		<i class="icon" aria-hidden="true">
		        			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
								 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
								<path d="M160.879,312.387V205.609h117.064v-39.627l93.178,93.016l-93.178,93.018v-39.629H160.879z M90,256
									c0,91.756,74.258,166,166,166c91.755,0,166-74.258,166-166c0-91.755-74.258-166-166-166C164.245,90,90,164.259,90,256z M462,256
									c0,113.771-92.229,206-206,206S50,369.771,50,256c0-113.771,92.229-206,206-206S462,142.229,462,256z"/>
							</svg>
		        		</i>
		        		Item 1
		        	</span>
		        </a>
		    </li>
	        <li class="nav__menu__item">
	        	<a href="#" class="nav__menu__link">
	        		<span class="icon-text">
	        			<i class="icon" aria-hidden="true">
	        				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
								<path d="M160.879,312.387V205.609h117.064v-39.627l93.178,93.016l-93.178,93.018v-39.629H160.879z M90,256
								c0,91.756,74.258,166,166,166c91.755,0,166-74.258,166-166c0-91.755-74.258-166-166-166C164.245,90,90,164.259,90,256z M462,256
								c0,113.771-92.229,206-206,206S50,369.771,50,256c0-113.771,92.229-206,206-206S462,142.229,462,256z"/>
							</svg>
	        			</i>
	        			Item 2
	        		</span>
	        	</a>
	        </li>
	        <li class="nav__menu__item nav__menu__item--lead">
	        	<a href="#" class="nav__menu__link">
	        		<span class="icon-text">
	        			<i class="icon" aria-hidden="true">
	        				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 		width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
								<path d="M160.879,312.387V205.609h117.064v-39.627l93.178,93.016l-93.178,93.018v-39.629H160.879z M90,256
								c0,91.756,74.258,166,166,166c91.755,0,166-74.258,166-166c0-91.755-74.258-166-166-166C164.245,90,90,164.259,90,256z M462,256
								c0,113.771-92.229,206-206,206S50,369.771,50,256c0-113.771,92.229-206,206-206S462,142.229,462,256z"/>
							</svg>
	        			</i>
	        			Item 3
	    			</span>
	    		</a>
	    	</li>
	        <li class="nav__menu__item">
	        	<a href="#" class="nav__menu__link">
	        		<span class="icon-text">
	        			<i class="icon" aria-hidden="true">
	        				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
								<path d="M160.879,312.387V205.609h117.064v-39.627l93.178,93.016l-93.178,93.018v-39.629H160.879z M90,256
								c0,91.756,74.258,166,166,166c91.755,0,166-74.258,166-166c0-91.755-74.258-166-166-166C164.245,90,90,164.259,90,256z M462,256
								c0,113.771-92.229,206-206,206S50,369.771,50,256c0-113.771,92.229-206,206-206S462,142.229,462,256z"/>
							</svg>
	        			</i>
	        			Item 4
	        		</span>
	        	</a>
	        </li>
	    </ul>
	</nav>
</div>

{% highlight html %}
<nav class="nav nav--bar" role="navigation">
    <h1 class="hidden">Navigation</h1>
    <ul class="nav__menu">
        <li class="nav__menu__item nav__menu__item--selected">
            <a href="#" class="nav__menu__link">
                <span class="icon-text">
                    <i class="icon">*Your icon here*</i>Item 1
                </span>
            </a>
        </li>
    <li class="nav__menu__item">
            <a href="#" class="nav__menu__link">
                <span class="icon-text">
                    <i class="icon">*Your icon here*</i>Item 2
                </span>
            </a>
        </li>
        <li class="nav__menu__item">
            <a href="#" class="nav__menu__link">
                <span class="icon-text">
                    <i class="icon">*Your icon here*</i>Item 3
                </span>
            </a>
        </li>
        <li class="nav__menu__item">
            <a href="#" class="nav__menu__link">
                <span class="icon-text">
                    <i class="icon">*Your icon here*</i>Item 4
                </span>
            </a>
        </li>
    </ul>
</nav>
{% endhighlight %}

##how to use

| Class modifier | Description              |
|----------------|--------------------------|
| .nav--inline   | Places items in-line.    |
| .nav--bar      | Places items in bar.     |
| .nav--stacked  | Places items in stacked. |