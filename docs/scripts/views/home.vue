<template>
  <div :class="$tt('body1')">
    <header v-ripple.unbounded class="hero">
      <h1 :class="$tt('headline1')">BalmUI for Vue3</h1>
    </header>

    <div :class="[$tt('body2'), 'pure-docs']">
      <p :class="$tt('subtitle1')">{{ $t('home.slogan') }}</p>
      <p :class="$tt('subtitle2')">{{ $t('home.title') }}</p>
      <ui-button raised @click="$router.push({ name: 'guide.intro' })">
        {{ $t('home.get-started') }}
      </ui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  metaInfo() {
    return {
      subtitle: 'Home'
    };
  }
};
</script>
