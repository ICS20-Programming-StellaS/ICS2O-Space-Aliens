/* global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//modified by Stella
// Created by:Stella
// Created on: Jun 2022
// This is the Game Scene


class GameScene extends Phaser.Scene {

  // create an meteor
  createMeteor () {
    const meteorXLocation = Math.floor(Math.random() * 1920) + 1 // this will get a number between 1 and 1920;
    let meteorXVelocity = Math.floor(Math.random() * 50) + 1 // this will get a number between 1 and 50;
    meteorXVelocity *= Math.round(Math.random()) ? 1 : -1 // this will add minus sign in 50% of cases
    const anMeteor = this.physics.add.sprite(meteorXLocation, -100, 'rock').setScale(0.2)
    anMeteor.body.velocity.y = 200
    anMeteor.body.velocity.x = meteorXVelocity
    this.meteorGroup.add(anMeteor)
  }

  constructor () {
    super({ key: 'gameScene' })

    this.dino = null
    this.fireMissile = false
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = { font: '65px Arial', fill: '#ffffff', align: 'center' }

    this.gameOverText = null
    this.gameOverTextStyle = { font: '65px Arial', fill: '#ff0000', align: 'center' }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#0x5f6e7a')
  }
  //load gameScene image
  preload () {
    console.log('Game Scene')

    // images
    this.load.image('land', 'images/8bit_land.png')
    this.load.image('dino', 'images/dino.png')
    this.load.image('fireball', 'images/8bit_fire.png')
    this.load.image('rock', 'images/8bit_rock.png')
    this.load.image('homeButton', 'images/homeButton.png')
    
    // sound
    this.load.audio('fire', 'sounds/fireSound.mp3')
    this.load.audio('explosion', 'sounds/endingSound.mp3')
    this.load.audio('collision', 'sounds/hitSound.mp3')
  }

  create (data) {
    this.background = this.add.image(0, 0, 'land').setScale(1.1)
    this.background.setOrigin(0, 0)

    this.scoreText = this.add.text(10, 10, 'Score: ' + this.score.toString(), this.scoreTextStyle)

    this.dino = this.physics.add.sprite(1920 / 2, 1080 - 100, 'dino').setScale(0.3)

    this.homeButton = this.add.sprite(1800, (850 / 7) + 1, 'homeButton').setScale(0.3)
    this.homeButton.setInteractive({ useHandCursor: true })
    this.homeButton.on('pointerdown', () => 
    this.scene.start('menuScene', this.score = 0))



    // create a group for the fires
    this.fireGroup = this.physics.add.group()

    // create a group for the meteors
    this.meteorGroup = this.add.group()
    this.createMeteor()

    // Collisions between fires and meteors
    this.physics.add.collider(this.fireGroup, this.meteorGroup, function (fireCollide, meteorCollide) {
      this.sound.play('collision')
      meteorCollide.destroy()
      fireCollide.destroy()
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
      this.createMeteor()
      this.createMeteor()
    }.bind(this))


    // Collisions between dino and meteors
    this.physics.add.collider(this.dino, this.meteorGroup, function (dinoCollide, meteorCollide) {
      this.sound.play('explosion')
      this.physics.pause()
      meteorCollide.destroy()
      dinoCollide.destroy()
      this.gameOverText = this.add.text(1920 / 2, 1080 / 2, 'DINO is now extinct!\nClick here to play again.', this.gameOverTextStyle).setOrigin(0.5)
      this.gameOverText.setInteractive({ useHandCursor: true })
      this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
      this.score = 0
    }.bind(this))
  }

  update (time, delta) {
    // called 60 times a second, hopefully!
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keySpaceObj = this.input.keyboard.addKey('SPACE')

    if (keyLeftObj.isDown === true) {
      this.dino.x -= 15
      if (this.dino.x < 0) {
        this.dino.x = 0
      }
    }

    if (keyRightObj.isDown === true) {
      this.dino.x += 15
      if (this.dino.x > 1920) {
        this.dino.x = 1920
      }
    }
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        
        // fire fire
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.dino.x, this.dino.y, 'fireball')
        this.fireGroup.add(aNewMissile)
        this.sound.play('fire')
      }
    }
  
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.fireGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 50) {
        item.destroy()
      }
    })
      // if enemy leaves screen
      // meteor loop
     this.meteorGroup.children.each(function (item) {
      if (item.y > 1080) {
        item.y = -10
        item.x = Math.floor(Math.random() * 1920 + 1)
      }
    })
  }
    // Switches to Menu Scene When Home Button Is Clicked
  homeClickButton () {
    this.scene.start('menuScene')
  }
}

export default GameScene