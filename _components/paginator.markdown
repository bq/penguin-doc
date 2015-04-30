---
layout: component
title:  "Paginator"
---

Paginator is a type of navigation that lets users navigate through related pages.

##paginator inline
{% include components/paginator/paginator-inline.html %}

{% highlight html %}
<ul class="paginator paginator--inline">
    <li class="paginator__item">
        <a href="#" class="paginator__link">First</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">Previous</a>
    </li>
    <li class="paginator__item paginator__item--selected">
        <a href="#" class="paginator__link">1</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">2</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">3</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">4</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">Next</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">Last</a>
    </li>
</ul>
{% endhighlight %}


##paginator bar
{% include components/paginator/paginator-bar.html %}

{% highlight html %}
<ul class="paginator paginator--bar">
    <li class="paginator__item">
        <a href="#" class="paginator__link">First</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">Previous</a>
    </li>
    <li class="paginator__item paginator__item--selected">
        <a href="#" class="paginator__link">1</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">2</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">3</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">4</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">Next</a>
    </li>
    <li class="paginator__item">
        <a href="#" class="paginator__link">Last</a>
    </li>
</ul>
{% endhighlight %}


##how to use

| Class modifier     | Description           |
|--------------------|-----------------------|
| .paginator--inline | Places items in-line. |
| .paginator--bar    | Places items in bar.  |