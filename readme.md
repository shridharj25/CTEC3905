# CTEC3905 Assignment
##P17178463
##Shridhar Jentilal

- To do this assignment, I made use of varies different links, these links were primarily from  https://www.w3schools.com. I also made use of the work from the labs, on my wesbite,

##Index.html(HomePage)
 This is the main Page of my website, the HomePage

 In my HomePage, I made use of the slideshow gallery to display the images of three movies, after 5 seconds.  https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp. This Link has the code that I have used to achieve this, but, I had to modify it in a way where the slideshow gallery changes the images automatically as suppose to when the user clicks on the image.

##movies.html(movies)

##TVNews.html(TVNews)

In this page, I made use of a table like format for the tv shows. In the tablet view, the grid comes together and goes down in a list presentation. I used the ..... To get the code for how the grid would be laid out.


##ContactUS.html(Contact Us)

Contains a user form, to allow people to submit a query. I used ... To achieve this.

##Issues
- initially I had trouble with removing the "onclick" from the html and use the js. But, even after 2 days of work, i was not succesfull. Instead, i changed the need of having a previuous and next button into the automatically change it. 

This is very basic boilerplate code for you to get started with.

## index.html

The `index.html` file includes a basic template with a link to the `css/styles.css` file and a script tag after the main content which links to the `js/scripts.js` file.

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>P-Number</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <h1>Hello World</h1>

  <script src="js/scripts.js"></script>
</body>
</html>
```

## css/styles.css

The `css/styles.css` file contains a basic starting template for a responsive page.

```
/* MOBILE AND GLOBAL STYLES */

/* applies to screens smaller than 500px (first breakpoint) */
/* and above unless overwritten below */

body {
  background: #fcc;
}



/* TABLET STYLES */

@media screen and (min-width: 500px) {

  /* applies to screens wider than 499px */

  body {
    background: #cfc;
  }
}



/* DESKTOP STYLES */

@media screen and (min-width: 1000px) {

  /* applies to screens wider than 999px */

  body {
    background: #ccf;
  }
}

```

## js/scripts.js

The `js/scripts.js` file contains a simple console.log statement to confirm that it is being executed.

```
console.log("hello");
```
