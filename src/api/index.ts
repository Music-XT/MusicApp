import axios from 'axios'

const baseURL = 'http://localdev:3000';

/**
 * 获取首页 Banner 列表
 * @param type 设备类型, 1: PC、2: Android、3: iPhone、4: iPad
 * @returns Banner 图片链接
 */
export async function getBanners(type = 2) {
    const banners: string[] = [];
    try {
        const res = await axios.get(`${baseURL}/banner?type=${type}`);
        banners.push(...(<any[]> res.data.banners).map(item => item.pic));
    } catch (e) {
        console.error('获取首页 banner 列表失败: ' + e.message);
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
        const res = await axios.get(`${baseURL}/top/playlist?limit=${limit}`);
        playLists.push(...((<any[]> res.data.playlists).map(item => ({name: item.name, coverImgUrl: item.coverImgUrl}))));
    }   catch (e) {
        console.error('获取首页歌单列表失败: ' + e.message);
    }

    return playLists;
}