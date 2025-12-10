const gamesList = [
	{
		title: "Développement logiciel / IT",
		year: null,
		imageUrl:
			"https://starkcloud.com/wp-content/uploads/2024/12/La-tecnologia-del-futuro-5-avances-que-cambiaran-el-mundo-2000x1200-1-1024x614.jpg",
		id: 1,
	},
	{
		title: "Marketing & Communication",
		year: null,
		imageUrl:
			"https://www.mastersincommunications.org/wp-content/uploads/2019/04/Marketing-Ipad.jpg",
		id: 2,
	},
	{
		title: "Construction / BTP",
		year: null,
		imageUrl:
			"https://www.argusdelassurance.com/mediatheque/4/6/1/000109164_896x598_c.jpeg",
		id: 3,
	},
	{
		title: "Industrie / Production",
		year: null,
		imageUrl:
			"https://bigmedia.bpifrance.fr/sites/default/files/2024-10/industrie%204.jpg",
		id: 4,
	},
	{
		title: "Services (banque, assurance, finance, RH, consulting)",
		year: null,
		imageUrl:
			"https://monorientation.univ-grenoble-alpes.fr/medias/photo/assurance-banque-finance_1480074064679-png",
		id: 5,
	},
	{
		title: "Santé & Médical",
		year: null,
		imageUrl:
			"https://static.vecteezy.com/ti/vecteur-libre/p1/679672-icone-de-sante-medical-gratuit-vectoriel.jpg",
		id: 6,
	},
	{
		title: "Recherche & Innovation / R&D",
		year: null,
		imageUrl:
			"https://www.jbel-annour.ma/imgs/pages/big/innovation_0.jpg",
		id: 7,
	},
    {
		title: "Éducation & Formation",
		year: null,
		imageUrl:
			"https://cursus.edu/storage/thumbnails/yWIOqF1IKIUhPONzwIAeCNz53BYQPSLJLoLf8EYG.jpeg",
		id: 8,
	},
     {
		title: "Télécoms / Infrastructures",
		year: null,
		imageUrl:
			"https://aldene.fr/wp-content/uploads/2022/04/Reseaux-et-telephonie.png",
		id: 9,
	},


]

function writeDom() {
	gamesList.forEach((game) => {
		const articleContainer = document.querySelector(".row")
		articleContainer.innerHTML += `<article class="col">
                    <div class="card shadow-sm">
                        <img src="${game.imageUrl}" alt="${game.title}" class="card-img-top" />
                        <div class="card-body">
                        <h3 class="card-title">${game.title}</h3>
                            <!--<p class="card-text">${game.year}</p>-->
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <!--<button 
                                        type="button" 
                                        class="btn btn-sm btn-outline-secondary view"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
										data-edit-id="${game.id}"
                                    >
                                        View
                                    </button>-->
                                    <button 
                                        type="button" 
                                        class="btn btn-sm btn-outline-secondary edit"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
										data-edit-id="${game.id}"
                                    >
                                        Obtenir les recommandations
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>  `
	})
	
}

writeDom ()

editButtons = document.querySelectorAll(".edit")
editButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		editModal(e.target.getAttribute("data-edit-id"))
	})
})

function editModal(gameId) {
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	// Injectez le formulaire dans le corps du modal
	fetch("./form.html").then((data) => {
		data.text().then((form) => {
			// Modifiez le titre et le corps du modal
			const selectedGame = gamesList[result]
			modifyModal("Mode Edition", form)
			modifyFom({
				title: selectedGame.title,
				year: selectedGame.year,
				imageUrl: selectedGame.imageUrl,
			})
			document
				.querySelector('button[type="submit"]')
				.addEventListener("click", () =>
					updateGames(title.value, year.value, imageUrl.value, gameId)
				)

		})
		
	})
}

function updateGames(title, year, imageUrl, gameId) {
	// Trouvez le jeu en fonction de son identifiant
	const index = gamesList.findIndex((game) => game.id === parseInt(gameId))

	gamesList[index].title = title
	gamesList[index].year = year
	gamesList[index].imageUrl = imageUrl
	document.querySelector(".row").innerHTML = "" // Nous supprimons toutes les données des jeux dans le DOM.
	writeDom()
	editButtons = document.querySelectorAll(".edit")
	editButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			editModal(e.target.getAttribute("data-edit-id"))
		})
	})
	
	viewButtons = document.querySelectorAll(".view")
	viewButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			viewModal(e.target.getAttribute("data-edit-id"))
		})
	})
}

function modifyFom(gameData) {
	const form = document.querySelector("form")
	form.title.value = gameData.title
	form.year.value = gameData.year
	form.imageUrl.value = gameData.imageUrl
}

function modifyModal(modalTitle, modalBody) {
	// Écrire le nom du jeu dans le titre du modal
	document.querySelector(".modal-title").textContent = modalTitle
	// Écrire dans le corps du modal
	document.querySelector(".modal-body").innerHTML = modalBody
	// Écrire dans le footer
	document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Close
		<!--</button>
		<button type="submit" data-bs-dismiss="modal" class="btn btn-primary">Submit</button>-->
</form>`
}

viewButtons = document.querySelectorAll(".view")
viewButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		viewModal(e.target.getAttribute("data-edit-id"))
	})
})

function viewModal(gameId) {
	// console.log(gameId, gamesList)
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	// passer une image comme corps du modal
	const modalBody = `<img src="${gamesList[result].imageUrl}" alt="${gamesList[result].title}" class="img-fluid" />`
	modifyModal(gamesList[result].title, modalBody)
	// edit footer
	// Écrire dans le footer
	document.querySelector(".modal-footer").innerHTML = `
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
			Fermer
		</button>
</form>`
}

