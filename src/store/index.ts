import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";


// TypeScript 类型支持
export interface State {
    count: number
}
export const key: InjectionKey<Store<State>> = Symbol()



export const store = createStore<State>({
    strict: !import.meta.env.PROD,
    state() {
        return {
            count: 0
        }
    },
    mutations: {

    },
    actions: {
        
    }
})

export function useStore() {
    return baseUseStore(key)
}