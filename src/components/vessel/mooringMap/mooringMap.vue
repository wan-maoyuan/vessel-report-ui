<template>
	<div style="width: 100%;height: 100%;">
		<div id="mooring"></div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, toRefs, ref, watch } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MooringInfo } from '../../../api/traceInfo/traceInfo.ts';


const props = defineProps({
	mooringList: {
		type: Array as PropType<MooringInfo[] | undefined>,
		required: true,
	},
})

var mooringIcon = L.icon({
	iconUrl: '/mooring.png',
	
    iconSize:     [40, 40],
    iconAnchor:   [20, 20]
});

const { mooringList } = toRefs(props);
const map = ref();

onMounted(() => {
	map.value = L.map('mooring').setView([0, 0], 2);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 4,
		attribution: 'nav-green'
	}).addTo(map.value);
});

watch(() => [mooringList], () => {
	if (mooringList.value) {
		if (mooringList.value!.length > 0) {
			for (let index=0; index<mooringList.value!.length; index++) {
				var point = [mooringList.value[index].latitude, mooringList.value[index].longitude];
				L.marker([mooringList.value[index].latitude, mooringList.value[index].longitude], {icon: mooringIcon}).addTo(map.value);
				
				map.value.setView(point, 3);
			}
		}
	}
}, { deep: true })
</script>

<style scoped>
#mooring {
	height: 100%;
	width: 100%;
}
</style>