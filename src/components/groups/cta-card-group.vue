<template>
    <div class="cta-card-group" v-reveal="{
        animation: 'from-bottom-elems-stagger'
    }">
        <cta-card :mail="'info@mcgillpartners.com'" :phone="'+44 (0)20 3985 1800'" :appendClasses="'text-light'">
            <template slot="description">
                <p>
                    UK<br>
                    Suite 806, Gallery 8,<br>
                    Lloyd's Of London,<br>
                    1 Lime Street,<br>
                    London<br>
                    EC3M 7HA 
                </p>
                <p>
                    First Floor,<br>
                    100 Leadenhall Street,<br>
                    London<br>
                    EC3A 3BP
                </p>
                <p>
                    US<br>
                    McGill Global Risk Solutions LLC,<br>
                    230 Park Avenue,<br>
                    3rd Floor,<br>
                    New York, NY 10169
                </p>
            </template>
        </cta-card>
        <cta-card :mail="'talent@mcgillpartners.com'" :appendClasses="'text-light'">
            <template slot="title">Talent</template>
            <template slot="description">
                <p>Our mission is simple: to hire the most diverse, professional and creative minds, place them in an entrepreneurial environment and challenge them to create market defining specialist transactions.</p>
            </template>
        </cta-card>
        <cta-card :mail="'info@mcgillpartners.com'" :appendClasses="'text-light'">
            <template slot="title">Clients</template>
            <template slot="description">
                <p>Our transformative model is focused entirely on the needs of our clients. We will always fight against the idea that big is beautiful, and we bring this entrepreneurial spirit to serving your needs.</p>
            </template>
        </cta-card>
        <cta-card :mail="'info@mcgillpartners.com'" :appendClasses="'text-light'">
            <template slot="title">Carriers</template>
            <template slot="description">
                <p>We value the experience of our clients and insurance partners. Our open approach to broking is designed to create greater value and better, long-lasting relationships for everyone involved in the insurance chain.</p>
            </template>
        </cta-card>
    </div>
</template>