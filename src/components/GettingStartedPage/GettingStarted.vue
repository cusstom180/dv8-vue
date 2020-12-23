<template>
    <div class="container-fluid">
        <v-GettingStartedContent />
    </div> 
</template>

<script>
import GettingStartedContent from '@/components/GettingStartedPage/GettingStartedContent'

export default {
    name: 'GettingStarted',
    components: {
        'v-GettingStartedContent': GettingStartedContent
    }
}
</script>

<style lang="scss" scoped>

    .container-fluid {
        padding: 0px;
    }
</style>