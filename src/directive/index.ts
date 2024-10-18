interface FilesObj {
    [key: string]: any
}

const modulesFiles = import.meta.glob('./**/*.ts', { eager: true })
const results: FilesObj = {}
Object.keys(modulesFiles).forEach((fileKey) => {
    Object.keys(modulesFiles[fileKey]).forEach((key) => {
        results[key] = modulesFiles[fileKey][key]
    })
})
export default results
