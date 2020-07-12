<template>
    <div class="box clearfix">
        <div class="content-box pull-left">
            <h4 class="c-6">{{CasesDetail.title}}</h4>
            <p class="c-9">淋巴瘤治疗推荐医院：</p>
            <ly-info-ids></ly-info-ids>
            <ly-all-country></ly-all-country>
            <!-- content -->
            <div v-html="CasesDetail.contents">
                {{CasesDetail.contents}}}
            </div>
            <!-- content -->
            <p class="next"><a href="#">上一篇：如何做好BE临床试验监查？（二）-菁语良研11</a></p>
            <p class="next"><a href="#">下一篇：如何做好BE临床试验监查？（二）-菁语良研11</a></p>
        </div>
        <ly-latest-news></ly-latest-news>
    </div>
</template>
<script>
    import InfoIds from '@/info/InfoIds'
    import AllCountry from "@/info/AllCountry";
    import LatestNews from "@/info/LatestNews";

    export default {
        name: "ly-info-content",
        data: function () {
            return {
                CasesDetail: {},
            }
        },
        components: {
            'ly-info-ids': InfoIds,
            'ly-all-country': AllCountry,
            'ly-latest-news':LatestNews
        },
      mounted() {
        this.renderData();
      },

      methods: {
        renderData() {
          let _self = this;
          axios.all([
            axios.get('/cases/detail?id=12'),
          ]).then(axios.spread(function (
            CasesDetail,
          ) {
            console.log(CasesDetail)
            _self.CasesDetail = CasesDetail.data.data;
          }));
        }

      }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .info-nav-menu-box {

    }
</style>