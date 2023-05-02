<template>
<div class="hello">
    <h1>{{ msg }}</h1>
	<h2>Thank you for your interest. Please use the following contact details to get in touch:</h2>
	<ul>
    <h2>Datu, Sean Warner Dean</h2>
		<li>Phone: 555-1234</li>
		<li>Email: info@example.com</li>
	</ul>
  <ul>
    <h2>Vitug, Renz Andrew</h2>
		<li>Phone: 555-1234</li>
		<li>Email: info@example.com</li>
	</ul>
  <ul>
    <h2>Lee, Miguel</h2>
		<li>Phone: 555-1234</li>
		<li>Email: info@example.com</li>
	</ul>
  <ul>
    <h2>Villanueva, Patrick</h2>
		<li>Phone: 555-1234</li>
		<li>Email: info@example.com</li>
	</ul>
  </div>
</template>

<script>
export default {
  name: 'contacts',
  data () {
    return {
      msg: 'Contact Us'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding-top: 5%;
}

h2{
  padding-top: 1%;
}
</style>