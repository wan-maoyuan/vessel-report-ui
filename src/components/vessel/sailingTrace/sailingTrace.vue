<template>
	<div style="width: 100%;height: 100%;">
		<div id="sailing"></div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { onMounted, toRefs, ref, watch } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Point } from '../../../api/traceInfo/traceInfo.ts';


const props = defineProps({
	pointList: {
		type: Array as PropType<Point[] | undefined>,
		required: true,
	},
})

const { pointList } = toRefs(props);
const map = ref();

onMounted(() => {
	map.value = L.map('sailing').setView([0, 0], 2);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 4,
		attribution: 'nav-green'
	}).addTo(map.value);

	if (pointList.value) {
		if (pointList.value?.length > 0) {
			var line: number[][] = [];
			for (let index = 0; index < pointList.value!.length; index++) {
				line.push([pointList.value[index].longitude, pointList.value[index].latitude]);
			}

			var myLines = [{
				"type": "LineString",
				"coordinates": line
			}];

			// @ts-ignore
			L.geoJSON(myLines, {
				style: {
					"color": "blue",
					"weight": 5,
					"opacity": 1
				}
			}).addTo(map.value);
		}
	}
});

watch(() => [pointList], () => {
	if (pointList.value) {
		if (pointList.value?.length > 0) {
			var line: number[][] = [];
			for (let index = 0; index < pointList.value!.length; index++) {
				line.push([pointList.value[index].longitude, pointList.value[index].latitude]);
			}

			var myLines = [{
				"type": "LineString",
				"coordinates": line
			}];

			// @ts-ignore
			L.geoJSON(myLines, {
				style: {
					"color": "red",
					"weight": 10,
					"opacity": 0.65
				}
			}).addTo(map.value);
		}
	}
}, { deep: true })
</script>

<style scoped>
#sailing {
	height: 100%;
	width: 100%;
}
</style>