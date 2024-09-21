<style lang="css">
@import url(node_modules/modern-normalize/modern-normalize.css);

html, body {
	background: #e4e2f9;
	color: #414855;
	font: 15px/1.7 "Sailec", sans-serif;
}

html.dark, html.dark body {
	background: #1e1d25;
	color: #eee;
}

main {
	padding: 20px 24px;
}

.page_heading {
	border-bottom: 1px solid #2e2d39;
	text-align: center;
    padding: 30px 24px;
}
.page_heading h1 {
	margin: 0;
}

/**
font importing
**/
@font-face {
	font-family: "Sailec";
	font-weight: 100;
	src: url("../fonts/Sailec-Thin.woff") format("woff");
}
@font-face {
	font-family: "Sailec";
	font-weight: 200;
	src: url("../fonts/Sailec-Light.woff") format("woff");
}
@font-face {
	font-family: "Sailec";
	font-weight: 400;
	src: url("../fonts/Sailec-Regular.woff") format("woff");
}
@font-face {
	font-family: "Sailec";
	font-weight: 500;
	src: url("../fonts/Sailec-Medium.woff") format("woff");
}
/* font weight 500 and font weight 700 (bold) are the same for better integration support */
@font-face {
	font-family: "Sailec";
	font-weight: 700;
	src: url("../fonts/Sailec-Medium.woff") format("woff");
}
</style>

<script setup lang="ts">

const route = useRoute();
useHead({
	titleTemplate: (title) => {
		return title ? `${title} - Wrapper: Offline` : "Wrapper: Offline";
	},
	meta: [{ property: 'og:title', content: `App Name - ${route.meta.title}` }]
});

function initTheme() {
	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		setTheme("dark");
		return;
	}
	setTheme("light");
}
function setTheme(mode:"light"|"dark") {
	let isDark = true;
	if (mode == "light") {
		isDark = false;
	}
	document.documentElement.classList.remove("dark", "light");
	document.documentElement.classList.add(isDark ?
		"dark" : "light");
}

onMounted(() => {
	initTheme();
})

</script>

<template>
	<div>
		<Header/>
		<NuxtPage/>
	</div>
</template>
