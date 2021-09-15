import requests from '@/utils/requests';


/**
 * 获取首页 Banner 列表
 * @param type 设备类型, 1: PC、2: Android、3: iPhone、4: iPad
 * @returns Banner 图片链接
 */
export async function getBanners(type = 2) {
    const banners: string[] = [];
    try {
        const res = await requests.get(`/banner?type=${type}`);
        banners.push(...(<any[]> res.data.banners).map(item => item.pic));
    } catch (e) {
        console.error('获取首页 banner 列表失败: ' + (<Error>e).message);
    }
    return banners;
}


/**
 * 获取首页歌单列表
 * @param limit 列表数量
 * @returns 歌单对象列表
 */
export async function getMusicList(limit = 10) {
    const playLists = [];
    try {
        const res = await requests.get(`/personalized?limit=${limit}`)
        playLists.push(...((<any[]> res.data.result).map(item => ({
            id: item.id,
            name: item.name,
            coverImgUrl: item.picUrl
        }))))
    } catch(e) {
        console.error('获取首页歌单列表失败: ' + (<Error>e).message);
    }

    return playLists;
}

/**
 * 获取歌单详情
 * @param id 歌单ID
 * @returns 歌单详情
 */
export async function getMusicListDetail(id: number):Promise<any> {
    let ret = {};
    try {
        const res = await requests.get(`/playlist/detail?id=${id}`)
        if(undefined == res.data.playlist) throw new Error(res.data.msg);
        ret = res.data.playlist;
    } catch(e) {
        console.error('获取歌单详情失败: ' + (<Error>e).message);
    }

    console.log(ret)
    return ret;
}

export function getMusicUrl(id: number) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export async function getNewSongs() {
    const ret = []
    try {
        const res = await requests.get('/personalized/newsong')
        const songs = (<any[]> res.data.result).map(item => ({
            picUrl: item.picUrl,
            id: item.song.id,
            name: item.song.name,
            artist: item.song.artists?.[0].name
        }))
        ret.push(...songs)
    } catch(e) {
        console.error('获取新歌列表失败: ' + (<Error>e).message);
    }
    
    return ret
}