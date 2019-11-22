<template>
    <div :id="containerInfo"></div>
</template>

<script>
    import G2 from '@antv/g2'
    export default {
        name: 'plotAreaEcharts',
        props: {
            echartsData: {
                type: Array,
                default: []
            },
            aliasInfo: {
                type: String,
                default: ''
            },
            containerInfo: {
                type: String,
                default: ''
            }
        },
        data() {
            return {}
        },
        mounted () {
            this.initCharts()
        },
        methods: {
            // 初始化图表
            initCharts() {
                // 判断图表是否存在
                const data = this.echartsData; // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。

                // Step 1: 创建 Chart 对象
                this.chart = new G2.Chart({
                    container: this.containerInfo,
                    forceFit: true, // 自适应宽度
                    height: 300, // 高度
                    pixelRatio: 1, // 设备的像素比
                    background: {
                        fill: 'white'
                    }, // 图表整体背景配置
                    padding: { top: 20, right: 30, bottom: 50, left: 40 } // 图表内边距
                })

                this.chart.source(data, {
                    value: {
                        tickCount: 5
                    }
                });
                this.chart.scale('value', {
                    alias: this.aliasInfo
                });
                this.chart.axis('month', {
                    label: {
                        textStyle: {
                            fill: '#aaaaaa'
                        }
                    },
                    tickLine: {
                        alignWithLabel: false,
                        length: 0
                    }
                });
                this.chart.axis('value', {
                    label: {
                        textStyle: {
                            fill: '#aaaaaa'
                        },
                        formatter: function formatter(text) {
                            return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                        }
                    },
                    title: {
                        offset: 70
                    }
                });
                this.chart.tooltip({
                    share: true
                });
                this.chart.interval().position('month*value').opacity(1);
                this.chart.render();
            }
        }
    }
</script>

<style scoped>

</style>
