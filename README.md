# electron-navigation
Adds a navigation interface to electron that allows you to browse the internet with tabs and webviews.

>**I just released this! I am currently working on updating the README.md to fully show how everything works.**

![](previews/light.PNG)
![](previews/dark.PNG)

### Install
---
```
npm install electron-navigation
```
> Confused? Go through the [Setup](#setup) for a full guide.   
> Know what you are doing? Skip to the [Usage](#usage) section.

### Setup
---
> This works with electron, so let's get a basic electron app going.


1. Create a folder; we'll call this one **demo**. In that folder create these three files.
    ```
    demo\package.json
    demo\index.js
    demo\index.html
    ```

2. Let's populate these files with some basic code.  

	`package.json`
    ```json
    {
      "name": "demo",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "electron ."
      },
      "author": "",
      "license": "ISC"
    }
    ```

    `index.js`
    ```javascript
    const {
        app,
        BrowserWindow
    } = require('electron');

    let win;

    app.on('ready', () => {

        win = new BrowserWindow({
            width: 800,
            height: 600
        });

        win.loadURL('file://' + __dirname + '/index.html');

        win.on('closed', () => {
            win = null;
        });

    });
    ```
	`index.html`
    ```html
    <!DOCTYPE html>
    <html>
    	<head>

		</head>
      	<body>

			test demo
        
      	</body>
    </html>
    ```
    
3. Time to test if it works. Open up your command prompt (windows) and type these commands hitting *enter* after each one.
    ```
    cd "C:\location\of\your\folder\demo"
    npm install electron-navigation --save
    npm test
    ```
	[](test/demo.PNG)

4. From here on out if you leave your command prompt window open to the demo directory, you can just type.
	```
    npm test
    ```
    
### Usage
---
>In your main **~.html** file you need to create **3** containers where the the controls, tabs, and views will be auto placed into. The demo uses **index.html** as it's main file.

    index.html
```html
<body>
<!-- your code here -->

<div id="nav-body-ctrls"></div>
<div id="nav-body-tabs"></div>
<div id="nav-body-views"></div>

</body>
```
NOTE: 
1. The **IDs** are important. Make sure they are spelled correctly. 
2. If you don't want your users to control the pages you can get rid of the controls container. The ID for that is **nav-body-ctrls** .
3. The order or location of these divs doesn't matter, and they also don't have to be div elements, one could be `<main id="nav-body-views">` for example.
	
> Now we need to apply the module to your code so that it can add the tabs and such to the containers we just created above. This is done in the same **~.html** file.	

    index.html
```html
<!-- your code here -->

<script>
	var someNameHere = require('electron-navigation');
	var anotherName = new someNameHere();
</script>

</body>
```

> This should be all you need to get the basic functionality working. Confused? Check out the [demos](https://github.com/simply-coded/electron-navigation/tree/master/test) on github, also located in your project's node-modules folder.

### Options
---
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
### Methods
---
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
> These can also be found in your app's node-modules directory `.\node-modules\electron-navigation\themes\` .

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
---
* 1.0.3
	* `CHANGE` - updated `README.md` with a tutorial on how to use the module.
* 1.0.2
	* `FIX` - *npm test* command for demo.
* 1.0.1
	* `CHANGE` - file names and folder structure.
* 1.0.0
	* `ADD` - initial release.

### Meta
---

Jeremy England - [simplycoded.help@gmail.com](mailto:simplycoded.help@gmail.com)

Distributed under the MIT license. See [`LICENSE`](https://spdx.org/licenses/MIT.html) for more information.
