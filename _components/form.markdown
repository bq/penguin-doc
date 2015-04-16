---
layout: component
title:  "Form"
---

A form displays a set of related fields: input, textarea, select, checkbox, radio button...

##form

<div class="penguin-example">
	<div class="form">
        <form id="form-login">
            <fieldset>
            <legend>Sample form</legend>
                <!-- input type="email"-->
                <div class="form-control">
                    <label for="email" class="invisible">Email</label>
                    <span class="input input--icon">
                        <input type="email" id="email" name="email" placeholder="Email">
                        <i class="icon icon--invert" aria-hidden="true">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                                <path d="M407.448,360.474c-59.036-13.617-113.989-25.541-87.375-75.717
                                    c81.01-152.729,21.473-234.406-64.072-234.406c-87.231,0-145.303,84.812-64.072,234.406c27.412,50.482-29.608,62.393-87.375,75.717
                                    c-59.012,13.609-54.473,44.723-54.473,101.176h411.838C461.919,405.196,466.458,374.083,407.448,360.474z"/>
                            </svg>
                        </i>
                    </span>
                </div>
                <!-- input type="password" -->
                <div class="form-control">
                    <label for="password" class="invisible">Password</label>
                    <span class="input input--icon">
                        <input type="password" id="password" name="password" placeholder="Password">
                        <i class="icon icon--invert" aria-hidden="true">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                                <path d="M195.334,223.333h-50v-62.666C145.334,99.645,194.979,50,256,50c61.022,0,110.667,49.645,110.667,110.667
                                    v62.666h-50v-62.666C316.667,127.215,289.452,100,256,100c-33.451,0-60.666,27.215-60.666,60.667V223.333z M404,253.333V462H108
                                    V253.333H404z M283,341c0-14.912-12.088-27-27-27s-27,12.088-27,27c0,7.811,3.317,14.844,8.619,19.773
                                    c4.385,4.075,6.881,9.8,6.881,15.785V399.5h23v-22.941c0-5.989,2.494-11.708,6.881-15.785C279.683,355.844,283,348.811,283,341z"/>
                            </svg>
                        </i>
                    </span>
                </div>
                <!-- textarea -->
                <div class="form-control">
                    <label for="textarea">Textarea</label>
                    <span class="input">
                        <textarea id="textarea" name="textarea" rows="3"></textarea>
                    </span>
                </div>
                <!-- select -->
                <div class="form-control">
                    <label for="select" class="invisible">Select</label>
                    <span class="input">
                        <select id="select" name="select">
                            <option>Item 1</option>
                            <option>Item 2</option>
                            <option>Item 3</option>
                            <option>Item 4</option>
                            <option>Item 5</option>
                        </select>
                    </span>
                </div>
                <!-- select multiple -->
                <div class="form-control">
                    <label for="select-multiple" class="invisible">Select</label>
                    <span class="input">
                        <select id="select-multiple" multiple name="select">
                            <option>Item 1</option>
                            <option>Item 2</option>
                            <option>Item 3</option>
                            <option>Item 4</option>
                            <option>Item 5</option>
                        </select>
                    </span>
                </div>
                <!-- input type="file" -->
                <div class="form-control">
                    <label for="file">File</label>
                    <span class="input">
                        <input id="file" type="file" name="file">
                    </span>
                </div>
                <!-- input type="checkbox" -->
                <fieldset>
                    <legend>Checkbox</legend>
                    <div class="form-control">
                        <span class="input input--checkbox">
                            <input type="checkbox" id="remember-1" name="remember">
                        </span>
                        <label for="remember-1">Checkbox 1</label>
                    </div>
                    <div class="form-control">
                        <span class="input input--checkbox">
                            <input type="checkbox" id="remember-2" name="remember">
                        </span>
                        <label for="remember-2">Checkbox 2</label>
                    </div>
                </fieldset>
                <!-- input type="radio" -->
                <fieldset>
                    <legend>Sex</legend>
                    <div class="form-control form-control--inline">
                        <span class="input input--radio">
                            <input type="radio" id="male" name="sex" value="male">
                        </span>
                        <label for="male">Male</label>
                    </div>
                    <div class="form-control form-control--inline">
                        <span class="input input--radio">
                            <input type="radio" id="female" name="sex" value="female">
                        </span>
                        <label for="female">Female</label>
                    </div>
                </fieldset>
                <!-- single button -->
                <div class="btn-group">
                    <button class="btn btn--primary">Submit</button>
                </div>
            </fieldset>
        </form>
    </div>
</div>
{% highlight html %}
<div class="form">
    <form id="form-login">
        <fieldset>
            <legend>Sample form</legend>
            <!-- input type="email"-->
            <div class="form-control">
                <label for="email" class="invisible">Email</label>
                <span class="input input--icon">
                    <input type="email" id="email" name="email" placeholder="Email">
                    <i class="icon icon--invert" aria-hidden="true">*Your icon here*</i>
                </span>
            </div>
            <!-- input type="password" -->
            <div class="form-control">
                <label for="password" class="invisible">Password</label>
                <span class="input input--icon">
                    <input type="password" id="password" name="password" placeholder="Password">
                    <i class="icon icon--invert" aria-hidden="true">*Your icon here*</i>
                </span>
            </div>
            <!-- textarea -->
            <div class="form-control">
                <label for="textarea">Textarea</label>
                <span class="input">
                    <textarea id="textarea" name="textarea" rows="3"></textarea>
                </span>
            </div>
            <!-- select -->
            <div class="form-control">
                <label for="select" class="invisible">Select</label>
                <span class="input">
                    <select id="select" name="select">
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                        <option>Item 4</option>
                        <option>Item 5</option>
                    </select>
                </span>
            </div>
            <!-- select multiple -->
            <div class="form-control">
                <label for="select-multiple" class="invisible">Select</label>
                <span class="input">
                    <select id="select-multiple" multiple name="select">
                        <option>Item 1</option>
                        <option>Item 2</option>
                        <option>Item 3</option>
                        <option>Item 4</option>
                        <option>Item 5</option>
                    </select>
                </span>
            </div>
            <!-- input type="file" -->
            <div class="form-control">
                <label for="file">File</label>
                <span class="input">
                    <input id="file" type="file" name="file">
                </span>
            </div>
            <!-- input type="checkbox" -->
            <fieldset>
                <legend>Checkbox</legend>
                <div class="form-control">
                    <span class="input input--checkbox">
                        <input type="checkbox" id="remember-1" name="remember">
                    </span>
                    <label for="remember-1">Checkbox 1</label>
                </div>
                <div class="form-control">
                    <span class="input input--checkbox">
                        <input type="checkbox" id="remember-2" name="remember">
                    </span>
                    <label for="remember-2">Checkbox 2</label>
                </div>
            </fieldset>
            <!-- input type="radio" -->
            <fieldset>
                <legend>Sex</legend>
                <div class="form-control form-control--inline">
                    <span class="input input--radio">
                        <input type="radio" id="male" name="sex" value="male">
                    </span>
                    <label for="male">Male</label>
                </div>
                <div class="form-control form-control--inline">
                    <span class="input input--radio">
                        <input type="radio" id="female" name="sex" value="female">
                    </span>
                    <label for="female">Female</label>
                </div>
            </fieldset>
            <!-- single button -->
            <div class="btn-group">
                <button class="btn btn--primary">Submit</button>
            </div>
        </fieldset>
    </form>
</div>
{% endhighlight %}

##form horizontal
<div class="penguin-example">
    <div class="form">
        <form>
            <fieldset>
                <legend>Sign in</legend>
                <div class="form-control">
                    <div class="row row--inline row--collapse">
                        <div class="col-a-12 col-d-2">
                            <label for="email-horizontal">Email</label>
                        </div>
                        <div class="col-a-12 col-d-10">
                            <span class="input">
                                <input type="email" id="email-horizontal" class="warn">
                            </span>
                        </div>
                    </div>
                </div>
                <div class="form-control">
                    <div class="row row--inline row--collapse">
                        <div class="col-a-12 col-d-2">
                            <label for="password-horizontal">Contraseña</label>
                        </div>
                        <div class="col-a-12 col-d-10">
                            <span class="input">
                                <input type="password" id="password-horizontal">
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row row--collapse">
                    <div class="col-md-offset-2 col-lg-offset-2 col-lg-10">
                        <div class="form-control">
                            <div class="input input--checkbox">
                                <input type="checkbox" id="remember-horizontal" name="remember">
                            </div>
                            <label for="remember-horizontal">Remember me</label>
                        </div>
                        <div class="btn-group">
                            <input type="submit" class="btn btn--primary" value="Login">
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</div>
{% highlight html %}
<div class="form">
    <form>
        <fieldset>
            <legend>Sign in</legend>
            <div class="form-control">
                <div class="row row--inline row--collapse">
                    <div class="col-a-12 col-d-2">
                        <label for="email-horizontal">Email</label>
                    </div>
                    <div class="col-a-12 col-d-10">
                        <span class="input">
                            <input type="email" id="email-horizontal" class="warn">
                        </span>
                    </div>
                </div>
            </div>
            <div class="form-control">
                <div class="row row--inline row--collapse">
                    <div class="col-a-12 col-d-2">
                        <label for="password-horizontal">Contraseña</label>
                    </div>
                    <div class="col-a-12 col-d-10">
                        <span class="input">
                            <input type="password" id="password-horizontal">
                        </span>
                    </div>
                </div>
            </div>
            <div class="row row--collapse">
                <div class="col-md-offset-2 col-lg-offset-2 col-lg-10">
                    <div class="form-control">
                        <div class="input input--checkbox">
                            <input type="checkbox" id="remember-horizontal" name="remember">
                        </div>
                        <label for="remember-horizontal">Remember me</label>
                    </div>
                    <div class="btn-group">
                        <input type="submit" class="btn btn--primary" value="Login">
                    </div>
                </div>
            </div>
        </fieldset>
    </form>
</div>
{% endhighlight %}


##form two columns

<div class="penguin-example">
    <div class="form">
        <form id="form-2col">
            <div class="row">
                <div class="col-a-6">
                    <fieldset>
                        <legend>Account data</legend>
                        <div class="form-control">
                            <label for="name-2col">Username</label>
                            <span class="input">
                                <input id="name-2col" type="text" name="user">
                            </span>
                        </div>
                        <div class="form-control">
                            <label for="email-2col">Email</label>
                            <span class="input">
                                <input type="email" id="email-2col" name="email">
                            </span>
                        </div>
                        <div class="form-control">
                            <label for="password-2col">Password</label>
                            <span class="input">
                                <input type="password" id="password-2col" name="password">
                            </span>
                        </div>
                    </fieldset>
                </div>
                <div class="col-a-6">
                    <fieldset>
                        <legend>User data</legend>
                        <div class="form-control">
                            <label for="user-name-2col">Full name</label>
                            <span class="input">
                                <input id="user-name-2col" type="text" name="user-name">
                            </span>
                        </div>
                        <div class="form-control">
                            <label for="address-2col">Address</label>
                            <span class="input">
                                <input id="address-2col" type="text" name="address">
                            </span>
                        </div>
                        <fieldset>
                            <legend>Sex</legend>
                            <div class="form-control form-control--inline">
                                <span class="input input--radio">
                                    <input type="radio" id="male-2col" name="sex" value="male">
                                </span>
                                <label for="male-2col">Male</label>
                            </div>
                            <div class="form-control form-control--inline">
                                <span class="input input--radio">
                                    <input type="radio" id="female-2col" name="sex" value="female">
                                </span>
                                <label for="female-2col">Female</label>
                            </div>
                        </fieldset>
                    </fieldset>
                </div>
            </div>
            <div class="row">
                <div class="col-a-12">
                    <div class="btn-group align-right">
                        <input type="reset" class="btn btn--secondary" value="Reset">
                        <input type="submit" class="btn btn--primary" value="Submit">
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

{% highlight html %}
<div class="form">
    <form id="form-2col">
        <div class="row">
            <div class="col-a-6">
                <fieldset>
                    <legend>Account data</legend>
                    <div class="form-control">
                        <label for="name-2col">Username</label>
                        <span class="input">
                            <input id="name-2col" type="text" name="user">
                        </span>
                    </div>
                    <div class="form-control">
                        <label for="email-2col">Email</label>
                        <span class="input">
                            <input type="email" id="email-2col" name="email">
                        </span>
                    </div>
                    <div class="form-control">
                        <label for="password-2col">Password</label>
                        <span class="input">
                            <input type="password" id="password-2col" name="password">
                        </span>
                    </div>
                </fieldset>
            </div>
            <div class="col-a-6">
                <fieldset>
                    <legend>User data</legend>
                    <div class="form-control">
                        <label for="user-name-2col">Full name</label>
                        <span class="input">
                            <input id="user-name-2col" type="text" name="user-name">
                        </span>
                    </div>
                    <div class="form-control">
                        <label for="address-2col">Address</label>
                        <span class="input">
                            <input id="address-2col" type="text" name="address">
                        </span>
                    </div>
                    <fieldset>
                        <legend>Sex</legend>
                        <div class="form-control form-control--inline">
                            <span class="input input--radio">
                                <input type="radio" id="male-2col" name="sex" value="male">
                            </span>
                            <label for="male-2col">Male</label>
                        </div>
                        <div class="form-control form-control--inline">
                            <span class="input input--radio">
                                <input type="radio" id="female-2col" name="sex" value="female">
                            </span>
                            <label for="female-2col">Female</label>
                        </div>
                    </fieldset>
                </fieldset>
            </div>
        </div>
        <div class="row">
            <div class="col-a-12">
                <div class="btn-group align-right">
                    <input type="reset" class="btn btn--secondary" value="Reset">
                    <input type="submit" class="btn btn--primary" value="Submit">
                </div>
            </div>
        </div>
    </form>
</div>
{% endhighlight %}


##form four columns

<div class="penguin-example">
    <div class="form">
        <form>
            <fieldset>
                <legend>Legend</legend>
                <div class="row row--collapse">
                    <div class="col-a-3">
                        <div class="form-control">
                            <label for="name-4col">Username</label>
                            <span class="input">
                                <input id="name-4col" type="text" name="user">
                            </span>
                        </div>
                    </div>
                    <div class="col-a-3">
                        <div class="form-control">
                            <label for="email-4col">Email</label>
                            <span class="input">
                                <input type="email" id="email-4col" name="email-4col">
                            </span>
                        </div>
                    </div>
                    <div class="col-a-3">
                        <div class="form-control">
                            <label for="password-4col">Password</label>
                            <span class="input">
                                <input type="password" id="password-4col" name="password">
                            </span>
                        </div>
                    </div>
                    <div class="col-a-3">
                        <div class="form-control">
                            <label for="user-name-4col">Full name</label>
                            <span class="input">
                                <input id="user-name-4col" type="text" name="user-name-4col">
                            </span>
                        </div>
                    </div>
                    <div class="col-a-3">
                        <div class="form-control">
                            <label for="address-4col">Address</label>
                            <span class="input">
                                <input id="address-4col" type="text" name="address-4col">
                            </span>
                        </div>
                    </div>
                    <div class="col-a-3">
                        <fieldset class="form-control--inline">
                            <legend>Sex</legend>
                            <div class="form-control form-control--inline">
                                <span class="input input--radio">
                                    <input type="radio" id="male-4col" name="sex" value="male">
                                </span>
                                <label for="male-4col">Male</label>
                            </div>
                            <div class="form-control form-control--inline">
                                <span class="input input--radio">
                                    <input type="radio" id="female-4col" name="sex" value="female">
                                </span>
                                <label for="female-4col">Female</label>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="row row--collapse">
                    <div class="col-a-12">
                        <div class="btn-group"><br /><input type="submit" class="btn btn--primary" value="Submit"></div>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</div>

{% highlight html %}
<div class="form">
    <form>
        <fieldset>
            <legend>Legend</legend>
            <div class="row row--collapse">
                <div class="col-a-3">
                    <div class="form-control">
                        <label for="name-4col">Username</label>
                        <span class="input">
                            <input id="name-4col" type="text" name="user">
                        </span>
                    </div>
                </div>
                <div class="col-a-3">
                    <div class="form-control">
                        <label for="email-4col">Email</label>
                        <span class="input">
                            <input type="email" id="email-4col" name="email-4col">
                        </span>
                    </div>
                </div>
                <div class="col-a-3">
                    <div class="form-control">
                        <label for="password-4col">Password</label>
                        <span class="input">
                            <input type="password" id="password-4col" name="password">
                        </span>
                    </div>
                </div>
                <div class="col-a-3">
                    <div class="form-control">
                        <label for="user-name-4col">Full name</label>
                        <span class="input">
                            <input id="user-name-4col" type="text" name="user-name-4col">
                        </span>
                    </div>
                </div>
                <div class="col-a-3">
                    <div class="form-control">
                        <label for="address-4col">Address</label>
                        <span class="input">
                            <input id="address-4col" type="text" name="address-4col">
                        </span>
                    </div>
                </div>
                <div class="col-a-3">
                    <fieldset class="form-control--inline">
                        <legend>Sex</legend>
                        <div class="form-control form-control--inline">
                            <span class="input input--radio">
                                <input type="radio" id="male-4col" name="sex" value="male">
                            </span>
                            <label for="male-4col">Male</label>
                        </div>
                        <div class="form-control form-control--inline">
                            <span class="input input--radio">
                                <input type="radio" id="female-4col" name="sex" value="female">
                            </span>
                            <label for="female-4col">Female</label>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div class="row row--collapse">
                <div class="col-a-12">
                    <div class="btn-group"><input type="submit" class="btn btn--primary" value="Submit"></div>
                </div>
            </div>
        </fieldset>
    </form>
</div>
{% endhighlight %}




##How to use

| DOM structure | Description                                | Modifier class                              |
|---------------|--------------------------------------------|---------------------------------------------|
| .form         | Main container                             |                                             |
| fieldset      | Group form controls (optional)             |                                             |
| legend        | Caption for group from controls (optional) | .invisible                                  |
| label         | Label for input                            | .invisible                                  |
| span.input    | Input container                            | .input--icon                                |
| input         | Element form                               |                                             |
| i.icon        | Icon element                               | .icon--type + aria-hidden="true" attribute. |
