import Phaser from 'phaser'

const config: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  backgroundColor: 0xfffff0,
  // 隐藏控制台打印的banner信息
  // banner: false, 
  type: Phaser.AUTO, //优先使用webGL渲染，不支持则用canvas
  fps: {
  },
  // 加载器
  loader: {},
  // 物理引擎，默认是arcade
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,  // 开启后左右物体都会显示重力线，用于调试
      checkCollision: { //是否和整个世界的上下左右碰撞检测，如果不设置，物体可以掉到世界外
        up: true,
        down: true,
        left: true,
        right: true,
      },
      gravity: {  // 水平、竖直方向上受到的重力，0为不受重力影响
        x: 0,
        y: 100,
      },
    }
  },
  input: {  // 监听全场游戏场景的设备输入
    keyboard: true,
    mouse: false,
    touch: false,
    gamepad: false,
    activePointers: 1,  // 触摸最大触摸点数，默认为1
  },
  scene: {} // 游戏场景，可以是数组也可以是对象，如果是数组默认加载第一个场景。也可通过配置选择默认加载的场景
}

class GameManager extends Phaser.Game {
  constructor() {
    super(config)
  }
}
new GameManager()
