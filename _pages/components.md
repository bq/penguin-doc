---
layout: component
title: Components
order: 1
permalink: /components/
---

<div class="theme-bar">
    <div class="theme-bar__col theme-bar__select col-a-12">
        <!-- <form action="">
        <label></label>
        </form> -->
        Choose your favorite theme: {% file_lister bower_components/penguin-themes/themes %}
    </div>
    <div class="theme-bar__col theme-bar__buttons col-a-12">
        <ul class="btn-group">
            <li class="btn-group__item">
                <a id="link-github" href="https://github.com/bq/penguin-themes/tree/master/themes/penguin-doc" class="btn" target="_blank">
                    <span class="icon-text">
                        <i class="icon icon--invert"><svg viewBox="0 0 16 16">
                          <path d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"/>
                        </svg></i>See theme in GitHub
                    </span>
                </a>
            </li>
            <li class="btn-group__item">
                <a id="link-css" href="/bower_components/penguin-themes/themes/penguin-doc/dist/css/penguin-doc.css" class="btn" target="_blank">Download CSS (uncompressed)</a>
            </li>
        </ul>
    </div>
</div>

<!-- Alerts -->
{% include components/alert/alert-simple.html %}
{% include components/alert/alert-closeable.html %}


<!-- Breadcrumb -->

{% include components/breadcrumb/breadcrumb-simple.html %}

<!-- Buttons -->
{% include components/button/button-group.html %}
{% include components/button/button-fluid.html %}
{% include components/button/button-group-fluid.html %}
{% include components/button/button-icon.html %}
{% include components/button/button-just-icon.html %}

<!-- Dropdown-->
{% include components/dropdown/dropdown-simple.html %}
{% include components/dropdown/dropdown-icon.html %}
{% include components/dropdown/dropdown-fluid.html %}
{% include components/dropdown/dropdown-menu.html %}

<!-- Form -->
{% include components/form/form-simple.html %}
{% include components/form/form-horizontal.html %}
{% include components/form/form-2cols.html %}
{% include components/form/form-4cols.html %}

<div class="penguin-example">
	<div class="demo demo--target"></div>
	<button class="btn btn--primary" data-rel="modal" data-target=".demo--target" data-modal="{title: 'Modal', content: 'Content', buttons: {btn: [{text: 'Accept', className: 'btn btn--primary'}]}}">Target modal</button>
</div>

<!-- Nav-->
{% include components/nav/nav-inline.html %}
{% include components/nav/nav-inline-dropdown.html %}
{% include components/nav/nav-bar.html %}
{% include components/nav/nav-fluid.html %}
{% include components/nav/nav-bar-dropdown.html %}
{% include components/nav/nav-stacked.html %}
{% include components/nav/nav-stacked-dropdown.html %}
{% include components/nav/nav-bar-icon.html %}

<!-- Paginator -->
{% include components/paginator/paginator-inline.html %}
{% include components/paginator/paginator-bar.html %}

<!-- Panel -->
{% include components/panel/panel-dropdown.html %}


<div class="penguin-example penguin-example--margin">
    <div class="grid grid--2col">
        <div class="grid__item">
            <div class="demo demo--a demo--spinner">
            </div>
            <ul class="btn-group">
                <li class="btn-group__item"><button class="btn btn--primary btn--spinner-demo--a">Launch here</button></li>
                <li class="btn-group__item"><button class="btn btn--primary btn--spinner-clear-a">Clear</button></li>
            </ul>
        </div>
        <div class="grid__item">
            <div class="demo demo--b demo--spinner">
            </div>
            <ul class="btn-group">
                <li class="btn-group__item"><button class="btn btn--primary btn--spinner-demo--b">Launch here</button></li>
                <li class="btn-group__item"><button class="btn btn--primary btn--spinner-clear-b">Clear</button></li>
            </ul>
        </div>
    </div>
</div>


<!-- Tab -->
{% include components/tab/tab-inline.html %}
{% include components/tab/tab-inline-reverse.html %}
{% include components/tab/tab-bar.html %}
{% include components/tab/tab-stacked.html %}
{% include components/tab/tab-stacked-reverse.html %}

<!-- Table -->
{% include components/table/table-simple.html %}

<div class="penguin-example text">
    <h1>This is a h1 text</h1>
    <h2>This is a h2 text</h2>
    <h3>This is a h3 text</h3>
    <h4>This is a h4 text</h4>
    <h5>This is a h5 text</h5>
    <h6>This is a h6 text</h6>
</div>

<div class="penguin-example text">
    <p>Default paragraph</p>
    <p class="text-large">This is a large text</p>
    <p>Default paragraph with a <strong>heavier font-weight</strong></p>
    <p>Default paragraph with a <em>snippet of text with italics</em></p>
    <p class="text-small">This is a small text</p>
    <p class="text"><small>This is a small label</small></p>
</div>

<div class="penguin-example text">
    <ul>
        <li>A</li>
        <li>B</li>
        <li>
            <strong>C</strong>
            <ul>
                <li>C1</li>
                <li>C2</li>
            </ul>
        </li>
        <li>D</li>
    </ul>
    <ol>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
    </ol>
    <dl>
        <dt><strong>Term A:</strong></dt>
            <dd>Definition A</dd>
        <dt><strong>Term B:</strong></dt>
            <dd>Definition B</dd>
        <dt><strong>Term C:</strong></dt>
            <dd>
                <ul>
                    <li>Definition C1</li>
                    <li>Definition C2</li>
                    <li>
                        <ol>
                            <li>Definition C3.1</li>
                            <li>Definition C3.2</li>
                        </ol>
                    </li>
                </ul>
            </dd>
    </dl>
</div>



<script src="/bower_components/jquery/dist/jquery.min.js"></script>
<script>

    var defaultTheme = 'penguin-doc';

    function changeTheme(themeName) {

        var themeName = themeName.toLowerCase(),
            styleSheet = $('[title="penguin-theme"]'),
            linkGitHub = $('#link-github'),
            linkCss = $('#link-css'),
            pathGitHub = 'https://github.com/bq/penguin-themes/tree/master/themes/' + themeName,
            pathCss = '/bower_components/penguin-themes/themes/'+ themeName +'/dist/css/' + themeName.toLowerCase() + '.css';

            linkCss.attr('href', pathCss);
            styleSheet.attr('href', pathCss);
            linkGitHub.attr('href', pathGitHub);
    }

    $(document).on('ready', function() {

        $('#select-theme option[value='+ defaultTheme +']').attr('selected', 'selected');

        $('#select-theme').on('change', function (event) {

            changeTheme($('#select-theme :selected').val());
        });
    });
</script>
