---
layout: component
title:  "Dropdown"
---

A dropdown is used to show/hide additional content.

##single dropdown

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
{% highlight html %}
<div class="dropdown dropdown--modifier">
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
{% endhighlight %}

##icon dropdown

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

{% highlight html %}
<div class="penguin-example">
    <div class="dropdown">
        <a href="#icon_dropdown" class="dropdown__link" data-rel="dropdown">
            <span class="icon-text">
                <i class="icon" aria-hidden="true">*Your icon here*</i>Item 1
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
{% endhighlight %}


##fluid dropdown

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


{% highlight html %}
<div class="penguin-example">
    <div class="dropdown  dropdown--fluid">
        <a href="#menu211" class="dropdown__link" data-rel="dropdown">
            <span class="icon-text">
                <i class="icon" aria-hidden="true">*Your icon here*</i>Item 1
            </span>
        </a>
        <ul id="menu211" class="dropdown__menu" role="menu" data-dropdown>
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
{% endhighlight %}


##dropdown menu

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

{% highlight html %}
<nav class="nav nav--inline" role="navigation">
    <h1 class="invisible">Navigation</h1>
    <ul class="nav__menu">
        <li class="nav__menu__item dropdown">
            <a href="#menu1" class="nav__menu__link" data-rel="dropdown">Item 1</a>
            <ul id="menu1" class="nav__submenu" role="menu" data-dropdown>
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
            <ul id="menu2" class="nav__submenu" role="menu" data-dropdown>
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
            <ul id="menu3" class="nav__submenu" role="menu" data-dropdown>
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
            <ul id="menu4" class="nav__submenu" role="menu" data-dropdown>
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

##How to use

> Just add [data-rel="dropdown"] to a link or any element with the [src] attribute and link to element who want toggles hidden it.
The dropdown plugin toggling the '.dropdown--selected' class and [data-selected] attribute on dropdown element.


##responsive

You can get more info about $slicer-breakpoints and $slicer-breakpoint-names in [grid components section](../grid/).

{% highlight scss %}
// Breakpoints
$slicer-breakpoints       : 0   400px   600px   800px   1050px;
$slicer-breakpoint-names  :  'a'     'b'     'c'     'd'      'e';
{% endhighlight %}



> To use this component in a responsive project you have different options:

[Breakpoint-slicer](https://github.com/lolmaus/breakpoint-slicer):
{% highlight scss %}
.dropdown {
    // Common styles

    @include to(c) {
        @include dropdown--stacked;
    }

    @include from(d) {
        @include dropdown--fluid;
    }

}
{% endhighlight %}


Default media query:

{% highlight scss %}
.dropdown {
    //Common styles

    @media (max-width: 799px) {
        @include dropdown--stacked;
    }

    @media (min-width: 800px) {
        @include dropdown--fluid;
    }

}
{% endhighlight %}

@include media-minwidth, a penguin mixin:

{% highlight scss %}
.dropdown {
    @include dropdown--stacked;

    @mixin media-minwidth(d) {
        // Custom styles
    }
}
{% endhighlight %}

##custom dropdown

You can create your own custom dropdown.

{% highlight scss %}
.dropdown--custom {
    @include dropdown--fluid;
    // Custom styles
}
{% endhighlight %}