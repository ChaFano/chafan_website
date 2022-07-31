<template>
  <div>
        <div class="rang_style" v-for="item in blogList" :key="item.copyright">
            <div>
                <el-image :src="item.url" class="blog">
                    <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                    </div>
                </el-image>
                <div class="content">
                    <span class="demonstration">{{item.copyright}}</span><br>
                    <span class="demonstration">{{item.enddate}}</span>
                </div>
            </div>
            
            
            
        </div>
  </div>
</template>

<script>
export default {
    name:'Blog',
    data(){
        return{
            blogList:[
    {
      "url": "https://cn.bing.com/th?id=OHR.BactrianCamels_ZH-CN1072425996_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "两只双峰骆驼 ",
      "enddate": "2022-02-24"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.BerchtesgadenerAlpen_ZH-CN0740088231_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "贝希特斯加登阿尔卑斯山脉全景，德国巴伐利亚州 ",
      "enddate": "2022-02-24"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.BigHole_ZH-CN2671071218_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "苏阿海沟，萨摩亚乌波卢岛南海岸 ",
      "enddate": "2022-01-17"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.BoguraChili_ZH-CN2707755390_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "农场上晾晒的红辣椒，孟加拉国博格拉县 ",
      "enddate": "2022-01-17"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.CrystalCave_ZH-CN1284839856_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "冰川洞穴里流动的河流，冰岛瓦特纳冰原 ",
      "enddate": "2022-02-24"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.CypressTunnel_ZH-CN1174542149_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "雷斯岬国家海岸公园里柏树隧道，美国加利福尼亚州 ",
      "enddate": "2022-02-24"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.EarthDay2022_ZH-CN5733809629_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "卡鲁拉国家公园里的小湖，爱沙尼亚 ",
      "enddate": "2022-04-23"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.FanjingStairs_ZH-CN0360402048_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "梵净山，中国西南部 ",
      "enddate": "2022-01-17"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.FortedeSao_ZH-CN0093358703_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "纳扎雷灯塔，葡萄牙 ",
      "enddate": "2022-01-07"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.GreatRidge_ZH-CN6165605288_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "大脊山，英格兰峰区国家公园 ",
      "enddate": "2022-05-02"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.GreatTits_ZH-CN0546267922_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "冬天树枝上的大山雀，法国 ",
      "enddate": "2022-02-24"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.Hunebourg_ZH-CN6038786751_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "下莱茵省的胡内城堡，法国阿尔萨斯大区 ",
      "enddate": "2022-05-02"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.IPBDMom_ZH-CN5918907676_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "在妈妈身旁玩耍的北极熊宝宝们，加拿大曼尼托巴省 ",
      "enddate": "2022-02-28"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.IcelandBonfire_ZH-CN9270966209_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "跨年夜的篝火晚会，冰岛雷克雅未克 ",
      "enddate": "2022-01-07"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.IcelandicSummer_ZH-CN1779278033_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "在公路上吃草的绵羊，冰岛 ",
      "enddate": "2022-04-23"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.KhomyakMountain_ZH-CN6296455717_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "宛如圣诞精灵的树干，乌克兰喀尔巴阡山脉 ",
      "enddate": "2022-01-07"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.KjellHenriksen_ZH-CN6626275076_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "半球形的谢尔亨里克森天文台，挪威斯瓦尔巴群岛 ",
      "enddate": "2022-01-07"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.LamplughGlacier_ZH-CN5709513673_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "冰川湾国家公园里的兰普鲁冰川，美国阿拉斯加州 ",
      "enddate": "2022-02-28"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.MuteSwan_ZH-CN1554957153_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "两只躲在妈妈尾羽下的疣鼻小天鹅，纽约长岛 ",
      "enddate": "2022-04-23"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.OreamnosAmericanus_ZH-CN6731612431_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "育空地区的落基山羊，加拿大 ",
      "enddate": "2022-01-07"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.PlitviceBoardwalk_ZH-CN1370384104_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "十六湖国家公园，克罗地亚 ",
      "enddate": "2022-04-23"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.PorcupineWillow_ZH-CN0280041973_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "爬上柳树枝头的豪猪，美国阿拉斯加 ",
      "enddate": "2022-01-17"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.Rauchnachte_ZH-CN6061051054_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "湖畔的一棵小圣诞树，奥地利魏森湖 ",
      "enddate": "2022-01-07"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.RedwoodSprout_ZH-CN6224667074_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "巨型红杉的小萌芽，加利福尼亚州 ",
      "enddate": "2022-05-02"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.RiceBangladesh_ZH-CN0196473460_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "正在晾晒的大米，孟加拉国达卡 ",
      "enddate": "2022-01-09"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.RichmondDeer_ZH-CN0408206629_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "里士满公园的雄鹿，英国伦敦 ",
      "enddate": "2022-02-24"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.RobinsEgg_ZH-CN0838507211_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "蓝色的美洲知更鸟蛋，新泽西州 ",
      "enddate": "2022-04-23"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.RydalWater_ZH-CN2787617470_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "莱达尔湖, 英格兰坎布里亚郡湖区 ",
      "enddate": "2022-01-17"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.SaCalobra_ZH-CN0945855556_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "通往萨卡洛布拉湾的路，西班牙马约卡岛 ",
      "enddate": "2022-01-17"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.SalehurstChurch_ZH-CN6419013724_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "日光下的村落，英格兰东萨塞克斯郡 ",
      "enddate": "2022-01-07"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.SkiTouring_ZH-CN0237169285_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "在高地陶恩山脉的滑雪旅行，奥地利巴德加斯坦 ",
      "enddate": "2022-01-17"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.SnowBuntings_ZH-CN6554424742_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "暴雪中成群的雪鹀，美国纽约 ",
      "enddate": "2022-01-07"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.SquareTowerHouse_ZH-CN1203640326_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "梅萨维德国家公园的方形塔楼，美国科罗拉多州 ",
      "enddate": "2022-04-23"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.SvalbardSun_ZH-CN6108396467_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "午夜的太阳，挪威斯瓦尔巴群岛 ",
      "enddate": "2022-05-02"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.SycamoreStars_ZH-CN0996978485_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "哈德良长城上空的北极光，英格兰诺森伯兰郡 ",
      "enddate": "2022-02-24"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.TasiilaqAurora_ZH-CN0330057121_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "搁浅船只上空的极光，格陵兰岛塔西拉克 ",
      "enddate": "2022-01-17"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.ThreeKings_ZH-CN5954425982_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "圣安德鲁斯湾岸边的三只王企鹅，南乔治亚岛 ",
      "enddate": "2022-04-25"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.TravertineTurkey_ZH-CN6430409651_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "土耳其棉花堡的石灰华梯田 ",
      "enddate": "2022-05-02"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.VanBlooms_ZH-CN6370306779_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "盛开的金链花树和紫色葱属植物，加拿大温哥华 ",
      "enddate": "2022-05-02"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.VictoriaMemorialKolkata_ZH-CN5801450386_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "维多利亚纪念堂，印度加尔各答 ",
      "enddate": "2022-04-23"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.WesterheverLight_ZH-CN6827035695_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "星空下的灯塔，德国Westerhever镇 ",
      "enddate": "2022-01-07"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.WhalesDolphins_ZH-CN0636695997_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "在海洋里畅游的座头鲸和海豚，美国夏威夷州 ",
      "enddate": "2022-02-24"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.WheatonYukon_ZH-CN5573629391_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "怀特霍斯市的落日余晖，加拿大育空地区 ",
      "enddate": "2022-02-25"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.WiedehopfElbe_ZH-CN6286311611_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "正在投喂幼鸟的戴胜鸟，德国 ",
      "enddate": "2022-05-02"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.WinterBison_ZH-CN0120689382_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "黄石国家公园的美洲野牛，美国怀俄明州 ",
      "enddate": "2022-01-08"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.WinterCotswolds_ZH-CN6017348883_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "霜雪覆盖下的科茨沃尔德，英格兰 ",
      "enddate": "2022-02-28"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.Yellowstone150_ZH-CN0551084440_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "黄石国家公园的大棱镜泉鸟瞰图，美国怀俄明州 ",
      "enddate": "2022-04-23"
    },
    {
      "url": "https://cn.bing.com/th?id=OHR.YosemiteNightSky_ZH-CN5864740024_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      "copyright": "半穹顶景观点上空的银河，加利福尼亚州 ",
      "enddate": "2022-04-25"
    }
            ]
            
        }
    }
}
</script>

<style>
    .blog{
        width: 400px;
        height: 300px;
        border-radius: 10px;
        margin:50px 10px 10px 0 ;

    }

    .rang_style{
        display: inline-block;
        
    }

    .content{
        width: 400px;
    }

</style>