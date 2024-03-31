<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { PUBLIC_DOMAIN } from '@/constants'
    import { Heading3, Paragraph } from '@theinsideline/common'
    import { Pagination } from 'vue3-carousel'

    const videoRef = ref<HTMLVideoElement>()

    onMounted(() => {
        if (!videoRef.value) return

        videoRef.value.setAttribute('muted', true as unknown as string)
    })

    const scroll = () => {
        const communityElement = document.getElementById('community')
        if (!communityElement) return

        const heroElement = document.getElementById('hero')
        if (!heroElement) return

        communityElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
</script>

<template>
    <div class="the-hero" id="hero">
        <video
            ref="videoRef"
            playsinline
            muted
            autoplay
            loop
            class="the-hero__background-image"
            :src="`${PUBLIC_DOMAIN}/videos/Hero.mp4`"
        />

        <div class="the-hero__title paragraph">
            <Heading3 text="We Are Mountain Bikers" />
            <Paragraph
                text="Drooling over new technology, daydreaming about our next ride and wrenching on bikes. We only sell what we ride, and for
                that reason you can be sure when shopping at The Inside Line that you are getting top-quality mountain bike products tested
                by everyday mountain bikers"
            />
        </div>

        <div class="the-hero__learn-more paragraph" @click="scroll">
            <span>Learn More <i>↓</i></span>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .the-hero {
        width: 100vw;
        position: relative;
        left: calc(-50vw + 50%);
        max-height: 768px;

        &__background-image {
            width: 100vw;
            max-height: 768px;
            filter: brightness(50%);
            z-index: 999;
            object-fit: cover;
        }

        &__title {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            cursor: default;

            ::v-deep {
                .heading_3 {
                    h3 {
                        margin-bottom: 0;
                        color: white;
                    }
                }

                .paragraph {
                    color: white;
                    text-align: center;
                }
            }
        }

        &__learn-more {
            position: absolute;
            bottom: -2%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            cursor: pointer;


            span {
                color: white;
                cursor: pointer;
                display: block;
                transition: all 0.3s ease-in;

                i {
                    animation: MoveUpDown 1s linear infinite;
                    position: relative;
                    left: 0;
                    bottom: 0;
                    margin-left: 5px;
                }

                @keyframes MoveUpDown {
                    0%,
                    100% {
                        bottom: 0;
                    }
                    50% {
                        bottom: 3px;
                    }
                }
            }
        }
    }

    @include mobile {
        .the-hero {
            min-height: 520px;

            &__background-image {
                min-height: 520px;
            }

            &__title {
                width: 90%;
            }
        }
    }

    @include tablet {
        .the-hero {
            min-height: 620px;

            &__background-image {
                min-height: 620px;
            }

            &__title {
                width: 80%;
            }
        }
    }

    @include laptop {
        .the-hero {
            min-height: 620px;

            &__background-image {
                min-height: 620px;
            }

            &__title {
                width: 70%;
            }
        }
    }
</style>
