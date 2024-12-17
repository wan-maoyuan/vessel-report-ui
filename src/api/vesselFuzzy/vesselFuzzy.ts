import request from '../request.ts'

export interface VesselFuzzy {
    imo: number,
    mmsi: number,
    vessel_mmsi: number,
    callsign: string,
    name_cn: string,
    name_en: string,
    vessel_type: string,
    vessel_type_name_cn: string,
    vessel_type_name_en: string,
    vessel_sub_type: string,
    vessel_sub_type_name_cn: string,
    vessel_sub_type_name_en: string,
    vessel_sub2_type: string,
    vessel_sub2_type_name_cn: string,
    vessel_sub2_type_name_en: string,
    flag_country: string,
    flag_country_Name_cn: string,
    flag_country_Name_en: string,
    device_type: number,
    retire_year_month: number,
    postime: string,
}

export async function queryVesselFuzzy(key: string = '') : Promise<{ data: VesselFuzzy[] }> {
    return request({
        url: '/api/cosco/vessel/fuzzy',
        method: 'post',
        data: {
            "kw": key,
            "search_gb": 1,
            "include_fish": true,
            "cascade_type": 0,
            "ignore_no_dynamics": false,
            "ignore_retired": false,
            "ignore_pinyin": false
        }
    })
}