<template>
  <div class="hello">
 
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
   
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  	display: grid;	  
    grid-template-columns: repeat(2, 1fr);
	grid-gap: 1em;
  }

  nav {
    grid-column: 1 / 2;
  }
  
  #intro {
    grid-column: 2 / 3;
    grid-row:    1 / 2;					
  }

  article {
    grid-column: 2 / 3;
  }  
  
  .spalte img {
     width: 50%;
	 float: left;
	 margin-right: 0.5em;		
  }

</style>
