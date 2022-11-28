<template>
  <h1>Rick And Morty</h1>
  <FilterByName />
  <FilterByStatus />
  <ListCharacters />
</template>

<script>
import ListCharacters from '@/components/ListCharacters';
import FilterByStatus from '@/components/FilterByStatus.vue';
import FilterByName from '@/components/FilterByName';
export default {
  name: 'Norberto Lodela',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName

}
}
</script>

<style lang="scss">
:root{
  --background-body: #24282f;
  --background-card: #3c3e44;
  --text-white: white;
  --text-gray: gray;
  --text-orange: orange;
}
*{
  box-sizing: border-box;;
  margin: 0;
  padding: 0;
}
body{
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1{
  margin:40px 6px;
  text-align: center;
}
.container{
  width: 980px;
  max-width: 90%;
  margin: 10px auto;
}
img{
  width: 100%;
}
</style>
