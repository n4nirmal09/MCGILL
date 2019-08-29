<template>
    <header id="main-header" class="toolbar-header toolbar-header--mobile">
        <div class="container-fluid toolbar-header__container align-items-end py-2">
            <div class="toolbar-header__col toolbar-header__col-left">
                <div class="main-logo main-logo--mobile">
                    <a href="" class="main-logo__link">
                        <img class="main-logo__image" :src="require('@/assets/logo.png')" alt="">
                    </a>
                </div>
            </div>
            <div class="toolbar-header__col toolbar-header__col-right">
                <div class="header-cta__group">
                    <a href="mailTo:info@mcgillpartners.com" class="header-cta__link" target="_blank">
                        <icon-mail></icon-mail>
                    </a>
                    <a href="tel:+44(0)2039851800" class="header-cta__link" target="_blank">
                        <icon-phone></icon-phone>
                    </a>
                    <a href="javascript:void(0)" class="header-cta__link" @click="dropDown = !dropDown">
                        <span class="burger-menu">
                            <span class="burger-menu__rect"></span>
                            <span class="burger-menu__rect"></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <transition v-on:before-enter="beforeDropDownEnter" v-on:enter="dropDownEnter" v-on:leave="dropDownLeave" v-bind:css="false">
            <div class="toolbar-header__dropdown" v-if="dropDown">
                <div class="container-fluid">
                    <nav class="main-nav-mobile toolbar-header__dropdown-nav" id="main-nav">
                        <ul class="main-nav-mobile__list">
                            <li class="main-nav-mobile__item">
                                <a href="" class="main-nav-mobile__link text-light" @click="goTo('#what-we-do', $event)">What we do</a>
                            </li>
                            <li class="main-nav-mobile__item">
                                <a href="" class="main-nav-mobile__link text-light" @click="goTo('#who-we-are', $event)">Who we are</a>
                            </li>
                            <li class="main-nav-mobile__item">
                                <a href="" class="main-nav-mobile__link text-light" @click="goTo('#join-us', $event)">Join us</a>
                            </li>
                        </ul>
                    </nav>
                    <footer class="toolbar-header__dropdown-footer">
                        <div class="toolbar-header__dropdown-footer-col">
                            <a href="mailTo:info@mcgillpartners.com" class="d-block text-light">INFO@MCGILLPARTNERS.COM</a>
                            <a href="tel:+44(0)2039851800" class="d-block text-light">+44 (0)20 3985 1800</a>
                        </div>
                        <div class="toolbar-header__dropdown-footer-col">
                            <ul class="social-list">
                                <li class="social-list__item">
                                    <a href="" class="social-list__link ">
                                        <icon-twitter></icon-twitter>
                                    </a>
                                </li>
                                <li class="social-list__item">
                                    <a href="" class="social-list__link">
                                        <icon-linkedin></icon-linkedin>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </transition>
    </header>
</template>
<script>
export default {
    data() {
        return {
            dropDown: false
        }
    },

    methods: {
      goTo(targetEle, event) {
        this.dropDown = false
        this.scrollToTop(targetEle, event, this.$el.offsetHeight)
      },

      beforeDropDownEnter(el) {
        TweenLite.set(el, {autoAlpha: 0, scaleY:0, transformOrigin: "50% 0%"})
        TweenLite.set([el.querySelectorAll('.main-nav-mobile__item'), el.querySelector('.toolbar-header__dropdown-footer')], 
          { autoAlpha: 0, y: -50})
      },

      dropDownEnter(el, done) {
        const tl = new TimelineMax({
          onComplete() {
            done()
          }
        })

        tl.to(el, 0.5, {
          autoAlpha: 1,
          scaleY: 1,
          ease: Power2.easeOut
        })
        .staggerTo([...el.querySelectorAll('.main-nav-mobile__item'), el.querySelector('.toolbar-header__dropdown-footer')], 0.5, {
          autoAlpha: 1,
          y: 0,
          ease: Power2.easeOut
        },0.05, 0.3)
      },

      dropDownLeave(el, done) {
        const tl = new TimelineMax({
          onComplete() {
            done()
          }
        })

        tl.staggerTo([...el.querySelectorAll('.main-nav-mobile__item'), el.querySelector('.toolbar-header__dropdown-footer')], 0.5, {
          autoAlpha: 0,
          y: -50,
          ease: Power2.easeIn
        }, 0.05)
        .to(el, 0.5, {
          autoAlpha: 0,
          scaleY: 0,
          ease: Power2.easeIn
        }, 0.3)
      }
    }
}
</script>