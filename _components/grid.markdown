---
layout: component
title:  "Grid"
---

Grids on demand are awesome. They are semantic, flexible and powerful. We combine [susy](http://susy.oddbird.net/) with [breakpoint-slicer](https://github.com/lolmaus/breakpoint-slicer) and [breakpoint](https://github.com/at-import/breakpoint) to manage the layout, the grid and the breakpoints.

If grids on demand don't like you doesn't matter penguin has a solution. By default **penguin includes a grid system** allows you to create a responsive grid layout just using the proper css classes. Be sure set to true the $grid-system variable.

By default, these are the sass variables values:

{% highlight scss %}
// Grid
$grid-columns             : 12;
$grid-gutter              : 30;
{% endhighlight %}




###breakpoints

Also we can set breakpoints, and their names:

{% highlight scss %}
// Breakpoints
$slicer-breakpoints       : 0   400px   600px   800px   1050px;
$slicer-breakpoint-names  :  'a'     'b'     'c'     'd'      'e';
{% endhighlight %}





####generated grid example

| Slicer name    | mediaquery                                  |
|----------------|---------------------------------------------|
| a              | (max-width: 400px)                          |
| b              | (min-width: 401px) and (max-width: 600)     |
| c              | (min-width: 601px) and (max-width: 800)     |
| d              | (min-width: 801px) and (max-width: 1050)    |
| e              | (min-width: 1050px)                         |





### simple grid

{% include components/grid/grid-simple.html %}

{% highlight html %}
<div class="row">
    <!-- 12 -->
    <div class="col-a-12 col-b-12 col-c-12 col-d-12 col-e-12">
        .col-[var]-12
    </div>
    <!-- 11 -->
    <div class="col-a-11 col-b-11 col-c-11 col-d-11 col-e-11">
        .col-[var]-11
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <!-- 10 -->
    <div class="col-a-10 col-b-10 col-c-10 col-d-10 col-e-10">
        .col-[var]-10
    </div>
    <div class="col-a-2 col-b-2 col-c-2 col-d-2 col-e-2">
        .col-[var]-2
    </div>
    <!-- 9 -->
    <div class="col-a-9 col-b-9 col-c-9 col-d-9 col-e-9">
        .col-[var]-9
    </div>
    <div class="col-a-3 col-b-3 col-c-3 col-d-3 col-e-3">
        .col-[var]-3
    </div>
    <!-- 8 -->
    <div class="col-a-8 col-b-8 col-c-8 col-d-8 col-e-8">
        .col-[var]-8
    </div>
    <div class="col-a-4 col-b-4 col-c-4 col-d-4 col-e-4">
        .col-[var]-4
    </div>
    <!-- 7 -->
    <div class="col-a-7 col-b-7 col-c-7 col-d-7 col-e-7">
        .col-[var]-7
    </div>
    <div class="col-a-5 col-b-5 col-c-5 col-d-5 col-e-5">
        .col-[var]-5
    </div>
    <!-- 6 -->
    <div class="col-a-6 col-b-6 col-c-6 col-d-6 col-e-6">
        .col-[var]-6
    </div>
    <div class="col-a-6 col-b-6 col-c-6 col-d-6 col-e-6">
        .col-[var]-6
    </div>
    <!-- 5 -->
    <div class="col-a-5 col-b-5 col-c-5 col-d-5 col-e-5">
        .col-[var]-5
    </div>
    <div class="col-a-5 col-b-5 col-c-5 col-d-5 col-e-5">
        .col-[var]-5
    </div>
    <div class="col-a-2 col-b-2 col-c-2 col-d-2 col-e-2">
        .col-[var]-2
    </div>
    <!-- 4 -->
    <div class="col-a-4 col-b-3 col-c-4 col-d-4 col-e-4">
        .col-[var]-4
    </div>
    <div class="col-a-4 col-b-3 col-c-4 col-d-4 col-e-4">
        .col-[var]-4
    </div>
    <div class="col-a-4 col-b-3 col-c-4 col-d-4 col-e-4">
        .col-[var]-4
    </div><br>    <!-- 3 -->
    <div class="col-a-3 col-b-3 col-c-3 col-d-3 col-e-3">
        .col-[var]-3
    </div>
    <div class="col-a-3 col-b-3 col-c-3 col-d-3 col-e-3">
        .col-[var]-3
    </div>
    <div class="col-a-3 col-b-3 col-c-3 col-d-3 col-e-3">
        .col-[var]-3
    </div>
    <div class="col-a-3 col-b-3 col-c-3 col-d-3 col-e-3">
        .col-[var]-3
    </div>
    <!-- 2 -->
    <div class="col-a-2 col-b-2 col-c-2 col-d-2 col-e-2">
        .col-[var]-2
    </div>
    <div class="col-a-2 col-b-2 col-c-2 col-d-2 col-e-2">
        .col-[var]-2
    </div>
    <div class="col-a-2 col-b-2 col-c-2 col-d-2 col-e-2">
        .col-[var]-2
    </div>
    <div class="col-a-2 col-b-2 col-c-2 col-d-2 col-e-2">
        .col-[var]-2
    </div>
    <div class="col-a-2 col-b-2 col-c-2 col-d-2 col-e-2">
        .col-[var]-2
    </div>
    <div class="col-a-2 col-b-2 col-c-2 col-d-2 col-e-2">
        .col-[var]-2
    </div>
    <!-- 1 -->
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
    <div class="col-a-1 col-b-1 col-c-1 col-d-1 col-e-1">
        .col-[var]-1
    </div>
</div>
{% endhighlight %}




### ul grid

You also can apply the grid system to a list:

{% include components/grid/grid-list.html %}

{% highlight html%}
<ul class="row penguin-example">
    <li class="col-a-3">
        .col-[size]-3
    </li>
    <li class="col-a-3">
        .col-[size]-3
    </li>
    <li class="col-a-3">
        .col-[size]-3
    </li>
    <li class="col-a-3">
        .col-[size]-3
    </li>
    <li class="col-a-3">
        .col-[size]-3
    </li>
    <li class="col-a-3">
        .col-[size]-3
    </li>
    <li class="col-a-3">
        .col-[size]-3
    </li>
    <li class="col-a-3">
        .col-[size]-3
    </li>
    <li class="col-a-3">
        .col-[size]-3
    </li>
    <li class="col-a-3">
        .col-[size]-3
    </li>
    <li class="col-a-3">
        .col-[size]-3
    </li>
    <li class="col-a-3">
        .col-[size]-3
    </li>
</ul>
{% endhighlight %}




### nested grid

Grids can be placed inside another grid, there is a clear example:

{% include components/grid/grid-nested.html %}

{% highlight html %}
<div class="row">
    <div class="col-a-12">
        .col-[size]-12
    </div>
    <div class="col-a-12">
        <div class="row">
            <div class="col-a-6">
                    .col-[size]-6
            </div>
            <div class="col-a-6">
                <div class="row">
                    <div class="col-a-6">
                        .col-[size]-6
                    </div>
                    <div class="col-a-6">
                        <div class="row">
                            <div class="col-a-6">
                                .col-[size]-6
                            </div>
                            <div class="col-a-6">
                                <div class="row">
                                    <div class="col-a-6">
                                        .col-[size]-6
                                    </div>
                                    <div class="col-a-6">
                                        .col-[size]-6
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{% endhighlight %}




### Offset

Columns also can have an offset at their left side. Check out the following example:
{% include components/grid/grid-offset.html %}

{% highlight html %}
<div class="row">
    <div class="col-a-offset-1 col-a-11">
        .col-[size]-offset-1
    </div>
    <div class="col-a-offset-2 col-a-10">
        .col-[size]-offset-2
    </div>
    <div class="col-a-offset-3 col-a-9">
        .col-[size]-offset-3
    </div>
    <div class="col-a-offset-4 col-a-8">
        .col-[size]-offset-4
    </div>
    <div class="col-a-offset-5 col-a-7">
        .col-[size]-offset-5
    </div>
    <div class="col-a-offset-6 col-a-6">
        .col-[size]-offset-6
    </div>
    <div class="col-a-offset-7 col-a-5">
        .col-[size]-offset-7
    </div>
    <div class="col-a-offset-8 col-a-4">
        .col-[size]-offset-8
    </div>
    <div class="col-a-offset-9 col-a-3">
        .col-[size]-offset-9
    </div>
    <div class="col-a-offset-10 col-a-2">
        .col-[size]-offset-10
    </div>
    <div class="col-a-offset-11 col-a-1">
        .col-[size]-offset-11
    </div>
</div>
{% endhighlight %}




### column ordering

{% include components/grid/grid-ordering.html %}

{% highlight html %}
<div class="row">
    <div class="col-a-8 col-a-push-4">
        .col-a-8 .col-a-push-4
    </div>
    <div class="col-a-4 col-a-pull-8">
        .col-a-4 .col-a-pull-8
    </div>
</div>
{% endhighlight %}