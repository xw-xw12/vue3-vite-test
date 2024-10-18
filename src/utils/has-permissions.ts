import { useAccountStore } from '@/stores/account'
export enum PermissionEnum {
    ADMIN = 'admin',
}
function getPermissions(): string[] {
    return useAccountStore().permissions
}
export function isMaxPermission(): boolean {
    const userPermissions = getPermissions()
    return userPermissions.includes(PermissionEnum.ADMIN)
}
//是否包含列出的所有权限
export function hasAllPermissions(currentPer: string[]): boolean {
    if (noValidPermission(currentPer)) {
        return true
    } else {
        const userPermissions = getPermissions()
        return currentPer.every((item) => userPermissions.includes(item))
    }
}
//不需要校验权限的情况(当前权限暴怒是数组、数组长度为0、当前权限包含最高权限)
export function noValidPermission(currentPer: string[]): boolean {
    if (Array.isArray(currentPer)) {
        if (currentPer.length === 0) {
            return true
        } else {
            return isMaxPermission()
        }
    } else {
        return true
    }
}
//是否包含列出权限中的某个权限
export function hasAnyPermission(currentPer: string[]): boolean {
    if (noValidPermission(currentPer)) {
        return true
    } else {
        const userPermissions = getPermissions()
        return currentPer.some((item) => userPermissions.includes(item))
    }
}
