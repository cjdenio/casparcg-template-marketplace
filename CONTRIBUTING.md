# Add a template

Welcome! Thank you for taking the time to add your CasparCG template to this library. Your work is deeply appreciated!

## How it works

You can add your template via a GitHub Pull Request. Unfortunately, at this time there's no other way. I'll explain the steps you have to take below.

## Non-template-adding pull requests

I'll welcome any non-template pull requests as well. Some examples:

- Fixing typos
- Tweaking site design
- Tweaking site functionality
- Adding easter eggs (seriously, you can't make a website _without_ easter eggs :D )
- Making this doc better

## What you'll need

- A GitHub account
- Some knowledge of GitHub
- Your template in a `.zip` archive. More on that later.
- A thumbnail that's either `.png`, `.jpg`, or `.gif`. We'll get into that later.
- A readiness to write some instructions on how to use your template

# Let's go!

## Step 1: Fork the repo

Head over to the [GitHub repository](https://github.com/cjdenio/casparcg-template-marketplace/fork) and fork it into your personal account (or organization, I don't care)

## Step 2: Add your template metadata file

Under the `_caspar_templates/` directory, you'll see some `.md` files. It's time to add your very own!

Create a file named `[your-short-template-name].md` The "short template name", as I'll refer to it, is the name of your template, all lowercase, and with dashes seperating words. For example, `Simple Lower Third` becomes `simple-lower-third`.

At the top of the file, add the following:

```
---
template_name: [Your Full Template Name]
creator: [Your name]
short_name: [your-short-template-name]
tags:
    - a tag
    - another
    - yet another
---
```
### Settable properties:

`template_name`: Your template's name. _e.g._ Simple Lower Third

`creator`: This can be your name or your company's name.

`short_name`: This should exactly match the filename without the `.md`.

`tags`: A YAML sequence of words to tag your template with. Some good ones:

- `html` or `flash`
- `lower-third`
- `countdown`
- `overlay` or `full-screen`
- Anything you want!

These tags will help your template be found in search.

`image` _(optional)_: the URL of your thumbnail, relative to the `thumbnails/` directory. The default is `[short_name].png`. Use this property if your thumbnail isn't a `.png`.

## Step 3: Add documentation

Under the closing `---` of your metadata file, put some [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) documentation on how to use your template. Here's some stuff that _needs_ to be in it:

- An overview of what your template does
- A list of `CG UPDATE` parameters (if applicable)
- Whether to use JSON or XML in sending parameters
- A list of custom functions that can be called by `CG INVOKE` (if applicable)

Some other things that you can put in there:

- An embedded YouTube video (you can put the HTML embed code right in the Markdown file)
- Images (I can't host them for you, but you can use GitHub or another image hosting service)
- A link to your template's repository (if applicable)
- A link to your website or GitHub profile

Make sure to spend some quality time writing this documentation.

## Step 4: Add thumbnail

### What is a thumbnail?
Your template's thumbnail should be an image of the template in use. It could be a screenshot, or a photo. Just make sure that your template is clearly visible.
<br /><br />

In the `thumbnails/` directory, put your thumbnail with this filename: `[short_name].png`. If your thumbnail isn't a PNG, don't fret! Just add the following to the metadata section of your Markdown file(in between the `---`'s):

```
image: [short_name].jpg
OR
image: [short_name].gif
```

> ### A note on thumbnails
> Your thumbnail doesn't have to be a square, but it will be resized to fit in a 300px by 300px container. The aspect ratio will be preserved.

## Step 5: Add template file

Finally! We're adding the actual template!

First, package your template into a `.zip` file named `[short_name].zip`. The file structure should look something like this:
```
my-template.zip
|---my-template/
|   |---my-template.html
|
|---README (optional)
```

## Step 6: Open pull request

Now, open a pull request between your fork and the base repository. Please title it with the full name of your template, and include some basic info.

## What's next?

Your template should get approved within 7 days. As soon as the pull request is merged, you template will be immediately added to the [CasparCG Template Marketplace](https://cjdenio.github.io/casparcg-template-marketplace)!