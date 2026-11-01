/**
 * Bucle principal: actualización, escenas y dibujo.
 */
'use strict';

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  hits.length = 0;
  const stage =
    scene == 'menu' ||
    scene == 'free' ||
    scene == 'levels' ||
    scene == 'brief' ||
    scene == 'story' ||
    scene == 'cut';
  const gamey =
    G &&
    (scene == 'play' ||
      scene == 'task' ||
      scene == 'sab' ||
      scene == 'craft' ||
      scene == 'end' ||
      scene == 'mend' ||
      scene == 'pause');
  document.getElementById('gl').style.visibility =
    view3d && (stage || gamey) ? 'visible' : 'hidden';
  if (document.pointerLockElement && scene !== 'play') document.exitPointerLock();
  if (G && G.M && !stage) missionTick(dt);
  musicTick(dt);
  if (stage) drawStageScene(dt);
  else {
    if (scene == 'play') {
      if (G.intro > 0) G.intro -= dt;
      updatePlayer(dt);
      if (G.intro <= 0) updateWorld(dt);
    } else if (scene == 'task') {
      updatePlayer(dt);
      updateWorld(dt);
      updateTask(dt);
    } else if (scene == 'cams' || scene == 'sab' || scene == 'craft') {
      updatePlayer(dt);
      updateWorld(dt);
    } else if (scene == 'meeting') updateMeeting(dt);
    if (scene == 'meeting') {
      drawMeeting();
      finishFX();
    } else if (scene == 'cams') {
      drawCams();
      finishFX();
    } else {
      drawWorld();
      drawHUD();
      drawMissionHUD();
      drawCrosshair();
      drawPauseBtn();
      if (scene == 'task') drawTask();
      if (scene == 'craft') drawCraft();
      if (scene == 'sab') drawSabMenu();
      if (scene == 'end') drawEnd();
      if (scene == 'mend') drawMend();
      if (scene == 'pause') drawPause();
      if (G.intro > 0) cinematicBars();
    }
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
