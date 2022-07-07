const addMetadata = (_dna, _edition) => 
{ 
  let dateTime = Date.now(); 
  let tempMetadata = { 
  name: `${namePrefix} #${_edition}`,       description: description, 
  image: `${baseUri}/${_edition}.png`, 
  dna: sha1(_dna), 
  edition: _edition, 
  date: dateTime, 
  ...extraMetadata, 
  attributes: attributesList, 
  compiler: "HashLips Art Engine", }; 
  if (network == NETWORK.sol) 
  { tempMetadata = { //Added metadata for solana .  
  name: tempMetadata.name, 
  symbol: solanaMetadata.symbol, 
  description: tempMetadata.description, 
  //Added metadata for solana
  seller_fee_basis_points:solanaMetadata.seller_fee_basis_points, 
  image: `${_edition}.png`, //Added metadata for solana 
  external_url: solanaMetadata.external_url, edition: _edition, 
  ...extraMetadata, 
  attributes: tempMetadata.attributes,
  //collection: solanaMetadata.collection,
   
   properties: 
   
  {
  creators: solanaMetadata.creators,
  files: 
  [ 
  { uri: `${_edition}.png`, type: "image/png", },
  ], 
  category: "image", 
  collection: solanaMetadata.collection,
   }, 
   
   }; 
   
   } 
   metadataList.push(tempMetadata);   attributesList = [];};