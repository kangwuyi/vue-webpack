<template>
    <div class="content-status">
        <div class="clearfix" v-if="BospitalSearchFilters[0]">
            <span class="pull-left fs14 c-6 pt8">所有国家：</span>
            <ul class="clearfix pl80" v-if="BospitalSearchFilters[0].options">
                <li v-bind:class="item.value===isCountryValue?'act':''"
                    v-for="item in BospitalSearchFilters[0].options" :value="item.value"
                    @click="updateIsCountry($event)">
                    {{item.title}}
                </li>
            </ul>
        </div>
        <div class="clearfix" v-if="BospitalSearchFilters[1]">
            <span class="pull-left fs14 c-6 pt8">所有科室：</span>
            <ul class="clearfix pl80" v-if="BospitalSearchFilters[1].options">
                <li v-bind:class="item.value===isDepartmentValue?'act':''"
                    v-for="item in BospitalSearchFilters[1].options" :value="item.value"
                    @click="updateIsDepartment($event)">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import CheckReqStatus from "@/tools/checkReqStatus";

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
        },
        methods: {
            renderData() {
                let _self = this;
                axios.all([
                    axios.get('/hospital/search_filters')
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
                window.location.href = 'http://jap.chujingyi.cn';
            },
            updateIsDepartment(e) {
                window.location.href = 'http://jap.chujingyi.cn';
            },
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .info-nav-menu-box {

    }
</style>>