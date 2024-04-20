export const datafacts = async () => {
	try {
		const facts = await fetch(`https://cataas.com/cat/says/${Text}`).then((res) => res.json());
		console.log();
		return facts;
	} catch (error) {}
};
