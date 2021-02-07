[![npm version](https://img.shields.io/npm/v/vue-screen/next)](https://www.npmjs.com/package/vue-screen)
[![Build Status](https://github.com/reegodev/vue-screen/workflows/Node.js%20CI/badge.svg)](https://github.com/reegodev/vue-screen/actions)
[![Build Status](https://img.shields.io/badge/vue-3.x.x-brightgreen.svg)](https://img.shields.io/badge/vue-3.x-brightgreen.svg)

<br>

> Warning: Version 2.0 supports only Vue 3 and is in early alpha version. There still might be API changes before final release.

<br>

# VueScreen@next
Reactive window size and media query states for VueJS. Supports your favourite UI framework grid breakpoints out of the box, and can be configured with any custom breakpoints.

# Features
✅ - Reactive and debounced window innerWidth and innerHeight<br>
✅ - Reactive media query states and device orientation<br>
✅ - Detect touch screen capability<br>
✅ - Breakpoints for most common ui frameworks provided out of the box: Tailwind, Bootstrap, Bulma, Foundation, Materialize, Semantic UI<br>
✅ - SSR compatible <s>with Nuxt module included</s>. Nuxt module development is pending Nuxt 3 release <br>

# Installation

```bash
npm i vue-screen@next
```

```bash
yarn add vue-screen@next
```

# Quick start

### Use as a plugin
```js
import { createApp } from 'vue'
import VueScreen from 'vue-screen'

// In App.vue
createApp()
  .use(VueScreen, 'bootstrap')
  .mount('#app')

// In MyComponent.vue
<template>
    <ul>
        <li>Current breakpoint is: {{ $grid.breakpoint }}</li>
        <li>Window width is: {{ $screen.width }}</li>
        <li>Window height is: {{ $screen.height }}</li>
    </ul>
</template>
```

### Use with composition API
```js
import { useScreen, useGrid } from 'vue-screen'

export default {
    setup() {
        const screen = useScreen()
        const grid = useGrid('bulma')

        return {
            screen,
            grid
        }
    }
}
```

For advanced configurations, check out the [docs website](https://reegodev.github.io/vue-screen/).

# Upgrading from v1

v2 introduces a few breaking changes both in the configuration and in the API.
Read more about them in the [docs section](https://reegodev.github.io/vue-screen/breaking-changes).

# Browser support

All browsers except IE.
<br>Efforts in supporting IE will never occur. Let it die.

# License

[MIT](blob/master/LICENSE)

# Contributing

TODO