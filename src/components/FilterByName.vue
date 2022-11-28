<template lang="">
    <div class="filter">
        <input type="text"
        placeholder="Filter by name:"
        :value="text"
        @input="$emit('update:text', $event.target.value)"
        @keyup.enter="filterByName($event.target.value)">
        <button @click="reset()">Reset</button>
    </div>
</template>
<script>
import { useStore } from 'vuex';
export default {
    name: 'FilterByName',
    props: {
        text: {
            type: String,
            default:''
        }
    },
    setup() {
        const store = useStore();
        const filterByName = ((name) => {
            name.trim() && store.dispatch('filterByName', name.trim().toLowerCase());
        });
        const reset = (() => {
            store.dispatch('getCharacters')
        })
        return {
            filterByName,
            reset
        }
    }
}
</script>
<style lang="">
    
</style>