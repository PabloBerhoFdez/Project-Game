window.onload = () => {

  //-----------------------VARIABLES--------------------//

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  class Villains {
    constructor(_x, _y, _width, _height) {
      this.x = _x
      this.y = _y
      this.width = _width
      this.height = _height
    }
  }
  let villainArr = []
  let direction = 'up'
  let gravity = 0.1
  let hero = {
    x: 500,
    y: 390,
    vx: 0,
    vy: 2
  }
  // let newVillain = new Villains (100, 390, 100, 100)


	//----------------FUNCIONES---------------------//
	function createStage(){
		const stageImg = new Image ()
    stageImg.onload = () => {
      ctx.drawImage(stageImg, 0, 0, 700, 500)
    }
    stageImg.src = './images/canvasimg.png'
	}

	function createHero() {
		const heroImg = new Image ()
		heroImg.onload = () => {
			ctx.drawImage(heroImg, 500, 390, 100, 100)
		}
		heroImg.src = './images/midoriya.png'
	}

	function createVillain() {
		const villainImg = new Image ()
		villainImg.onload = () => {
			ctx.drawImage(villainImg, 100, 390, 100, 100)
		}
    villainImg.src = './images/nomu.png'
    moveVillain()
  }

	function generateVillain() {
    setInterval(() => {
      console.log(villainArr)
      villainArr.push(new Villains(100, 390, 100, 100))
    }, 2000)
  }

  function moveVillain () {
    villainArr.forEach(villain => {
      return villain.x -= 2
    });
  }

  function jump(){
    if (direction === 'up'){
      hero.x += 10
      createHero()
    }
  }
  function gravityHero(){
    // ctx.clearRect (0, 0, 700, 500)
    hero.draw()
    hero.vy += gravity
    hero.x += hero.vx;
    hero.y += hero.vy;
  }

  document.addEventListener('keydown', event =>{
    if(event.key === 'ArrowUp'){
      console.log('Holi guapi')
      createHero()
      direction = 'up'
      jump()
    }
  })

  function gameStage() {
		createStage()
		createHero()
    createVillain()

    requestAnimationFrame(gameStage)
  }
  // generateVillain()

  gameStage()

}