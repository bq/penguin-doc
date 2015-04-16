---
layout: component
title:  "Banner"
---

A banner show an image or group of them.

##simple banner

<div class="penguin-example">
	<section class="banner">
	    <h1 class="invisible">Banner title</h1>
	    <p class="banner__content">
	        <a class="banner__content__link" href="url"><img src="/assets/img/image.png" alt="Description" /></a>
	    </p>
	</section>
</div>

{% highlight html %}
<section class="banner">
    <h1 class="invisible">Banner title</h1>
    <p class="banner__content">
        <a class="banner__content__link" href="url">
            <img src="url" alt="Alternative text">
        </a>
    </p>
</section>
{% endhighlight %}





##banners group

<div class="penguin-example">
	<section class="banner">
	    <h1 class="invisible">Banners</h1>
	    <ul class="banner__content">
	        <li class="banner__content__item">
	            <a class="banner__content__link" href="#">
	                <img src="/assets/img/image.png" alt="Description" />
	            </a>
	        </li>
	        <li class="banner__content__item">
	            <a class="banner__content__link" href="#">
	                <img src="/assets/img/image.png" alt="Description" />
	            </a>
	        </li>
	        <li class="banner__content__item">
	            <a class="banner__content__link" href="#">
	                <img src="/assets/img/image.png" alt="Description" />
	            </a>
	        </li>
	        <li class="banner__content__item">
	            <a class="banner__content__link" href="#">
	                <img src="/assets/img/image.png" alt="Description" />
	            </a>
	        </li>
	        <li class="banner__content__item">
	            <a class="banner__content__link" href="#">
	                <img src="/assets/img/image.png" alt="Description" />
	            </a>
	        </li>
	    </ul>
	</section>
</div>

{% highlight html %}
<section class="banner">
    <h1 class="invisible">Banners</h1>
    <ul class="banner__content">
        <li class="banner__content__item">
            <a class="banner__content__link" href="#">
                <img src="url" alt="Alternative text">
            </a>
        </li>
        <li class="banner__content__item">
            <a class="banner__content__link" href="#">
                <img src="url" alt="Alternative text">
            </a>
        </li>
        <li class="banner__content__item">
            <a class="banner__content__link" href="#">
                <img src="url" alt="Alternative text">
            </a>
        </li>
        <li class="banner__content__item">
            <a class="banner__content__link" href="#">
                <img src="url" alt="Alternative text">
            </a>
        </li>
        <li class="banner__content__item">
            <a class="banner__content__link" href="#">
                <img src="url" alt="Alternative text">
            </a>
        </li>
    </ul>
</section>
{% endhighlight %}

