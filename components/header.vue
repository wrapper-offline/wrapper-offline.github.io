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
}
html.dark header {
	background: #16161d;
	border-color: #2e2d39;
}
</style>

<template>
	<header>
		<NuxtLink to="/">
			<img id="logo" src="../public/img/logo.svg" alt="Wrapper: Offline"/>
		</NuxtLink>
		<ul class="header-buttons">
			<li>
				<a href="https://github.com/Wrapper-Offline/Wrapper-Offline/wiki" class="btn">
					FAQ
				</a>
			</li>
			<NuxtLink class="btn" to="/downloads/latest">Downloads</NuxtLink>
			<!-- <li class="dropdown_container">
				<a class="btn primary dropdown_btn">Downloads</a>
				<ul class="dropdown">
					<li>
						<a href="https://github.com/Wrapper-Offline/Wrapper-Offline/releases/download/v2.0.0/wrapper-offline-win32-x64.zip">Windows</a>
					</li>
					<li>
						<a href="https://github.com/Wrapper-Offline/Wrapper-Offline/releases/download/v2.0.0/Wrapper.Offline-macos-x64.zip">macOS</a>
					</li>
					<li>
						<a href="https://github.com/Wrapper-Offline/Wrapper-Offline/releases/download/v2.0.0/wrapper-offline-linux-x64.zip">Linux</a>
					</li>
				</ul>
			</li> -->
		</ul>
	</header>
</template>
