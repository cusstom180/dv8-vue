<template>
    <div class="container-fluid">
        <v-OpeningImage />
        <!-- <v-GettingStartedContent /> -->
        <v-GettingStartedPanel />
    </div> 
</template>

<script>
// import GettingStartedContent from '@/components/GettingStartedPage/GettingStartedContent'
import GetStartOpeningImage from '@/components/GettingStartedPage/GetStartOpeningImage'
import GettingStartedPanel from '@/components/GettingStartedPage/GettingStartedPanel'

export default {
    name: 'GettingStarted',
    components: {
        // 'v-GettingStartedContent': GettingStartedContent,
        'v-OpeningImage': GetStartOpeningImage,
        'v-GettingStartedPanel': GettingStartedPanel,
    }
}
</script>

<style lang="scss" scoped>

    .container-fluid {
        padding: 0px;
    }
</style>