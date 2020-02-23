<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{
            name: 'aboutakash',
          }">Home screen</router-link>
      </li>
      <li>
        <router-link :to="{
            name: 'anton',
          }">Antons Screen</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
}
li{
  list-style: none;
  }
</style>