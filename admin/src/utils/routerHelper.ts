export function routerLoadHelper(compPath: string): any {
    return {
        loading: import('@/components/loading.vue'),
        component: import(`${compPath}`),
        error: import('@/components/error.vue'),
        timeout: 500,
        delay: 0,
    }
}