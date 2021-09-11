import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";


// TypeScript 类型支持
export interface State {
    curPlayIndex: number,
    playList: any[]
}
export const key: InjectionKey<Store<State>> = Symbol()



export const store = createStore<State>({
    strict: !import.meta.env.PROD,
    state() {
        return {
            curPlayIndex: -1,
            playList: []
        }
    },
    mutations: {
        replacePlayList(state, payload) {
            state.playList = payload.playList
            state.curPlayIndex = payload.index ?? 0
        },
        nextSong(state) {
            state.curPlayIndex < state.playList.length && state.curPlayIndex++
        },
        prevSong(state) {
            state.curPlayIndex > 0 && state.curPlayIndex--
        }
    },
    actions: {
        
    }
})

export function useStore() {
    return baseUseStore(key)
}