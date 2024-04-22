<script setup lang="ts">
    import { defineProps } from 'vue'
    import { LinkButton, Heading3, Paragraph } from '@theinsideline/common'

    defineProps({
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        buttonText: {
            type: String,
            default: '',
        },
        buttonLink: {
            type: String,
            default: '',
        },
        image: {
            type: String,
            default: '',
        },
    })
</script>

<template>
    <a class="community-card" :href="buttonLink" :style="{ 'background-image': `url(${image})` }">
        <Heading3 class="community-card__title" :text="title" />
        <Paragraph class="community-card__description" :text="description" />

        <div class="community-card__button">
            <LinkButton class="link__button" :text="buttonText" :link="buttonLink" />
        </div>
    </a>
</template>

<style lang="scss" scoped>
    .community-card {
        display: flex;
        flex-direction: column;
        padding: 30px;
        height: 470px;
        justify-content: flex-end;
        background-position: top;
        background-size: 100%;
        background-repeat: no-repeat;
        cursor: pointer;
        text-decoration: none;
        color: black;

        &__button {
            display: flex;
            justify-content: center;

            .link__button {
                transition: all 0.3s ease-in-out;

                &:hover {
                    background: #747474 !important;
                    color: white !important;
                    transition: all 0.3s ease-in-out;
                }
            }
        }
    }

    @include mobile {
        .community-card {
            padding: 20px;
            height: 350px;
        }
    }

    @include tablet {
        .community-card {
            height: 364px;
            width: 100%;
            padding: 20px;
        }
    }

    @include laptop {
        .community-card {
            height: 350px;
            padding: 20px;
            max-width: calc(((100vw - 2 * var(--component-padding)) / 2) - 20px);
            margin-bottom: 20px;
        }
    }

    @include desktop {
        .community-card {
            height: 350px;
            padding: 20px;
            max-width: calc(((100vw - 2 * var(--component-padding)) / 2) - 20px);
            margin-bottom: 20px;
        }
    }

    @include tv {
        .community-card {
            height: 470px;
            padding: 40px;
            width: 100%;
            max-width: 705px;
            margin-bottom: 30px;
        }
    }
</style>
