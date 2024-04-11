<script setup lang="ts">
    import { Heading2 } from '@theinsideline/common'
    import CommunityCard from '@/components/the-serving-our-community/community-card.vue'
    import { PUBLIC_DOMAIN } from '@/constants'
</script>

<template>
    <div class="the-serving-our-community">
        <Heading2 id="community" class="the-serving-our-community__title" text="Serving Our Community" />

        <div class="the-serving-our-community__content">
            <div class="content__row">
                <CommunityCard
                    class="card"
                    title="Home"
                    description="Located in Calgary AB, we call the Rocky Mountains home"
                    button-text="Find us"
                    button-link="https://www.theinsideline.ca/service/location/"
                    :image="`${PUBLIC_DOMAIN}/images/Home.jpg`"
                />
                <CommunityCard
                    class="card"
                    title="Service"
                    description="We strive to make your MTB perform to its full potential so you can have a great ride"
                    button-text="Learn More"
                    button-link="https://www.theinsideline.ca/service/service/"
                    :image="`${PUBLIC_DOMAIN}/images/Service.jpg`"
                />
            </div>
            <div class="content__row">
                <CommunityCard
                    class="card"
                    title="Supporting Networks"
                    description="We are dedicated to giving back to our local networks, MMBTS and CAMBA"
                    button-text="MMTBS Membership"
                    button-link="https://www.mmbts.com/join-mmbts"
                    :image="`${PUBLIC_DOMAIN}/images/Network.jpg`"
                />
                <CommunityCard
                    title="Equality"
                    class="card"
                    description="We believe in equity in sport. Everyone deserves the opportunity to ride MTB’s!"
                    button-text="Learn More"
                    button-link="https://www.slaydies.com/"
                    :image="`${PUBLIC_DOMAIN}/images/Equality.jpg`"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .the-serving-our-community {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__content {
            display: flex;
            flex-direction: column;

            .content {
                &__row {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }
            }
        }
    }

    @include mobile {
        .the-serving-our-community {
            margin-top: 35px;
        }
    }

    @include tablet {
        .the-serving-our-community {
            margin-top: 45px;

            &__content {
                .content__row {
                    .card {
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }

    @include laptop {
        .the-serving-our-community {
            margin-top: 45px;

            &__content {
                .content__row {
                    flex-wrap: nowrap;
                    flex-shrink: inherit;

                    .card {
                        &:first-child {
                            margin-right: 10px !important;
                        }

                        &:last-child {
                            margin-left: 10px !important;
                        }
                    }
                }
            }
        }
    }

    @include desktop {
        .the-serving-our-community {
            margin-top: 45px;

            &__content {
                .content__row {
                    flex-wrap: nowrap;
                    flex-shrink: inherit;

                    .card {
                        &:first-child {
                            margin-right: 10px !important;
                        }

                        &:last-child {
                            margin-left: 10px !important;
                        }
                    }
                }
            }
        }
    }

    @include tv {
        .the-serving-our-community {
            margin-top: 65px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &__content {
                display: flex;
                flex-direction: column;

                .content__row {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    flex-wrap: nowrap;
                    flex-shrink: inherit;

                    .card {
                        &:first-child {
                            margin-right: 15px !important;
                        }

                        &:last-child {
                            margin-left: 15px !important;
                        }
                    }
                }
            }
        }
    }
</style>
