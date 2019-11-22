<template>
    <div id="js-container" class="map"></div>
</template>

<script>
    import remoteLoad from '@/utils/asyncLoadJs.js'
    import { MapKey, MapCityName } from '@/config/config'
    export default {
        name: 'myMap',
        props: {
            lng: {
                type: String,
                default: ''
            }, // 纬度
            lat: {
                type: String,
                default: ''
            } // 经度
        },
        data() {
            return { }
        },
        created () {
            // 初始化加载高德地图
            this.loginMap()
        },
        mounted () {},
        methods: {
            async loginMap () {
                // 已载入高德地图API，则直接初始化地图
                if (window.AMap && window.AMapUI) {
                    this.initMap()
                    // 未载入高德地图API，则先载入API再初始化
                } else {
                    await  remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=${MapKey}`)
                    await  remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
                    this.initMap()
                }
            },
            // 地图初始化
            initMap () {
                // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
                let AMapUI = this.AMapUI = window.AMapUI
                let AMap = this.AMap = window.AMap
                AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
                    let mapConfig = {
                        zoom: 16,
                        resizeEnable: true,
                        cityName: MapCityName
                    }
                    if (this.lat && this.lng) {
                        mapConfig.center = [this.lng, this.lat]
                    }
                    let map = new AMap.Map('js-container', mapConfig)
                    // 加载地图搜索插件
                    AMap.service('AMap.PlaceSearch', () => {
                        this.placeSearch = new AMap.PlaceSearch({
                            pageSize: 5,
                            pageIndex: 1,
                            citylimit: true,
                            city: MapCityName,
                            map: map,
                            panel: 'js-result'
                        })
                    })
                    // 启用工具条
                    AMap.plugin(['AMap.ToolBar'], function () {
                        map.addControl(new AMap.ToolBar({
                            position: 'RB'
                        }))
                    })
                    // 创建地图拖拽
                    let positionPicker = new PositionPicker({
                        mode: 'dragMarker', // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
                        map: map // 依赖地图对象
                    })
                    // 拖拽完成发送自定义 drag 事件
                    positionPicker.on('success', positionResult => {
                        // 过滤掉初始化地图后的第一次默认拖放
                        if (!this.dragStatus) {
                            this.dragStatus = true
                        } else {
                            this.$emit('drag', positionResult)
                        }
                    })
                    // 启动拖放
                    positionPicker.start()

                    // 创建定位组件
                    AMap.plugin('AMap.Geolocation', function() {
                        map.addControl(new AMap.Geolocation({
                            // 是否使用高精度定位，默认：true
                            enableHighAccuracy: true,
                            // 设置定位超时时间，默认：无穷大
                            timeout: 1000,
                            // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                            buttonOffset: new AMap.Pixel(14, 140),
                            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                            zoomToAccuracy: true,
                            //  定位按钮的排放位置,  RB表示右下
                            buttonPosition: 'RB'
                        }))
                        map.getCurrentPoint
                    })
                    AMap.event.addListener(map, 'complete', this.onComplete)
                    AMap.event.addListener(map, 'error', this.onError)
                })
            },
            // 定位成功时触发
            onComplete (data) {
            },
            // 定位失败时触发
            onError () {
                console.log(3)
            }
        }
    }
</script>

<style scoped>
    #js-container { width: 100%; height: 300px;}
    .m-map{ min-width: 500px; min-height: 300px; position: relative; }
    .m-map .map{ width: 100%; height: 100%; }
    .m-map .search{ position: absolute; top: 10px; left: 10px; width: 285px; z-index: 1; }
    .m-map .search input{ width: 180px; border: 1px solid #ccc; line-height: 20px; padding: 5px; outline: none; }
    .m-map .search button{ line-height: 26px; background: #fff; border: 1px solid #ccc; width: 50px; text-align: center; }
    .m-map .result{ max-height: 300px; overflow: auto; margin-top: 10px; }
</style>
