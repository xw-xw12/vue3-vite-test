/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_REQUEST_DOMAIN_PREFIX: string
    readonly VITE_BASE_API: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
