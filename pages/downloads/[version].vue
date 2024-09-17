<script setup lang="ts">
useHead({
	title: "Downloads",
});
definePageMeta({
	name: "Downloads",
	validate: async (route) => {
		return typeof route.params.version == "string" &&
			(route.params.version == "latest" ||
			/^(v)*\d.\d.\d$/.test(route.params.version));
	}
});

import type { MDCData, MDCParserResult, MDCRoot } from "@nuxtjs/mdc";
import { parseMarkdown } from "@nuxtjs/mdc/runtime";

const route = useRoute();
const url = `https://api.github.com/repos/wrapper-offline/wrapper-offline/releases/${
	route.params.version == "latest" ?
		"latest" :
		"tags/" + route.params.version
}`;
const response = await fetch(url);

let ast = ref({
    data: {} as MDCData,
    body: {} as MDCRoot,
} as MDCParserResult | null);

if (!response.ok) {
	if (response.status == 404) {
		goToMainPage();
	} else {
		throw new Error(`Response status: ${response.status}`);
	}
} else {
	const release = await response.json();
	ast = await useAsyncData("markdown", () => parseMarkdown(release.body)).data;
}

function goToMainPage() {
	navigateTo("/downloads");
}

</script>

<template>
	<main>
		<h2>Download Wrapper: Offline</h2>
		<MDCRenderer :body="ast!.body" :data="ast!.data"/>
	</main>
</template>
