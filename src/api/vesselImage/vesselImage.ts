import request from '../request.ts'


export async function queryVesselImage(mmsi: number) : Promise<{ data: string }> {
    return request({
        url: '/api/cosco/vessel/image',
        method: 'get',
        params: {
            "mmsi": mmsi,
        }
    })
}