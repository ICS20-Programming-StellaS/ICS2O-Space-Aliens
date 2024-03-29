/* global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//modified by Stella
// Created by:Stella
// Created on: Jun 2022
// This is the Phaser3 configuration file

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'
import MenuScene from './menuScene.js'
import GameScene from './gameScene.js'
import InstructionScene from './instructionScene.js'

// Our game scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()
const gameScene = new GameScene()
const instructionScene = new InstructionScene()

//*Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  //Set background color
  backgroundColor: 0xDDF6F6,
  scale: {
    mode: Phaser.Scale.FIT,
    
    //We place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scene
// NOTE: remember an "key" is a global and CAN NOT be reused
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)
game.scene.add('menuScene', menuScene)
game.scene.add('gameScene', gameScene)
game.scene.add('instructionScene', instructionScene)

// start title
game.scene.start('splashScene')