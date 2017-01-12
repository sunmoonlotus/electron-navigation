# electron-navigation
Adds a navigation interface to electron that allows you to browse the internet with tabs and webviews.

**I just released this! I am currently working on updating the README.md to fully show how everything works.**

---

![](previews/light.PNG)
![](previews/dark.PNG)

### Install
---
Add the `--save` switch if you want to save it to your *package.json* dependencies.
```
npm install electron-navigation
```

### Usage
---
1. This works with electron, so I'm assuming you have a basic electron app setup.
2. If not checkout the demo files `demo.js` & `demo.html` on [github](https://github.com/simply-coded/electron-navigation/tree/master/test).
3. Similar to **demo.html**, You should have a main html file **index.html** or whatever you called it.
4. In the **~.html** file you need to create **3** containers where the the controls, tabs, and views will be auto placed into. 
5. If you don't want your users to control the pages you can get rid of the controls container. The ID for that is **nav-body-ctrls** .
6. The order or location of these divs doesn't matter, and they also don't have to be div elements, one could be `<main id="nav-body-views">` for example.
	```html
	<div id="nav-body-ctrls"></div>
	<div id="nav-body-tabs"></div>
	<div id="nav-body-views"></div>
	```
	NOTE: The **IDs** are important. Make sure they are spelled correctly.
	
7. Now we need to apply the module to your code so that it can add the tabs and such to the containers we just created above.
8. At the bottom of the same **~.html** file right before the `</body>` tag add the following script.
	
	```html
	<script>
		var someNameHere = require('electron-navigation');
		var anotherName = new someNameHere();
	</script>
	```
9. This should be all you need to get the basic functionality working. Confused? Check out the [demos](https://github.com/simply-coded/electron-navigation/tree/master/test) I mentioned earlier.

### Options
---
####Display
>You can control how and if some elements are displayed by passing an options object through the main electron-navigation object like so:  

```javascript
var eNavigation = require('electron-navgation');

// the order doesn't matter
var eNav = new eNavigation({
	showAddTabButton: false,
	showUrlBar: true,
    showReloadButton: false
});
```
```javascript
// these are all the options, and their default values if omitted.
options = {
	showBackButton: true,
    showForwardButton: true,
    showReloadButton: true,
    showUrlBar: true,
    showAddTabButton: true,
    verticalTabs: false
}
```
#### Control
>You can control the views and tabs using the object variable you created.  

```javascript
var eNavigation = require('electron-navigation');

var eNav = new eNavigation({ showAddTabButton: false });

// open a new tab with the specified url
eNav.newTab('http://www.youtube.com/');

// change the current tab's view. it will auto add the https:// protocol if omitted.
eNav.changeTab('google.com');

// you can also perform google searches if no domain or protocol is specified.
eNav.newTab('this will perform a search');

```

### Themes
---
> You can apply themes by downloading the ones on [github](https://github.com/simply-coded/electron-navigation/tree/master/themes) and putting them in your `<head>` tag.  
> These can also be found in your apps node-modules directory `.\node-modules\electron-navigation\themes\` .

```html
<link rel="stylesheet" type="text/css" href="relative/location/of/theme.css">
```

> The themes in the github folder linked above also has a template file called **theme-template.css** that you can use to style the tabs and controls exactly how you wish. 

```css
/* back button, grouped in: .nav-icons */

#nav-ctrls-back {
    /* fill:#000; width:24px; height:24px; */
}


/* back button with no history, grouped in: .nav-icons.disabled */

#nav-ctrls-back.disabled {
    /* pointer-events:none;	opacity:0.5; */
}
```

### History
* 1.0.3
	* `CHANGE` - updated `README.md` with a tutorial on how to use the module.
* 1.0.2
	* `FIX` - *npm test* command for demo.
* 1.0.1
	* `CHANGE` - file names and folder structure.
* 1.0.0
	* `ADD` - initial release.

### Meta

Jeremy England - [simplycoded.help@gmail.com](mailto:simplycoded.help@gmail.com)

Distributed under the MIT license. See [`LICENSE`](https://spdx.org/licenses/MIT.html) for more information.
