<template>
  <div class="vessel-info">
    <div class="vessel_info_report">
      <div class="title">vessel archives</div>

      <div style="font-size: 20px; font-weight: bold; color: blue; margin-left: 60px; margin-top: 30px;">Main Infomation
      </div>

      <div style="display: flex; justify-content: center; height: 100%;">
        <div
          style="width: 1400px; height: 1200px; border: 2px dashed blue; border-radius: 10px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;">
          <div style="background-color: #F3F5F8; border-radius: 10px; margin: 10px;">
            <img :src="imgUrl" alt=""
              style=" background-size: cover; background-position: center; background-repeat: no-repeat; width: 100%; height: 100%; border-radius: 10px;">
          </div>

          <div
            style="background-color: #F3F5F8; border-radius: 10px; margin: 10px; display: flex; flex-direction: column; font-size: 13px;">
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">IMO:{{ detail?.imo }}</div>
              <div style="flex: 1; display: flex; align-items: center;">MMSI:{{ detail?.mmsi }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">NameCn:{{ detail?.name_cn }}</div>
              <div style="flex: 1; display: flex; align-items: center;">NameEn:{{ detail?.name_en }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">GRT:{{ detail?.grt }}</div>
              <div style="flex: 1; display: flex; align-items: center;">DWT:{{ detail?.dwt }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">BuildYearMonth: {{ detail?.build_year_month }}
              </div>
              <div style="flex: 1; display: flex; align-items: center;">Callsign:{{ detail?.call_sign }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">RegistryPort: {{ detail?.registry_port }}</div>
              <div style="flex: 1; display: flex; align-items: center;">OwnerBody: {{ detail?.owner_body }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">ManageBody: {{ detail?.manage_body }}</div>
              <div style="flex: 1; display: flex; align-items: center;">OperatorBody: {{ detail?.operator_body }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">ClassSociety:{{ detail?.class_society }}</div>
              <div style="flex: 1; display: flex; align-items: center;">FlagCountry:{{ detail?.flag_country_name_en }}
              </div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">OwnerCountry:{{
                detail?.group_beneficial_owner_country_of_control }}</div>
              <div style="flex: 1; display: flex; align-items: center;">ManagerCountry:{{
                detail?.technical_manager_country_of_control }}</div>
            </div>
            <div style="display: flex; flex: 1;">
              <div style="display: flex; align-items: center;">OperatorCountry:{{ detail?.operator_country_of_control }}
              </div>
            </div>
          </div>

          <div
            style="background-color: #F3F5F8; border-radius: 10px; margin: 10px; display: flex; flex-direction: column; font-size: 13px;">
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">VesselType:{{ detail?.vessel_name_cn }}</div>
              <div style="flex: 1; display: flex; align-items: center;">VesselSubType:{{ detail?.vessel_sub_type_name_cn
                }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">VesselSub2Type:{{
                detail?.vessel_sub2_type_name_cn }}</div>
              <div style="flex: 1; display: flex; align-items: center;">Height:{{ detail?.height }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">Length:{{ detail?.length }}</div>
              <div style="flex: 1; display: flex; align-items: center;">Width:{{ detail?.width }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">OilTonnes: {{ detail?.oil_tonnes }}</div>
              <div style="flex: 1; display: flex; align-items: center;">NET:{{ detail?.net }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">Draught: {{ detail?.draught }}</div>
              <div style="flex: 1; display: flex; align-items: center;">Speed: {{ detail?.speed }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">CIIClass: {{ detail?.cii_class }}</div>
              <div style="flex: 1; display: flex; align-items: center;">CIIRate: {{ detail?.cii_rate }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">MainEngineModel:{{ detail?.main_engine_model }}
              </div>
              <div style="flex: 1; display: flex; align-items: center;">NumberOfMainEngines:{{
                detail?.number_of_main_engines }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">MainEngineRPM:{{ detail?.main_engine_rpm }}
              </div>
              <div style="flex: 1; display: flex; align-items: center;">TotalHorsePower:{{
                detail?.total_horse_power_of_main_engines }}</div>
            </div>
            <div style="display: flex; flex: 1;">
              <div style="flex: 1; display: flex; align-items: center;">MainEngineBore:{{ detail?.main_engine_bore }}
              </div>
              <div style="flex: 1; display: flex; align-items: center;">MainEngineType:{{ detail?.main_engine_type }}
              </div>
            </div>
          </div>

          <div
            style="background-color: #F3F5F8; border-radius: 10px; margin: 10px; display: flex; flex-direction: column; font-size: 13px;">
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">MainEngineStrokeType:{{
                detail?.main_engine_stroke_type }}</div>
              <div style="flex: 1; display: flex; align-items: center;">MainEngineBuilder:{{ detail?.main_engine_builder
                }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">MainEngineCylindersNumber:{{
                detail?.main_engine_number_of_cylinders }}</div>
              <div style="flex: 1; display: flex; align-items: center;">MainEngineDesigner:{{
                detail?.main_engine_designer }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">TotalKilowattsMain:{{
                detail?.total_kilowatts_of_main_engines }}</div>
              <div style="flex: 1; display: flex; align-items: center;">AuxiliaryEngineDesigner:{{
                detail?.auxiliary_engine_designer }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">AuxiliaryEngineBuilder: {{
                detail?.auxiliary_engine_builder }}</div>
              <div style="flex: 1; display: flex; align-items: center;">AuxiliaryEngineStrokeType:{{
                detail?.auxiliary_engine_stroke_type }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">AuxiliaryEnginesNarrative: {{
                detail?.auxiliary_engines_narrative }}</div>
              <div style="flex: 1; display: flex; align-items: center;">AuxiliaryEngineModel: {{
                detail?.auxiliary_engine_model }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">NumberOfAuxiliaryEngines: {{
                detail?.number_of_auxiliary_engines }}</div>
              <div style="flex: 1; display: flex; align-items: center;">TotalPowerOfAuxiliary: {{
                detail?.total_power_of_auxiliary_engines }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">Machinery:{{ detail?.machinery }}</div>
              <div style="flex: 1; display: flex; align-items: center;">PropellerType:{{ detail?.propeller_type }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">BoilerManuFacture:{{ detail?.boiler_manu_facture
                }}</div>
              <div style="flex: 1; display: flex; align-items: center;">PropellerManuFacture:{{
                detail?.propeller_manu_facture }}</div>
            </div>
            <div style="display: flex; flex: 1;"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="berthing_info_report">
      <div class="title">vessel berthing</div>
      <div style="font-size: 20px; font-weight: bold; color: blue; margin-left: 60px; margin-top: 30px;">Berthing
        Infomation</div>

      <div style="justify-content: center;">
        <div style="width: 1400px; border: 2px dashed blue; border-radius: 10px; margin: auto;">
          <table style="width: 1380px; margin: 10px; border-collapse: collapse;">
            <thead>
              <tr>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  Start Time</th>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  End Time</th>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  Latitude</th>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  Longitude</th>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  Berthing Duration</th>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  Port Code</th>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  Port Name CN</th>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  Port Name EN</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="berthing_info in tarceInfo?.berthing_info_list">
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  berthing_info.start_time }}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  berthing_info.end_time }}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  berthing_info.latitude }}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  berthing_info.longitude }}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  berthing_info.duration }}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  berthing_info.port_code }}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  berthing_info.port_name_cn }}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  berthing_info.port_name_en }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="font-size: 20px; font-weight: bold; color: blue; margin-left: 60px; margin-top: 30px;">Berthing
          Points</div>
        <BerthingMap :berthing-list="tarceInfo?.berthing_info_list" style="width: 1400px; height: 600px; border: 2px dashed blue; border-radius: 10px; margin: auto;">
        </BerthingMap>
      </div>
    </div>

    <div class="mooring_info_report">
      <div class="title">vessel mooring</div>
      <div style="font-size: 20px; font-weight: bold; color: blue; margin-left: 60px; margin-top: 30px;">Mooring
        Infomation</div>

      <div style="justify-content: center;">
        <div style="width: 1400px; border: 2px dashed blue; border-radius: 10px; margin: auto;">
          <table style="width: 1380px; margin: 10px; border-collapse: collapse;">
            <thead>
              <tr>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  Start Time</th>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  End Time</th>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  Latitude</th>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  Longitude</th>
                <th
                  style="padding: 10px; text-align: center; border: 1px solid #ddd; background-color: #f2f2f2; border-radius: 10px 10px 0 0;">
                  Mooring Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="mooring_info in tarceInfo?.mooring_info_list">
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  mooring_info.start_time }}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  mooring_info.end_time }}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  mooring_info.latitude }}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  mooring_info.longitude }}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd; border-radius: 0 0 10px 10px;">{{
                  mooring_info.duration }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="font-size: 20px; font-weight: bold; color: blue; margin-left: 60px; margin-top: 30px;">Mooring
          Points</div>
        <MooringMap :mooring-list="tarceInfo?.mooring_info_list" style="width: 1400px; height: 600px; border: 2px dashed blue; border-radius: 10px; margin: auto;">
        </MooringMap>
      </div>
    </div>

    <div class="sailing_info_report" v-for="sailing_info in tarceInfo?.sailing_info_list">
      <div class="title">vessel berthing</div>
      <div style="font-size: 20px; font-weight: bold; color: blue; margin-left: 60px; margin-top: 30px;">Sailing
        Infomation</div>

      <div style="justify-content: center;">
        <div style="width: 1400px; padding-top: 30px; margin: auto; border: 2px dashed blue; border-radius: 10px;">
          <div style="margin: 10px;">
            <div style="display: flex;">
              <div style="flex: 1; font-size: 18px; font-weight: bold; margin: 10px;">Duration: {{ sailing_info.duration
                }}</div>
              <div style="flex: 2; font-size: 18px; font-weight: bold; margin: 10px;">StartTime: {{
                sailing_info.start_time }}</div>
              <div style="flex: 2; font-size: 18px; font-weight: bold; margin: 10px;">EndTime: {{ sailing_info.end_time
                }}</div>
            </div>

            <div style="display: flex;">
              <div style="flex: 1; font-size: 18px; font-weight: bold; margin: 10px;">StartPortCode: {{
                sailing_info.start_port_code }}</div>
              <div style="flex: 2; font-size: 18px; font-weight: bold; margin: 10px;">StartPortNameCN: {{
                sailing_info.start_port_name_cn }}</div>
              <div style="flex: 2; font-size: 18px; font-weight: bold; margin: 10px;">StartPortNameEN: {{
                sailing_info.start_port_name_en }}</div>
            </div>

            <div style="display: flex;">
              <div style="flex: 1; font-size: 18px; font-weight: bold; margin: 10px;">EndPortCode: {{
                sailing_info.end_port_code }}</div>
              <div style="flex: 2; font-size: 18px; font-weight: bold; margin: 10px;">EndPortNameCN: {{
                sailing_info.end_port_name_cn }}</div>
              <div style="flex: 2; font-size: 18px; font-weight: bold; margin: 10px;">EndPortNameEN: {{
                sailing_info.end_port_name_en }}</div>
            </div>

            <div style="display: flex;">
              <div style="flex: 1; font-size: 18px; font-weight: bold; margin: 10px;">DesiginDraught: {{
                sailing_info.design_draught.toFixed(3) }}</div>
              <div style="flex: 2; font-size: 18px; font-weight: bold; margin: 10px;">CurrentDraught: {{
                sailing_info.current_draught.toFixed(3) }}</div>
              <div style="flex: 2; font-size: 18px; font-weight: bold; margin: 10px;">CargoStatus: {{
                sailing_info.cargo_status }}</div>
            </div>

            <div style="display: flex;">
              <div style="flex: 1; font-size: 18px; font-weight: bold; margin: 10px;">TotalDistance: {{
                sailing_info.total_distance.toFixed(3) }}</div>
            </div>
          </div>
        </div>

        <div style="font-size: 20px; font-weight: bold; color: blue; margin-left: 60px; margin-top: 30px;">Daily Speed &
          Distance</div>
        <DailyInfo style="width: 1400px; height: 600px; margin: auto; border: 2px dashed blue; border-radius: 10px;"
          :date-list="sailing_info.date_list" :speed-list="sailing_info.speed_list"
          :distance-list="sailing_info.distance_list"></DailyInfo>

          <div style="font-size: 20px; font-weight: bold; color: blue; margin-left: 60px; margin-top: 30px;">Sailing
          Trace</div>
        <SailingTrace :point-list="sailing_info?.point_list" style="width: 1400px; height: 600px; border: 2px dashed blue; border-radius: 10px; margin: auto;">
        </SailingTrace>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import DailyInfo from './dailyInfo/dailyInfo.vue';
import BerthingMap from './berthingMap/berthingMap.vue';
import MooringMap from './mooringMap/mooringMap.vue';
import SailingTrace from './sailingTrace/sailingTrace.vue';
import { queryVesselDetail, VesselDetail } from '../../api/vesselDetail/vesselDetail.ts';
import { queryVesselImage } from '../../api/vesselImage/vesselImage.ts';
import { queryTraceInfo, TraceInfo } from '../../api/traceInfo/traceInfo.ts';


const imgUrl = ref('');
const detail = ref<VesselDetail>();
const tarceInfo = ref<TraceInfo>();


onMounted(async () => {
  const path = window.location.hash;
  const mmsi = path.split('/', 3)[2];
  if (mmsi === '') {
    window.location.hash = '/'
    return
  }

  const detailResult = await queryVesselDetail(Number(mmsi));
  detail.value = detailResult.data;

  const imgResult = await queryVesselImage(Number(mmsi));
  imgUrl.value = imgResult.data;

  const traceResult = await queryTraceInfo(Number(mmsi));
  tarceInfo.value = traceResult.data;

  for (let index = 0; index < tarceInfo.value.sailing_info_list.length; index++) {
    tarceInfo.value.sailing_info_list[index].date_list = [];
    tarceInfo.value.sailing_info_list[index].speed_list = [];
    tarceInfo.value.sailing_info_list[index].distance_list = [];

    for (let yIndex = 0; yIndex < tarceInfo.value.sailing_info_list[index].daily_info_list.length; yIndex++) {
      tarceInfo.value.sailing_info_list[index].date_list.push(tarceInfo.value.sailing_info_list[index].daily_info_list[yIndex].date)
      tarceInfo.value.sailing_info_list[index].speed_list.push(tarceInfo.value.sailing_info_list[index].daily_info_list[yIndex].avg_speed)
      tarceInfo.value.sailing_info_list[index].distance_list.push(tarceInfo.value.sailing_info_list[index].daily_info_list[yIndex].daily_distance)
    }
  }
})
</script>

<style scoped>
.vessel-info {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100vw;
  background-color: #EEEDED;
  background-image: radial-gradient(circle, #aaadb3 2px, transparent 2px);
  background-size: 40px 40px;
}

.title {
  position: relative;
  text-align: center;
  padding-top: 2%;
  font-size: 35px;
  font-weight: bold;
}

.vessel_info_report {
  position: relative;
  top: 0%;
  left: calc(50vw - 750px);
  width: 1500px;
  height: 2000px;
  background-color: #FFF;
}

.berthing_info_report {
  position: relative;
  top: 0%;
  left: calc(50vw - 750px);
  width: 1500px;
  height: 2000px;
  background-color: #FFF;
}

.mooring_info_report {
  position: relative;
  top: 0%;
  left: calc(50vw - 750px);
  width: 1500px;
  height: 2000px;
  background-color: #FFF;
}

.sailing_info_report {
  position: relative;
  top: 0%;
  left: calc(50vw - 750px);
  width: 1500px;
  height: 2000px;
  background-color: #FFF;
}
</style>