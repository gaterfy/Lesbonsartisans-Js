/*test front Technique*/

function getShortMessage(arrayT){
	const result = arrayT.filter(word => word.length < 50);
	//console.log("liste Filtrer", result); debug mode
	return result;
}
getShortMessage(["gate","BonjourHellokunsaBonjourHellokunsaBonjourHellokunsaBonjourHellokunsaBonjourHellokunsaBonjourHellokunsaBonjourHellokunsaBonjourHellokunsaBonjourHellokunsaBonjourHellokunsaBonjourHello","kunsa"]);

