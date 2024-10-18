<template>
    <div class="flex-column">
        <div v-if="hasAnyPermission(['admin'])">是否有权限</div>
        <div>{{ tokenValue }}</div>
        <button @click="changeToken">修改token-获取当前时间</button>
        <button @click="changePer">修改权限</button>
    </div>
    <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useAccountStore } from '@/stores/account'
import { computed } from 'vue'
import { hasAnyPermission } from '@/utils/has-permissions'
const accountStore = useAccountStore()
const tokenValue = computed(() => {
    return accountStore.tokenValue
})
const permissions = computed(() => {
    return accountStore.permissions
})
changeToken()
function changeToken() {
    accountStore.setTokenValue(new Date().toString())
}
function changePer() {
    if (permissions.value.includes('admin')) {
        accountStore.setPermissions([])
    } else {
        accountStore.setPermissions(['admin'])
    }
}
</script>

<style scoped>
.flex-column {
    display: flex;
    flex-direction: column;
}
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
