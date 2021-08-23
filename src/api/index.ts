import axios from 'axios'

/**
 * 获取首页 Banner 列表
 * @param type 设备类型, 1: PC、2: Android、3: iPhone、4: iPad
 * @returns Banner 图片链接
 */
export async function getBanners(type = 2) {
    const banners: string[] = [];
    try {
        const res = await axios.get(`http://localdev:3000/banner?type=${type}`);
        banners.push(...(<any[]> res.data.banners).map(item => item.pic));
    } catch (e) {
        console.error('获取 banner 列表失败: ' + e.message);
    }
    return banners;
}