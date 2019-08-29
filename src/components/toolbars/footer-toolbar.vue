<template>
    <footer id="main-footer" class="toolbar-footer bg-primary">
        <div class="container toolbar-footer__container  py-4 py-md-5">
            <div class="row justify-content-between pb-3 align-items-center">
                <div class="col-auto">
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
                <div class="col-auto">
                    <div class="main-logo main-logo--mobile">
                        <a href="/" class="main-logo__link">
                            <img class="main-logo__image" :src="require('@/assets/logo-white.png')" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between pb-4 align-items-center">
                <div class="col-lg-8">
                    <article class="font-secondary font-style-italic text-light">
                        <small>McGill, McGill and Partners are trading names of McGill and Partners (Risk Solutions) Ltd which is an appointed representative of Ambant Limited, a company authorised and regulated by the Financial Conduct Authority under firm reference number 486865 to carry on insurance distribution activities.</small>
                    </article>
                </div>
            </div>
        </div>
    </footer>
</template>