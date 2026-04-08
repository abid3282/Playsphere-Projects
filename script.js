// ─────────────────────────────────────────────────────────────
// PLAYSPHERE CATALOGUE — script.js
//
// HOW TO EDIT THIS FILE SAFELY:
//
//  ★ TO ADD / EDIT A PROJECT — only touch the PROJECTS object below.
//    Each project has: name, thumb, concept (array), build (array)
//    All image URLs start with the B shorthand variable.
//
//  ★ TO CHANGE SECTOR LABELS / COLOURS — only touch the META object.
//
//  ★ EVERYTHING ELSE (interactions, lightbox, animations) — leave alone
//    unless you know what you're doing. It all lives below the data section.
//
// ─────────────────────────────────────────────────────────────

// Detect touch/mobile at the very top so all code below can use it
var IS_TOUCH = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

// ─────────────────────────────────────────────────────────────
// ★ PROJECT DATA — EDIT HERE
// ─────────────────────────────────────────────────────────────

var B = 'https://static.wixstatic.com/media/';

var PROJECTS = {
  res: [
    { name:'Meadow Dance by Total Environment', thumb:B+'3e7de2_f3114be8e6f34dbca3c603b95fefccfd~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_f3114be8e6f34dbca3c603b95fefccfd~mv2.png', concept:[B+'3e7de2_ee81a3897607491da15a4899d3631a11~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_ee81a3897607491da15a4899d3631a11~mv2.jpeg'], build:[B+'3e7de2_8b46cc32ab7f462c975ce3620c34ca8a~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_8b46cc32ab7f462c975ce3620c34ca8a~mv2.jpeg',B+'3e7de2_bc554247144745a88bc8d63a0fd57522~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_bc554247144745a88bc8d63a0fd57522~mv2.jpeg',B+'3e7de2_c2e7e8be0eda4000a47755ee77c83343~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_c2e7e8be0eda4000a47755ee77c83343~mv2.jpeg',B+'3e7de2_cffaf3a9f01a4d9ca6f19a0267d88385~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_cffaf3a9f01a4d9ca6f19a0267d88385~mv2.jpeg',B+'3e7de2_d6ef9a66d1244bb68a0a2a92303b55f2~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_d6ef9a66d1244bb68a0a2a92303b55f2~mv2.jpeg',B+'3e7de2_e07e98fe55cc42da9e4620c869fd8f20~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_e07e98fe55cc42da9e4620c869fd8f20~mv2.jpeg',B+'3e7de2_056d79d7ee9f4c85b42b2a5174f5f81e~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_056d79d7ee9f4c85b42b2a5174f5f81e~mv2.jpeg',B+'3e7de2_c5ded487d4e54610b28465e0fa07efcf~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_c5ded487d4e54610b28465e0fa07efcf~mv2.jpeg'], nocrop:true },
    { name:'Purvankara Tivoli', thumb:B+'3e7de2_cfd89d883f4c4762b50fb9200f3d5f08~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_cfd89d883f4c4762b50fb9200f3d5f08~mv2.png', concept:[B+'3e7de2_33a990a0711c403fa792b79049a451f6~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_33a990a0711c403fa792b79049a451f6~mv2.jpeg'], build:[B+'3e7de2_516bfed6d8c34782b353dce9f0e79346~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_516bfed6d8c34782b353dce9f0e79346~mv2.jpg',B+'3e7de2_4ce2179267824dfab4fc5d958e3ef161~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_4ce2179267824dfab4fc5d958e3ef161~mv2.jpg',B+'3e7de2_98eb28dbcf8b410d9e32449b392d76e0~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_98eb28dbcf8b410d9e32449b392d76e0~mv2.jpg',B+'3e7de2_f9681003c9c542b1863a652ed84614d2~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_f9681003c9c542b1863a652ed84614d2~mv2.jpg',B+'3e7de2_78a6a083f9654b31b4c2e9c6fdfef777~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_78a6a083f9654b31b4c2e9c6fdfef777~mv2.jpg',B+'3e7de2_585f9b9e8c17480798eda063d557d348~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_585f9b9e8c17480798eda063d557d348~mv2.jpg',B+'3e7de2_81c5ba7afbf64518b4f278374dbf61e0~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_81c5ba7afbf64518b4f278374dbf61e0~mv2.jpg',B+'3e7de2_a743d43842d04033a049c6e9b58b951f~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_a743d43842d04033a049c6e9b58b951f~mv2.jpg',B+'3e7de2_bdc8297b02c74d9188f028fdb787224d~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_bdc8297b02c74d9188f028fdb787224d~mv2.jpg',B+'3e7de2_dabe9d3a449f49cb83e3453de8d21210~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_dabe9d3a449f49cb83e3453de8d21210~mv2.jpg'] },
    { name:'Purva Zenium', thumb:B+'3e7de2_65bb3fce7dcc4a64ac0110798e771781~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_65bb3fce7dcc4a64ac0110798e771781~mv2.png', concept:[B+'3e7de2_4192fe76371648d19dba33ffcf4361a7~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_4192fe76371648d19dba33ffcf4361a7~mv2.jpg'], build:[B+'3e7de2_5d036e91044d4ed9b1c6975dd1517c23~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_5d036e91044d4ed9b1c6975dd1517c23~mv2.jpg',B+'3e7de2_aedaff340c8545d6881e868e5887894a~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_aedaff340c8545d6881e868e5887894a~mv2.jpg',B+'3e7de2_44cbd96a6cfa44ce989cad29b2a80453~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_44cbd96a6cfa44ce989cad29b2a80453~mv2.jpg',B+'3e7de2_6de161556f00472fb457e6eba6111575~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_6de161556f00472fb457e6eba6111575~mv2.jpg',B+'3e7de2_4d4e998800a0451086d3904e6abd31f5~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_4d4e998800a0451086d3904e6abd31f5~mv2.jpg',B+'3e7de2_47057b0a991b47f1b96eaa6c1ffca85b~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_47057b0a991b47f1b96eaa6c1ffca85b~mv2.jpg',B+'3e7de2_1dd0d32976c94f3f81ab7b1481b74752~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_1dd0d32976c94f3f81ab7b1481b74752~mv2.jpg'] },
    { name:'Purva Raagam by Purvankara', thumb:B+'3e7de2_51c58abc0b984efeab42696a3741893e~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_51c58abc0b984efeab42696a3741893e~mv2.png', concept:[B+'3e7de2_47950286cfd841acb88a4d6d488968a8~mv2.png/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_47950286cfd841acb88a4d6d488968a8~mv2.png'], build:[B+'3e7de2_a42f683c36e848eb9e517fda9da13a62~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_a42f683c36e848eb9e517fda9da13a62~mv2.jpeg',B+'3e7de2_ccdf455aa6044c6091e6394b73149df3~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_ccdf455aa6044c6091e6394b73149df3~mv2.jpeg',B+'3e7de2_4a8c0b1d1ac247e1a8a0d8af34b92478~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_4a8c0b1d1ac247e1a8a0d8af34b92478~mv2.jpeg',B+'3e7de2_6984c4254b784984af65594f33ce980b~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_6984c4254b784984af65594f33ce980b~mv2.jpg',B+'3e7de2_282bb9a6d8be41e3a30e7de35a23c2a5~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_282bb9a6d8be41e3a30e7de35a23c2a5~mv2.jpeg',B+'3e7de2_680e3a8643204cf1958489f5e2b8ae80~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_680e3a8643204cf1958489f5e2b8ae80~mv2.jpeg'] },
    { name:'MAHE Manipal', thumb:B+'3e7de2_97879c09fef24324af281921eb48c7bf~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_97879c09fef24324af281921eb48c7bf~mv2.png', concept:[B+'3e7de2_54f647a77d44484a9744a11e026af400~mv2.png/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_54f647a77d44484a9744a11e026af400~mv2.png'], build:[B+'3e7de2_ceef9c49252f4f3ba3197683cc757e2d~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_ceef9c49252f4f3ba3197683cc757e2d~mv2.jpeg',B+'3e7de2_e2d49a3db2e34bcfad495f096a139a3c~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_e2d49a3db2e34bcfad495f096a139a3c~mv2.jpeg',B+'3e7de2_bc3551c30c394bb79da9777fa88fcfe0~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_bc3551c30c394bb79da9777fa88fcfe0~mv2.jpeg',B+'3e7de2_fd940352d7a546c886db10b033da9438~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_fd940352d7a546c886db10b033da9438~mv2.jpeg',B+'3e7de2_bf9213c615f14b0696fecc7b1ff5007d~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_bf9213c615f14b0696fecc7b1ff5007d~mv2.jpeg',B+'3e7de2_ad4e88e1853048958ce118d6b1ec57a7~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_ad4e88e1853048958ce118d6b1ec57a7~mv2.jpeg',B+'3e7de2_90057da2e36448ccbb58765a2e9b196e~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_90057da2e36448ccbb58765a2e9b196e~mv2.jpeg',B+'3e7de2_80ce22b87d1044819513937884aa21f0~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_80ce22b87d1044819513937884aa21f0~mv2.jpeg',B+'3e7de2_ab7b11a8d56a4058b05019ef7d2b7e67~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_ab7b11a8d56a4058b05019ef7d2b7e67~mv2.jpeg',B+'3e7de2_14c4f11104d3491b833bd356bbbdfa16~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_14c4f11104d3491b833bd356bbbdfa16~mv2.jpeg'] },
    { name:'Ambuja Neotia', thumb:B+'3e7de2_5a8d153c85a14494a2604937314bb9bf~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_5a8d153c85a14494a2604937314bb9bf~mv2.png', concept:[B+'3e7de2_4768f12fc72d42d5bf54185050527682~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_4768f12fc72d42d5bf54185050527682~mv2.jpg'], build:[B+'3e7de2_b10461ba516c41d48974a03d5afcc569~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_b10461ba516c41d48974a03d5afcc569~mv2.jpeg',B+'3e7de2_e3b83b4c32b547d5abb6434ee4ae5e30~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_e3b83b4c32b547d5abb6434ee4ae5e30~mv2.jpeg',B+'3e7de2_c199448f80004e1d9cc57ed0c9febd46~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_c199448f80004e1d9cc57ed0c9febd46~mv2.jpeg'] },
    { name:'Courtyard by Narang Reality', thumb:B+'3e7de2_11482d322cb04ac4aa52ab42cc489bb6~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_11482d322cb04ac4aa52ab42cc489bb6~mv2.png', concept:[B+'3e7de2_476adfcc728d491bb7551dc76696283c~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_476adfcc728d491bb7551dc76696283c~mv2.jpeg'], build:[B+'3e7de2_c8df70f8a556413d93c0d38d5a8f9020~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_c8df70f8a556413d93c0d38d5a8f9020~mv2.jpeg'], video:'https://video.wixstatic.com/video/3e7de2_58a1f5239c574d9b857af216aac438df/720p/mp4/file.mp4' },
    { name:'Hosachiguru', thumb:B+'3e7de2_cf3d1e1314c44140a767b7f6e0bf376b~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_cf3d1e1314c44140a767b7f6e0bf376b~mv2.png', concept:[B+'3e7de2_edc25a8898f14c1da6d94ffe489294b3~mv2.png/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_edc25a8898f14c1da6d94ffe489294b3~mv2.png'], build:[B+'3e7de2_c0c5920dd38044c4913fb25444f81b97~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_c0c5920dd38044c4913fb25444f81b97~mv2.jpeg',B+'3e7de2_8f27c2bffb374ccb806f961bf5b48f3f~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_8f27c2bffb374ccb806f961bf5b48f3f~mv2.jpeg'] },
    { name:'Agami Spaces', thumb:B+'3e7de2_2279c03db2644a5cb06204f854fb6758~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_2279c03db2644a5cb06204f854fb6758~mv2.png', concept:[B+'3e7de2_560b68c4c08940f7a0e0bd09cf277977~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_560b68c4c08940f7a0e0bd09cf277977~mv2.jpeg'], build:[B+'3e7de2_d452c1ff86924974bf1e8a7879519e8a~mv2.png/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_d452c1ff86924974bf1e8a7879519e8a~mv2.png',B+'3e7de2_090d4b36b57d4294999ef539369fc2b3~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_090d4b36b57d4294999ef539369fc2b3~mv2.jpeg'] },
    { name:'Silver Moon', thumb:B+'3e7de2_93c8e7ad156c4fbfb3a27d6b8b67b1b1~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_93c8e7ad156c4fbfb3a27d6b8b67b1b1~mv2.png', concept:[B+'3e7de2_ed886303b3ad4728ab40e0a39a439951~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_ed886303b3ad4728ab40e0a39a439951~mv2.jpeg'], build:[B+'3e7de2_9e5c62ae57224d0089113c873b320e8b~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_9e5c62ae57224d0089113c873b320e8b~mv2.jpeg',B+'3e7de2_c13e013006a240f18c1b77175ffeb9bc~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_c13e013006a240f18c1b77175ffeb9bc~mv2.jpeg',B+'3e7de2_b0b273bc18da4411be79aa8cdd1d03de~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_b0b273bc18da4411be79aa8cdd1d03de~mv2.jpeg',B+'3e7de2_d29636b6eb9e424f903ec695033253d5~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_d29636b6eb9e424f903ec695033253d5~mv2.jpeg'] }
  ],
  edu: [
    { name:'Heritage Xperiential School', thumb:B+'3e7de2_aec59a4ee3724493951158630b6ec5e4~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_aec59a4ee3724493951158630b6ec5e4~mv2.png', concept:[B+'3e7de2_2b9e6aeae3bd47ad8c1c832b602cfdcb~mv2.png/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_2b9e6aeae3bd47ad8c1c832b602cfdcb~mv2.png'], build:[B+'3e7de2_b46d4a80f65d45ea8c20bc920ffdedc6~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_b46d4a80f65d45ea8c20bc920ffdedc6~mv2.jpeg',B+'3e7de2_2883647dc0c04e84a3a0eb0412a0e145~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_2883647dc0c04e84a3a0eb0412a0e145~mv2.jpeg',B+'3e7de2_7bfa0fac7f674482a7ff5e4ec2cf9bcb~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_7bfa0fac7f674482a7ff5e4ec2cf9bcb~mv2.jpeg',B+'3e7de2_6672e7c631014c30966a60926ce3a55f~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_6672e7c631014c30966a60926ce3a55f~mv2.jpeg',B+'3e7de2_3572c08d5b224e28badd8016c7d4c2f6~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_3572c08d5b224e28badd8016c7d4c2f6~mv2.jpeg',B+'3e7de2_b0c66e3ea1b84c74b6d1a51303d1a919~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_b0c66e3ea1b84c74b6d1a51303d1a919~mv2.jpeg',B+'3e7de2_2c9474e6b896497c9b7434402be4c3f9~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_2c9474e6b896497c9b7434402be4c3f9~mv2.jpeg',B+'3e7de2_b366b890bc4c4d1f93adbf60028a6a98~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_b366b890bc4c4d1f93adbf60028a6a98~mv2.jpeg',B+'3e7de2_fed6fe8d068a4ec088acfa30b9388226~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_fed6fe8d068a4ec088acfa30b9388226~mv2.jpeg',B+'3e7de2_7798fde38d2e4878a0a8bfe991d72d4a~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_7798fde38d2e4878a0a8bfe991d72d4a~mv2.jpeg',B+'3e7de2_f217bba91d7244be8270cddba364e183~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_f217bba91d7244be8270cddba364e183~mv2.jpeg',B+'3e7de2_546f7d154b134e1db38d8e4d1ed987eb~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_546f7d154b134e1db38d8e4d1ed987eb~mv2.jpeg',B+'3e7de2_9ffbe39b0c8d40aa902952bd1d33d51c~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_9ffbe39b0c8d40aa902952bd1d33d51c~mv2.jpeg',B+'3e7de2_5182261eff54469ca1abddba03c0995e~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_5182261eff54469ca1abddba03c0995e~mv2.jpeg',B+'3e7de2_41a1e8c3ae1f4d01b3a1f327f67c3d61~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_41a1e8c3ae1f4d01b3a1f327f67c3d61~mv2.jpeg'] }
  ],
  priv: [
    { name:'The Karjat Project', thumb:B+'3e7de2_b301a4c440ec49d290231ec40414f0a1~mv2.png/v1/fill/w_680,h_510,q_85,enc_auto/3e7de2_b301a4c440ec49d290231ec40414f0a1~mv2.png', concept:[B+'3e7de2_34eb172edd9942e58a236882f4c2f60c~mv2.jpeg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_34eb172edd9942e58a236882f4c2f60c~mv2.jpeg'], build:[B+'3e7de2_b2efe610e5c148ec9ecb2f4914162ca9~mv2.png/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_b2efe610e5c148ec9ecb2f4914162ca9~mv2.png',B+'3e7de2_fd14345d7ae3433792f9065eb0fc914c~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_fd14345d7ae3433792f9065eb0fc914c~mv2.jpg',B+'3e7de2_962ff133329549199992a6108c92462d~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_962ff133329549199992a6108c92462d~mv2.jpg',B+'3e7de2_f5ad4b24c3a4417da14805d4afb123d4~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_f5ad4b24c3a4417da14805d4afb123d4~mv2.jpg',B+'3e7de2_7e3c7dababcd43159777c5007b4c316e~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_7e3c7dababcd43159777c5007b4c316e~mv2.jpg',B+'3e7de2_aff616a2f16746d3bf2ca9f57aea1118~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_aff616a2f16746d3bf2ca9f57aea1118~mv2.jpg',B+'3e7de2_9adf5aca5025402ba78fe93c1e02fa34~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_9adf5aca5025402ba78fe93c1e02fa34~mv2.jpg',B+'3e7de2_22a6a41ad83149a989eeb788bcadca17~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_22a6a41ad83149a989eeb788bcadca17~mv2.jpg',B+'3e7de2_63b9dc4deef84ef8b76bb8cb6a97d719~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_63b9dc4deef84ef8b76bb8cb6a97d719~mv2.jpg',B+'3e7de2_b017a4886c6a427fb2f02a3b9bd4c405~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_b017a4886c6a427fb2f02a3b9bd4c405~mv2.jpg',B+'3e7de2_24e1fcab9efc47cb9ddb30ce63033c10~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_24e1fcab9efc47cb9ddb30ce63033c10~mv2.jpg',B+'3e7de2_148b371faa324c5aa6b85913b30d9e5e~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_148b371faa324c5aa6b85913b30d9e5e~mv2.jpg',B+'3e7de2_8122a1151f464e059644be6328fc77ef~mv2.jpg/v1/fill/w_1400,h_1050,q_88,enc_auto/3e7de2_8122a1151f464e059644be6328fc77ef~mv2.jpg'] }
  ]
};

// ─────────────────────────────────────────────────────────────
// ★ SECTOR META — EDIT LABELS / COLOURS HERE
// ─────────────────────────────────────────────────────────────

var META = {
  res:  { label:'Residential Development', bg:'#7D9BC1', sect:'sect-res',  tag:'tag-res'  },
  edu:  { label:'Educational Institution',  bg:'#71CC98', sect:'sect-edu',  tag:'tag-edu'  },
  priv: { label:'Private Residence',        bg:'#FB637E', sect:'sect-priv', tag:'tag-priv' }
};

// ─────────────────────────────────────────────────────────────
// RENDER — do not edit below unless you know what you're doing
// ─────────────────────────────────────────────────────────────

// Default visible project names for residential sector
var RES_DEFAULT = ['Meadow Dance by Total Environment', 'Purva Raagam by Purvankara', 'Courtyard by Narang Reality'];

function makeProjectCard(sk, p, idx, m) {
  var wrap = document.createElement('div');
  wrap.className = 'imm-project ' + m.sect;

  var img = document.createElement('img');
  img.className = 'imm-project-img';
  img.loading = 'lazy';
  img.src = p.thumb;
  img.alt = p.name;
  wrap.appendChild(img);

  var num = document.createElement('div');
  num.className = 'imm-project-num';
  num.textContent = String(idx + 1).padStart(2, '0');
  wrap.appendChild(num);

  var info = document.createElement('div');
  info.className = 'imm-project-info';

  var name = document.createElement('div');
  name.className = 'imm-project-name';
  name.textContent = p.name;
  info.appendChild(name);

  var btn = document.createElement('button');
  btn.className = 'imm-view-btn';
  btn.innerHTML = 'View Project <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6h12M8 1l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    openLB(sk, idx);
  });
  info.appendChild(btn);
  wrap.appendChild(info);

  wrap.addEventListener('click', function(e) {
    openLB(sk, idx);
  });

  return wrap;
}

function renderProjects(sk) {
  var grid = document.getElementById('grid-' + sk);
  var m = META[sk];
  var list = PROJECTS[sk];

  if (sk === 'res') {
    var defaultIdxMap = [], extraIdxMap = [], defaultList = [], extraList = [];
    for (var i = 0; i < list.length; i++) {
      if (RES_DEFAULT.indexOf(list[i].name) !== -1) {
        defaultIdxMap.push(i); defaultList.push(list[i]);
      } else {
        extraIdxMap.push(i); extraList.push(list[i]);
      }
    }
    for (var d = 0; d < defaultList.length; d++) {
      var dc = makeProjectCard(sk, defaultList[d], defaultIdxMap[d], m);
      dc.classList.add('visible');
      grid.appendChild(dc);
    }
    var extraCards = [];
    for (var x = 0; x < extraList.length; x++) {
      var ec = makeProjectCard(sk, extraList[x], extraIdxMap[x], m);
      ec.style.display = 'none';
      extraCards.push(ec);
      grid.appendChild(ec);
    }
    var vmWrap = document.createElement('div');
    vmWrap.id = 'res-view-more-wrap';
    vmWrap.style.cssText = 'grid-column:1/-1;display:flex;justify-content:flex-start;padding:8px 0 24px;';
    var vmBtn = document.createElement('button');
    vmBtn.className = 'imm-view-btn';
    vmBtn.style.cssText = 'font-size:.85rem;padding:12px 28px;';
    vmBtn.innerHTML = 'View More Projects <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M7 1v10M2 7l5 5 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    vmBtn.addEventListener('click', function() {
      extraCards.forEach(function(card) { card.style.display = ''; setTimeout(function() { card.classList.add('visible'); }, 30); });
      vmWrap.style.display = 'none';
    });
    vmWrap.appendChild(vmBtn);
    grid.appendChild(vmWrap);
    return;
  }

  // All other sectors render normally
  for (var j = 0; j < list.length; j++) {
    (function(p, idx) {
      var wrap = document.createElement('div');
      wrap.className = 'imm-project ' + m.sect;

      var img = document.createElement('img');
      img.className = 'imm-project-img';
      img.loading = 'lazy';
      img.src = p.thumb;
      img.alt = p.name;
      wrap.appendChild(img);

      var num = document.createElement('div');
      num.className = 'imm-project-num';
      num.textContent = String(idx + 1).padStart(2, '0');
      wrap.appendChild(num);

      var info = document.createElement('div');
      info.className = 'imm-project-info';

      var name = document.createElement('div');
      name.className = 'imm-project-name';
      name.textContent = p.name;
      info.appendChild(name);

      var btn = document.createElement('button');
      btn.className = 'imm-view-btn';
      btn.innerHTML = 'View Project <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 6h12M8 1l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        openLB(sk, idx);
      });
      info.appendChild(btn);
      wrap.appendChild(info);

      wrap.addEventListener('click', function(e) {
        openLB(sk, idx);
      });

      grid.appendChild(wrap);
    })(list[j], j);
  }
}

renderProjects('res');
renderProjects('edu');
renderProjects('priv');

// SCROLL REVEAL
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.05 });
document.querySelectorAll('.imm-project').forEach(function(el) { obs.observe(el); });

// SCROLL HINT
document.getElementById('scrollHint').addEventListener('click', function() {
  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

// ── INTERACTION 6: COVER TEXT SCRAMBLE ON LOAD ──────────────
// Letters randomise then resolve into final words — works on all devices
(function() {
  var tagline = document.querySelector('.cover-tagline');
  if (!tagline) return;

  var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
  var finalText = 'Every Space\nTells a Story';
  var lines = finalText.split('\n');

  // Build the HTML with scramble spans preserving the colour spans
  tagline.innerHTML =
    'Every <span class="word-space">Space</span><br>Tells a <span class="word-story">Story</span>';

  // Collect all text nodes we want to scramble
  var targets = [
    { el: tagline.childNodes[0], final: 'Every ' },
    { el: tagline.querySelector('.word-space').childNodes[0], final: 'Space' },
    { el: tagline.childNodes[3], final: 'Tells a ' },
    { el: tagline.querySelector('.word-story').childNodes[0], final: 'Story' }
  ];

  var duration = 1200; // ms total
  var startDelay = 600; // wait for page to settle
  var start = null;

  function randomChar() { return CHARS[Math.floor(Math.random() * CHARS.length)]; }

  function scramble(timestamp) {
    if (!start) start = timestamp;
    var elapsed = timestamp - start;
    var progress = Math.min(elapsed / duration, 1);

    targets.forEach(function(t, ti) {
      var str = t.final;
      var revealed = Math.floor(progress * str.length);
      var result = '';
      for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') { result += ' '; continue; }
        if (i < revealed) { result += str[i]; }
        else { result += randomChar(); }
      }
      t.el.textContent = result;
    });

    if (progress < 1) {
      requestAnimationFrame(scramble);
    } else {
      // Restore final clean state
      targets.forEach(function(t) { t.el.textContent = t.final; });
    }
  }

  setTimeout(function() { requestAnimationFrame(scramble); }, startDelay);
})();


// ── INTERACTION 4: SCROLL-LINKED SECTOR COUNTER ─────────────
// Sector numbers tick up like a slot machine when scrolled into view
// Works on all devices
(function() {
  var nums = document.querySelectorAll('.sector-divider-num');
  var finalVals = [1, 2, 3];
  var CHARS = '0123456789';
  var duration = 600; // ms

  function animateNum(el, finalVal) {
    var start = null;
    var target = String(finalVal).padStart(2, '0');

    (function tick(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      // Eased progress
      var eased = 1 - Math.pow(1 - progress, 3);

      var result = '';
      for (var i = 0; i < target.length; i++) {
        if (progress > 0.85 || Math.random() < eased) {
          result += target[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      el.textContent = result;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    })(start || performance.now());
  }

  var numObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var idx = Array.prototype.indexOf.call(nums, el);
      animateNum(el, finalVals[idx]);
      numObs.unobserve(el);
    });
  }, { threshold: 0.5 });

  nums.forEach(function(el) {
    el.textContent = '00'; // reset to 00 initially
    numObs.observe(el);
  });
})();





// SCROLL PROGRESS
var pbar = document.getElementById('prog');
window.addEventListener('scroll', function() {
  var pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  pbar.style.transform = 'scaleX(' + pct + ')';
});

// PARTICLES / CONFETTI
(function() {
  var canvas = document.getElementById('particles');
  var ctx = canvas.getContext('2d');
  var W, H, particles = [];
  var COLORS = ['#7D9BC1','#F2C75C','#71CC98','#FB637E'];
  var SHAPES = ['rect', 'rect', 'rect', 'circle', 'strip', 'strip', 'circle', 'rect'];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize);
  resize();

  var count = IS_TOUCH ? 40 : 90;
  for (var i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      w: 4 + Math.random() * 9,
      h: 3 + Math.random() * 5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.08 - Math.random() * 0.25,
      color: COLORS[Math.floor(Math.random() * 4)],
      alpha: 0.06 + Math.random() * 0.16,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.002 + Math.random() * 0.007,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.015,
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)]
    });
  }

  function drawParticle(p) {
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.strokeStyle = p.color;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    if (p.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (p.shape === 'rect') {
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    } else if (p.shape === 'strip') {
      // thin elongated confetti strip
      ctx.fillRect(-p.w, -p.h / 4, p.w * 2, p.h / 2);
    }
    ctx.restore();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(function(p) {
      p.wobble += p.wobbleSpeed;
      p.rotation += p.rotSpeed;
      p.x += p.vx + Math.sin(p.wobble) * 0.3;
      p.y += p.vy;
      if (p.y < -20) { p.y = H + 20; p.x = Math.random() * W; }
      if (p.x < -20) p.x = W + 20;
      if (p.x > W + 20) p.x = -20;
      drawParticle(p);
    });
    requestAnimationFrame(draw);
  }
  draw();
})();


// LIGHTBOX
var lbImgs = [], lbCur = 0, lbConceptCount = 0, lbNoCrop = false;

// WELCOME POPUP
(function() {
  var overlay = document.getElementById('welcome-overlay');
  var btn = document.getElementById('welcome-btn');
  if (!overlay || !btn) return;

  function closeWelcome() {
    var r = btn.getBoundingClientRect();
    overlay.classList.add('hiding');
    setTimeout(function() { overlay.style.display = 'none'; document.body.style.overflow = ''; }, 520);
  }

  document.body.style.overflow = 'hidden';
  btn.addEventListener('click', closeWelcome);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeWelcome(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && overlay.style.display !== 'none') closeWelcome(); });
})();

function openLB(sk, idx) {
  var p = PROJECTS[sk][idx];
  var m = META[sk];
  lbImgs = []; lbConceptCount = 0; lbNoCrop = !!p.nocrop;
  if (p.concept && p.concept.length) { for (var c = 0; c < p.concept.length; c++) lbImgs.push(p.concept[c]); lbConceptCount = p.concept.length; }
  if (p.build && p.build.length)     { for (var b = 0; b < p.build.length; b++)   lbImgs.push(p.build[b]); }
  document.getElementById('lbTitle').textContent = p.name;
  var tr = document.getElementById('lbToggleRow');
  tr.innerHTML = '';
  if (p.concept && p.concept.length) {
    var bc = document.createElement('button');
    bc.className = 'lb-toggle-btn concept-btn active';
    bc.textContent = 'Concept';
    bc.onclick = function() { hideLBVideo(); showImg(0); };
    tr.appendChild(bc);
  }
  if (p.build && p.build.length) {
    var bb = document.createElement('button');
    bb.className = 'lb-toggle-btn build-btn' + (lbConceptCount === 0 ? ' active' : '');
    bb.textContent = 'Build';
    bb.onclick = function() { hideLBVideo(); showImg(lbConceptCount); };
    tr.appendChild(bb);
  }
  if (p.video) {
    var bv = document.createElement('button');
    bv.className = 'lb-toggle-btn video-btn';
    bv.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="margin-right:5px;vertical-align:middle"><path d="M2 2l8 4-8 4V2z" fill="currentColor"/></svg>Video';
    bv.onclick = function() { showLBVideo(p.video); };
    tr.appendChild(bv);
  }
  showImg(0);
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
  var hint = document.getElementById('lb-swipe-hint');
  if (hint) {
    if (IS_TOUCH) {
      hint.style.display = 'block';
      hint.style.opacity = '1';
      setTimeout(function() {
        hint.style.opacity = '0';
        setTimeout(function() { hint.style.display = 'none'; }, 500);
      }, 2500);
    } else {
      hint.style.display = 'none';
    }
  }
}

function showLBVideo(url) {
  var img = document.getElementById('lbMainImg');
  var bgBlur = document.querySelector('.lb-bg-blur');
  if (bgBlur) bgBlur.style.display = 'none';
  img.style.display = 'none';
  document.getElementById('lbPrev').style.display = 'none';
  document.getElementById('lbNext').style.display = 'none';
  document.getElementById('lbDots').innerHTML = '';
  document.getElementById('lbThumbs').innerHTML = '';
  var existing = document.getElementById('lb-video-player');
  if (existing) existing.remove();
  var vid = document.createElement('video');
  vid.id = 'lb-video-player';
  vid.src = url;
  vid.controls = true;
  vid.autoplay = true;
  vid.style.cssText = 'width:100%;height:100%;object-fit:contain;border-radius:12px;background:#000;display:block;';
  img.parentNode.insertBefore(vid, img);
  document.querySelectorAll('.concept-btn, .build-btn').forEach(function(b) { b.classList.remove('active'); });
  document.querySelectorAll('.video-btn').forEach(function(b) { b.classList.add('active'); });
}

function hideLBVideo() {
  var vid = document.getElementById('lb-video-player');
  if (vid) { vid.pause(); vid.remove(); }
  var bgBlur = document.querySelector('.lb-bg-blur');
  if (bgBlur) bgBlur.style.display = '';
  document.getElementById('lbMainImg').style.display = '';
}

function showImg(i) {
  lbCur = (i + lbImgs.length) % lbImgs.length;
  var img = document.getElementById('lbMainImg');
  var existing = document.getElementById('lb-collage-grid');
  if (existing) { existing.remove(); img.parentNode.style.aspectRatio = '16/9'; }

  // Blurred background
  var bgBlur = img.parentNode.querySelector('.lb-bg-blur');
  if (!bgBlur) {
    bgBlur = document.createElement('img');
    bgBlur.className = 'lb-bg-blur';
    bgBlur.alt = '';
    img.parentNode.insertBefore(bgBlur, img);
  }
  // Blur bg needs crop-fill (al_c) so it covers the whole background,
  // regardless of whether the main image is letterboxed or not.
  (function() {
    var rawUrl = lbImgs[lbCur] || '';
    var base = rawUrl.split('/v1/fill/')[0];
    var filename = base.split('/').pop();
    bgBlur.src = base + '/v1/fill/w_1400,h_900,al_c,q_60,enc_auto/' + filename;
  })();

  img.style.display = '';
  img.style.opacity = '0';
  img.classList.toggle('lb-nocrop', lbNoCrop);
  img.src = lbImgs[lbCur] || '';
  img.onload  = function() { img.style.opacity = '1'; };
  img.onerror = function() { img.style.opacity = '0.15'; };
  var inConcept = lbCur < lbConceptCount;
  document.querySelectorAll('.concept-btn').forEach(function(b){ b.classList.toggle('active', inConcept); });
  document.querySelectorAll('.build-btn').forEach(function(b){ b.classList.toggle('active', !inConcept); });
  document.getElementById('lbPrev').style.display = lbImgs.length > 1 ? '' : 'none';
  document.getElementById('lbNext').style.display = lbImgs.length > 1 ? '' : 'none';
  var dots = document.getElementById('lbDots');
  dots.innerHTML = '';
  for (var j = 0; j < lbImgs.length; j++) {
    (function(j2) {
      var d = document.createElement('div');
      d.className = 'lb-dot' + (j2 === lbCur ? ' active' : '');
      d.onclick = function() { showImg(j2); };
      dots.appendChild(d);
    })(j);
  }
  var th = document.getElementById('lbThumbs');
  th.innerHTML = '';
  for (var k = 0; k < lbImgs.length; k++) {
    (function(k2) {
      var t = document.createElement('img');
      t.className = 'lb-thumb' + (k2 === lbCur ? ' active' : '');
      t.src = lbImgs[k2]; t.alt = '';
      t.onerror = function() { t.style.opacity = '.2'; };
      t.onclick = function() { showImg(k2); };
      th.appendChild(t);
    })(k);
  }
}

document.getElementById('lbPrev').onclick = function() { showImg(lbCur - 1); };
document.getElementById('lbNext').onclick = function() { showImg(lbCur + 1); };

// Touch swipe for lightbox
(function() {
  var imageWrap = document.querySelector('.lb-image-wrap');
  if (!imageWrap) return;
  var touchStartX = 0, touchStartY = 0;
  imageWrap.addEventListener('touchstart', function(e) { touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY; }, { passive: true });
  imageWrap.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    var dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) { if (dx < 0) showImg(lbCur + 1); else showImg(lbCur - 1); }
  }, { passive: true });
})();

function closeLB() { hideLBVideo(); document.getElementById('lightbox').classList.remove('open'); document.body.style.overflow = ''; }
document.getElementById('lbClose').onclick = closeLB;
document.getElementById('lbBackdrop').onclick = closeLB;
document.addEventListener('keydown', function(e) {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape') closeLB();
  if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
});

// ─────────────────────────────────────────────────────────────
// INTERACTION LAYER
// ─────────────────────────────────────────────────────────────

// 1. MAGNETIC CURSOR
(function() {
  var magnetTargets = document.querySelectorAll('.imm-view-btn, .cover-hint, .lb-nav-btn, .lb-close, .footer-contact');
  var STRENGTH = 0.35;
  magnetTargets.forEach(function(el) {
    el.addEventListener('mousemove', function(e) {
      var r = el.getBoundingClientRect();
      var dx = (e.clientX - (r.left + r.width / 2)) * STRENGTH;
      var dy = (e.clientY - (r.top + r.height / 2)) * STRENGTH;
      el.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
    });
    el.addEventListener('mouseleave', function() {
      el.style.transform = '';
      el.style.transition = 'transform .5s cubic-bezier(.23,1,.32,1)';
      setTimeout(function(){ el.style.transition = ''; }, 500);
    });
  });
})();

// 2. SMOOTH SCROLL
document.documentElement.style.scrollBehavior = 'smooth';

// 3. SPLIT TEXT REVEAL
(function() {
  function splitAndAnimate(el, delay) {
    // Walk child nodes so we preserve existing spans (e.g. word-space, word-story)
    var nodes = Array.prototype.slice.call(el.childNodes);
    el.innerHTML = '';
    var wordIndex = 0;
    nodes.forEach(function(node) {
      if (node.nodeType === 3) {
        // plain text — split into words
        var words = node.textContent.split(/(\s+)/);
        words.forEach(function(part) {
          if (part.match(/^\s+$/)) {
            el.appendChild(document.createTextNode(part));
          } else if (part.length) {
            var wrap = document.createElement('span');
            wrap.className = 'word-wrap';
            var inner = document.createElement('span');
            inner.className = 'word-inner';
            inner.textContent = part;
            inner.style.transitionDelay = (delay + wordIndex * 0.06) + 's';
            wrap.appendChild(inner);
            el.appendChild(wrap);
            wordIndex++;
          }
        });
      } else if (node.nodeType === 1) {
        // element node (e.g. <span class="word-space">) — wrap its text but keep the span
        var outerSpan = node.cloneNode(false);
        var wrap = document.createElement('span');
        wrap.className = 'word-wrap';
        var inner = document.createElement('span');
        inner.className = 'word-inner';
        inner.style.transitionDelay = (delay + wordIndex * 0.06) + 's';
        inner.appendChild(document.createTextNode(node.textContent));
        // copy classes from original span onto inner so colour animations still apply
        if (node.className) inner.className += ' ' + node.className;
        wrap.appendChild(inner);
        el.appendChild(wrap);
        wordIndex++;
      }
    });
  }
  var style = document.createElement('style');
  style.textContent = [
    '.word-wrap{display:inline-block;overflow:hidden;vertical-align:bottom;}',
    '.word-inner{display:inline-block;transform:translateY(110%);opacity:0;transition:transform .8s cubic-bezier(.16,1,.3,1),opacity .6s ease;}',
    '.split-reveal .word-inner{transform:translateY(0);opacity:1;}',
    '.char-flicker{animation:flicker 3s infinite;}',
    '@keyframes flicker{0%,96%,100%{opacity:1;}97%{opacity:.4;}98%{opacity:1;}99%{opacity:.6;}}',
    '.cover-tagline{transition:transform .1s linear;}',
  ].join('');
  document.head.appendChild(style);

  var targets = [
    { el: document.querySelector('.cover-tagline'), delay: 0.4 },
    { el: document.querySelector('.about-heading'), delay: 0.1 },
  ];
  targets.forEach(function(t) { if (!t.el) return; splitAndAnimate(t.el, t.delay); });

  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) { if (entry.isIntersecting) { entry.target.classList.add('split-reveal'); revealObs.unobserve(entry.target); } });
  }, { threshold: 0.3 });
  targets.forEach(function(t) { if (t.el) revealObs.observe(t.el); });

  // sector-divider-label visibility is controlled by filter JS
  // document.querySelectorAll('.sector-divider-label') — skipped

  // Step cards use CSS hover interaction — no JS animation needed
})();

// 4. HERO KINETIC TILT
(function() {
  var cover = document.getElementById('cover');
  var tagline = document.querySelector('.cover-tagline');
  var body = document.querySelector('.cover-body');
  if (!cover || !tagline) return;
  cover.addEventListener('mousemove', function(e) {
    var r = cover.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width  - 0.5;
    var y = (e.clientY - r.top)  / r.height - 0.5;
    tagline.style.transform = 'rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 4) + 'deg) translateZ(10px)';
    if (body) body.style.transform = 'translateX(' + (x * 8) + 'px)';
  });
  cover.addEventListener('mouseleave', function() { tagline.style.transform = ''; if (body) body.style.transform = ''; });
})();

// 5. PROJECT CARD 3D TILT — removed (zoom-only via CSS)

// 6–15. DEFERRED (non-critical)
(window.requestIdleCallback || function(cb){ setTimeout(cb, 1); })(function() {

  if (!IS_TOUCH) {


  }

  // NOISE OVERLAY
  (function() {
    var SIZE = 200, off = document.createElement('canvas');
    off.width = off.height = SIZE;
    var octx = off.getContext('2d'), img = octx.createImageData(SIZE, SIZE), d = img.data;
    for (var i = 0; i < d.length; i += 4) { var v = Math.random() * 255 | 0; d[i] = d[i+1] = d[i+2] = v; d[i+3] = 255; }
    octx.putImageData(img, 0, 0);
    var el = document.createElement('div');
    el.style.cssText = ['position:fixed','inset:0','pointer-events:none','z-index:1','opacity:0.028','will-change:auto','background-image:url(' + off.toDataURL() + ')','background-size:' + SIZE + 'px ' + SIZE + 'px'].join(';');
    document.body.appendChild(el);
  })();

  // CLICK RIPPLE
  document.addEventListener('click', function(e) {
    if (document.getElementById('lightbox').classList.contains('open')) return;
    var r = document.createElement('div');
    r.className = 'ripple';
    r.style.cssText = 'width:80px;height:80px;left:' + e.clientX + 'px;top:' + e.clientY + 'px;';
    document.body.appendChild(r);
    r.addEventListener('animationend', function() { r.remove(); });
  });


  // SECTION PROGRESS DOTS — removed

  // HOVER COLOUR SHIFT ON ABOUT HEADING
  (function() {
    var heading = document.querySelector('.about-heading');
    if (!heading) return;
    var colors = ['var(--yellow)', 'var(--green)', 'var(--blue)', 'var(--pink)'];
    var i = 0;
    heading.addEventListener('mouseenter', function() { heading.style.color = colors[i % colors.length]; i++; });
    heading.addEventListener('mouseleave', function() { heading.style.color = ''; });
  })();

  // ═══════════════════════════════════════════════
  // ACTIVE THEORY MICRO-INTERACTIONS
  // ═══════════════════════════════════════════════

  // ── M1. COVER PARALLAX — mouse moves layers at different depths ──
  (function() {
    if (IS_TOUCH) return;
    var cover = document.getElementById('cover');
    var sketch = document.getElementById('cover-sketch');
    var content = cover.querySelector('.cover-content');
    var lens = document.getElementById('cover-lens');
    if (!cover || !sketch) return;

    var targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    document.addEventListener('mousemove', function(e) {
      var r = cover.getBoundingClientRect();
      if (e.clientY > r.bottom) return;
      targetX = (e.clientX / window.innerWidth  - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    (function parallaxLoop() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      // image moves slowly (deep layer)
      sketch.style.transform = 'scale(1.08) translate(' + (currentX * -18) + 'px,' + (currentY * -10) + 'px)';
      // content moves slightly opposite (shallow layer)
      if (content) content.style.transform = 'translate(' + (currentX * 6) + 'px,' + (currentY * 4) + 'px)';

      requestAnimationFrame(parallaxLoop);
    })();
  })();

  // ── M2. SPRING PHYSICS ON PROJECT CARDS — removed (zoom-only via CSS) ──

  // ── M3. MAGNETIC PULL — extended to ALL interactive elements ──
  (function() {
    if (IS_TOUCH) return;
    var STRENGTH = 0.38;
    var selectors = '.imm-view-btn, .cover-hint, .lb-nav-btn, .lb-close, .footer-contact, #welcome-btn, .lb-toggle-btn, .hint-btn';
    document.querySelectorAll(selectors).forEach(function(el) {
      var vx = 0, vy = 0, cx = 0, cy = 0;
      var isNear = false, targetX = 0, targetY = 0;

      el.addEventListener('mousemove', function(e) {
        var r = el.getBoundingClientRect();
        targetX = (e.clientX - (r.left + r.width  / 2)) * STRENGTH;
        targetY = (e.clientY - (r.top  + r.height / 2)) * STRENGTH;
        isNear = true;
      });
      el.addEventListener('mouseleave', function() {
        isNear = false; targetX = 0; targetY = 0;
      });

      (function magnetLoop() {
        var damping = isNear ? 0.7 : 0.5;
        vx = vx * damping + (targetX - cx) * 0.2;
        vy = vy * damping + (targetY - cy) * 0.2;
        cx += vx; cy += vy;
        el.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
        requestAnimationFrame(magnetLoop);
      })();
    });
  })();

  // ── M4. IDLE DRIFT — removed ──

  // ── M5. STAGGERED SECTION REVEALS — cascade in with personality ──
  (function() {
    // Targets: sector dividers, footer elements, about text
    var revealEls = document.querySelectorAll('.sector-divider-num, .footer-text, .footer-contact, .footer-contact-detail, .about-body, .ethos-label');

    revealEls.forEach(function(el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .7s ease, transform .7s cubic-bezier(.16,1,.3,1)';
    });

    var revObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var idx = Array.prototype.indexOf.call(revealEls, el);
        setTimeout(function() {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, (idx % 4) * 80);
        revObs.unobserve(el);
      });
    }, { threshold: 0.15 });

    revealEls.forEach(function(el) { revObs.observe(el); });
  })();

}); // end requestIdleCallback
