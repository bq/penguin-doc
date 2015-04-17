---
layout: component
title:  "Tab"
---

Tabs help you organize and navigate multiple sections of content in a single container.

##tab inline
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
{% highlight html %}
<div class="tab tab--inline" data-tab>
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
{% endhighlight %}





##tab bar
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
{% highlight html %}
<div class="tab tab--bar" data-tab>
    <ul class="tab__block" role="tablist">
        <li class="tab__block__item tab__block__item--selected"  role="tab">
            <a href="#tab1-bar" class="tab__block__link">Tab 1</a>
        </li>
        <li class="tab__block__item"  role="tab">
            <a href="#tab2-bar" class="tab__block__link">Tab 2</a>
        </li>
        <li class="tab__block__item"  role="tab">
            <a href="#tab3-bar" class="tab__block__link">Tab 3</a>
        </li>
        <li class="tab__block__item"  role="tab">
            <a href="#tab4-bar" class="tab__block__link">Tab 4</a>
        </li>
    </ul>
    <div class="tab__content">
        <div class="tab__content__item tab__content__item--selected" id="tab1-bar" role="tabpanel">Tab 1 content</div>
        <div class="tab__content__item" id="tab2-bar" role="tabpanel">Tab 2 content</div>
        <div class="tab__content__item" id="tab3-bar" role="tabpanel">Tab 3 content</div>
        <div class="tab__content__item" id="tab4-bar" role="tabpanel">Tab 4 content</div>
    </div>
</div>
{% endhighlight %}





##tab stacked
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
{% highlight html %}
<div class="tab tab--stacked" data-tab>
    <ul class="tab__block" role="tablist">
        <li class="tab__block__item" role="tab">
            <a href="#tab1-stacked" class="tab__block__link">Tab 1</a>
        </li>
        <li class="tab__block__item" role="tab">
            <a href="#tab2-stacked" class="tab__block__link">Tab 2</a>
        </li>
        <li class="tab__block__item" role="tab">
            <a href="#tab3-stacked" class="tab__block__link">Tab 3</a>
        </li>
        <li class="tab__block__item tab__block__item--selected" role="tab">
            <a href="#tab4-stacked" class="tab__block__link">Tab 4</a>
        </li>
    </ul>
    <div class="tab__content">
        <div class="tab__content__item" id="tab1-stacked" role="tabpanel">Tab 1 content</div>
        <div class="tab__content__item" id="tab2-stacked" role="tabpanel">Tab 2 content</div>
        <div class="tab__content__item" id="tab3-stacked" role="tabpanel">Tab 3 content</div>
        <div class="tab__content__item tab__content__item--selected" id="tab4-stacked" role="tabpanel">Tab 4 content</div>
    </div>
</div>
{% endhighlight %}





##how to use

| Class modifier | Description              |
|----------------|--------------------------|
| .tab--inline   | Places items in-line.    |
| .tab--bar      | Places items in bar.     |
| .tab--stacked  | Places items in stacked. |
