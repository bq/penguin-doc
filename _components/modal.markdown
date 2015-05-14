---
layout: component
title:  "Modal"
---

A modal is a dialog prompt, like a pop-up window, that temporarily blocks interactions with the site.

##Full screen modal
{% include components/modal/modal-full.html %}

{% highlight js %}
 $('body').modal({
  content: '<div class="modal__header"><h1 class="h2">Modal Title</h1><button type="button" title="close" data-close="modal" class="modal__close"><i class="icon icon--close" aria-hidden="true"></i><span class="invisible">close</span></button></div><div class="modal__body" data-region="modal-body">Modal Content</div><div class="modal__footer"><div class="btn-group align-right"><button type="button" class="btn btn--primary" data-close="modal">Accept</button></div></div>'
});
{% endhighlight %}


##Target modal
{% include components/modal/modal-target.html %}

{% highlight js %}
$('.demo--target').modal({
  content: '<div class="modal__header"><span class="h2">Modal Title</span><button type="button" title="close" data-close="modal" class="modal__close"><i class="icon icon--close" aria-hidden="true"></i><span class="invisible">close</span></button></div><div class="modal__body" data-region="modal-body">Modal Content</div><div class="modal__footer"><div class="btn-group"><button type="button" class="btn btn--primary" data-close="modal">Accept</button></div></div>'
});
{% endhighlight %}


## Ajax Modal
{% include components/modal/modal-ajax.html %}

{% highlight html %}
<button class="btn btn--primary" data-rel="modal" data-target="body" data-ajax="{ url: 'content.html'}">Ajax Modal</button>
{% endhighlight %}


##How to use

###Show modal by click event

{% highlight html %}
<button data-rel="modal" data-target="selector" data-modal="{options}" data-ajax="{ajaxSettings}">Modal</button>
{% endhighlight %}

###Show modal in loaded page

{% highlight html %}
<div data-rel="modal-init" data-modal="{options}" data-ajax="{ajaxSettings}"></div>
{% endhighlight %}

> Don't forget to add [data-rel] attribute.

| data-rel   | Description                                                     |
|------------|-----------------------------------------------------------------|
| modal      | Shows the content in a modal component                          |
| modal-init | Shows the content in a modal component when the page is loaded. |



| data-target (optional) | Description                            | Default |
|------------------------|----------------------------------------|---------|
| selector               | Shows the content in a modal component | 'body'  |


| data-modal            | Type             | Description                                                  | Default value     |
|-----------------------|------------------|--------------------------------------------------------------|-------------------|
| classModifier         | string           | Adds a class modifier in the modal component.                | ''                |
| backdrop              | boolean          | Adds a overlay behind to the modal.                          | true              |
| backdropClassName     | string           | Set this class to backdrop                                   | 'modal--backdrop' |
| show                  | boolean          | Shows the component after creating the model object.         | false             |
| closeable             | boolean          | The modal can be closed by clicking out of it.               | true              |
| content               | string           | Set modal content with custom html                           | ''                |


| data-ajax (optional) | Type   | Description               | Default value                                       |
|----------------------|--------|---------------------------|-----------------------------------------------------|
| ajaxSettings         | object | Sets jQuery ["ajaxSettings"](http://api.jquery.com/jquery.ajax) | jquery.ajax   |


##javaScript

> $('target').modal({options});

{% highlight js %}
$('body').modal({
    backdrop      : true,
    closeable     : true,
    content       : '<div>Content</div>',
    ajaxSettings  : {
      url: 'content.html'
    }
});
{% endhighlight %}

<div class="penguin-example">
$('target').modal('show');
</div>
{% highlight js %}
$('body').modal('show');
{% endhighlight %}

<div class="penguin-example">
$('target').modal('hide');
</div>
{% highlight js %}
$('body').modal('hide');
{% endhighlight %}

###events

The modal's target which receives the event.

| Event type       | Description                                          | Target                    |
|------------------|------------------------------------------------------|---------------------------|
| modal:show       | This event is fired when the modal is shown.         | relatedTarget or document |
| modal:hide       | This event is fired when the modal is hidden.        | relatedTarget or document |
| modal:ajaxLoaded | This event is fired when the ajax content is loaded. | relatedTarget or document |

{% highlight js %}
// Create a modal
var myModal = $.penguin.modal({title: 'My modal'}, '.panel');

// Show the created modal
myModal.show();

// Hide the created modal
myModal.hide();
{% endhighlight %}

###example

{% highlight js %}
// Default target
$('body').on('modal:show', function() {});

// Custom target
$('.myDiv').on('modal:hide', function() {});

// Default target
$('body').on('modal:ajaxLoaded', function() {});
{% endhighlight %}


###creating modal objects

> $.modal({options}, [target]);

###Theme definition

{% highlight scss %}
.modal {   
  &.modal--backdrop {} 
}

  .modal__dialog {}
  
    .modal__dialog__content {}
   
    
  .modal__header {}
    
      .modal__header__title {}
      
  .modal__body {}
  
  .modal__footer {}
  
{% endhighlight %}