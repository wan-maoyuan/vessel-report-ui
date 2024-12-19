<template>
	<div style="width: 100%;height: 100%;">
		<div id="capacity-chart" ref="domRef"></div>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { toRefs, ref, watch, onMounted } from 'vue'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'
import _default from 'echarts/types/src/echarts.js';


const props = defineProps({
	dateList: {
		type: Array as PropType<string[]>,
		required: true,
	},
	speedList: {
		type: Array as PropType<number[]>,
		required: true,
	},
	distanceList: {
		type: Array as PropType<number[]>,
		required: true,
	},
})

const { dateList, speedList, distanceList } = toRefs(props)

let chart: ECharts | null = null

const domRef = ref()
const onResize = echarts.throttle(() => {
	chart && chart.resize()
}, 20)
const resizeObserver = new ResizeObserver(onResize)

const getOption = () => {
	return {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#4886BE'
				}
			}
		},
		toolbox: {
			feature: {
				dataView: { show: false, readOnly: false },
				magicType: { show: false, type: ['line', 'bar'] },
				restore: { show: false },
				saveAsImage: { show: false }
			}
		},
		legend: {
			data: ['AvgSpeed', 'Distance']
		},
		xAxis: [
			{
				type: 'category',
				data: dateList.value,
				axisPointer: {
					type: 'shadow'
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: 'AvgSpeed',
				min: 0,
				max: 18,
				interval: 1,
				axisLabel: {
					formatter: '{value} nm/h'
				}
			},
			{
				type: 'value',
				name: 'Distance',
				min: 0,
				max: 360,
				interval: 20,
				axisLabel: {
					formatter: '{value} nm'
				}
			}
		],
		series: [
			{
				name: 'AvgSpeed',
				type: 'line',
				tooltip: {
					valueFormatter: function (value: number) {
						return (value as number).toFixed(3) + 'nm/h';
					}
				},
				data: speedList.value,
				itemStyle: {
					normal: {
						color: 'blue',
						lineStyle: {
							color: 'blue'
						}
					}
				}
			},
			{
				name: 'Distance',
				type: 'bar',
				yAxisIndex: 1,
				tooltip: {
					valueFormatter: function (value: number) {
						return (value as number).toFixed(3) + 'nm';
					}
				},
				data: distanceList.value,
				itemStyle: {
					normal: {
						color: '#7C813B'
					}
				}
			}
		]
	};
}

onMounted(async () => {
	if (!chart) {
		chart = echarts.init(domRef.value!)
	}
	const option = getOption()
	chart.setOption(option)

	resizeObserver.observe(domRef.value)
})


watch(() => [dateList, speedList, distanceList], () => {
	if (chart) {
		const option = getOption()
		chart.setOption(option, { notMerge: true })
	}
}, { deep: true })
</script>

<style scoped>
#capacity-chart {
	width: 100%;
	height: 100%;
	margin-top: 20px;
}
</style>