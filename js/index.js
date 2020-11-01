window.onload = () => {

  //-----------------------VARIABLES--------------------//

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  class Character {
    constructor(_x, _y, _width, _height, _vx, _vy) {
      this.x = _x
      this.y = _y
      this.width = _width
      this.height = _height
      this.vx = _vx
      this.vy = _vy
    }
  }
  let villainArr = []
  let newHero = new Character (100, 390, 100, 100, 0, 2)
  let gravityDown = 0.0005
  let gravityUp = 1


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
			ctx.drawImage(heroImg, 500, newHero.y, 100, 100)
		}
		heroImg.src = './images/midoriya.png'
  }

  function moveHero() {
    newHero.y -= 220
  }

  function heroGravityDown() {
    newHero.vy += gravityDown
    newHero.y += newHero.vy
  }

  function heroGravityUp() {
    newHero.vy -= gravityUp
    newHero.y -= newHero.vy
  }

  function stopHero() {
    let heroBottom = 390
    let heroUp = 170
    if (newHero.y > heroBottom) {
      newHero.y = heroBottom
      clearInterval(heroBottom)
    }
    if (newHero.y < heroUp){
      newHero.y = heroUp
      clearInterval(heroUp)
    }
  }
  
  document.addEventListener('keydown', event =>{
    if(event.key === 'ArrowUp'){
      createHero()
      moveHero()
    }
  })

	function createVillain() {
    villainArr.forEach(villain => {
      const villainImg = new Image ()
		  villainImg.onload = () => {
			ctx.drawImage(villainImg, villain.x, 390, 100, 100)
		  }
      villainImg.src = './images/nomu.png'
    });
		
    moveVillain()
  }

	function generateVillain() {
    setInterval(() => {
      console.log(villainArr)
      villainArr.push(new Character(-100, 390, 100, 100))
    }, 2000)
  }

  function moveVillain () {
    villainArr.forEach(villain => {
      return villain.x += 3
    });
  }


  function gameStage() {
		createStage()
		createHero()
    createVillain()
    heroGravityDown()
    heroGravityUp()
    stopHero()

    requestAnimationFrame(gameStage)
  }

  generateVillain()

  gameStage()

}