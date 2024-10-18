import type { VNode } from 'vue'
export interface Binding {
    value: any
    oldValue: any
    args: any
    modifiers: any
    instance: any
    dir: any
}
export interface DirectiveType {
    // 在绑定元素的 attribute 前
    // 或事件监听器应用前调用
    created?(el: HTMLElement, binding: Binding, vnode: VNode): void
    // 在元素被插入到 DOM 前调用
    beforeMount?(el: HTMLElement, binding: Binding, vnode: VNode): void
    // 在绑定元素的父组件
    // 及他自己的所有子节点都挂载完成后调用
    mounted?(el: HTMLElement, binding: Binding, vnode: VNode): void
    // 绑定元素的父组件更新前调用
    beforeUpdate?(el: HTMLElement, binding: Binding, vnode: VNode, prevVnode: VNode): void
    // 在绑定元素的父组件
    // 及他自己的所有子节点都更新后调用
    updated?(el: HTMLElement, binding: Binding, vnode: VNode, prevVnode: VNode): void
    // 绑定元素的父组件卸载前调用
    beforeUnmount?(el: HTMLElement, binding: Binding): void
    // 绑定元素的父组件卸载后调用
    unmounted?(el: HTMLElement, binding: Binding): void
}
