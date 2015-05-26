---
layout: component
title:  "Spinner"
---


Loading spinner.

##target spinner
{% include components/spinner/spinner-simple.html %}


##fullscreen spinner
{% include components/spinner/spinner-fullscreen.html %}

> $('target').spinner(options);

{% highlight js %}

{% endhighlight %}

##how to use

| Argument          | Type    | Description                                                  | Default value              |
|-------------------|---------|--------------------------------------------------------------|----------------------------|
| transitionDuration| number  | Css transition duration. If transition is removed set to 0   | 350                        |
| target            | string  | Selector where spinner will be shown                         |                            |
| 'show'            | string  | Shows the spinner                                            |                            |
| 'hide'            | string  | Hides the spinner                                            |                            |
| text              | string  | Fallback text inside spinner                                 | 'Loading...'               |
| spinnerClass      | string  | Adds this class to spinner                                   | 'spinner__element--circle' |
| show              | boolean | Displays just after creating it                              | false                      |

Target is the selector where spinner will be shown.

{% highlight js %}

// Default spinner
$('target').spinner();

// Custom spinner
$('target').spinner({
    spinnerClass: 'spinner__element--circle',
    text: 'Loading...',
    show: false
});

// Custom template
$('target').spinner({
    template: '<div>Custom Spinner</div>'
});
{% endhighlight %}

##events

The spinner's target receives the event.

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

##example

{% highlight js %}
// Default target
$('body').on('spinner:show', function() {});

// Custom target
$('.myDiv').on('spinner:hide', function() {});
{% endhighlight %}


##Animated

You can easily add CSS3 transition to spinner when appears and disappears on the screen. You can do it through **transition class**. Check the next example:

{% highlight scss %}
.spinner {
  opacity: 0;
  pointer-events: none;
  @include transition(opacity, .3s);

  &.transition {
    opacity: 1;
    pointer-events: auto;
  }

}
{% endhighlight %}