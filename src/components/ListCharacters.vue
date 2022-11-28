<template lang="">
    <section>
        <div class="characters">
            <div class="character__item" v-for="character in characters" :key="character.id">
                <CardCharacter :character='character'/>
            </div>
        </div>
    </section>
</template>

<script>

import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CardCharacter from '@/components/CardCharacter';

export default {
    components: {
        CardCharacter
    },
    setup() {
        const store = useStore();
        const characters = computed(() => {
            return store.state.charactersFilter
        })
        onMounted(() => {
            store.dispatch('getCharacters');
        });

        return {
            characters
        }

    }
}

</script>

<style lang="scss">
    .characters{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin: 10px 0;
    }
</style>