import request from '../request.ts'

export interface TraceInfo {
  berthing_info_list: BerthingInfo[],
  mooring_info_list: BerthingInfo[],
  sailing_info_list: SailingInfo[],
}

export interface BerthingInfo {
  latitude: number,
  longitude: number,
  start_time: string,
  end_time: string,
  duration: string,
  destination: string,
  port_code: string,
  port_name_cn: string,
  port_name_en: string,
}

export interface MooringInfo {
  latitude: number,
  longitude: number,
  start_time: string,
  end_time: string,
  duration: string,
}

export interface Point {
  latitude: number,
  longitude: number,
  speed: number,
  post_time: string,
}

export interface DailyInfo {
  date: string,
  avg_speed: number,
  daily_distance: number,
}

export interface SailingInfo {
  start_time: string,
  end_time: string,
  start_port_code: string,
  start_port_name_cn: string,
  start_port_name_en: string,
  end_port_code: string,
  end_port_name_cn: string,
  end_port_name_en: string,
  duration: string,
  design_draught: number,
  current_draught: number,
  cargo_status: string,
  total_distance: number,
  point_list: Point[],
  daily_info_list: DailyInfo[],
  
  date_list: string[],
  speed_list: number[],
  distance_list: number[],
}

export async function queryTraceInfo(mmsi: number): Promise<{ data: TraceInfo }> {
  return request({
    url: '/api/vessel_report/trace_info',
    method: 'get',
    params: {
      "mmsi": mmsi,
    }
  })
}