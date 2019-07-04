---
template_name: Channel Branding Info
creator: Tello Diego
short_name: channelbrand-info
tags:
    - info
    - flash
    - simple
    - actionscript
    - branding
    - xml
---

# Channel Branding Info

This is a simple channel info like a "coming up next" near to the channel logo, so you can set the position (X and Y). This shows how you can separate the parts of the template on movieclips and classes from the code side. THIS IS NOT READY FOR PRODUCTION JUST FOR LEARNING. __Source files are included__.

## Getting started

Just extract the downloaded `.zip` file and extract it, copy the .ft file into your CasparCG `template/` directory. You can then go ahead and play the template with `CG 1 ADD 1 CHANNELBRAND-INFO 1`.

## Parameters
> Parameters are sent via the `CG ADD` command, and must be sent as a XML string.


`header` - __String__ _(required)_ Set the header text.

`title` - __String__ Set the the title for the info, can be a show/event name.

`info` - __String__ Set the description of the show/event like a episode name, a datetime in the schedule, etc.

`positionX` - __String__ Set the X position value.

`positionY` - __String__ Set the X position value.

## XML Sample
> 						<templateData>
							<componentData id='header'>
								<data id='text' value='COMING UP NEXT' />
							</componentData>
							<componentData id='title'>
								<data id='text' value='BASKET LEAGUE' />
							</componentData>
							<componentData id='info'>
								<data id='text' value='Atenas vs Estudiantes' />
							</componentData>
							<componentData id='positionX'>
								<data id='text' value='550' />
							</componentData>
							<componentData id='positionY'>
								<data id='text' value='40' />
							</componentData>
						</templateData>

