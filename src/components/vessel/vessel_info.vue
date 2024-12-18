<template>
  <div>
    <div class="vessel_info_report">
      <div class="title">vessel archives</div>

      <div style="font-size: 20px; font-weight: bold; color: blue; margin-left: 40px; margin-top: 30px;">Main Infomation
      </div>

      <div style="display: flex; justify-content: center; height: 100%;">
        <div style="width: 1400px; height: 1200px; border: 2px dashed blue; border-radius: 10px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;">
          <div style="background-color: #F3F5F8; border-radius: 10px; margin: 10px;">
            <img src="http://192.168.1.128:9050/api/cosco/vessel_picture/9975985-224285000-1867797.jpg" alt=""
              style=" background-size: cover; background-position: center; background-repeat: no-repeat; width: 100%; height: 100%; border-radius: 10px;">
          </div>

          <div style="background-color: #F3F5F8; border-radius: 10px; margin: 10px; display: flex; flex-direction: column; font-size: 14px;">
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
              <div style="flex: 1; display: flex; align-items: center;">BuildYearMonth: {{ detail?.build_year_month }}</div>
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
              <div style="flex: 1; display: flex; align-items: center;">FlagCountry:{{ detail?.flag_country_name_en }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">OwnerCountry:{{ detail?.group_beneficial_owner_country_of_control }}</div>
              <div style="flex: 1; display: flex; align-items: center;">ManagerCountry:{{ detail?.technical_manager_country_of_control }}</div>
            </div>
            <div style="display: flex; flex: 1;">
              <div style="display: flex; align-items: center;">OperatorCountry:{{ detail?.operator_country_of_control }}</div>
            </div>
          </div>
          
          <div style="background-color: #F3F5F8; border-radius: 10px; margin: 10px; display: flex; flex-direction: column; font-size: 14px;">
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">VesselType:{{ detail?.vessel_name_cn }}</div>
              <div style="flex: 1; display: flex; align-items: center;">VesselSubType:{{ detail?.vessel_sub_type_name_cn }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">VesselSub2Type:{{ detail?.vessel_sub2_type_name_cn }}</div>
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
              <div style="flex: 1; display: flex; align-items: center;">MainEngineModel:{{ detail?.main_engine_model }}</div>
              <div style="flex: 1; display: flex; align-items: center;">NumberOfMainEngines:{{ detail?.number_of_main_engines }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">MainEngineRPM:{{ detail?.main_engine_rpm }}</div>
              <div style="flex: 1; display: flex; align-items: center;">TotalHorsePower:{{ detail?.total_horse_power_of_main_engines }}</div>
            </div>
            <div style="display: flex; flex: 1;">
              <div style="flex: 1; display: flex; align-items: center;">MainEngineBore:{{ detail?.main_engine_bore }}</div>
              <div style="flex: 1; display: flex; align-items: center;">MainEngineType:{{ detail?.main_engine_type }}</div>
            </div>
          </div>

          <div style="background-color: #F3F5F8; border-radius: 10px; margin: 10px; display: flex; flex-direction: column; font-size: 14px;">
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">MainEngineStrokeType:{{ detail?.main_engine_stroke_type }}</div>
              <div style="flex: 1; display: flex; align-items: center;">MainEngineBuilder:{{ detail?.main_engine_builder }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">MainEngineCylindersNumber:{{ detail?.main_engine_number_of_cylinders }}</div>
              <div style="flex: 1; display: flex; align-items: center;">MainEngineDesigner:{{ detail?.main_engine_designer }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">TotalKilowattsMain:{{ detail?.total_kilowatts_of_main_engines }}</div>
              <div style="flex: 1; display: flex; align-items: center;">AuxiliaryEngineDesigner:{{ detail?.auxiliary_engine_designer }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">AuxiliaryEngineBuilder: {{ detail?.auxiliary_engine_builder }}</div>
              <div style="flex: 1; display: flex; align-items: center;">AuxiliaryEngineStrokeType:{{ detail?.auxiliary_engine_stroke_type }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">AuxiliaryEnginesNarrative: {{ detail?.auxiliary_engines_narrative }}</div>
              <div style="flex: 1; display: flex; align-items: center;">AuxiliaryEngineModel: {{ detail?.auxiliary_engine_model }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">NumberOfAuxiliaryEngines: {{ detail?.number_of_auxiliary_engines }}</div>
              <div style="flex: 1; display: flex; align-items: center;">TotalPowerOfAuxiliary: {{ detail?.total_power_of_auxiliary_engines }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">Machinery:{{ detail?.machinery }}</div>
              <div style="flex: 1; display: flex; align-items: center;">PropellerType:{{ detail?.propeller_type }}</div>
            </div>
            <div style="display: flex; flex: 1; border-bottom: 1px dashed gray;">
              <div style="flex: 1; display: flex; align-items: center;">BoilerManuFacture:{{ detail?.boiler_manu_facture }}</div>
              <div style="flex: 1; display: flex; align-items: center;">PropellerManuFacture:{{ detail?.propeller_manu_facture }}</div>
            </div>
            <div style="display: flex; flex: 1;"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="berthing_info_report">
      <div class="title">vessel berthing</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { queryVesselDetail, VesselDetail } from '../../api/vesselDetail/vesselDetail.ts'

const detail = ref<VesselDetail>();

onMounted(async () => {
  const mmsi = localStorage.getItem('mmsi');
  const result = await queryVesselDetail(Number(mmsi));
  detail.value = result.data;
})
</script>

<style scoped>
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
  top: 10px;
  left: calc(50vw - 750px);
  width: 1500px;
  height: 2000px;
  background-color: #FFF;
}
</style>