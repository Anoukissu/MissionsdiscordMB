document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
    const levelTitle = document.getElementById("level");
    const nextLevelButton = document.getElementById("next-level");
    const checkboxes = document.querySelectorAll(".mission-checkbox");
    const missions = document.querySelectorAll(".mission-text");
    const boulevardButton = document.getElementById("boulevard-button");

    // Les missions pour chaque niveau
    const levelMissions = {
        152: [
            "Réalise une tenue sur le thème… \"BIMBO EN COLERE\" ! Oui, oui, tu as bien lu ! Grrrrr ... Fais regretter à Beemoov d'avoir abandonné le jeu !",
            "Vu que tu es irritée, bye-bye Laurent (du moins pour un jour) ! Quitte-le pendant 24 heures pour voir ce que la liberté a à t’offrir. Promis, il comprendra … ou pas !",
            "Bon, tu as quitté Laurent, tu es Bimbo en colère … maintenant, il est temps de célébrer ta liberté. Direction l’agence de voyage. Plutôt Afrique, plutôt Asie ? Qu’importe ! Ne reviens pas tant que tu n’y as pas acheté minimum dix souvenirs !"
        ],
       
        153: [
            "Les dramas sur le forum te poussent à bout ... Tu décides de nous la faire à la Britney ! Va chez le coiffeur et rase-toi la tête !",
            "Maintenant que tu as osé le look Britney, c’est l’heure de sublimer ce crâne tout frais ! Direction le dressing et rends hommage à un·e chauve ou rasé·e de près célèbre. Alors, plutôt Etchebest ou Halsey ?",
            "Oops, avec ton nouveau look, tu risques d’attraper froid ! Achète le Bonnet Verbier à 330 Bimbos Or."
        ],
        
        154: [
            "Retrouver Laurent c’est sympa … mais tu sens que ton QI en prend un coup ! File vite à la bibliothèque et lis trois fois pour faire chauffer tes neurones !",
            "Pas facile de se concentrer quand une gamine squatte l'ordi de la bibliothèque pour jouer à Ma Bimbo ! Prise de nostalgie, tu fonces chez Ikéland pour te procurer un ordinateur portable et revivre ton âge d'or !",
            "De retour chez toi, installe fièrement ton nouvel ordi et lance Ma Bimbo (onglet \"Utilisables\"). Joue 30 minutes pour renouer avec ton enfant intérieur ! "
        ],

        155: [
            "Félicitations, tu es couronnée Miss Halloween ! Malheureusement, ton mec s'en fou et te le fait savoir. Va chez la psy pour vider ton sac et partager des anecdotes croustillantes sur votre vie conjugale !",
            "Après avoir écouté ton récit, ta psy te le confirme : Laurent ne te mérite clairement pas ! Mais bon… il est riche, alors tu décides de rester. Par contre, hors de question qu’il t’approche ! Pour lui éviter l'envie de t’embrasser, fonce à la supérette et mange 10 \"Ails bouquet\". ",
            "HORREUR ! Une copine t'appelle pour sortir et ton haleine est insupportable ! Il est temps de masquer cette odeur… Littéralement. Achète et porte le \"Masque Dresseuse créatures alien\" pour protéger la population."
        ],

        156: [
            "La fête chez Mlle-Tendance ne s’est pas passée comme prévu … Pendant ton coma sur le canapé, elle t’a repeinte en bleu ! Direction le salon de teint !",
            "Ton mec ne peut pas te voir comme ça ! Il risque de te quitter et adieu les BO ! Réalise une tenue qui cache entièrement ton body-art, visage y compris.",
            "Woaw, en fait c’est la classe ! Clique sur \"Ta Bimbo ici ?\" et apparait dans le classement 5 fois aujourd’hui. Tout le monde doit … ne pas te voir, du coup …"
        ],

        157: [
            "Il est temps de retirer tout ce bleu ! File chez Ikéland, achète une baignoire flambant neuve et utilise-la pour faire de ton appartement un véritable spa (onglet \"Utilisables\") ! ",
            "Oops, ta peau est toute irritée ! Direction la supérette pour acheter un masque pour le visage. Fais-toi un bon soin et prépare-toi à te sentir aussi douce qu’un marshmallow !",
            "Ton masque t'a relaxée et tu es de super bonne humeur ! Enfile ta plus belle tenue et fais un tour sur le défilé normal. Envoie 10 bimbo com's aux bimbos qui te plaisent !"
        ],

        158: [
            "Bon, passons aux choses sérieuses : direction Pôle Métier pour vérifier que tu as bien fait toutes les formations courtes et que tu possèdes toutes les tenues de métier.",
            "Aaaah, le monde du travail … Entre les tailleurs gris tristounets et les chemises froissées, c’est pas la fête … Crée une tenue uniquement avec des items de métier et montre-leur qu’une girlboss peut être à la fois pro et stylée !",
            "Pour prouver que tu es une girlboss jusqu'au bout des ongles, va briller dans le Jeu des Trois Tenues ! (https://www.ma-bimbo.com/forum/t494398,1-bimbo-les-trois-tenues.htm)"
        ],

        159: [
            "Laurent t’oppresse, c'est insupportable ! Tu as besoin de souffler, de te reconnecter avec la nature ... et surtout d'oublier que tu sors avec un incapable ! Commence par acquérir un bien immobilier avec un jardin (achat ou location) et laisse la verdure envahir ta vie !",
            "Avec ton jardin, tu découvres la joie du jardinage ! Rends-toi vite dans l'onglet \"Utilisables\" d'Ikéland et achète un plan d’hibiscus, de géranium et un arbre. Plante-les dans ton jardin et pense à les arroser !",
            "Même quand tu t’occupes de tes plantes, Laurent trouve le moyen de venir te saouler … Il est temps de prendre une grande décision : change carrément de pays ! Direction Bimbo UK ! Inscris-toi sur la version anglaise et atteins le niveau 10. (Si tu as déjà atteint ce niveau, pourquoi ne pas explorer une autre version du jeu ?)"
        ],

        160: [
            "Dès ton retour à Bimboland, Laurent te force à aller à la salle de sport. Enragée, tu décides de l'enfermer dans une pièce spécialement aménagée pour lui, là où il pourra réfléchir à ses erreurs. Choisis une pièce de ton logement et aménage-là de la manière la plus inconfortable possible ! Elle aura sûrement du succès sur le forum ...",
            "Pour continuer de toucher son salaire, tu dois lui assurer l'accès aux premières necessités ! File à la Supérette et ramène-lui dix articles que tu disposeras à même le sol dans sa pris- euh, nouvelle chambre.",
            "Afin qu'il puisse se distraire, tu décides d'acheter une Jukebox à 740 BO, ainsi que deux enceintes à 340 BO. Comme tu es une bimbo généreuse, \"BIMBO GIRL\" sera diffusé en boucle entre 6h et 23h."
        ],
    };

    // Fonction pour mettre à jour les missions en fonction du niveau
    function updateMissions(level) {
        const missionsForLevel = levelMissions[level] || [];
        missions.forEach((missionLabel, index) => {
            missionLabel.textContent = missionsForLevel[index] || ""; // Met à jour le texte des missions
        });
    }

    // Inscription
    if (registerForm) {
        registerForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const username = document.getElementById("register-username").value;
            const password = document.getElementById("register-password").value;

            // Sauvegarder pseudo et mot de passe dans localStorage
            if (localStorage.getItem(username)) {
                alert("Ce pseudo est déjà utilisé. Choisissez un autre.");
            } else {
                localStorage.setItem(username, password);
                localStorage.setItem(`${username}-level`, 152); // Commence au niveau 152
                alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
                window.location.href = "index.html";
            }
        });
    }

    // Connexion
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Vérifie l'identifiant et le mot de passe
            const storedPassword = localStorage.getItem(username);
            if (storedPassword && storedPassword === password) {
                localStorage.setItem("currentUser", username);
                window.location.href = "main.html";
            } else {
                alert("Pseudo ou mot de passe incorrect.");
            }
        });
    }

    // Logique de gestion des niveaux
    let currentUser = localStorage.getItem("currentUser");
    let currentLevel = parseInt(localStorage.getItem(`${currentUser}-level`)) || 152;

    // Met à jour le niveau affiché
    levelTitle.textContent = `Je suis au niveau ${currentLevel}`;
    updateMissions(currentLevel); // Met à jour les missions dès le chargement

    // Gestion du bouton pour passer au niveau suivant
    nextLevelButton.addEventListener("click", function() {
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        if (allChecked) {
            if (currentLevel < 160) { // Vérification que le niveau est inférieur à 160
                currentLevel++;
                localStorage.setItem(`${currentUser}-level`, currentLevel); // Sauvegarde du nouveau niveau
                levelTitle.textContent = `Je suis au niveau ${currentLevel}`;
                updateMissions(currentLevel);
                checkboxes.forEach(checkbox => checkbox.checked = false); // Réinitialise les cases
            } else if (currentLevel === 160) { // Si le niveau est exactement 160

                // Affiche l'image de fin
                document.body.classList.add('background-finish');
                
                // Masquer le titre, les missions
                levelTitle.style.display = "none"; // Cache le titre
            
                // Récupère le conteneur des missions
                const missionContainer = document.getElementById("missions-container");
                if (missionContainer) {
                    missionContainer.style.display = "none"; // Cache le conteneur des missions
                }
            
                // Affiche le conteneur de niveau suivant
                const nextLevelContainer = document.getElementById("next-level-container");
                if (nextLevelContainer) {
                    nextLevelContainer.style.display = "block"; // Affiche le conteneur pour passer au niveau suivant
                }
              


                
                
           
    


               

}
           
            
        } else {
            alert("Veuillez cocher toutes les cases pour passer au niveau suivant !");
        }
    });
    
    

    // Bouton pour revenir au niveau 152
    const resetButton = document.getElementById("reset-level");
    if (resetButton) {
        resetButton.addEventListener("click", function() {
            localStorage.setItem(`${currentUser}-level`, 152); // Réinitialise le niveau
            currentLevel = 152; // Remise à zéro du niveau en cours
            levelTitle.textContent = `Je suis au niveau ${currentLevel}`;
            updateMissions(currentLevel);
            checkboxes.forEach(checkbox => checkbox.checked = false); // Réinitialise les cases
        });
    }
});





