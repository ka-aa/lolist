<script>
  import {onMount} from 'svelte';
  export let error;

  onMount(() => console.error(error));
</script>

<div class="error">
  <div class="heading">
    ⚠️
    {#if error.response}
      {error.response.status}: {error.response.statusText}
    {:else}
      Error
    {/if}
  </div>
    {#if error.message}
    <p class="info">
      {error.name ? error.name + ': ' : ''}{error.message}
    </p>

    {/if}
</div>

<style lang="scss">
  @import 'src/styles/_variables.scss';

  .error {
    color: $error-color;
    background: $error-bg;
    width: 100%;
    padding: 20px 30px;
    border-radius: 10px;
    .heading{
      font-size: 18px;
      font-weight: bold;
    }
    .info {
      margin-top: 10px;
    }
  }
</style>
