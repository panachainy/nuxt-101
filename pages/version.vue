<template>
  <div>
    <p>{{ $appConfig.exampleConfig }}</p>
    <div>
      {{ $appConfig.version }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'dashboard',
})
</script>
