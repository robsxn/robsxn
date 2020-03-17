<template>
    <nav class="main-nav">
      <meta charset="utf-8">
      <ul>
      <li><router-link :to="{ name: 'Home'}">Tagesmenü</router-link></li>
      <li><router-link :to="{ name: 'Wochenplan'}">Wochenübersicht</router-link></li>
      <li><router-link :to="{ name: 'Lieferanten'}">Lieferanten</router-link></li>
      <li><router-link :to="{ name: 'Kontakt'}">Kontakt</router-link></li>
    </ul>
    </nav>
</template>

<script>
export default {
    name:'Navbar',
    data(){
            return{
              
            }

    }
}
</script>

<style>
a 	{ 
	color: #4e7a92; 
	outline: none; 
	text-decoration: none; 
}
a:hover, 			
a:focus { 
	color: white; 
	text-decoration: none; 
	background-color: #4e7a92;	
}

a.more	{ 
	float: right; 
	font-weight: bold; 
}

a.more:after{
	content:" \2192 ";
	font-size:1.2em;
	font-weight:bold;
}
html { 
  box-sizing: border-box; 
  background: white;	
} 
body {
	max-width: 75em;
	margin:0 auto;
	padding: 0;
	background: #d5d5d5;;	
	color: #333; 
	font: normal 1em Arial, sans-serif;  /* Mindestschriftgröße wird dem Browser, bzw. dem Nutzer überlassen! */
                    
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
header {
	position: relative;		
	height: 210px;
	margin: 2em  0  0 3em;
	background: #0002FF ;
	background-size: contain; 			 
	padding: 0 0 0.5em;
}

header a h1,
header a p {			
	color: white; 
	border-left: 0;
	padding: 0;
	display: table;	
	text-align: center;
	}
.ribbon {
	display: inline-block;
	position: relative;	
	margin: 2em 0 2em -1.5em;
	padding: 0.5em 1em;
	background: #4e7a92;
	box-shadow: 0px 1px 3px rgba(0,0,0,.8);
}
.ribbon::before{
	display: block;
	width: -0.5em;
	height: 0;
	position: absolute;
	bottom: -1.5em;
	left: 0em;
	content: "";
	border-bottom: 1.5em solid transparent;
	border-right: 1.5em solid rgb(0, 80, 116);
}
/** CONTENT **/

main {
	margin: 0 0 1em;
	padding: 1em;
	background: #fff;
}

h1,
h2 {
	font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; 
	padding-left: 1em; 
	color: #666; 
	text-transform: uppercase;
	border-left:5px solid #4e68AD;
}
h1{
text-align: center;

}
	
h2 span {
	font-size: 0.70em; 
	color: #818181; 
	text-transform: none;
}

h3	{ 
	font-size: 1.25em; 
	font-weight: normal; 
	padding: 0px; 
	margin: 0px; 
	color: #4E68AD; 
}		

p {
	text-align: center; 
	line-height: 1.6em; 
	padding: 20px 0px
}

a 	{ 
	color: #4e7a92; 
	outline: none; 
	text-decoration: none; 
}
a:hover, 			
a:focus { 
	color: white; 
	text-decoration: none; 
	background-color: #4e7a92;	
}

a.more	{ 
	float: right; 
	font-weight: bold; 
}

a.more:after{
	content:" \2192 ";
	font-size:1.2em;
	font-weight:bold;
}

ul.square {
	list-style-type:square;
    color: #999999;
    margin: 0 0 0.5em 0.5em;
	font-size: 0.8em;
	font-weight: bold;
}

ul.square li{
	padding:10px;	
}


dl.grid { 
  display: grid; 
  grid-template-columns: 1fr 100%; 
}
dd { 
  margin: 0; 
  padding-left: 1em; 
}

dd span:first-child {
  display: inline-block;
  width: 4em;
}

dl.grid dd {
  margin-bottom: 1em;
}

a[href^="tel"] { white-space: nowrap; }

ul#footer-nav.main-nav li { 
	list-style-type: none;  
	displaY: inline;
	padding: 0 0.5em; 
	border-right: 1px  solid #ACACAC; 
}

footer {
	display: grid;
    grid-template-columns: repeat(2, 1fr);	
	padding: 1em;
}

ul#nav.main-nav  li:last-child { 
	border: none; 
}	

ul#nav.main-nav img {
	width: 1.5em;
}

ul#nav.main-nav a:hover,
ul#nav.main-nav a:focus, 
ul#nav.main-nav a:active {
	background: white;
}

footer p {
	text-align: right;
}

/*nav#navigation{
}*/
	
nav.main-nav ul {
    list-style-type: none;
    width: 100%;
	margin-bottom:30px;
}

nav.main-nav ul li.first-child	{ border-top: 1px #DBDBDB solid; }


nav.main-nav ul li a {
	display: block;
    border-bottom: 1px solid #4e7a92;
    font-size: 1.1em;
    line-height: 1.5em;
    padding: 1em 35px;
    text-decoration: none;
	width: 13em; 
	
}

nav.main-nav ul li a:before{
	content:" ";
	display:inline-block;
	width:1em;
	height:1em;
	border-left:5px solid #4e7a92;;
}	
		
nav.main-nav a[aria-current=page]{
 background: #aaa;
}


a {
	text-decoration: none;
	display: inline-block;
	padding: 8px 16px;
  }
  
  
  .previous {
	background-color: #f1f1f1;
	color: black;
  }
  
  .next {
	background-color: #f1f1f1;
	color: black;
  }
  
  .round {
	border-radius: 50%;
  }
 
</style>