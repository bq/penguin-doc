---
layout: page
title: Themes
order: 2
permalink: /themes/
---

## How to create a new theme

### 1. Download the themes repository

Download the penguin themes repository [penguin-themes](https://github.com/bq/penguin-themes) and then create the following directory structure:

{% highlight html %}
penguin-themes/themes/<theme_name>/
                            └── src/
                                └── css/
                                    ├── base/
                                    │   └── _variables.scss
                                    ├── components/
                                    └── main.scss
{% endhighlight %}

### 2. Set up your theme

*Configure your theme variables in `src/css/base/_variables.scss` and `src/css/components/_variables.scss`.
*Style your theme components in `src/css/components/{component_name}`.

Finally, add info's theme in theme.json file.

{% highlight js %}
{
    "version": "version",
    "name": "name",
    "author": "Author <author@bq.com>",
    "description": "Lorem ipsum dolor sit amet..."
}
{% endhighlight %}



### 3. Build your theme

Compile your theme using the following grunt task:

{% highlight html %}
grunt build-theme:<theme_name>
{% endhighlight %}

While you are working on your theme you can preview all changes without the need to build theme before. Run the next grunt task on the command line:

{% highlight html %}
grunt serve:<theme_name>
{% endhighlight %}

This task use browsersync to open a new tab on your favourite browser with the content of themes/index.html.
The changes you make on themes/custom-theme/src/css/ and themes/index.html will cause all browsers to do a full-page refresh. 

Don't forget set css path, on themes/index.html, to your custom css for preview changes.

{% highlight html %}
<link rel="stylesheet" media="screen" href=theme-name/dist/css/theme-name.css>
{% endhighlight %}

### 4. Share your theme!

Now you have your awesome theme ready to be used for hundreds of developers :) Just make a pull request to the themes repository [penguin-themes](https://github.com/bq/penguin-themes) and we will check it as soon as possible.





