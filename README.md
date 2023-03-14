# Rock Paper Scissors

The website Rock Paper Scissors, is a simple page for users to try their hand at a game of Rock Paper Scissors against a CPU opponent. The first player to get to 5 points wins!


![Rock Paper Scissors shown on a range of devices](images/readme-images/amiresponsivep2.png)

[View Rock Paper Scissors on Github Pages](https://davetrev.github.io/Rock-Paper-Scissors-v2)

## CONTENTS

* [User Experience](#User-Experience)
  * [User Stories](#User-Stories)

* [Design](#Design)
  * [Colour Scheme](#Colour-Scheme)
  * [Typography](#Typography)
  * [Imagery](#Imagery)
  * [Wireframes](#Wireframes)
  * [Features](#Features)
    * [The Home Page](#The-Home-Page)
    * [The Game Page](#The-Game-Page)
    * [The High Scores Page](#The-High-Scores-Page)
    * [The 404 Error Page](#The-404-Error-Page)
    * [Future Implementations](#Future-Implementations)
  * [Accessibility](#Accessibility)

* [Technologies Used](#Technologies-Used)
  * [Languages Used](#Languages-Used)
  * [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used)

* [Deployment & Local Development](#Deployment-&-Local-Development)
  * [Deployment](#Deployment)
  * [Local Development](#Local-Development)
    * [How to Fork](#How-to-Fork)
    * [How to Clone](#How-to-Clone)

* [Testing](#Testing)
  * [Solved Bugs](#Solved-Bugs)
  * [Known Bugs](#Known-Bugs)
  
* [Credits](#Credits)
  * [Code Used](#Code-Used)
  * [Content](#Content)
  * [Media](#Media)
  * [Acknowledgments](#Acknowledgments)

- - -

## User Experience (UX)

### User Stories

#### First Time Visitor Goals

* I want to play a quick, simple game vs a computer opponent. I want to be able to play on any device, when I want to 
* I want the site to be responsive on any device I use
* I want the site to have a simple design that is easy to navigate.
- - -

## Design

### Colour Scheme
The pages for the are layed out in a simple format, i wanted keep the design to a monochrome fashion with splashes of colour coming from details, such as the scoreboard, buttons and the cartoon figures used for the user selection of Rock, Paper or Scissors.

To breakup the look of the site I used a linear gradient for the background, to provide a more interesting look, while keeping to the plan of a monochrome look by and large.

* I have used (203deg, rgba(8, 9, 8, 1) 0%, rgba(69, 65, 66, 1) 100%) to create a linear gradient.
* I have used `#d34036` as the text colour for button text to make sure remains vibrant and easy to see for users.
* I have used white colour text for the main body text to ensure easy to read text for all users .
* I have used `#ffffff` for the background of the modal rules popup, to create a stark difference between the main page and the popup.
* I have used both black and rgb(12, 12, 12) for the text box in the modal popup box.

### Typography

I have used Google fonts to import the font for the site.
Google Fonts was used to import the chosen fonts for use in the site.

* Through out the site I have used the Google Font [Tilt Neon](https://fonts.google.com/specimen/Tilt+Neon). 
* As it is a simple site, I decided to keep the font style the same across the site.
* I have chosen the font type for a friendly playful look

![Tilt Neon Font Example](images/readme-images/tilt-neon-font.png)


### Features

The website is comprised of a home page, a games page, a 404 error page.

All Pages on the website are responsive and have:

* A favicon that is used for the browser tab.

  ![favicon](images/Favicon/favicon.ico)

* The title of the site at the top of every page. This title also acts as a link back to the home page.
  ![Rock Paper Scissors Title](images/readme-images/title-page.png)


#### The Home Page

The Home page features a name entry feel, to allow the player to put their name on the scoreboard.


![Home page image](images/readme-images/user-name-entry.png)

If the user neglects to enter a username, an alert box will show to alert the user to enter their name
![Alert box image](images/readme-images/oops-enter-name.png)

The game section remains hidden, showing when the user enters a name to begin the game.


#### The Game Page

The game page displays a header and a game area. The title of the page links to the index page to reload / restart the game. The score board and character icons are displayed, alongside a text area to display user and cpu choices. A score reset button is featured below this area and a "rules button" which calls a popup box with text featuring the rules of Rock Paper Scissors

![Game Page](images/readme-images/game-screen.png)
![Modal Popup](images/readme-images/modal-popup.png)

#####  Win, lose, draw messages
To give more user feedback, text to show how the game is progressing and a alert box shows when the win/lose score of five is reached.
![ x beats y you win](images/readme-images/youwin.png)
![ x loses y you lose](images/readme-images/losingtocpu.png)
![Its a Tie](images/readme-images/itsatie.png)
![Win Alert box](images/readme-images/swalfire-youwin.png)
![You lose Alert box](images/readme-images/swalfire-you-lost.png)


#### The 404 Error Page

I created a very simple 404 page, if the user has navigated to the wrong page for some reason they can click on the header text to return to reload the page to user name entry

![Error page image](images/readme-images/404p2.png)


#### Future Implementations

In future implementations I would like to:

1. Give an option to either play against the cpu or a friend.
2. Keeping a log of scores of unbroken win streaks of human players.

## Technologies Used

### Languages Used

HTML, CSS, Javascript

### Frameworks, Libraries & Programs Used


* [Github](https://github.com/) - To save and store the files for the website.

* [GitPod](https://gitpod.io/) - IDE used to create the site.

* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

* [Sweet Alert 2](https://sweetalert2.github.io/) - A responsive, customizable replacement for alert popup boxes

* [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.

* [iloveimg](https://www.iloveimg.com/crop-image) To resize and crop images

* [Favicon.io](https://favicon.io/) To create favicon for browser tab

* [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

- - -

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Rock-Paper-Scissors](https://davetrev.github.io/Rock-Paper-Scissors-v2/).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [DaveTrev/Rock-Paper-Scissors-v2](https://github.com/DaveTrev/Rock-Paper-Scissors-v2).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [DaveTrev/Rock-Paper-Scissors-v2](https://github.com/DaveTrev/Rock-Paper-Scissors-v2)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [DaveTrev/Rock-Paper-Scissors-v2](https://github.com/DaveTrev/Rock-Paper-Scissors-v2)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing
The Site has been tested on Chrome and Firefox, using Devtools in Chrome and Chrome on Android 


# **Testing**
The site has been tested on Chrome, Edge and Firefox, there was an issue with Firefox that is now resolved, more information regarding this in the Bugs section below. The site has also been tested on iPhone and Android devices with a minor bug concerning iPhone, this is also further explained in the Bugs section below. 

### Responsiveness
![AmIResponsive](images/readme-images/amiresponsivep2.png)

Keeping the design of the central to the page, allowed the page to remain mobile responsive aswell as displaying well on desktop and tablet. Although on the Galaxy Fold in Chrome DevTools the site displays in line.

![mobile-display](images/readme-images/mobile-display.png)

### Lighthouse
The site has been tested with Lighthouse for both desktop and mobile versions, scoring between 99-100. 
## Desktop
![Lighthouse for desktop](images/readme-images/light-house-desktop.png)
## Mobile
![Lighthouse for mobile](images/readme-images/light-house-mobile.png)

### **Validators**
All HTML files were run through (https://validator.w3.org/#validate_by_input)
CSS file was run through (https://jigsaw.w3.org/css-validator/#validate_by_input) to ensure all code meet the correct standard. No errors or warnings were found for HTML or CSS. 
![Html Validation](images/readme-images/htmlp2.png)
![Css Validation](images/readme-images/cssp2.png)
The JavaScript file, was run through (https://jshint.com/) and showed no errors. Swal, used for the Sweet Alert 2, is stated as an undefined variable since it is an external file, declared in a third party library. 
![javascript Validation](images/readme-images/jshintvalid.png)

## Validator Testing  
  
 - HTML 
   - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?useragent=Validator.nu%2FLV+http%3A%2F%2Fvalidator.w3.org%2Fservices&acceptlanguage=&doc=https%3A%2F%2Fdavetrev.github.io%2Fbark-and-stride%2F) 
 - CSS 
   - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdavetrev.github.io%2Fbark-and-stride%2Fcontact.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)



using youtube - https://www.youtube.com/watch?v=jaVNP3nIAv0 as inspiration
modal button build - https://www.youtube.com/watch?v=MBaw_6cPmAw&t=27s

rock paper scissor images taken from 

rock - https://www.clipartmax.com/download/m2H7Z5K9A0Z5K9A0_cartoon-rock-paper-scissors/
scissors - https://www.clipartmax.com/download/m2i8d3Z5A0N4H7b1_scissors-cartoon-cartoon-rock-paper-scissors/
paper - https://www.clipartmax.com/download/m2i8d3Z5i8i8Z5K9_cartoon-emoji-paper-rock-scissors-icon-rock-paper-scissors-emoji/

resized clip art using https://pixlr.com/x/#editor

edited and reduced clip art style to 100px x 100 px for better positioning on mobile

emojis taken from 
- https://emojipedia.org/party-popper/
- https://emojipedia.org/necktie/
- https://emojipedia.org/pile-of-poo/

Offical rules of RPS taken from 
- https://wrpsa.com/the-official-rules-of-rock-paper-scissors/

Get element bu tagName
- http://www.jspatterns.com/the-ridiculous-case-of-adding-a-script-element/

using https://www.iloveimg.com/crop-image for cropping images for readme

https://stackoverflow.com/questions/37412166/how-to-make-show-hide-div-with-a-toggle-using-css
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/position
https://www.w3docs.com/snippets/html/how-to-create-an-anchor-link-to-jump-to-a-specific-part-of-a-page.html
https://stackoverflow.com/questions/6722467/how-do-i-remove-the-default-link-color-of-the-html-hyperlink-a-tag
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
https://www.youtube.com/watch?v=w9GNyw8AvlM
https://www.geeksforgeeks.org/form-validation-using-html-javascript/?ref=lbp
https://www.w3schools.com/js/js_if_else.asp
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
https://forum.rescript-lang.org/t/coding-habit-of-unused-variables/3371/5
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://www.freecodecamp.org/news/javascript-addeventlistener-example-code/
https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/

https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

https://favicon.io/
https://www.w3schools.com/html/html_favicon.asp