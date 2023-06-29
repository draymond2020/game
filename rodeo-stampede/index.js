/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/laya.core.js"),
    loadLib("libs/laya.ani.js"),
    loadLib("libs/laya.ui.js"),
    loadLib("libs/laya.tiledmap.js"),
    loadLib("libs/laya.d3.js"),
    loadLib("libs/laya.html.js"),
    loadLib("libs/laya.particle.js"),
    loadLib("libs/laya.physics3D.js"),
    // loadLib("platform.js"),
    loadLib("libs/laya.physics.js")




window.nowDead=false;




// loadLib("libs/laya.physics3D.js");

// loadLib("libs/laya.core.js");

// loadLib("libs/laya.d3.js");

// loadLib("libs/laya.ui.js");
//-----libs-end-------
loadLib("js/min/bundle.min.js");