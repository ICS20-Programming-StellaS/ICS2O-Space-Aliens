/* global Phaser */

// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: May 2022
// This is the Phaser3 configuration file

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

// Our game scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()

//*Game scence */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  //Set background color
  backgrondColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    //We place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scense
// NOTE: remember an "key" is a global and CAN NOT be reused
game.scene.add('splashScene', splashScene)
game.scene.add('titlehScene', titleScene)

// start title
game.scene.start('splashScene')