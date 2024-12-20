<template>
	<div style="width: 100%;height: 100%;">
		<div style="width: 100%;height: 100%;" :id="idName"></div>
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
const idName = ref('sailing' + String(Math.random()));

onMounted(() => {
	map.value = L.map(idName.value).setView([0, 0], 2);
	L.tileLayer('https://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=a3f1871ff0ee05cf0025344ccc9d1165', {
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
</style>