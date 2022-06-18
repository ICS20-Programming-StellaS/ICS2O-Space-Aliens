/* global Phaser */

// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: Jun 2022
// This is the instruction scene

class InstructionScene extends Phaser.Scene {
  constructor () {
    super({key: 'instructionScene'})

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  init (data) {
    
    // set the background colour to white
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console message
  preload () {
    console.log("Instruction Scene")
    this.load.image('instructionSceneBackground', './images/instructScene.jpg')
    this.load.image('backButton', './images/back.png')
    
  }

  // locations of background, button and text
  create (data) {
    this.background = this.add.image(0, 0, 'instructionSceneBackground').setScale(4.00)
    this.background.setOrigin(0, 0)
    
    // back button
    this.startButton = this.add.sprite(430 / 2, (30 / 2) + 100, 'backButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    
    // Instructions
    this.menuSceneText = this.add.text(1920 / 2, (90 / 2) + 350, 'Use the SPACE BAR to fire, and use the LEFT and RIGHT arrow keys to move DINO.', this.titleSceneTextStyle).setOrigin(0.5).setScale(2.5)

    this.menuSceneText = this.add.text(1920 / 2, (5 / 2) + 350, 'Objective - Fire to destroy the meteors before they kill DINO.', this.titleSceneTextStyle).setOrigin(0.5).setScale(2.7)
  }

  update (time, delta) {
  }

  // when button is clicked
  clickButton () {
    this.scene.start('menuScene')
  }

}

export default InstructionScene