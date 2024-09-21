<style lang="scss">

.warning {
	background: #f7f7e2;
    border: 1px solid #bfbf58;
    border-radius: 4px;
	margin-top: 15px;
    padding: 5px 18px;
	display: none;

	&.show {
		display: block;
	}

	html.dark & {
		background: #292914;
		border-color: #37370d;
	}
}

.version_box {
	background: #d6d3f3;
    border: 1px solid #b0add2;
    border-radius: 4px;
    margin-top: 10px;
	padding: 16px 18px;
	display: flex;

	&>.version_info {
		width: 300px;
	}

	&>.info_box {
		background: #e0ddf8;
		border: 1px solid #b0add2;
		border-radius: 4px;
		flex-grow: 1;

		html.dark & {
			background: #1d1c25;
			border-color: #282730;
		}
	}

	html.dark & {
		background: #19191f;
		border-color: #2a2932;
	}
}

</style>

<script setup lang="ts">
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
const Release = useRelease();
let showWarning = false, errorMsg = "";

let version = "";
let date = "";
let subtitle = "";

let ast = ref({
	data: {} as MDCData,
	body: {} as MDCRoot,
} as MDCParserResult | null);

try {
	const release = await Release.get(route.params.version as string);
	// display warning if the version is old
	if (route.params.version != "latest") {
		const latest:{tag_name:string} = await Release.get("latest");
		if (latest.tag_name !== (route.params.version as string)) {
			showWarning = true;
		}
	}
	const [heading, start, end] = getHeading(release.body);
	release.body = release.body.substring(end as number + 1);
	[version, date, subtitle] = (heading as string).split(" - ");
	version = version.substring(1);
	ast = useAsyncData("markdown", () => parseMarkdown(release.body)).data;
	useHead({
		title: "Downloads",
	});
} catch (err:any) {
	if (err instanceof Error) {
		const status = err.message.split(":")[1];
		errorMsg = status;
		console.log(err);
	}
}

function getHeading(md:string) {
	const startIndex = md.indexOf("#");
	const endIndex = md.indexOf("\n", startIndex);
	const heading = md.substring(startIndex, endIndex);
	return [heading, startIndex, endIndex];
}

function goToMainPage() {
	navigateTo("/downloads");
}

</script>

<template>
	<div>
		<Title>Download {{ version }}</Title>
		<section class="page_heading">
			<h1>Download Wrapper: Offline</h1>
			<div ref="msg_container">
				<Error ref="error" :class="errorMsg.length > 0 ? 'show' : ''">{{errorMsg}}</Error>
				<div class="warning" :class="showWarning ? 'show' : ''">
					You are viewing an older version of Wrapper: Offline.
					<NuxtLink to="/downloads/latest">Click here to visit the latest version.</NuxtLink>
				</div>
			</div>
		</section>
		<main>
			<div class="version_box">
				<div class="version_info">
					<h2>{{ version.trim() }}</h2>
					<p>{{ subtitle.trim() }}</p>
					<small>Released on {{ date.trim() }}</small>
				</div>
				<MDCRenderer class="info_box" :body="ast!.body" :data="ast!.data"/>
			</div>
		</main>
	</div>
</template>
