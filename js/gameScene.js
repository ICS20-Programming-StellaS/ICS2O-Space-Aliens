/* global Phaser */

// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: Jun 2022
// This is the Game scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({key: 'gameScene'})
  }

  init (data) {
    // set the background colour to red
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console message
  preload () {
    console.log("Game Scene")
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default GameScene