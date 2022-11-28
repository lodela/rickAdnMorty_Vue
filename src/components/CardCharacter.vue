<template lang="">
    <div class="character">
        <img :src="character.image" :alt="character.name"/>
        <div class="character__info">
            {{character.name}}
        </div>
        <div class="status">
            <span :class="
                character.status == 'Alive' ? 'alive' :
                character.status == 'Dead' ? 'dead' : 'default'" >
            </span>
            <span>
                {{character.status}} - {{character.species}}
            </span>
        </div>
        <div class="origin">
            Origin:
            <span>{{character.origin.name}}</span>
        </div>
        <div class="location">
            Location:
            <span>{{character.location.name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardCharacter',
    props:['character']
}
</script>
<style lang="scss">
    .character {
        background-color: var(--background-card);
        border-radius: 20px;
        box-shadow: 0 0 10px 1px var(--background-body);
        overflow: hidden;
        cursor: pointer;
        transition: transform 200ms ease-in-out;
        height: 100%;
        &:hover{
            transform: scale(1.05);
            h3{
                color: var(--text-orange);
            }
        }
        span{
            color: var(--text-gray);
        }
        span{
            margin-bottom: 10px;
        }
        &__info{
            padding: 15px;
            .status{
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                span{
                    color: var(--text-gray);
                    &:first-child{
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                }
                .alive{
                    background-color: greenyellow;
                }
                .dead{
                    background-color: red;
                }
                :default{
                    background-color: white;
                }
            }
            .origin{
                margin-bottom: 10px;
            }

        }
    }


</style>