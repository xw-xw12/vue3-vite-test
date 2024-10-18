import { hasAnyPermission } from '@/utils/has-permissions'
import type { VNode, DirectiveBinding, Directive } from 'vue'
export const hasAnyPermissions: Directive = {
    created(el: HTMLElement, bind: DirectiveBinding, vnode: VNode) {
        const { value } = bind
        debugger
        el.style.display = hasAnyPermission(value) ? 'block' : 'none'
    },
}
