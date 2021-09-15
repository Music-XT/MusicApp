import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";


// TypeScript 类型支持
export interface State {
    curPlayIndex: number,
    playList: any[],
    playSemaphore: number,
    playMode: number
}
export const key: InjectionKey<Store<State>> = Symbol()



export const store = createStore<State>({
    strict: !import.meta.env.PROD,
    state() {
        return {
            curPlayIndex: -1,
            playList: [],
            playSemaphore: 0,
            playMode: 0
        }
    },
    mutations: {
        replacePlayList(state, payload) {
            state.playList = payload.playList
            state.curPlayIndex = payload.index ?? 0
        },
        nextSong(state, index = -1) {
            // index 表示指定播放指定位置的音乐, 默认播放下一首
            if(index === -1) state.curPlayIndex++
            else state.curPlayIndex = index
        },
        prevSong(state) {
            state.curPlayIndex--
        },
        play(state) { state.playSemaphore = Math.random() },
        pause(state) { state.playSemaphore = 0 },
        insertSong(state, payload) {
            // play 表示立即播放, 此时音乐以插入的方式添加到当前播放音乐之后
            // 否则音乐将会追加到播放队列的末尾, 并且不会触发播放
            const idx = payload.play ? state.curPlayIndex + 1 : state.playList.length
            state.playList.splice(idx, 0, payload.song)
            if(payload.play) {
                state.curPlayIndex = idx
                store.commit('play')
            }
        }
    },
    actions: {
        
    }
})

export function useStore() {
    return baseUseStore(key)
}