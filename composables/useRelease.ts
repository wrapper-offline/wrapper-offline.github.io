const AUTHOR = "wrapper-offline";
const MAIN_REPO = "wrapper-offline";

async function get(tag:string) {
	const url = `https://api.github.com/repos/${AUTHOR}/${MAIN_REPO}/releases/${
		tag == "latest" ? "latest" : "tags/" + tag
	}`;
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`status:${response.status}`);
	} else {
		const release = await response.json();
		return release;
	}
}

export default function useRelease() {
	return { get };
};
