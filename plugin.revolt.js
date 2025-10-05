state.plugins.add({
    format: 1,
    version: "1.0.0", 
    namespace: "SpvceR3ii",
    id: "Revive The Revolt",
    entrypoint: `
	async () => {
		const replaceLogo = () => {
			const stoatLogo = document.querySelector('img[src="/assets/wide.svg"]');
			if (stoatLogo) {
				const h3 = stoatLogo.parentElement;
				if (h3 && h3.tagName === 'H3') {
					h3.innerHTML = 'Hey there! Welcome to<br><img src="https://raw.githubusercontent.com/revoltchat/revolt.chat/refs/heads/main/src/assets/wordmark-w-only.svg">';
				}
			}
		};

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length) {
					replaceLogo();
				}
			});
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});

		replaceLogo();
	}
`
});
