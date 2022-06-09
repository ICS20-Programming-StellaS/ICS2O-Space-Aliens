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
    // set the background colour to red
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console message
  preload () {
    console.log("Menu Scene")
    this.load.image('menuSceneBackground', 'images/aliens_screen_image2.jpg')
    this.load.image('startButton', 'images/start.png')
  }

  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())

    this.menuSceneText = this.add.text(1920 / 2, (1370 / 2) + 350, 'Use the SPACE BAR to  fire missiles, and use the LEFT and RIGHT arrow keys to move', this.titleSceneTextStyle).setOrigin(0.5).setScale(2)

    this.menuSceneText = this.add.text(1920 / 2, (1280 / 2) + 350, 'Objective - Fire the missiles to destroy the aliens', this.titleSceneTextStyle).setOrigin(0.5).setScale(2)
  }

  update (time, delta) {
  }

  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene