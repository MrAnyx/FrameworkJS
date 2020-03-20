<script>
  import Typewriter from "svelte-typewriter"
</script>

<main>
  <Typewriter interval={100}>
    <p id="homepage">HomePage</p>
  </Typewriter>
</main>

<style>
  #homepage{
    width: 100%;
    position: absolute;
    top: 55px;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    font-size: 55px;
  }
</style>