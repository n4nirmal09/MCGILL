<template>
    <div class="business-card-group" v-reveal="{
        animation: 'from-bottom-elems-stagger'
    }">
        <business-card>
            <template slot="icon">
                <icon-property />
            </template>
            <template slot="title">
                <h3>Property & Casualty</h3>
            </template>
        </business-card>
        <business-card>
            <template slot="icon">
                <icon-energy />
            </template>
            <template slot="title">
                <h3>Energy & Power</h3>
            </template>
        </business-card>
        <business-card>
            <template slot="icon">
                <icon-marine />
            </template>
            <template slot="title">
                <h3>Marine & Cargo</h3>
            </template>
        </business-card>
        <business-card>
            <template slot="icon">
                <icon-aviation />
            </template>
            <template slot="title">
                <h3>Aviation & Aerospace</h3>
            </template>
        </business-card>
        <business-card>
            <template slot="icon">
                <icon-solution />
            </template>
            <template slot="title">
                <h3>Structured Solutions</h3>
            </template>
        </business-card>
        <business-card>
            <template slot="icon">
                <icon-financial />
            </template>
            <template slot="title">
                <h3>Financial and Special Risks</h3>
            </template>
        </business-card>
        <business-card>
            <template slot="icon">
                <icon-reinsurance />
            </template>
            <template slot="title">
                <h3>Reinsurance</h3>
            </template>
        </business-card>
    </div>
</template>