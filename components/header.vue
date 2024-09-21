<style lang="css">
header {
	background: #16161d;
	border-bottom: 1px solid #433d5d;
	display: flex;
	justify-content: space-between;
	padding: 4px 24px 0;
	height: 50px;

	#logo {
		height: 40px;
	}

	& ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	& li {
		display: inline-block;
	}

	html.dark & {
		background: #16161d;
		border-color: #2e2d39;
	}

	



.btn {
    background: #282637;
    border-radius: 4px;
    padding: 6px 10px;
	display: inline-block;
}
.btn.primary {
	background: #7e78a7;
}

.dropdown_container {
	position: relative;
}
.dropdown {
	background: #fff;
    border-radius: 4px;
	list-style: none;
    position: absolute;
    margin-top: 2px;
	right: 0;
	padding: 4px;
    width: 150px;
	/* display: none; */
}
.dropdown li {
	padding: 4px 10px;
	width: 100%;
	line-height: 1.5;
}
}

</style>

<template>
	<header>
		<NuxtLink to="/">
			<img id="logo" src="../public/img/logo.svg" alt="Wrapper: Offline"/>
		</NuxtLink>
		<ul class="header_middle">
			<li>
				<a href="https://github.com/Wrapper-Offline/Wrapper-Offline/wiki" class="btn">
					FAQ
				</a>
			</li>
			<Dropdown>
				<template #toggle>
					<a href="https://github.com/Wrapper-Offline/Wrapper-Offline/wiki" class="btn">
						Subprojects
					</a>
				</template>
				<template #dropdown>
					<ul>
						<li>
							<a href="https://github.com/wrapper-offline/anifire">Anifire</a>
						</li>
						<li>
							<a href="https://github.com/wrapper-offline/mxmizer">MXMizer</a>
						</li>
					</ul>
				</template>
			</Dropdown>
			<li>
				<a href="https://discord.gg/yhGAetN" class="btn">
					Discord
				</a>
			</li>
			<li>
				<a href="https://github.com/Wrapper-Offline/Wrapper-Offline/wiki" class="btn">
					GitHub
				</a>
			</li>
		</ul>
		<ul class="header_right">
			<NuxtLink class="btn" to="/downloads/latest">Downloads</NuxtLink>
		</ul>
	</header>
</template>
