/* global Phaser */

// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: Jun 2022
// This is the Menu scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({key: 'menuScene'})

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  init (data) {
    
    // set the background colour to white
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console message
  preload () {
    console.log("Menu Scene")
    this.load.image('menuSceneBackground', 'images/8bit_earth.jpg')
    this.load.image('startButton', 'images/start.png')
    this.load.image('instructionButton', 'images/instructionButton.png')
    
  }

  // locations of background, button and text
  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground').setScale(4,4)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())

    // instrcution button
    this.instructionButton = this.add.sprite(490 / 2, (30 / 2) + 100, 'instructionButton').setScale(0.3)
    this.instructionButton.setInteractive({ useHandCursor: true })
    this.instructionButton.on('pointerdown', () => this.instructClickButton())
  }

  update (time, delta) {
  }

  // when button is clicked
  clickButton () {
    this.scene.start('gameScene')
  }

  // when button is clicked
  instructClickButton () {
    this.scene.start('instructionScene')
  }

}

export default MenuScene