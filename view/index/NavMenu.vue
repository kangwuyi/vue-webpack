<template>
    <div class="nav-menu">
        <ul class="nav-menu-wrapper">
            <li v-for="item in items" :key="item.title">
                <a :href="item.url" class="nav-link"><i class="icon" :class="[item.icon]"></i>{{ item.title }}</a>

                <div v-if="item.children" class="nav-child">
                    <template v-for="child in item.children">
                        <a
                                :key="child.id"
                                class="disease"
                                :href="child.url"
                                target="_blank"
                        >{{ child.name }}</a
                        >
                    </template>
                </div>
            </li>
        </ul>
    </div>
</template>
<div class="banner">
    <div class="box">
        <el-menu
                class="b-nav">
            <el-menu-item index="1">
                <img src="imgs/head@2x.png" width="20"/>
                <span>头部</span>
            </el-menu-item>
        </el-menu>
    </div>
</div>