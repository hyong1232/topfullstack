import { Component } from 'vue'
export interface routerLoadType {
    component: (() => Promise<any>) | Component;
    loading: (() => Promise<any>) | Component;
    error: (() => Promise<any>) | Component;
    delay: number;
    timeout: number;
}