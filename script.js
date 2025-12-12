const gamesList =[
  {
    "title": "Développement logiciel / IT",
    "year": null,
    "imageUrl": "https://starkcloud.com/wp-content/uploads/2024/12/La-tecnologia-del-futuro-5-avances-que-cambiaran-el-mundo-2000x1200-1-1024x614.jpg",
    "id": 1,
    "recommendations": [
      { "name": "Scrum / Scrumban", "description": "Itérations courtes, priorisation continue et feedback rapide." },
      { "name": "Kanban", "description": "Gestion du flux avec limitation du WIP et visualisation des travaux." },
      { "name": "DevOps & CI/CD", "description": "Automatisation build/test/deploy, intégration et livraison continues." },
      { "name": "XP (eXtreme Programming)", "description": "TDD, pair programming, refactoring pour qualité et agilité." },
      { "name": "PMBOK / PRINCE2", "description": "Gouvernance, rôles et pilotage pour projets complexes." }
    ],
    "resources": [
      { "label": "Scrum.org", "url": "https://www.scrum.org" },
      { "label": "Kanban University", "url": "https://kanban.university" },
      { "label": "GitHub Actions (CI/CD)", "url": "https://docs.github.com/actions" }
    ]
  },
  {
    "title": "Marketing & Communication",
    "year": null,
    "imageUrl": "https://www.mastersincommunications.org/wp-content/uploads/2019/04/Marketing-Ipad.jpg",
    "id": 2,
    "recommendations": [
      { "name": "Agile Marketing (Kanban/Scrumban)", "description": "Tests rapides, campagnes itératives et amélioration continue." },
      { "name": "Design Thinking", "description": "Empathie, idéation, prototypage et tests centrés sur l’utilisateur." },
      { "name": "OKR", "description": "Alignement des objectifs marketing avec la stratégie de marque." },
      { "name": "Cadres RACE / Funnel", "description": "Reach–Act–Convert–Engage pour orchestrer le parcours client." },
      { "name": "PMBOK", "description": "Structuration des campagnes multi-canaux et gestion des risques." }
    ],
    "resources": [
      { "label": "Kanban University", "url": "https://www.kanban.university" },
      { "label": "Design Kit (IDEO)", "url": "https://www.designkit.org" },
      { "label": "OKR – What Matters", "url": "https://www.whatmatters.com" }
    ]
  },
  {
    "title": "Construction / BTP",
    "year": null,
    "imageUrl": "https://www.argusdelassurance.com/mediatheque/4/6/1/000109164_896x598_c.jpeg",
    "id": 3,
    "recommendations": [
      { "name": "PMBOK", "description": "Maîtrise coûts, délais, qualité, approvisionnements et risques." },
      { "name": "PRINCE2", "description": "Gouvernance par phases, rôles clairs, business case robuste." },
      { "name": "Lean Construction / Last Planner", "description": "Fiabilisation du planning et réduction des gaspillages." },
      { "name": "BIM (collaboration)", "description": "Coordination multi-métiers et gestion des modifications." },
      { "name": "Gestion des risques HSE", "description": "Sécurité chantier, conformité et prévention." }
    ],
    "resources": [
      { "label": "PMI", "url": "https://www.pmi.org" },
      { "label": "PRINCE2", "url": "https://www.prince2.com" },
      { "label": "Lean Construction Institute", "url": "https://www.leanconstruction.org" }
    ]
  },
  {
    "title": "Industrie / Production",
    "year": null,
    "imageUrl": "https://bigmedia.bpifrance.fr/sites/default/files/2024-10/industrie%204.jpg",
    "id": 4,
    "recommendations": [
      { "name": "Lean Manufacturing", "description": "5S, VSM, SMED, Kaizen pour l’efficacité et l’élimination des gaspillages." },
      { "name": "Six Sigma (DMAIC)", "description": "Réduction des défauts et de la variabilité des processus." },
      { "name": "TPM", "description": "Fiabilité des équipements et maintenance autonome." },
      { "name": "APQP / PPAP", "description": "Qualité produit/process, surtout en environnement automobile." },
      { "name": "PMBOK", "description": "Pilotage des transferts industriels, capex et programmes." }
    ],
    "resources": [
      { "label": "Lean.org", "url": "https://www.lean.org" },
      { "label": "iSixSigma", "url": "https://www.isixsigma.com" }
    ]
  },
  {
    "title": "Services (banque, assurance, finance, RH, consulting)",
    "year": null,
    "imageUrl": "https://monorientation.univ-grenoble-alpes.fr/medias/photo/assurance-banque-finance_1480074064679-png",
    "id": 5,
    "recommendations": [
      { "name": "ITIL / ITSM", "description": "Gestion des incidents, problèmes, changements, catalogue de services." },
      { "name": "COBIT", "description": "Gouvernance SI, contrôle, conformité et gestion des risques." },
      { "name": "PMBOK / PRINCE2", "description": "Projets réglementaires, multi-entités et grands programmes." },
      { "name": "Agile (Scrum/Kanban)", "description": "Amélioration des parcours clients et des process back-office." },
      { "name": "Gestion des risques & conformité", "description": "KYC/AML, audits, traçabilité et contrôle interne." }
    ],
    "resources": [
      { "label": "PMI", "url": "https://www.pmi.org" },
      { "label": "COBIT (ISACA)", "url": "https://www.isaca.org/resources/cobit" },
      { "label": "ITIL (Axelos)", "url": "https://www.axelos.com/best-practice-solutions/itil" }
    ]
  },
  {
    "title": "Santé & Médical",
    "year": null,
    "imageUrl": "https://static.vecteezy.com/ti/vecteur-libre/p1/679672-icone-de-sante-medical-gratuit-vectoriel.jpg",
    "id": 6,
    "recommendations": [
      { "name": "Lean Healthcare", "description": "Optimisation des flux patients, réduction des temps d’attente." },
      { "name": "Six Sigma (DMAIC)", "description": "Amélioration de la qualité des soins, diminution des erreurs." },
      { "name": "GxP / GCP", "description": "Bonnes pratiques qualité et cliniques, traçabilité et contrôle." },
      { "name": "Gestion des risques & HSE", "description": "Sécurité, conformité, audits et amélioration continue." },
      { "name": "PMBOK", "description": "Projets SIH, dossiers patients, équipements médicaux." }
    ],
    "resources": [
      { "label": "Six Sigma en santé", "url": "https://www.isixsigma.com/industries/healthcare/" },
      { "label": "PMI", "url": "https://www.pmi.org" }
    ]
  },
  {
    "title": "Recherche & Innovation / R&D",
    "year": null,
    "imageUrl": "https://www.jbel-annour.ma/imgs/pages/big/innovation_0.jpg",
    "id": 7,
    "recommendations": [
      { "name": "Design Thinking", "description": "Problématisation, idéation, prototypage, test utilisateur." },
      { "name": "Lean Startup", "description": "MVP et boucles Build–Measure–Learn pour valider rapidement." },
      { "name": "Stage-Gate (Phase-Gate)", "description": "Décisions aux jalons et gestion de portefeuille d’innovations." },
      { "name": "TRL / MRL", "description": "Mesure de maturité technologique et industrielle." },
      { "name": "OKR", "description": "Aligner les objectifs d’innovation et les résultats clés." }
    ],
    "resources": [
      { "label": "Design Kit (IDEO)", "url": "https://www.designkit.org" },
      { "label": "Stage-Gate", "url": "https://www.stage-gate.com" },
      { "label": "Lean Startup", "url": "https://leanstartup.co" }
    ]
  },
  {
    "title": "Éducation & Formation",
    "year": null,
    "imageUrl": "https://cursus.edu/storage/thumbnails/yWIOqF1IKIUhPONzwIAeCNz53BYQPSLJLoLf8EYG.jpeg",
    "id": 8,
    "recommendations": [
      { "name": "ADDIE", "description": "Analyse, Design, Développement, Implémentation, Évaluation." },
      { "name": "SAM (Successive Approximation Model)", "description": "Modèle itératif et collaboratif pour la conception pédagogique." },
      { "name": "Backward Design", "description": "Partir des objectifs et évaluations pour concevoir les activités." },
      { "name": "OKR", "description": "Pilotage par objectifs (taux de complétion, satisfaction)." },
      { "name": "Kanban", "description": "Gestion de la production de cours et des sessions." }
    ],
    "resources": [
      { "label": "Modèle ADDIE", "url": "https://www.instructionaldesign.org/models/addie/" },
      { "label": "Kanban (Agile Alliance)", "url": "https://www.agilealliance.org/glossary/kanban/" }
    ]
  },
  {
    "title": "Télécoms / Infrastructures",
    "year": null,
    "imageUrl": "https://aldene.fr/wp-content/uploads/2022/04/Reseaux-et-telephonie.png",
    "id": 9,
    "recommendations": [
      { "name": "ITIL / ITSM", "description": "Gestion des services, CMDB, changements et incidents." },
      { "name": "PMBOK / PRINCE2", "description": "Déploiements réseaux, data centers, projets d’infrastructure." },
      { "name": "SAFe / Agile à l’échelle", "description": "Coordination multi-équipes et PI Planning pour grands programmes." },
      { "name": "SRE / NOC Practices", "description": "Fiabilité, SLO/SLA, gestion des incidents et post-mortems." },
      { "name": "Continuité & Capacité", "description": "DRP/BCP, gestion de capacité et résilience des services." }
    ],
    "resources": [
      { "label": "SRE (Google)", "url": "https://sre.google" },
      { "label": "SAFe", "url": "https://www.scaledagileframework.com" },
      { "label": "ITIL (Axelos)", "url": "https://www.axelos.com/best-practice-solutions/itil" }
    ]
  }
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
                                        Consulter
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


async function downloadFilee() {
    
    const viewerUrl = "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FMO99B%2FM3DES%2Frefs%2Fheads%2Fmain%2FGuide%2520m%25C3%25A9thodologie%25205.docx&wdOrigin=BROWSELINK";

    const params = new URL(viewerUrl).searchParams;
    const fileUrl = params.get('src') || viewerUrl; // ex: https://raw.githubusercontent.com/.../Guide méthodologie 5.docx
    const fileName = "Guide Methodologique.docx";   // nom suggéré pour le téléchargement

    
    const win = window.open(viewerUrl, "_blank");
    if (!win) {
        alert("La fenêtre a été bloquée par le navigateur. Autorisez les pop-ups pour ce site.");
        return;
    }

    
    const status = document.createElement("div");
    status.id = "download-status";
    status.className = "position-fixed bottom-0 end-0 m-3 p-3 bg-dark text-white rounded shadow d-flex align-items-center gap-2";
    status.innerHTML = `
        <div class="spinner-border spinner-border-sm text-light" role="status" aria-hidden="true"></div>
        <span>Téléchargement en cours…</span>
    `;
    document.body.appendChild(status);


    try {
        const resp = await fetch(fileUrl, { mode: "cors" }); // peut échouer si le serveur n’autorise pas CORS
        if (!resp.ok) throw new Error("HTTP " + resp.status);

        const blob = await resp.blob();
        const objectUrl = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = objectUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(objectUrl);

        
        status.innerHTML = `<span class="me-2">✅ Téléchargement terminé</span>`;
        setTimeout(() => status.remove(), 1500);
    } catch (err) {
        console.error("Téléchargement via fetch échoué :", err);

        
        const a = document.createElement("a");
        a.href = fileUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();

        status.innerHTML = `<span class="me-2">⚠️ Document ouvert dans l’onglet. Le téléchargement dépend du serveur/du navigateur.</span>`;
        setTimeout(() => status.remove(), 2500);
    }
}


function editModal(gameId) {
	// Trouvez le jeu en fonction de son identifiant
	const result = gamesList.findIndex((game) => game.id === parseInt(gameId))
	// Injectez le formulaire dans le corps du modal
	fetch("./form.html").then((data) => {
		data.text().then((form) => {
			// Modifiez le titre et le corps du modal
			const selectedGame = gamesList[result]
			modifyModal("Méthodologies recommandées", form)
			modifyFom({
				title: selectedGame.title,
				year: selectedGame.year,
				imageUrl: selectedGame.imageUrl,
				recommendations : selectedGame.recommendations,
				resources : selectedGame.resources,
			})
			

		})
		
	})
}
   function toggleChatbot() {
            const chatbotWindow = document.getElementById("chatbot-window");
            chatbotWindow.style.display = chatbotWindow.style.display === "flex" ? "none" : "flex";
        }

        function setDomain(domain) {
            document.getElementById("domain").value = domain;
            recommend();
        }
function downloadFile() {
    const link = document.createElement('a');
    link.href ="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FMO99B%2FM3DES%2Frefs%2Fheads%2Fmain%2FGuide%2520m%25C3%25A9thodologie%25205.docx&wdOrigin=BROWSELINK";
    link.download ="Guide Methodologique"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

        function recommend() {
            const domain = document.getElementById("domain").value;
            const output = document.getElementById("recommendation");
            let recommendations = "";

            switch (domain) {
                case "logiciel":
                    recommendations = `
                        <h3>Domaine : Développement logiciel</h3>
                        <ul>
                            <li><strong>Scrum</strong> : Pour les projets agiles avec des livraisons incrémentales.</li>
                            <li><strong>Kanban</strong> : Pour la gestion continue des tâches et la visualisation du flux de travail.</li>
                            <li><strong>PMBOK</strong> : Pour structurer les phases du projet et assurer la gouvernance.</li>
                        </ul>
                        <p>Liens utiles : <a href="https://www.scrum.org" target="_blank">Scrum.org</a>, <a href="https://kanban.university" target="_blank">Kanban University</a></p>`;
                    break;
                case "marketing":
                    recommendations = `
                        <h3>Domaine : Marketing</h3>
                        <ul>
                            <li><strong>Lean</strong> : Pour optimiser les campagnes et réduire les gaspillages.</li>
                            <li><strong>Design Thinking</strong> : Pour centrer les actions sur les besoins des clients.</li>
                            <li><strong>PMBOK</strong> : Pour structurer les livrables et les phases de projet.</li>
                        </ul>
                        <p>Liens utiles : <a href="https://www.lean.org" target="_blank">Lean.org</a>, <a href="https://www.designthinking.eu" target="_blank">Design Thinking Europe</a></p>`;
                    break;
                case "construction":
                    recommendations = `
                        <h3>Domaine : Construction</h3>
                        <ul>
                            <li><strong>PMBOK</strong> : Pour une gestion rigoureuse des coûts, délais et qualité.</li>
                            <li><strong>Prince2</strong> : Pour une gouvernance forte et une documentation complète.</li>
                        </ul>
                        <p>Liens utiles : <a href="https://www.pmbokguide.com" target="_blank">PMBOK Guide</a>, <a href="https://www.prince2.com" target="_blank">Prince2</a></p>`;
                    break;
                case "industrie":
                    recommendations = `
                        <h3>Domaine : Industrie / Production</h3>
                        <ul>
                            <li><strong>Lean Manufacturing</strong> : Pour améliorer l'efficacité et réduire les gaspillages.</li>
                            <li><strong>Six Sigma</strong> : Pour améliorer la qualité et réduire les défauts.</li>
                            <li><strong>PMBOK</strong> : Pour structurer les projets industriels complexes.</li>
                        </ul>
                        <p>Liens utiles : <a href="https://www.isixsigma.com" target="_blank">iSixSigma</a>, <a href="https://www.lean.org" target="_blank">Lean.org</a></p>`;
                    break;
                case "autre":
                default:
                    recommendations = `
                        <h3>Domaine : ${domain}</h3>
                        <p>Aucune recommandation spécifique trouvée. Voici des méthodologies générales :</p>
                        <ul>
                            <li><strong>Scrum</strong> : Pour les projets agiles.</li>
                            <li><strong>Lean</strong> : Pour optimiser les ressources.</li>
                            <li><strong>PMBOK</strong> : Pour une gestion structurée et complète.</li>
                            <li><strong>Kanban</strong> : Pour la gestion visuelle des tâches.</li>
                        </ul>`;
                    break;
            }

            output.innerHTML = recommendations;
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        function sendMessage() {
            const inputField = document.getElementById("chat-input");
            const message = inputField.value;
            if (message.trim() === "") return;

            displayMessage(message, "user-message");
            inputField.value = "";

            // Simulated bot response
            setTimeout(() => {
                let response = "Désolé, je ne peux pas répondre à cela pour l'instant.";
				if(message.toLowerCase().includes("bonjour")){
				  response = "Bonjour comment je peux vous aider ?";
				}
                else if(message.toLowerCase().includes("logiciel")) {
                    response = "Pour le développement logiciel, envisagez Scrum ou Kanban.";
                } else if (message.toLowerCase().includes("marketing")) {
                    response = "Le Lean et le Design Thinking sont de bonnes méthodologies en marketing.";
                } else if (message.toLowerCase().includes("construction")) {
                    response = "Le PMBOK est recommandé pour les projets de construction.";
                } else if (message.toLowerCase().includes("industrie")) {
                    response = "Lean Manufacturing et Six Sigma sont des choix judicieux.";
                }
                displayMessage(response, "bot-message");
            }, 1000);
        }

        function displayMessage(message, className) {
            const messagesContainer = document.getElementById("chatbot-messages");
            const messageElement = document.createElement("div");
            messageElement.className = `message ${className}`;
            messageElement.innerText = message;
            messagesContainer.appendChild(messageElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
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
  const form = document.querySelector("form");
  if (!form) return;

  form.title.value = gameData.title || "";
  form.year.value = gameData.year || "";
  //form.imageUrl.value = gameData.imageUrl || "";
  renderRecommendations(gameData);
}
function renderRecommendations(game) {
  const container = document.getElementById("recommendation");
  if (!container) return;

  const hasRecos = Array.isArray(game.recommendations) && game.recommendations.length > 0;
  const hasResources = Array.isArray(game.resources) && game.resources.length > 0;

  // Contenu des recommandations
  const recosHtml = hasRecos
    ? `
      <ul class="list-group mb-3">
        ${game.recommendations
          .map(
            (r) => `
          <li class="list-group-item">
            <strong>${escapeHtml(r.name)}</strong>
            <!--<div class="small text-muted">${escapeHtml(r.description)}</div>-->
          </li>`
          )
          .join("")}
      </ul>`
    : `<div class="alert alert-info">Aucune recommandation spécifique disponible pour ce domaine.</div>`;

  // Contenu des liens utiles
  const resourcesHtml = hasResources
    ? `
      <p class="mb-0">
        <span class="fw-semibold">Liens utiles :</span>
        ${game.resources
          .map(
            (l) =>
              `${escapeAttr(l.url)}${escapeHtml(l.label)}</a>`
          )
          .join(" • ")}
      </p>`
    : "";

  // (Optionnel) Image du domaine sélectionné
  const imageBlock = game.imageUrl
    ? ""
    : "";

  container.innerHTML = `
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="card-title mb-2">${escapeHtml(game.title)}</h5>
        ${imageBlock}
        <h6 class="fw-semibold mb-2">Recommandations :</h6>
        ${recosHtml}
        ${resourcesHtml}
      </div>
    </div>
  `;
}

// -- Petits utilitaires pour sécuriser l’HTML injecté --
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str = "") {
  // Pour les attributs (src, href, alt…)
  return String(str).replace(/"/g, "&quot;");
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

