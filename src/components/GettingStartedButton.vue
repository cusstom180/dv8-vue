<template>
    <router-link :to="{ name: 'GettingStarted' }"
        @mouseover="state.hovered = true"
        @mouseleave="state.hovered = false"
        :class="{'hover': state.hovered}"
        class="btn btn-outline-secondary btn-lg" href="#" role="button"
        >{{ button.content }}</router-link>
</template>

<script>
import { reactive } from 'vue'

export default {
    name: "GettingStartedButton",
    props: {
        button: {
            required: true,
            type: Object
        }
    },
    setup() {
        const state = reactive({
            hovered: false
        });
        return {
            state
        }
    }
}
</script>

<style lang="scss" scoped>
    .hover {
        box-shadow: 0 0 1rem chartreuse;
    }

    .btn {
        border-color: black;
        color: black;
        cursor: pointer;
        transition: all 0.25s ease;

    }

</style>