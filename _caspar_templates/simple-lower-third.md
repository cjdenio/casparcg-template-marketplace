---
template_name: Simple Lower Third
creator: Caleb Denio
short_name: simple-lower-third
tags:
    - lower-third
    - html
    - simple
    - overlay
---

# Simple Lower Third

This lower third is extremely easy to set up and use. However, it also offers a pretty cool level of customization.

## Getting started

Just extract the downloaded `.zip` file into your CasparCG `template/` directory. You can then go ahead and play the template with `CG 1 ADD 1 SIMPLE-LOWER-THIRD/SIMPLE-LOWER-THIRD 1`.

## Parameters

> Parameters are sent via the `CG UPDATE` command, and must be sent as a JSON string. If you're in CasparCG Client, just check that little "Send as JSON" box.


`text` - __String__ _(required)_
Set the text to be displayed in the lower third.

`font` - __Any valid CSS font-family__ Set the font of the lower third.

>Fallback fonts can be setup with commas _e.g._ `Raleway, Montserrat, Lato, sans-serif`.
If your font has a space in the name, please surround it with double quotes _e.g._ `"Comic Sans"`

`font_weight` - __Any valid CSS font-weight__ Set the font weight of the lower third.
>Examples: `bold`, `normal`, `700`. Please note the underscore in the parameter name.

`color` - __Any valid CSS color__ Set the color of the text.
>Examples: `#00AFFF`, `rgb(0, 175, 255)`, `blue`, `rgba(0, 0, 0, 0.3)`

`background_color` - __Any valid CSS color__ Set the background color of the lower third.
> As above, please note the underscore in the parameter name.
