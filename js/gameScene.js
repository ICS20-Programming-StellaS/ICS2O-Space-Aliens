/* global Phaser */

// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: Jun 2022
// This is the Game scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({key: 'gameScene'})

    this.titleSceneBackgroundImage = null
    this.ship = null

  }

  init (data) {
    // set the background colour to red
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console message
  preload () {
    console.log("Emilie's Game Scene")
    //images
    this.load.image('starBackground', 'images/starBackground.png')
    this.load.image('ship', 'images/spaceShip.png')
    this.load.image('missile', 'images/missile.png')

  }
  
  // Background image
  create (data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)
    
    // SPACE SHIP STARTING LOCATION 
    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')

    // group for missiles
    this.missileGroup = this.physics.add.group()
  }

  update (time, delta) {
    // called 60 times a second
    //movement commands
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }

    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    if (keySpaceObj.isDown === true) {
      const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
      this.missileGroup.add(aNewMissile)
    }
  }
}

export default GameScene