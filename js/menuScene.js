/* global Phaser */

// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: May 2022
// This is the menu scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({key: 'menuScene'})
  }

  init (data) {
    // set the background colour to red
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console message
  preload () {
    console.log("Emilie's Menu Scene")
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default MenuScene