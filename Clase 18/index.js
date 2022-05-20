const traerDatosApi = (ms) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ datos: ms });
		}, ms);
	});
};

/*

 return new Promise((resolve,reject)=>{
	 resolve(datos * 20)
 })

 */

const mostrarResultado = async () => {
	try {
		const { datos } = await traerDatosApi(2000);

		if (datos * 20 > 2500) {
		}

		return { data: datos * 20 };
	} catch (error) {
		return { error };
	} finally {
		console.log('termine');
	}
};

mostrarResultado().then((res) => {
	console.log({ res });
	if (res.error) {
		console.log('Che, hubo un error');
	} else {
		console.log(res.data);
	}
});
