---
layout: component
title: Components
order: 1
permalink: /components/
---

<div class="theme-bar">
    <div class="theme-bar__col theme-bar__select col-a-12">
        <!-- <form action="">
        <label></label>
        </form> -->
        Choose your favorite theme: {% file_lister bower_components/penguin-themes/themes %}
    </div>
    <div class="theme-bar__col theme-bar__buttons col-a-12">
        <ul class="btn-group">
            <li class="btn-group__item">
                <a id="link-github" href="https://github.com/bq/penguin-themes/tree/master/themes/penguin-doc" class="btn" target="_blank">
                    <span class="icon-text">
                        <i class="icon icon--invert"><svg viewBox="0 0 16 16">
                          <path d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"/>
                        </svg></i>See theme in GitHub
                    </span>
                </a>
            </li>
            <li class="btn-group__item">
                <a id="link-css" href="/bower_components/penguin-themes/themes/penguin-doc/dist/css/penguin-doc.css" class="btn" target="_blank">Download CSS (uncompressed)</a>
            </li>
        </ul>
    </div>
</div>

<div class="penguin-example">
	<p class="modifier">.alert--sucess</p>
	<div class="alert alert--success" role="alert" data-alert>
	    <div class="alert__content">
	        <strong>Well done!</strong> You successfully read this important alert message.
	    </div>
	</div>
	<p class="modifier">.alert--error</p>
	<div class="alert alert--error" role="alert" data-alert>
	    <div class="alert__content">
	        <strong>Oh snap!</strong> Change a few things up and try submitting again.
	    </div>
	</div>
	<p class="modifier">.alert--info</p>
	<div class="alert alert--info" role="alert" data-alert>
	    <div class="alert__content">
	        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
	    </div>
	</div>
	<p class="modifier">.alert--warning</p>
	<div class="alert alert--warning" role="alert" data-alert>
	    <div class="alert__content">
	        <strong>Warning!</strong> Better check yourself, you're not looking too good.
	    </div>
	</div>
	<div class="alert alert--info" role="alert" data-alert="">
	    <div class="alert__content">
	        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
	        <button type="button" title="close" data-close="alert" class="alert__close">
	        	<i class="icon icon--invert" aria-hidden="true">
	        		<svg style="fill: black;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
						<polygon points="438.393,374.595 319.757,255.977 438.378,137.348 374.595,73.607 255.995,192.225 137.375,73.622 
				73.607,137.352 192.246,255.983 73.622,374.625 137.352,438.393 256.002,319.734 374.652,438.378 "/>
					</svg>
				</i>
				<span class="invisible">Close</span>
			</button>
	    </div>
	</div>
</div>

<div class="penguin-example">
	<nav class="breadcrumb" role="navigation">
	    <h1 class="invisible">Guía de navegación</h1>
	    <ol class="breadcrumb__menu" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
	        <li class="breadcrumb__menu__item" itemprop="child" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
	            <a class="breadcrumb__menu__link" itemprop="url" href="#"><span itemprop="title">Home</span></a>
	        </li>
	        <li class="breadcrumb__menu__item" itemprop="child" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
	            <a class="breadcrumb__menu__link" itemprop="url" href="#"><span itemprop="title">Category</span></a>
	        </li>
	        <li class="breadcrumb__menu__item" itemprop="child" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
	            <a class="breadcrumb__menu__link" itemprop="url" href="#"><span itemprop="title">Page</span></a>
	        </li>
	    </ol>
	</nav>
</div>

<!-- Buttons -->
{% include components/button/button-group.html %}
{% include components/button/button-fluid.html %}
{% include components/button/button-group-fluid.html %}
{% include components/button/button-icon.html %}
{% include components/button/button-just-icon.html %}

<div class="penguin-example">
    <p class="modifier">btn--primary</p>
    <div class="dropdown">
        <a href="#single_dropdown" class="dropdown__link" data-rel="dropdown">Item 1</a>
        <ul id="single_dropdown" class="dropdown__menu" role="menu" data-dropdown>
            <li class="dropdown__menu__item">
                <a href="#" class="dropdown__menu__link">Item 1</a>
            </li>
            <li class="dropdown__menu__item">
                <a href="#" class="dropdown__menu__link">Item 2</a>
            </li>
            <li class="dropdown__menu__item">
                <a href="#" class="dropdown__menu__link">Item 3</a>
            </li>
        </ul>
    </div>
</div>

<div class="penguin-example">
     <div class="dropdown">
        <a href="#icon_dropdown" class="dropdown__link" data-rel="dropdown">
            <span class="icon-text">
                <i class="icon" aria-hidden="true">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                        <path d="M160.879,312.387V205.609h117.064v-39.627l93.178,93.016l-93.178,93.018v-39.629H160.879z M90,256
                            c0,91.756,74.258,166,166,166c91.755,0,166-74.258,166-166c0-91.755-74.258-166-166-166C164.245,90,90,164.259,90,256z M462,256
                            c0,113.771-92.229,206-206,206S50,369.771,50,256c0-113.771,92.229-206,206-206S462,142.229,462,256z"/>
                    </svg>
                </i>Item 1
            </span>
        </a>
        <ul id="icon_dropdown" class="dropdown__menu" role="menu" data-dropdown>
            <li class="dropdown__menu__item">
                <a href="#" class="dropdown__menu__link">Item 1</a>
            </li>
            <li class="dropdown__menu__item">
                <a href="#" class="dropdown__menu__link">Item 2</a>
            </li>
            <li class="dropdown__menu__item">
                <a href="#" class="dropdown__menu__link">Item 3</a>
            </li>
        </ul>
    </div>
</div>

<div class="penguin-example">
    <div class="dropdown dropdown--fluid">
        <a href="#fluid_dropdown" class="dropdown__link" data-rel="dropdown">
            <span class="icon-text">
                <i class="icon" aria-hidden="true">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                        <path d="M160.879,312.387V205.609h117.064v-39.627l93.178,93.016l-93.178,93.018v-39.629H160.879z M90,256
                            c0,91.756,74.258,166,166,166c91.755,0,166-74.258,166-166c0-91.755-74.258-166-166-166C164.245,90,90,164.259,90,256z M462,256
                            c0,113.771-92.229,206-206,206S50,369.771,50,256c0-113.771,92.229-206,206-206S462,142.229,462,256z"/>
                    </svg>
                </i>Item 1
            </span>
        </a>
        <ul id="fluid_dropdown" class="dropdown__menu" role="menu" data-dropdown>
            <li class="dropdown__menu__item">
                <a href="#" class="dropdown__menu__link">Item 1</a>
            </li>
            <li class="dropdown__menu__item">
                <a href="#" class="dropdown__menu__link">Item 2</a>
            </li>
            <li class="dropdown__menu__item">
                <a href="#" class="dropdown__menu__link">Item 3</a>
            </li>
        </ul>
    </div>
</div>

<div class="penguin-example">
    <nav class="nav nav--inline" role="navigation">
        <h1 class="invisible">Navigation</h1>
        <ul class="nav__menu">
            <li class="nav__menu__item dropdown">
                <a href="#menu1" class="nav__menu__link" data-rel="dropdown">Item 1</a>
                <ul id="menu1" class="nav__submenu" role="menu" data-dropdown>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
                </ul>
            </li>
            <li class="nav__menu__item dropdown">
                <a href="#menu2" class="nav__menu__link" data-rel="dropdown">Item 2</a>
                <ul id="menu2" class="nav__submenu" role="menu" data-dropdown>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
                </ul>
            </li>
            <li class="nav__menu__item dropdown">
                <a href="#menu3" class="nav__menu__link" data-rel="dropdown">Item 3</a>
                <ul id="menu3" class="nav__submenu" role="menu" data-dropdown>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
                </ul>
            </li>
            <li class="nav__menu__item dropdown">
                <a href="#menu4" class="nav__menu__link" data-rel="dropdown">Item 4</a>
                <ul id="menu4" class="nav__submenu" role="menu" data-dropdown>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</div>

{% include components/form/form-simple.html %}

{% include components/form/form-horizontal.html %}

{% include components/form/form-2cols.html %}

{% include components/form/form-4cols.html %}

<div class="penguin-example">
	<div class="demo demo--target"></div>
	<button class="btn btn--primary" data-rel="modal" data-target=".demo--target" data-modal="{title: 'Modal', content: 'Content', buttons: {btn: [{text: 'Accept', className: 'btn btn--primary'}]}}">Target modal</button>
</div>

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

<div class="penguin-example">
    <nav class="nav nav--bar" role="navigation">
        <h1 class="invisible">Navigation</h1>
        <ul class="nav__menu">
            <li class="nav__menu__item dropdown">
                <a href="#menu_dropdown1" class="nav__menu__link" data-rel="dropdown">Item 1</a>
                <ul id="menu_dropdown1" class="nav__submenu" role="menu" data-dropdown="">
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
                </ul>
            </li>
            <li class="nav__menu__item dropdown">
                <a href="#menu_dropdown2" class="nav__menu__link" data-rel="dropdown">Item 2</a>
                <ul id="menu_dropdown2" class="nav__submenu" role="menu" data-dropdown="">
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
                </ul>
            </li>
            <li class="nav__menu__item dropdown">
                <a href="#menu_dropdown3" class="nav__menu__link" data-rel="dropdown">Item 3</a>
                <ul id="menu_dropdown3" class="nav__submenu" role="menu" data-dropdown="">
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
                </ul>
            </li>
            <li class="nav__menu__item dropdown">
                <a href="#menu_dropdown4" class="nav__menu__link" data-rel="dropdown">Item 4</a>
                <ul id="menu_dropdown4" class="nav__submenu" role="menu" data-dropdown="">
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 1</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 2</a></li>
                    <li class="nav__submenu__item"><a href="#" class="nav__submenu__link">Item 3</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</div>

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

<div class="penguin-example">
    <nav class="nav nav--bar" role="navigation">
        <h1 class="invisible">Navigation</h1>
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

<div class="penguin-example">
    <ul class="paginator paginator--inline">
        <li class="paginator__item"><a href="#" class="paginator__link">First</a></li>
        <li class="paginator__item"><a href="#" class="paginator__link">Previous</a></li>
        <li class="paginator__item paginator__item--selected"><a href="#" class="paginator__link">1</a></li>
        <li class="paginator__item"><a href="#" class="paginator__link">2</a></li>
        <li class="paginator__item"><a href="#" class="paginator__link">3</a></li>
        <li class="paginator__item"><a href="#" class="paginator__link">4</a></li>
        <li class="paginator__item"><a href="#" class="paginator__link">Next</a></li>
        <li class="paginator__item"><a href="#" class="paginator__link">Last</a></li>
    </ul>
</div>

<div class="penguin-example">
	<ul class="paginator paginator--bar">
	    <li class="paginator__item"><a href="#" class="paginator__link">First</a></li>
	    <li class="paginator__item"><a href="#" class="paginator__link">Previous</a></li>
	    <li class="paginator__item paginator__item--selected"><a href="#" class="paginator__link">1</a></li>
	    <li class="paginator__item"><a href="#" class="paginator__link">2</a></li>
	    <li class="paginator__item"><a href="#" class="paginator__link">3</a></li>
	    <li class="paginator__item"><a href="#" class="paginator__link">4</a></li>
	    <li class="paginator__item"><a href="#" class="paginator__link">Next</a></li>
	    <li class="paginator__item"><a href="#" class="paginator__link">Last</a></li>
	</ul>
</div>

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

<div class="penguin-example penguin-example--margin">
    <div class="grid grid--2col">
        <div class="grid__item">
            <div class="demo demo--a demo--spinner">
            </div>
            <ul class="btn-group">
                <li class="btn-group__item"><button class="btn btn--primary btn--spinner-demo--a">Launch here</button></li>
                <li class="btn-group__item"><button class="btn btn--primary btn--spinner-clear-a">Clear</button></li>
            </ul>
        </div>
        <div class="grid__item">
            <div class="demo demo--b demo--spinner">
            </div>
            <ul class="btn-group">
                <li class="btn-group__item"><button class="btn btn--primary btn--spinner-demo--b">Launch here</button></li>
                <li class="btn-group__item"><button class="btn btn--primary btn--spinner-clear-b">Clear</button></li>
            </ul>
        </div>
    </div>
</div>

<div class="penguin-example">
    <div class="tab tab--inline" data-tab="">
        <ul class="tab__block" role="tablist">
            <li class="tab__block__item tab__block__item--selected" role="tab">
                <a href="#tab1-inline" class="tab__block__link">Tab 1</a>
            </li>
            <li class="tab__block__item" role="tab">
                <a href="#tab2-inline" class="tab__block__link">Tab 2</a>
            </li>
            <li class="tab__block__item" role="tab">
                <a href="#tab3-inline" class="tab__block__link">Tab 3</a>
            </li>
            <li class="tab__block__item" role="tab">
                <a href="#tab4-inline" class="tab__block__link">Tab 4</a>
            </li>
        </ul>
        <div class="tab__content">
            <div class="tab__content__item tab__content__item--selected" id="tab1-inline" role="tabpanel">Tab 1 content</div>
            <div class="tab__content__item" id="tab2-inline" role="tabpanel">Tab 2 content</div>
            <div class="tab__content__item" id="tab3-inline" role="tabpanel">Tab 3 content</div>
            <div class="tab__content__item" id="tab4-inline" role="tabpanel">Tab 4 content</div>
        </div>
    </div>
</div>

<div class="penguin-example">
    <div class="tab tab--bar" data-tab="">
        <ul class="tab__block" role="tablist">
            <li class="tab__block__item tab__block__item--selected" role="tab"><a href="#tab1-bar" class="tab__block__link">Tab 1</a></li>
            <li class="tab__block__item" role="tab"><a href="#tab2-bar" class="tab__block__link">Tab 2</a></li>
            <li class="tab__block__item" role="tab"><a href="#tab3-bar" class="tab__block__link">Tab 3</a></li>
            <li class="tab__block__item" role="tab"><a href="#tab4-bar" class="tab__block__link">Tab 4</a></li>
        </ul>
        <div class="tab__content">
            <div class="tab__content__item tab__content__item--selected" id="tab1-bar">Tab 1 content</div>
            <div class="tab__content__item" id="tab2-bar">Tab 2 content</div>
            <div class="tab__content__item" id="tab3-bar">Tab 3 content</div>
            <div class="tab__content__item" id="tab4-bar">Tab 4 content</div>
        </div>
    </div>
</div>

<div class="penguin-example">
    <div class="tab tab--stacked" data-tab="">
        <ul class="tab__block" role="tablist">
            <li class="tab__block__item"><a href="#tab1-stacked" class="tab__block__link" role="tab">Tab 1</a></li>
            <li class="tab__block__item"><a href="#tab2-stacked" class="tab__block__link" role="tab">Tab 2</a></li>
            <li class="tab__block__item"><a href="#tab3-stacked" class="tab__block__link" role="tab">Tab 3</a></li>
            <li class="tab__block__item tab__block__item--selected"><a href="#tab4-stacked" class="tab__block__link">Tab 4</a></li>
        </ul>
        <div class="tab__content">
            <div class="tab__content__item" id="tab1-stacked" role="tabpanel">Tab 1 content</div>
            <div class="tab__content__item" id="tab2-stacked" role="tabpanel">Tab 2 content</div>
            <div class="tab__content__item" id="tab3-stacked" role="tabpanel">Tab 3 content</div>
            <div class="tab__content__item tab__content__item--selected" id="tab4-stacked" role="tabpanel">Tab 4 content</div>
        </div>
    </div>
</div>

<div class="penguin-example">
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <td colspan="5">table footer</td>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td><a href="">1</a></td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
            </tr>
            <tr>
                <td><a href="">2</a></td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
            </tr>
            <tr><td><a href="">3</a></td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
            </tr>
            <tr><td><a href="">4</a></td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
            </tr>
            <tr><td><a href="">5</a></td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="penguin-example text">
    <h1>This is a h1 text</h1>
    <h2>This is a h2 text</h2>
    <h3>This is a h3 text</h3>
    <h4>This is a h4 text</h4>
    <h5>This is a h5 text</h5>
    <h6>This is a h6 text</h6>
</div>

<div class="penguin-example text">
    <p>Default paragraph</p>
    <p class="text-large">This is a large text</p>
    <p>Default paragraph with a <strong>heavier font-weight</strong></p>
    <p>Default paragraph with a <em>snippet of text with italics</em></p>
    <p class="text-small">This is a small text</p>
    <p class="text"><small>This is a small label</small></p>
</div>

<div class="penguin-example text">
    <ul>
        <li>A</li>
        <li>B</li>
        <li>
            <strong>C</strong>
            <ul>
                <li>C1</li>
                <li>C2</li>
            </ul>
        </li>
        <li>D</li>
    </ul>
    <ol>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
    </ol>
    <dl>
        <dt><strong>Term A:</strong></dt>
            <dd>Definition A</dd>
        <dt><strong>Term B:</strong></dt>
            <dd>Definition B</dd>
        <dt><strong>Term C:</strong></dt>
            <dd>
                <ul>
                    <li>Definition C1</li>
                    <li>Definition C2</li>
                    <li>
                        <ol>
                            <li>Definition C3.1</li>
                            <li>Definition C3.2</li>
                        </ol>
                    </li>
                </ul>
            </dd>
    </dl>
</div>



<script src="/bower_components/jquery/dist/jquery.min.js"></script>
<script>

    var defaultTheme = 'penguin-doc';

    function changeTheme(themeName) {

        var themeName = themeName.toLowerCase(),
            styleSheet = $('[title="penguin-theme"]'),
            linkGitHub = $('#link-github'),
            linkCss = $('#link-css'),
            pathGitHub = 'https://github.com/bq/penguin-themes/tree/master/themes/' + themeName,
            pathCss = '/bower_components/penguin-themes/themes/'+ themeName +'/dist/css/' + themeName.toLowerCase() + '.css';

            linkCss.attr('href', pathCss);
            styleSheet.attr('href', pathCss);
            linkGitHub.attr('href', pathGitHub);
    }

    $(document).on('ready', function() {

        $('#select-theme option[value='+ defaultTheme +']').attr('selected', 'selected');

        $('#select-theme').on('change', function (event) {

            changeTheme($('#select-theme :selected').val());
        });
    });
</script>