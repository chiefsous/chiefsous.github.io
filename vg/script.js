document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 3700, npcCollisionRadius: 100, actionDuration:600, 
  jumpHeight: 350, makeResponsive: true, typesOfNPC: 3, removeNPCAfterInteracted: false, numOfCollectables: 3, collectableRadius: 100, 
  pointsPerCollectable: 1, removeCollectableAfterCollected: true, playUntilScore: 10, postGameScreenImageURLs: ["./img/background.png"]});
});