document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.gif", actionRadius: 100, timeBetweenNPCs: 3700, npcCollisionRadius: 100, actionDuration:600, 
  jumpHeight: 350, makeResponsive: true, typesOfNPC: 3, removeNPCAfterInteracted: false, numOfCollectables: 4, collectableRadius: 100, 
  pointsPerCollectable: 2, removeCollectableAfterCollected: true, preGameScreenImageURLs: ("./img/directions.png")});
});