import { defineStore } from 'pinia'
export interface TokenInfo {
    tokenName: string
    tokenValue: string
}
export interface UserInfo {
    name: string
}
export interface AccountState {
    userInfo: UserInfo
    tokenInfo: TokenInfo
    permissions: string[]
}
export const useAccountStore = defineStore('account', {
    state: () => {
        const res: AccountState = {
            userInfo: {
                name: '',
            },
            tokenInfo: {
                tokenName: 'Authorization',
                tokenValue: '',
            },
            permissions: [],
        }
        return res
    },
    getters: {
        tokenValue(): string {
            return this.tokenInfo.tokenValue
        },
        tokenName(): string {
            return this.tokenInfo.tokenName
        },
        allPermissions(): string[] {
            return this.permissions
        },
    },
    actions: {
        setTokenValue(tokenValue: string) {
            this.tokenInfo.tokenValue = tokenValue
        },
        setPermissions(val: string[]) {
            this.permissions = val
        },
    },
})
