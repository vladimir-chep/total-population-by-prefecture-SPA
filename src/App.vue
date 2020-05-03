<template>
    <div class="container">
        <h1 class="ttl">都道府県別の総人口推移グラフ</h1>
        <PrefList />
        <highcharts ref="chart" :options="{ ...chartOptions, series }" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { Chart } from 'highcharts-vue';
import PrefList from './components/PrefList.vue';

export default {
    name: 'App',
    components: {
        PrefList,
        highcharts: Chart,
    },
    data() {
        return {
            chartOptions: {
                title: {
                    text: '',
                },
                yAxis: {
                    title: {
                        text: '人口数',
                    },
                },
                xAxis: {
                    title: {
                        text: '年',
                    },
                    accessibility: {
                        rangeDescription: 'Range: 1980 to 2045',
                    },
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                },
                plotOptions: {
                    series: {
                        pointStart: 1980,
                    },
                },
            },
        };
    },
    computed: {
        ...mapState(['series']),
    },
};
</script>
