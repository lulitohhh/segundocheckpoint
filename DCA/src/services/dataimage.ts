export const dataimage = async () => {
	try {
		const dataimage = await fetch(` https://cataas.com/cat/says/${Image}`).then((res) => res.json());
		return dataimage;
	} catch (error) {}
};
