---
layout: page
title: Themes
order: 2
permalink: /themes/
---

##Creating new theme

First, we need download [penguin-themes](https://github.com/bq/penguin-themes) repository, and create a theme with this structure:

{% highlight html %}
penguin-themes/themes/<theme_name>/
                            └── src/
                                └── css/
                                    ├── base/
                                    │   └── _variables.scss
                                    ├── components/
                                    └── main.scss
{% endhighlight %}

The penguin components are defined in main.scss, and we can set our own variables (_variables.scss) into base and components directories.

To compile theme style's, we need execute this grunt task:

{% highlight html %}
grunt build-theme:<theme_name>
{% endhighlight %}


##How to preview the theme

After compilation, move all files of new theme to this path into [penguin-doc](https://github.com/bq/penguin-doc) repository:

{% highlight html %}
penguin-doc/_site/bower_components/penguin-themes/themes/
{% endhighlight %}

To reload site, we need run this task:

{% highlight html %}
penguin-doc$ jekyll serve -w
{% endhighlight %}

Automatically our theme will appear in select list of [components page](/components), and we can get a preview of each component.