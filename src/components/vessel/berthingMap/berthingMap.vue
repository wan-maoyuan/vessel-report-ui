<template>
	<div style="width: 100%;height: 100%;">
		<div id="berthing"></div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, toRefs, ref, watch } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { BerthingInfo } from '../../../api/traceInfo/traceInfo.ts';


const props = defineProps({
	berthingList: {
		type: Array as PropType<BerthingInfo[] | undefined>,
		required: true,
	},
})

var berthingIcon = L.icon({
	iconUrl: '/berthing.png',
	
    iconSize:     [40, 40],
    iconAnchor:   [20, 20]
});

const { berthingList } = toRefs(props);
const map = ref();

onMounted(() => {
	map.value = L.map('berthing').setView([0, 0], 2);

	L.tileLayer('https://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=a3f1871ff0ee05cf0025344ccc9d1165', {
		maxZoom: 4,
		attribution: 'nav-green'
	}).addTo(map.value);
});

watch(() => [berthingList], () => {
	if (berthingList.value) {
		if (berthingList.value!.length > 0) {
			for (let index=0; index<berthingList.value!.length; index++) {
				var point = [berthingList.value[index].latitude, berthingList.value[index].longitude];
				L.marker([berthingList.value[index].latitude, berthingList.value[index].longitude], {icon: berthingIcon}).addTo(map.value);
				
				map.value.setView(point, 3);
			}
		}
	}
}, { deep: true })
</script>

<style scoped>
#berthing {
	height: 100%;
	width: 100%;
}
</style>