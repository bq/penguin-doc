---
layout: component
title:  "Spinner"
---

Loading spinner.

##target spinner

<div class="penguin-example penguin-example--margin">
    <div class="grid grid--2col">
        <div class="grid__item">
            <div class="demo demo--a demo--spinner">
            </div>
            <ul class="btn-group">
                <li><button class="btn btn--primary btn--spinner-demo--a">Launch here</button></li>
                <li><button class="btn btn--primary btn--spinner-clear-a">Clear</button></li>
            </ul>
        </div>
        <div class="grid__item">
            <div class="demo demo--b demo--spinner">
            </div>
            <ul class="btn-group">
                <li><button class="btn btn--primary btn--spinner-demo--b">Launch here</button></li>
                <li><button class="btn btn--primary btn--spinner-clear-b">Clear</button></li>
            </ul>
        </div>
    </div>
</div>


##fullscreen spinner

<div class="penguin-example penguin-example--margin">
	<button class="btn btn--primary btn--spinner-body">Launch in body</button>
</div>





##how to use

| Argument          | Type    | Description                            | Default value              |
|-------------------|---------|----------------------------------------|----------------------------|
| target            | string  | Selector where spinner will be shown   |                            |
| 'show'            | string  | Shows the spinner                      |                            |
| 'hide'            | string  | Hides the spinner                      |                            |
| text              | string  | Fallback text inside spinner           | 'Loading...'               |
| spinnerClass      | string  | Adds this class to spinner             | 'spinner__element--circle' |
| show              | boolean | Displays just after creating it        | false                      |
| backdrop          | boolean | Show layer under spinner               | true                       |
| backdropClassName | string  | Set this class to backdrop             | 'spinner--backdrop'        |
| template          | string  | Replace modal content with custom html |                            |


Target is the selector where spinner will be shown.

{% highlight js %}

// Default spinner
$('target').spinner();

// Custom spinner
$('target').spinner{
    spinnerClass: 'spinner__element--circle',
    text: 'Loading...',
    show: false,
    backdrop: true,
    backdropClassName: 'spinner--backdrop'
};

// Custom template
$('target').spinner{
    template: '<div>Custom Spinner</div>'
};
{% endhighlight %}



##events

The spinner's target receives the event

| Event type   | Description                                     | Target                  |
|--------------|-------------------------------------------------|-------------------------|
| spinner:show | This event is fired when the spinner is shown.  | 'body' or custom target |
| spinner:hide | This event is fired when the spinner is hidden. | 'body' or custom target |




{% highlight js %}
// Show the created spinner
$('target').spinner('show');

// Hide the spinner
$('target').spinner('hide');
{% endhighlight %}
