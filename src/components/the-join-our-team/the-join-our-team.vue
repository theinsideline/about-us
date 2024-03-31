<script setup lang="ts">
    import { ref } from 'vue'
    import { PUBLIC_DOMAIN } from '@/constants'
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide } from 'vue3-carousel'
    import JoinOurTeamCard from '@/components/the-join-our-team/join-our-team-card.vue'

    const cards = ref([
        {
            icon: `${PUBLIC_DOMAIN}/icons/Icons_Flame.svg`,
            title: 'Careers',
            subTitle: 'Passions for bikes? Want to work in the industry?',
            description: 'Hang out with us every day with a carrier at The Inside Line. Bring your passion to the workplace',
            buttonText: 'Careers',
            buttonLink: 'https://www.theinsideline.ca/service/careers/',
        },
        {
            icon: `${PUBLIC_DOMAIN}/icons/Icons_Flag.svg`,
            title: 'Ambassadors',
            subTitle: 'Grassroots racing?  Local hero? Social media influencer?',
            description:
                'Ride for us through our ambassador program. Get deals on bikes, components and apparel to keep your passion alive.',
            buttonText: 'Apply Now',
            buttonLink: '',
        },
        {
            icon: `${PUBLIC_DOMAIN}/icons/Icons_Community.svg`,
            title: 'Affiliates',
            subTitle: 'Producing content? Strong media presence?',
            description: 'Link to your favourite products in your videos, photos and written content and make commission',
            buttonText: 'Apply Now',
            buttonLink: '',
        },
    ])
</script>

<template>
    <div class="the-join-our-team">
        <div class="the-join-our-team__title heading_2">
            <h2>Join Our Team</h2>
        </div>

        <div class="the-join-our-team__content desktop">
            <JoinOurTeamCard
                v-for="(card, key) of cards"
                :key="key"
                class="card"
                :icon="card.icon"
                :title="card.title"
                :subTitle="card.subTitle"
                :description="card.description"
                :button-text="card.buttonText"
                :button-link="card.buttonLink"
            />
        </div>

        <Carousel
            wrap-around
            pause-autoplay-on-hover
            :autoplay="4000"
            :items-to-show="2"
            snap-align="center-even"
            class="the-join-our-team__content tablet"
        >
            <Slide
                v-for="(card, key) of cards"
                :key="key"
            >
                <JoinOurTeamCard
                    class="card"
                    :icon="card.icon"
                    :title="card.title"
                    :subTitle="card.subTitle"
                    :description="card.description"
                    :button-text="card.buttonText"
                    :button-link="card.buttonLink"
                />
            </Slide>
        </Carousel>

        <Carousel
            wrap-around
            pause-autoplay-on-hover
            :autoplay="4000"
            class="the-join-our-team__content mobile"
        >
            <Slide
                v-for="(card, key) of cards"
                :key="key"
                class="card"
            >
                <JoinOurTeamCard
                    :icon="card.icon"
                    :title="card.title"
                    :subTitle="card.subTitle"
                    :description="card.description"
                    :button-text="card.buttonText"
                    :button-link="card.buttonLink"
                />
            </Slide>
        </Carousel>

        <div class="the-join-our-team__swipe-to-see-more">
            <span>↔ Swipe to see more</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/scss/headings.scss';

    ::v-deep {
        .carousel__slide {
            padding: 0 !important;

            &::before {
                display: none;
            }
        }
    }

    .the-join-our-team {
        &__content {
            display: flex;
            flex-wrap: nowrap;
            width: 100%;
            overflow: scroll;
        }

        .mobile,
        .tablet {
            .card::before {
                display: none;
            }
        }

        &__swipe-to-see-more {
            width: 100%;
            display: flex;
            justify-content: center;
            cursor: default;
            margin-top: 15px;

            span {
                font-family: Inter;
                font-size: 12px;
                text-align: center;
            }
        }
    }

    @include mobile {
        .the-join-our-team {
            margin-top: 35px;

            .desktop,
            .tablet {
                display: none;
            }

            &__content {
                .card {
                    margin: 0;
                }
            }
        }
    }

    @include tablet {
        .the-join-our-team {
            margin-top: 45px;

            .desktop,
            .tablet {
                display: none;
            }

            &__content {
                .card {
                    margin: 0;
                }
            }
        }
    }

    @include laptop {
        .the-join-our-team {
            margin-top: 25px;

            .desktop,
            .mobile {
                display: none;
            }

            &__content {
                margin: 0;

                .card::before {
                    display: none;
                }
            }
        }
    }

    @include desktop {
        .the-join-our-team {
            margin-top: 25px;

            .desktop,
            .mobile {
                display: none;
            }

            &__content {
                margin: 0;

                .card::before {
                    display: none;
                }
            }
        }
    }

    @include tv {
        .the-join-our-team {
            margin-top: 35px;

            .mobile,
            .tablet {
                display: none;
            }

            &__content {
                margin: 0;
                justify-content: center;
                align-items: center;
                overflow: inherit;
                width: 100%;

                .card {
                    &:first-child {
                        margin-left: 0;
                        margin-right: 30px;
                    }

                    &:last-child {
                        margin-right: 0;
                        margin-left: 30px;
                    }
                }
            }

            &__swipe-to-see-more {
                display: none;
            }
        }
    }
</style>
