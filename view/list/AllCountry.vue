<template>
    <div class="box list-nav">
        <div v-if="BospitalSearchFilters[0]">
            <span class="sub-nav-title" :value="BospitalSearchFilters[0].key">{{BospitalSearchFilters[0].title}}：</span>
            <ul class="clearfix">
                <li v-bind:class="item.value===isCountryValue?'c-green':''"
                    v-for="item in BospitalSearchFilters[0].options" :value="item.value"
                    @click="updateIsCountry($event)">
                    {{item.title}}
                </li>
            </ul>
        </div>
        <div v-if="BospitalSearchFilters[1]">
            <span class="sub-nav-title" :value="BospitalSearchFilters[1].key">{{BospitalSearchFilters[1].title}}：</span>
            <ul class="clearfix">
                <li v-bind:class="item.value===isDepartmentValue?'c-green':''"
                    v-for="item in BospitalSearchFilters[1].options" :value="item.value"
                    @click="updateIsDepartment($event)">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    import CheckReqStatus from "@/tools/checkReqStatus";
    import EventBus from "@/router/eventBus";

    export default {
        name: "ly-all-country",

        data: function () {
            return {
                isCountry: 'country',
                isDepartment: 'dept',
                isCountryValue: '',
                isDepartmentValue: '',
                BospitalSearchFilters: [],
            }
        },
        // 监听路由，每次进入页面调用方法，放在method里
        mounted() {
            this.renderData();
            this.allCountryEvent();
        },
        methods: {
            renderData() {
                let _self = this;
                axios.all([
                    axios.get('http://apiv2.chujingyi.cn/v2/hospital/search_filters')
                ]).then(axios.spread(function (
                    BospitalSearchFilters,
                ) {
                    let dataFilters = CheckReqStatus(BospitalSearchFilters.data)[0].filters;
                    _self.isCountry = dataFilters[0].key;
                    _self.isDepartment = dataFilters[1].key;
                    _self.isCountryValue = dataFilters[0].options[0].value;
                    _self.isDepartmentValue = dataFilters[1].options[0].value;
                    _self.BospitalSearchFilters = dataFilters;
                }));
            },
            updateIsCountry(e) {
                this.isCountryValue = e.target.getAttribute('value');
                this.allCountryEvent();
            },
            updateIsDepartment(e) {
                this.isDepartmentValue = e.target.getAttribute('value');
                this.allCountryEvent();
            },
            allCountryEvent() {
                EventBus.$emit('allCountry', {
                    isCountry: this.isCountry,
                    isDepartment: this.isDepartment,
                    isCountryValue: this.isCountryValue,
                    isDepartmentValue: this.isDepartmentValue,
                })
            }
        }
        ,
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .info-nav-menu-box {

    }
</style>>