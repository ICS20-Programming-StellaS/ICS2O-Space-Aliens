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
    this.load.image('menuSceneBackground', 'assets/aliens_screen_image2.jpg')
    this.load.image('startButton', 'assets/start.png')
  }

  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
  }

  update (time, delta) {
  }
  
  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene