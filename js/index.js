window.onload = () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

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
	}

	function updateCanvas() {
		createStage()
		createHero()
		createVillain()
	}

	updateCanvas()

}