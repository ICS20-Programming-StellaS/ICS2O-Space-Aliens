/* global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//modified by Stella
// Created by:Stella
// Created on: Jun 2022
// This is the splash scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }

// Splash scene background colour (teal-blue colour)
  init (data) {
    this.cameras.main.setBackgroundColor('#DDF6F6')
  }

  //load splashScene image
  preload () {
    console.log('Splash Scene')

    //image
    this.load.image('splashSceneBackground', './images/splashSceneImage.png')
  }
  
  //splashSceneBackground image location
  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground').setScale(2.0)
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

 // Switches the splash scene over to the title scene
  update (time, delta) {
    if (time > 3500) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene