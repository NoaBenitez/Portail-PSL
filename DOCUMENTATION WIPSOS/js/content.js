/* =========================================================================
   CONTENU DE LA DOCUMENTATION WIPSOS
   -------------------------------------------------------------------------
   STRUCTURE :
     DOC = [ catégorie ]
     Une catégorie contient des SOUS-GROUPES ("groups"), et chaque
     sous-groupe contient des FORMATIONS ("items").

   Pour AJOUTER un SOUS-GROUPE dans "Commerce" :
     Ajoutez un objet dans "groups" :
        {
          name: "Nom du sous-groupe",
          items: [ ... ]
        }

   Pour AJOUTER une FORMATION dans un sous-groupe :
     Ajoutez un objet dans "items" :
        {
          id:    "identifiant-unique",     // sans espaces ni accents
          title: "Titre affiché dans le menu",
          lead:  "Phrase d'introduction (optionnel)",
          html:  `... contenu HTML de la formation ...`
        }

   Enregistrez le fichier et rechargez la page. C'est tout !

   Balises HTML utiles dans "html" :
     <h2>Titre de section</h2>
     <h3>Sous-titre</h3>
     <p>Paragraphe…</p>
     <ul><li>Élément de liste</li></ul>
     <div class="callout info"><span class="ic">i</span><div>Info…</div></div>
     <div class="callout tip"><span class="ic">★</span><div>Astuce…</div></div>
     <div class="callout warn"><span class="ic">!</span><div>Attention…</div></div>
     <div class="step"><div class="step-num">1</div><div class="step-body">
        <strong>Titre étape</strong>Description…</div></div>
     <table><tr><th>Col</th></tr><tr><td>Valeur</td></tr></table>
   ========================================================================= */

/* =========================================================================
   VIDÉOS DE FORMATION
   -------------------------------------------------------------------------
   Deux enregistrements de formation :
     VIDEO_S1 = Formation Commercial 1/2 (groupe 1) — YouTube
     VIDEO_S2 = Formation Commercial 2/2 (groupe 1) — YouTube
   (Le bouton « Voir la vidéo » s'adapte automatiquement à la plateforme.)

   VIDEOS associe chaque formation (par son "id") à sa vidéo et au
   MINUTAGE DE DÉPART (t, en secondes). Le bouton « Voir la vidéo » ouvre
   l'enregistrement directement à ce moment-là.

   Pour AJUSTER un minutage : modifiez la valeur "t" (en secondes).
     Ex. 48 min 35 s = 48*60 + 35 = 2915.
   Pour CHANGER de plateforme plus tard : remplacez VIDEO_S1 / VIDEO_S2 par
   les nouvelles URL (YouTube, Vimeo…) — voir js/app.js pour le format du lien.

   ⚠️ Les minutages sont APPROXIMATIFS (déduits des sous-titres). Ils placent
   le début du sujet ; ajustez si besoin.
   ========================================================================= */

const VIDEO_S1 = "https://youtu.be/xLE1T9bw86M";
const VIDEO_S2 = "https://youtu.be/dZ0JAOajzIw";

const VIDEOS = {
  /* ----- Session 1 — Formation Commercial 1/2 ----- */
  "intro-commercial":               { v: VIDEO_S1, t: 424 },   // 07:04
  "menu-favoris":                   { v: VIDEO_S1, t: 480 },   // 08:00
  "rechercher-client":              { v: VIDEO_S1, t: 549 },   // 09:09
  "creer-client-prospect":          { v: VIDEO_S1, t: 632 },   // 10:32
  "prospect-vs-client":             { v: VIDEO_S1, t: 916 },   // 15:16
  "creer-contact":                  { v: VIDEO_S1, t: 959 },   // 15:59
  "notion-payeur":                  { v: VIDEO_S1, t: 1188 },  // 19:48
  "devis-selectionner-client":      { v: VIDEO_S1, t: 1398 },  // 23:18
  "devis-entete":                   { v: VIDEO_S1, t: 1480 },  // 24:40
  "chiffrage-paragraphes-articles": { v: VIDEO_S1, t: 1926 },  // 32:06
  "chiffrage-caddie":               { v: VIDEO_S1, t: 2227 },  // 37:07
  "article-nomenclature":           { v: VIDEO_S1, t: 2398 },  // 39:58
  "sous-totaux-niveaux":            { v: VIDEO_S1, t: 2657 },  // 44:17
  "options-devis":                  { v: VIDEO_S1, t: 2915 },  // 48:35
  "inserer-texte":                  { v: VIDEO_S1, t: 3161 },  // 52:41
  "type-facturation":               { v: VIDEO_S1, t: 3208 },  // 53:28
  "conditions-reglement-acompte":   { v: VIDEO_S1, t: 3316 },  // 55:16
  "edition-pdf-modeles":            { v: VIDEO_S1, t: 3636 },  // 1:00:36
  "envoyer-devis":                  { v: VIDEO_S1, t: 3750 },  // 1:02:30
  "indices-versions":               { v: VIDEO_S1, t: 4189 },  // 1:09:49
  "supprimer-archiver":             { v: VIDEO_S1, t: 4482 },  // 1:14:42
  "copier-reaffecter":              { v: VIDEO_S1, t: 4601 },  // 1:16:41
  "descriptifs-notes":              { v: VIDEO_S1, t: 4729 },  // 1:18:49
  "synthese-marge":                 { v: VIDEO_S1, t: 5050 },  // 1:24:10
  "remises":                        { v: VIDEO_S1, t: 5202 },  // 1:26:42
  "base-article-prix":              { v: VIDEO_S1, t: 5539 },  // 1:32:19
  "base-test-production":           { v: VIDEO_S1, t: 5586 },  // 1:33:06
  "code-etat":                      { v: VIDEO_S1, t: 5813 },  // 1:36:53
  "siret-type-client":              { v: VIDEO_S1, t: 6285 },  // 1:44:45

  /* ----- Session 2 — Formation Commercial 2/2 ----- */
  "profil-commercial":              { v: VIDEO_S2, t: 467 },   // 07:47
  "tva":                            { v: VIDEO_S2, t: 1444 },  // 24:04
  "devis-adjonction":               { v: VIDEO_S2, t: 1596 },  // 26:36
  "documents-electroniques":        { v: VIDEO_S2, t: 1774 },  // 29:34
  "sauvegarde-enregistrement":      { v: VIDEO_S2, t: 2053 },  // 34:13
  "devis-multi-activites":          { v: VIDEO_S2, t: 4273 },  // 1:11:13
  "proposition-contrat":            { v: VIDEO_S2, t: 5142 },  // 1:25:42
  "regroupement-word":              { v: VIDEO_S2, t: 5577 },  // 1:32:57
  "prochaines-sessions":            { v: VIDEO_S2, t: 6125 },  // 1:42:05
  "tarifs-particuliers":            { v: VIDEO_S2, t: 6266 }   // 1:44:26
};

const DOC = [
  {
    category: "Commerce",
    icon: "💼",
    groups: [

      /* ============================================================
         SOUS-GROUPE 1 — FICHE CLIENT
         ============================================================ */
      {
        name: "Fiche client",
        items: [

          {
            id: "intro-commercial",
            title: "Introduction au module commercial",
            lead: "Comprendre le rôle des devis commerciaux dans WIPSOS avant de commencer.",
            html: `
              <h2>De quoi parle-t-on ?</h2>
              <p>Dans WIPSOS, la partie <strong>commerciale</strong> sert à créer les
              <strong>devis d'installation</strong> : chiffrer une prestation, éditer le PDF
              et l'envoyer au client. L'objectif est d'aller jusqu'au bout du processus :
              <em>créer le devis → le chiffrer → éditer le PDF → l'envoyer au client</em>.</p>

              <div class="callout warn">
                <span class="ic">!</span>
                <div><strong>Ne pas confondre les types de devis.</strong> Le commerce se répartit en
                fait sur <strong>3 modules</strong> chez PSL :</div>
              </div>

              <table>
                <tr><th>Module</th><th>Type de devis</th><th>Ce que ça ouvre ensuite</th></tr>
                <tr><td>Commerce</td><td>Installation (chantier 9 / travaux)</td><td>Un chantier + une facturation chantier</td></tr>
                <tr><td>SAV</td><td>Devis de correctif / réparation</td><td>Une intervention + une facturation SAV</td></tr>
                <tr><td>Contrat</td><td>Proposition de maintenance</td><td>Un contrat (partie ADV)</td></tr>
              </table>

              <h2>Le préalable : il faut un client</h2>
              <p>Avant de pouvoir faire un devis dans le module commercial, il faut
              <strong>un client</strong> (ou un prospect). On commence donc toujours par la
              <strong>fiche client</strong>.</p>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Chaque menu de WIPSOS correspond à un métier : partie commerciale, partie
                chantier, partie stock… On les découvre au fur et à mesure des formations.</div>
              </div>
            `
          },

          {
            id: "menu-favoris",
            title: "Menus, sous-menus et favoris",
            lead: "Personnaliser son menu pour retrouver rapidement les écrans utilisés.",
            html: `
              <h2>Beaucoup de menus et de sous-menus</h2>
              <p>WIPSOS contient de nombreux menus et sous-menus. Exemple : pour accéder aux
              clients, on ouvre <code>Client</code> puis le sous-menu <code>Fiche</code>
              (double-clic), qui permet de consulter et de créer un client.</p>

              <h2>Mettre un menu en favori</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Clic droit sur la rubrique</strong>Par exemple sur <code>Fiche</code>.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>« Ajouter à mes favoris »</strong>Une petite étoile apparaît à côté de la rubrique.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Menu « Favoris » en haut</strong>On y retrouve tous les menus et sous-menus épinglés.</div></div>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>On peut mettre en favori aussi bien des menus que des sous-menus
                (ex. <code>Commercial → Devis</code>). C'est idéal pour se créer son propre
                menu et gagner du temps au quotidien.</div>
              </div>
            `
          },

          {
            id: "rechercher-client",
            title: "Rechercher un client",
            lead: "Retrouver un client existant dans la base via la table de recherche.",
            html: `
              <h2>Ouvrir la recherche</h2>
              <p>Dans <code>Client → Fiche</code> (double-clic), on arrive sur la base clients.
              On peut alors rechercher un client existant, ou en créer un nouveau.</p>

              <h2>Les critères de recherche</h2>
              <p>À gauche de la table, on trouve les critères de recherche disponibles :</p>
              <ul>
                <li><strong>Raison sociale</strong></li>
                <li><strong>Rue</strong>, <strong>Ville</strong></li>
                <li><strong>Contact</strong> (le contact principal)</li>
                <li><strong>Mots-clés</strong></li>
              </ul>

              <h3>Recherche « contient » avec l'étoile</h3>
              <p>Pour chercher une partie seulement de la raison sociale, on utilise
              l'<strong>étoile</strong> <code>*</code> : taper par exemple <code>*collège</code>
              puis valider avec la <strong>coche verte</strong> remonte tous les clients dont la
              raison sociale contient « collège ».</p>

              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Choisir le critère</strong>Ex. Raison sociale.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Saisir <code>*</code> + une partie du nom</strong>Ex. <code>*agence</code>.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Coche verte</strong>Valide et affiche les résultats.</div></div>

              <h3>Autres méthodes</h3>
              <ul>
                <li>La <strong>coche verte tout en haut</strong> lance une recherche complète sur l'ensemble des clients — un peu lente, mieux vaut filtrer avant.</li>
                <li><strong>Clic droit</strong> sur la colonne (petite loupe) → <code>Filtrer / contient</code>, comme sur Excel.</li>
                <li>Si on connaît le client, on tape directement la raison sociale.</li>
              </ul>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Le <strong>numéro de fiche client</strong> est très pratique : on peut le
                copier-coller pour aller plus vite, notamment au moment de créer le devis dans le
                module commercial.</div>
              </div>
            `
          },

          {
            id: "creer-client-prospect",
            title: "Créer un client ou un prospect",
            lead: "Créer une nouvelle fiche via la page blanche et renseigner les champs obligatoires.",
            html: `
              <h2>Prospect ou client : toujours une fiche client</h2>
              <p>Que ce soit un <strong>prospect</strong> ou un <strong>client réel</strong>, la fiche se
              crée toujours dans <code>Client → Fiche</code>. C'est <em>à l'intérieur</em> de la fiche
              qu'on indique s'il s'agit d'un prospect ou d'un client.</p>

              <h2>La page blanche = créer</h2>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Dans WIPSOS, la <strong>page blanche</strong> sert partout à <strong>créer</strong>
                quelque chose. Dans chaque menu (client, commercial…), elle crée un nouvel élément.
                Ici, elle crée une nouvelle fiche client.</div>
              </div>

              <h2>Les champs en gras = obligatoires</h2>
              <p>Inutile de remplir chaque zone. Les éléments importants sont en
              <strong>gras</strong> : ils sont <strong>obligatoires</strong> et doivent être saisis.</p>

              <h3>Champs à renseigner</h3>
              <table>
                <tr><th>Champ</th><th>Remarque</th></tr>
                <tr><td>Mot-clé</td><td>Aide à la recherche (ex. « CA » pour Crédit Agricole). Personnalisable.</td></tr>
                <tr><td>Raison sociale</td><td>Nom du site / de l'entreprise.</td></tr>
                <tr><td>Adresse (3 lignes)</td><td>Saisie libre.</td></tr>
                <tr><td>Code postal</td><td>Liste déroulante des villes selon le code.</td></tr>
                <tr><td>Code pays</td><td><strong>Important</strong> même en France (lié à la facturation électronique).</td></tr>
                <tr><td>Numéro SIRET</td><td>En gras / obligatoire pour une entreprise.</td></tr>
                <tr><td>Origine</td><td>Comment le prospect a été ramené.</td></tr>
                <tr><td>Famille</td><td>Liste de familles à sélectionner.</td></tr>
                <tr><td>Commercial rattaché</td><td>La personne en charge.</td></tr>
                <tr><td>Type</td><td>Prospect ou Client.</td></tr>
              </table>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>Pensez à saisir le <strong>code pays</strong> à la création des fiches : c'est lié
                à la <strong>facturation électronique</strong>.</div>
              </div>

              <h2>Enregistrer la fiche</h2>
              <p>On enregistre avec la <strong>disquette</strong> : la fiche est sauvegardée dans la base.
              Elle apparaît ensuite dans la liste des clients.</p>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Le numéro de SIRET pourra <strong>ne plus être obligatoire</strong> selon le
                <strong>type de client</strong> (voir la formation « SIRET & type de client »). Pour un
                <strong>particulier</strong>, le champ SIRET est grisé.</div>
              </div>
            `
          },

          {
            id: "prospect-vs-client",
            title: "Prospect ou client : la différence",
            lead: "Ce qui change quand un prospect devient client, et le passage automatique.",
            html: `
              <h2>Au départ : prospect</h2>
              <p>Quand on crée une fiche pour faire un devis, on laisse le type sur
              <strong>prospect</strong>. Les clients déjà présents dans la base sont, eux, déjà
              tagués « client » sur leur fiche.</p>

              <h2>Le passage en client</h2>
              <p>Lorsque le <strong>devis est accepté</strong>, WIPSOS demande de modifier le type pour
              passer la fiche en <strong>client</strong>.</p>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Au début : prospect → ensuite, une fois le devis accepté : client.</div>
              </div>

              <h2>Ce qui devient obligatoire en « client »</h2>
              <p>En basculant en client, des champs supplémentaires deviennent obligatoires
              (passent en gras) :</p>
              <ul>
                <li><strong>Secteur géographique</strong> — obligatoire, à sélectionner.</li>
                <li><strong>Élément financier → Code règlement</strong> — comment le client règle ses factures.</li>
              </ul>

              <p>Ces éléments seront donc à saisir au moment d'accepter le devis et de passer la
              fiche en client.</p>
            `
          },

          {
            id: "notion-payeur",
            title: "La notion de payeur",
            lead: "Rattacher un payeur différent du site (ex. un siège qui règle les factures).",
            html: `
              <h2>Quand utiliser un payeur ?</h2>
              <p>Exemple : une <strong>agence bancaire</strong> est le <strong>site</strong>, mais c'est le
              <strong>siège</strong> qui paye les factures. Dans ce cas, on crée la fiche du
              <strong>payeur</strong> puis on le <strong>rattache au site</strong>.</p>

              <table>
                <tr><th>Situation</th><th>Que faire ?</th></tr>
                <tr><td>L'entreprise paye sa propre facture</td><td>Aucun payeur à saisir : le site est lui-même payeur.</td></tr>
                <tr><td>Le payeur est différent (siège, maison mère…)</td><td>Créer la fiche du payeur, puis le rattacher au site.</td></tr>
              </table>

              <h2>Rattacher le payeur</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Créer la fiche du payeur</strong>Comme une fiche client classique.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Sur le site, zone « payeur »</strong>Cliquer la petite coche sur le côté pour ouvrir la recherche client.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Rechercher et sélectionner le payeur</strong>On indique ainsi que ce client est payeur de ce site.</div></div>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>Important : bien <strong>créer la fiche du payeur</strong> avant de pouvoir le
                <strong>rattacher au site</strong>.</div>
              </div>
            `
          },

          {
            id: "creer-contact",
            title: "Créer un contact",
            lead: "Ajouter le contact principal pour pouvoir envoyer le devis et garder l'historique.",
            html: `
              <h2>Pourquoi créer des contacts ?</h2>
              <p>Les contacts s'ajoutent <strong>au fur et à mesure</strong> : pas besoin de créer tous les
              contacts de l'entreprise dès le départ. Au minimum, créez le contact avec qui vous
              traitez, pour pouvoir <strong>envoyer le devis via WIPSOS</strong> et garder un
              <strong>historique des mails envoyés</strong>.</p>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Les contacts servent aussi dans d'autres modules : sur le <strong>SAV</strong>, lors d'un
                bon d'intervention, le contact reçoit la notification et c'est lui qui apparaît sur le
                téléphone du technicien.</div>
              </div>

              <h2>Créer le contact</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Picto « Contact »</strong>Survol de la souris = bulle d'information « Contact ».</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Page blanche</strong>Comme pour la fiche client, elle permet de créer un nouveau contact.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Saisir les informations</strong>Puis enregistrer : la ligne du contact apparaît.</div></div>

              <h3>Champs du contact</h3>
              <table>
                <tr><th>Champ</th><th>Remarque</th></tr>
                <tr><td>Titre</td><td>Monsieur / Madame.</td></tr>
                <tr><td>Nom / Prénom</td><td>Peuvent être rendus obligatoires (en gras).</td></tr>
                <tr><td>Fonction</td><td>Liste de valeurs, enrichissable dans le paramétrage (ex. Directeur).</td></tr>
                <tr><td>Téléphone</td><td>Ligne directe.</td></tr>
                <tr><td>Adresse mail</td><td>Indispensable pour l'envoi du devis.</td></tr>
                <tr><td>Lieu</td><td>Tag d'info : facturation, installation, site… (facultatif).</td></tr>
              </table>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Ne rendez pas tout obligatoire (« usine à gaz »). Le nom, le téléphone et l'adresse
                mail suffisent généralement.</div>
              </div>

              <h2>Cases à cocher importantes</h2>
              <ul>
                <li><strong>Contact principal</strong> — il remonte au niveau de la fiche client.</li>
                <li><strong>Habilité Appel SAV</strong> — la personne peut faire des demandes de dépannage ;
                les contacts habilités remontent sur l'application <strong>IP Connect</strong> des techniciens.</li>
                <li><strong>« B » (relance)</strong> — pour les relances de factures impayées (partie comptabilité).</li>
              </ul>
            `
          }

        ]
      },

      /* ============================================================
         SOUS-GROUPE 2 — CRÉER UN DEVIS
         ============================================================ */
      {
        name: "Créer un devis",
        items: [

          {
            id: "devis-selectionner-client",
            title: "Démarrer un devis : sélectionner le client",
            lead: "Sans client sélectionné, impossible de créer une proposition.",
            html: `
              <h2>La table des devis</h2>
              <p>Dans <code>Commercial → Devis</code>, on retrouve l'ensemble des devis au fur et à
              mesure de leur création. On peut les filtrer (par activité, par client, par
              commercial, par <strong>code état</strong>…).</p>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>La <strong>première chose à faire</strong> pour créer un devis est de
                <strong>choisir le client</strong>. Si on clique directement sur la page blanche sans client
                sélectionné, ça ne fonctionne pas.</div>
              </div>

              <h2>Sélectionner le client</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Coller le numéro de fiche</strong>Pratique : copier le n° client depuis sa fiche, puis le coller dans le champ client.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Ou cliquer la coche du côté</strong>Pour ouvrir la recherche client (recherche étoile <code>*</code>) et faire un double-clic sur le bon client.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Page blanche</strong>Une fois le client en sélection, la page blanche crée la proposition.</div></div>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Le <strong>devis accepté</strong> s'enlève automatiquement de la liste des propositions
                (vu dans le module ADV). En cochant l'option « devis acceptés », on les fait remonter,
                avec une colonne « accepté ».</div>
              </div>
            `
          },

          {
            id: "devis-entete",
            title: "L'en-tête de la proposition",
            lead: "Saisir les informations de la proposition avant de passer au chiffrage.",
            html: `
              <h2>Deux parties dans un devis</h2>
              <p>Un devis comporte la partie <strong>en-tête</strong> (le petit <strong>stylo</strong> en haut),
              avec deux onglets — <strong>Généralités</strong> et <strong>Facturation et comptabilité</strong> —
              puis le <strong>chiffrage</strong> (bouton dédié).</p>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Comme pour la fiche client, les éléments en <strong>gras</strong> sont obligatoires :
                ils servent ensuite au chiffrage.</div>
              </div>

              <h2>Champs de l'en-tête (Généralités)</h2>
              <table>
                <tr><th>Champ</th><th>Détail</th></tr>
                <tr><td>Intitulé</td><td>Titre de la proposition (ex. « Installation extincteurs bâtiment A »).</td></tr>
                <tr><td>Réf. commande client</td><td>Facultatif ici : peut être saisi plus tard (ADV, chantier, facturation). Apparaîtra sur la facture chantier.</td></tr>
                <tr><td>Date de l'offre</td><td>Date du jour.</td></tr>
                <tr><td>Date de relance</td><td>Paramétrée à ~15 jours, modifiable (ex. 48 h pour un devis urgent).</td></tr>
                <tr><td>Activité</td><td><strong>Crucial</strong> — voir ci-dessous.</td></tr>
                <tr><td>Commercial</td><td>Celui rattaché à la fiche client ; un 2ᵉ commercial possible avec un %.</td></tr>
                <tr><td>Contact</td><td>Le contact de l'affaire, qui permettra d'envoyer la proposition.</td></tr>
                <tr><td>Remise globale</td><td>Facultative, en %, sur toute la proposition.</td></tr>
                <tr><td>% de réussite</td><td>Pour le prévisionnel (ex. « projet qualifié »).</td></tr>
                <tr><td>Code état</td><td>Évolution du devis (en cours, envoyé, accepté…).</td></tr>
              </table>

              <h3>L'activité : un impact majeur</h3>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>L'<strong>activité</strong> (ex. Extincteur) est déterminante : à l'acceptation du devis,
                WIPSOS crée automatiquement une <strong>fiche technique</strong> (= une <strong>installation</strong>)
                rattachée au client. Elle est vide au départ et se remplit quand on réceptionne le
                matériel commandé. Voir la formation « Devis multi-activités ».</div>
              </div>

              <h3>Date de relance : à quoi ça sert ?</h3>
              <p>WIPSOS affiche, sur la <strong>page d'accueil</strong>, un <strong>tableau des devis à relancer</strong>.
              Chaque utilisateur paramètre son affichage : par exemple voir les devis qui arrivent à
              échéance dans 2 jours, ou ceux du jour même (paramètre à 0).</p>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>Les relances ne sont <strong>pas automatiques</strong> : aucun mail n'est envoyé tout
                seul. La relance est une <strong>action manuelle</strong>.</div>
              </div>

              <h3>Deuxième commercial & commissions</h3>
              <p>On peut rattacher un 2ᵉ commercial avec un pourcentage (ex. 50 % / 50 %). Utile pour
              les exports de données et le calcul des commissions.</p>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Le <strong>code état</strong> est sur fond bleu à la création : on ne peut pas le modifier
                tout de suite. Il faut d'abord enregistrer le devis, puis y revenir pour le changer.</div>
              </div>
            `
          },

          {
            id: "chiffrage-paragraphes-articles",
            title: "Le chiffrage : paragraphes et articles",
            lead: "Créer des paragraphes, y insérer des articles et gérer leur positionnement.",
            html: `
              <h2>Passer au chiffrage</h2>
              <p>Depuis l'en-tête, le bouton <strong>Chiffrage</strong> ouvre la fenêtre de chiffrage. Un
              <strong>double-clic</strong> sur un paragraphe permet de modifier son titre.</p>

              <h2>Organiser en paragraphes</h2>
              <p>Deux approches possibles :</p>
              <ul>
                <li><strong>Un seul paragraphe</strong> contenant tous les articles (matière, main d'œuvre, déplacement).</li>
                <li><strong>Plusieurs paragraphes</strong> (ex. par localisation : bâtiment A, bâtiment B ; ou par nature : matière / main d'œuvre / déplacement).</li>
              </ul>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>On peut modifier <strong>police, taille et couleur</strong>. Pour le faire en masse, passez
                par <code>Outils → Définir le style</code> puis <code>Affecter le style</code> : chaque niveau
                (paragraphe 1, 2, 3, texte « ABC », articles « colis », sous-totaux, options) est réglable.
                C'est de l'ergonomie/visuel, pas une obligation. <code>Supprimer le style</code> revient à l'état initial.</div>
              </div>

              <h2>Insérer des articles</h2>
              <p>Le picto <strong>colis</strong> permet d'ajouter des articles au chiffrage.</p>

              <div class="callout warn">
                <span class="ic">!</span>
                <div><strong>Attention au positionnement</strong> : il faut toujours se placer (clic) sur la
                <strong>ligne</strong> après laquelle on veut insérer, sinon l'insertion ne fonctionne pas.</div>
              </div>

              <h3>Rechercher un article</h3>
              <p>Dans l'onglet <strong>Recherche</strong> :</p>
              <ul>
                <li>Sélectionner une <strong>famille</strong> pour voir ses articles.</li>
                <li>Ou taper directement : la recherche « contient » fonctionne par <strong>désignation</strong>
                ou par <strong>référence fournisseur</strong>.</li>
              </ul>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Il existe aussi une <strong>liste déroulante</strong> rapide : en tapant directement (ex.
                « extincteur »), les articles s'affichent par ordre. Mais pour chercher par
                <strong>référence fournisseur</strong>, il faut passer par l'onglet Recherche.</div>
              </div>

              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Double-clic sur l'article</strong>Ouvre la page d'insertion (désignation affichée).</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Saisir la quantité</strong>Ex. 5 extincteurs.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Vérifier / modifier le prix unitaire de vente</strong>Modifiable selon les droits utilisateur.</div></div>
              <div class="step"><div class="step-num">4</div><div class="step-body">
                <strong>Enregistrer (en bas)</strong>L'article apparaît dans la liste du chiffrage.</div></div>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Modifier le prix de vente sur un devis <strong>n'a aucun impact sur la base article</strong> :
                la modification ne vaut que pour ce devis. Les cellules de couleur <strong>beige</strong> du
                chiffrage (quantité, prix de vente) sont modifiables directement, sans rouvrir la fenêtre.</div>
              </div>

              <h2>Supprimer / insérer une ligne</h2>
              <p>Tout passe par le <strong>clic droit</strong> : <code>Suppression</code>, <code>Insertion
              ligne article</code>… La <strong>flèche</strong> annule la dernière saisie ; la
              <strong>corbeille</strong> sur le côté est un raccourci de suppression.</p>
            `
          },

          {
            id: "chiffrage-caddie",
            title: "Le caddie et les packs d'articles",
            lead: "Insérer plusieurs articles d'un coup et réutiliser des ensembles courants.",
            html: `
              <h2>Pourquoi le caddie ?</h2>
              <p>Pour éviter de sortir et revenir sur le colis à chaque article, on peut faire une
              <strong>recherche multiple</strong> et tout insérer d'un coup.</p>

              <h2>Méthode</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Onglet Recherche</strong>Trouver un article.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Clic droit → « Ajouter dans le caddie »</strong>Répéter pour chaque article voulu.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Onglet Caddie</strong>On retrouve tous les articles ; on ajuste les quantités si besoin.</div></div>
              <div class="step"><div class="step-num">4</div><div class="step-body">
                <strong>Cocher « Ajouter » + « Insérer le caddie »</strong>Tous les articles remontent d'un coup dans le chiffrage.</div></div>

              <h2>Enregistrer un pack réutilisable</h2>
              <p>Dans le caddie, le bouton <strong>Enregistrement</strong> sauvegarde l'ensemble d'articles
              comme un <strong>pack</strong>. On le recharge ensuite via le bouton <strong>Chargement</strong>.</p>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Idéal pour les ensembles récurrents. Exemple chantier 9 : dans 90 % des mises en
                conformité il faut un extincteur à eau, un 6 L, un registre de sécurité… On crée le pack
                une fois, puis on ajuste juste les quantités.</div>
              </div>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>Les packs/caddies sont <strong>visibles par tous les utilisateurs</strong>. Comme le nom du
                créateur n'apparaît pas, <strong>mettez vos initiales dans le libellé</strong> (ex. « Pack
                extincteur – AB ») pour savoir qui l'a créé.</div>
              </div>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Pour un devis type complet (ex. toutes les maintenances), on peut aussi
                <strong>dupliquer une proposition type</strong> plutôt que d'utiliser un pack — voir la
                formation « Copier ou réaffecter une proposition ».</div>
              </div>
            `
          },

          {
            id: "article-nomenclature",
            title: "Articles à nomenclature",
            lead: "Regrouper plusieurs articles sous un seul, sans montrer le détail au client.",
            html: `
              <h2>Qu'est-ce qu'une nomenclature ?</h2>
              <p>Un <strong>article à nomenclature</strong> est composé de plusieurs articles à l'intérieur
              (ex. main d'œuvre + déplacement). <strong>Le client ne voit pas le détail</strong> : sur le PDF
              n'apparaît que le « Forfait main d'œuvre et déplacement » avec un montant global.</p>

              <div class="callout info">
                <span class="ic">i</span>
                <div><strong>Différence clé :</strong> un article classique (main d'œuvre, déplacement insérés
                séparément) montre le détail au client ; la nomenclature le masque.</div>
              </div>

              <h2>Étape préalable importante : le recalcul du prix</h2>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Avant d'insérer une nomenclature, aller dans <code>Fichier → Mémorisation</code> et
                <strong>cocher « Recalcul du prix de la nomenclature »</strong>. Sinon le prix de vente de la
                nomenclature ne se calcule pas correctement.</div>
              </div>

              <h2>Insérer la nomenclature</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Recherche → Prestation</strong>Sélectionner l'article à nomenclature (ex. « Forfait main d'œuvre »), double-clic.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Onglet « Nomenclature personnalisée »</strong>On y trouve les articles de main d'œuvre / déplacement.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Saisir les quantités</strong>Ex. 10 h de main d'œuvre + 2 déplacements → le prix de vente se calcule (ex. 620 €).</div></div>
              <div class="step"><div class="step-num">4</div><div class="step-body">
                <strong>Reporter la désignation commerciale</strong>Copier la valeur dans la désignation commerciale de l'article, puis enregistrer.</div></div>

              <h2>Modifier le détail après coup</h2>
              <p>Dans le chiffrage, le petit <strong>+</strong> déplie la nomenclature pour voir le détail.
              Les cellules <strong>beige</strong> sont modifiables (ex. passer de 10 h à 15 h de main d'œuvre).
              Le bouton <strong>Réduire</strong> replie le détail.</p>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Les lignes de main d'œuvre peuvent comporter des <strong>majorations</strong> (ex. 125 %,
                150 %, 200 %) selon l'horaire : journée, soirée 18h-20h, nuit 20h-00h, week-end.</div>
              </div>
            `
          },

          {
            id: "sous-totaux-niveaux",
            title: "Sous-totaux et niveaux de paragraphes",
            lead: "Structurer le devis avec des sous-totaux et des sous-paragraphes (1, 2, 2.1, 3).",
            html: `
              <h2>Ajouter un sous-total de paragraphe</h2>
              <p>Se positionner sur la <strong>dernière ligne</strong> du paragraphe, puis utiliser le petit
              <strong>+</strong> (dossier jaune) pour ajouter un <strong>sous-total</strong>. On peut modifier son
              texte puis enregistrer (disquette).</p>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>Toujours se positionner sur la <strong>dernière ligne</strong> pour insérer à la suite.</div>
              </div>

              <h2>Les niveaux de paragraphes</h2>
              <table>
                <tr><th>Action</th><th>Résultat</th></tr>
                <tr><td>Picto « 1 » (nouveau paragraphe)</td><td>Crée un paragraphe de 1ᵉʳ niveau (grand 1, grand 2…).</td></tr>
                <tr><td>Coche sur le côté</td><td>Crée un sous-paragraphe (ex. 2.1, 2.1.1).</td></tr>
              </table>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Le détail en sous-paragraphes n'est <strong>pas obligatoire</strong>. Souvent, un simple
                paragraphe (cliquer directement sur le « 1 ») suffit pour commencer.</div>
              </div>

              <h2>Copier / coller un paragraphe</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Se positionner sur le titre du paragraphe</strong>Important : sur le titre, pas une ligne d'article.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Picto « P » (copier) ou clic droit → Copier</strong>Copie le paragraphe entier.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Se positionner sur la dernière ligne, puis « P » en rouge</strong>Colle le paragraphe à la suite.</div></div>
              <div class="step"><div class="step-num">4</div><div class="step-body">
                <strong>Double-clic sur le titre</strong>Pour renommer (ex. « Bâtiment B »).</div></div>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Pour supprimer : la <strong>corbeille</strong> sur le côté ou le <strong>clic droit →
                Suppression</strong>. On peut aussi <strong>revenir en arrière</strong> (annuler la saisie).</div>
              </div>
            `
          },

          {
            id: "options-devis",
            title: "Les options du devis",
            lead: "Proposer du matériel optionnel qui n'entre pas dans le montant total.",
            html: `
              <h2>À quoi servent les options ?</h2>
              <p>Les <strong>options</strong> sont des articles que le client peut accepter ou refuser et qui
              <strong>n'entrent pas dans le chiffrage</strong> (le montant hors taxes ne change pas). Exemple :
              du matériel dont on ne sait pas encore s'il sera retenu, ou un <strong>contrat de
              maintenance</strong> proposé en option d'une installation.</p>

              <h2>Créer un paragraphe d'options</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Picto « paragraphe d'options »</strong>Crée un paragraphe dédié aux options.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Renommer le paragraphe</strong>Ex. « Options ci-dessous ».</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Colis → Recherche</strong>Insérer les articles voulus (avec quantités).</div></div>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Les articles en option <strong>ne modifient pas le montant hors taxes</strong> du devis.
                Le paragraphe d'options apparaît toujours <strong>à la fin</strong> du chiffrage. Pour insérer
                un autre paragraphe avant, positionnez-vous sur le sous-total et utilisez le picto « 1 ».</div>
              </div>

              <h2>Édition : utiliser les modèles 5 ou 6</h2>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Pour les options, préférez les <strong>modèles PDF 5 ou 6</strong> : ils affichent les
                options <strong>séparément</strong> (sur une 2ᵉ page du même PDF, avec leur prix HT, TVA et TTC,
                hors montant total). Sur les autres modèles, les options sont fondues dans le corps du
                chiffrage et le client comprend moins bien.</div>
              </div>

              <p>Avantage : c'est plus lisible pour le client, et il voit clairement ce qu'il peut
              prendre en option.</p>
            `
          },

          {
            id: "inserer-texte",
            title: "Insérer du texte dans le chiffrage",
            lead: "Ajouter des lignes de texte libre à tout moment du chiffrage.",
            html: `
              <h2>Le picto « T »</h2>
              <p>Le picto <strong>T</strong> permet d'insérer du <strong>texte</strong> à tout moment dans le
              chiffrage.</p>

              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Se positionner sur une ligne</strong>Le texte s'insère en dessous.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Cliquer le picto « T »</strong>Saisir le texte voulu.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Ajuster la taille si besoin</strong>Puis enregistrer.</div></div>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Pratique pour ajouter une précision, un commentaire ou une mention (ex. « oui / non »
                pour une option) juste à l'endroit voulu du chiffrage.</div>
              </div>
            `
          },

          {
            id: "documents-electroniques",
            title: "Les documents électroniques",
            lead: "Centraliser plans, photos, mails et PDF rattachés à l'affaire et au client.",
            html: `
              <h2>Un onglet de centralisation</h2>
              <p>Sur l'en-tête du devis, l'onglet <strong>Document électronique</strong> contient des dossiers
              (ex. <em>Photo et plan</em>, <em>PV de réception</em>). On peut y ranger tout type de
              document lié à l'affaire.</p>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>On peut créer des <strong>sous-dossiers</strong> (ex. « Documents annexes »,
                « Documents fournisseur ») pour ranger les pièces ayant servi au chiffrage : CCTP,
                photos de plan, DWG, mails, PDF…</div>
              </div>

              <h2>Ajouter un document</h2>
              <ul>
                <li><strong>Glisser-déposer</strong> un mail ou un fichier depuis le bureau / la boîte mail vers
                l'encadré blanc.</li>
                <li><strong>Copier-coller</strong> fonctionne toujours (utile en connexion à distance / RDP où le
                glisser-déposer depuis Outlook peut ne pas marcher).</li>
              </ul>

              <h2>Traçabilité et accès</h2>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Tout est <strong>centralisé</strong> : quand le devis est accepté, le chantier ouvert
                <strong>donne accès aux mêmes documents</strong>. Le chargé d'affaires les retrouve donc sans
                les retransférer manuellement. Les documents sont aussi consultables depuis la
                <strong>fiche client</strong> (arborescence reprenant tous les documents liés au SAV, au chantier…).</div>
              </div>

              <p>Exemple : un client réclame son bon d'intervention ? On le retrouve depuis le menu SAV
              ou depuis les documents électroniques de la fiche client (PDF du rapport).</p>
            `
          },

          {
            id: "devis-multi-activites",
            title: "Devis multi-activités",
            lead: "Regrouper plusieurs activités dans un même devis sans tout mélanger.",
            html: `
              <h2>Le principe : une activité = une installation</h2>
              <p>Dans WIPSOS, <strong>chaque activité correspond à une installation</strong> (fiche technique).
              À l'acceptation du devis, l'outil crée <strong>autant d'installations que d'activités</strong>.
              Il faut donc bien segmenter pour ne pas tout mélanger.</p>

              <div class="callout warn">
                <span class="ic">!</span>
                <div><strong>Ne JAMAIS choisir l'activité « multi-activités » dans l'en-tête d'un devis.</strong>
                Cela créerait une seule installation « multi-activités » avec tout mélangé dedans
                (extincteurs, blocs, maintenances, dépannages…), impossible à exploiter pour les
                techniciens. Cette activité ne sert que pour les contrats de maintenance.</div>
              </div>

              <h2>Méthode recommandée : un paragraphe par activité</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>En-tête : activité principale</strong>Ex. Extincteur.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Un paragraphe par activité</strong>Paragraphe 1 = extincteur, paragraphe 2 = BES (blocs de secours), etc.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Clic droit sur le titre du 2ᵉ paragraphe → « Affectation activité analytique »</strong>Choisir l'activité correspondante (ex. BL). Elle s'applique à tous les articles du paragraphe.</div></div>
              <div class="step"><div class="step-num">4</div><div class="step-body">
                <strong>Résultat</strong>Le client aura 2 installations distinctes (ex. une extincteur, une bloc autonome), chacune avec son propre parc matériel.</div></div>

              <h2>Alternative : l'activité par article</h2>
              <p>On peut aussi travailler en <strong>un seul paragraphe</strong> et définir l'activité
              <strong>article par article</strong> (champ « activité » en bout de ligne / dans la fenêtre
              d'insertion). Si la <strong>fiche article est bien paramétrée</strong>, l'activité remonte
              automatiquement.</p>

              <div class="callout info">
                <span class="ic">i</span>
                <div><strong>Pourquoi c'est important ?</strong> À la réception du matériel, chaque article
                remonte sur l'installation correspondant à son activité. Si l'activité est fausse, du
                matériel BES se retrouverait sur l'installation extincteur. WIPSOS privilégie toujours
                des installations bien séparées (alarme incendie à part, bloc autonome à part…).</div>
              </div>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Le plus simple = <strong>un paragraphe par activité</strong>, car l'affectation se fait
                d'un coup sur tout le paragraphe.</div>
              </div>
            `
          }

        ]
      },

      /* ============================================================
         SOUS-GROUPE 3 — PARAMÈTRES DU DEVIS
         ============================================================ */
      {
        name: "Paramètres du devis",
        items: [

          {
            id: "type-facturation",
            title: "Le type de facturation",
            lead: "Champ obligatoire de l'en-tête : il conditionne la facturation du chantier.",
            html: `
              <h2>Un champ obligatoire</h2>
              <p>Dans l'en-tête, onglet <strong>Facturation et comptabilité</strong>, le <strong>type de
              facturation</strong> est en gras donc <strong>obligatoire</strong>. Tant qu'il n'est pas saisi,
              WIPSOS empêche l'enregistrement et invite à le renseigner.</p>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>Le type de facturation a un <strong>impact sur la facturation</strong> du chantier une fois
                le devis accepté. Il faut donc bien le choisir.</div>
              </div>

              <h2>Quelle valeur choisir ?</h2>
              <table>
                <tr><th>Type</th><th>Quand l'utiliser</th></tr>
                <tr><td><strong>CH (Chantier)</strong></td><td>Cas général pour les devis d'installation.</td></tr>
                <tr><td>Maintenance</td><td>Pour une proposition de contrat de maintenance.</td></tr>
                <tr><td>Correctif</td><td>Selon la nature réelle de la prestation.</td></tr>
              </table>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>On peut mettre <strong>CH par défaut</strong> dans le paramétrage pour gagner du temps,
                quitte à le modifier ensuite selon le cas. Avantage : éviter d'avoir à entrer dans le
                chantier pour corriger la prestation après coup.</div>
              </div>
            `
          },

          {
            id: "conditions-reglement-acompte",
            title: "Conditions de règlement et acompte",
            lead: "Afficher des mentions (validité, règlement, acompte) en bas du PDF du devis.",
            html: `
              <h2>Conditions de règlement</h2>
              <p>Dans l'en-tête, à côté du type de facturation, on trouve les <strong>conditions de
              règlement</strong>. On peut :</p>
              <ul>
                <li>Choisir le <strong>code règlement</strong> (ex. virement 30 jours, fin de mois…) ;</li>
                <li>Ou <strong>taper du texte libre</strong> (ex. « Durée de validité du devis : 30 jours »).</li>
              </ul>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Le code règlement dépend du client : 30 jours, 30 jours fin de mois, 15 jours…
                selon la typologie et l'accord passé.</div>
              </div>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Ces mentions peuvent être <strong>paramétrées pour s'afficher par défaut</strong> sur le
                PDF, afin d'éviter de les retaper sur chaque devis. Envoyez un exemple de vos conditions
                actuelles pour les intégrer au paramétrage.</div>
              </div>

              <h2>L'acompte</h2>
              <p>Le champ <strong>acompte</strong> (en montant ou en %, ex. 30 %) est <strong>uniquement de
              l'affichage</strong> sur le PDF : il indique au client qu'un acompte est à régler avant le
              début des travaux. Ce n'est <strong>pas</strong> une facture d'acompte.</p>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Utile notamment quand il y a beaucoup de travail en amont (plans à valider) avant
                de pouvoir être payé. Voir aussi le « commentaire de facturation » pour demander une
                facture d'avancement.</div>
              </div>
            `
          },

          {
            id: "tva",
            title: "La TVA",
            lead: "TVA par défaut, TVA globale, TVA par article et TVA fixée sur la fiche client.",
            html: `
              <h2>TVA par défaut : 20 %</h2>
              <p>Dans l'en-tête, si la cellule TVA est <strong>vide</strong>, c'est du <strong>20 % par défaut</strong>.
              On peut choisir un autre taux dans la liste pour l'ensemble de la proposition.</p>

              <h2>TVA par article</h2>
              <p>On peut aussi spécifier une TVA différente <strong>au niveau d'un article</strong> lors de son
              insertion. On peut donc avoir <strong>plusieurs taux</strong> sur un même devis.</p>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Le <strong>10 %</strong> concerne par exemple certains particuliers ou immeubles selon les
                spécificités. Si la TVA est ponctuelle, on la met sur le devis ; si elle est systématique
                pour un client, mieux vaut la fixer sur sa fiche.</div>
              </div>

              <h2>TVA fixée sur la fiche client</h2>
              <p>Si un client est <strong>toujours</strong> à 10 %, indiquez-le sur sa <strong>fiche client</strong>.
              La TVA sera alors appliquée <strong>partout</strong> : devis commercial, SAV, factures…</p>

              <table>
                <tr><th>Où la TVA est définie</th><th>Effet</th></tr>
                <tr><td>Rien sur la fiche client</td><td>20 % par défaut ; à saisir à chaque affaire si autre taux.</td></tr>
                <tr><td>Sur la fiche client</td><td>Le taux s'applique automatiquement sur tous les modules.</td></tr>
              </table>
            `
          },

          {
            id: "remises",
            title: "Les remises",
            lead: "Trois façons d'appliquer une remise : globale, à l'article, ou via le montant HT.",
            html: `
              <h2>1. Remise globale</h2>
              <p>Dans l'en-tête, le champ <strong>remise globale</strong> applique une remise en % sur
              <strong>l'ensemble</strong> de la proposition. Méthode recommandée pour un client avec une
              remise « de base » : insérer les articles au prix de la base et appliquer la remise globale.</p>

              <h2>2. Remise à l'article</h2>
              <p>En double-cliquant sur un article (fenêtre d'insertion), on peut saisir une
              <strong>remise en pourcentage</strong> propre à cet article.</p>

              <h2>3. Modifier le montant HT</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Cliquer sur le montant hors taxes</strong>En bas à droite pour activer la modification.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Saisir le nouveau montant</strong>Ex. 1980 € → 1900 €.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Choisir le traitement de l'écart</strong>« Article arrondi » (crée une ligne de remise) ou « mise à jour des coefficients de vente » (recalcule les prix).</div></div>
              <div class="step"><div class="step-num">4</div><div class="step-body">
                <strong>Renommer la ligne</strong>Ex. « Remise commerciale ».</div></div>

              <div class="callout info">
                <span class="ic">i</span>
                <div><strong>Remise par client :</strong> il n'existe pas de remise globale rattachée à la fiche
                client. Soit on applique une remise globale <strong>au cas par cas</strong> sur chaque affaire,
                soit on crée des <strong>tarifs particuliers</strong> par article (voir la formation dédiée,
                utile pour un BPU signé avec le client).</div>
              </div>
            `
          },

          {
            id: "tarifs-particuliers",
            title: "Tarifs particuliers (BPU)",
            lead: "Définir des prix spécifiques par client via des lots de tarifs réutilisables.",
            html: `
              <h2>Le besoin</h2>
              <p>Un même article n'a pas le même prix pour tous les clients (bordereaux de prix
              unitaires – <strong>BPU</strong> négociés). Plutôt que de modifier le prix à la main à chaque
              devis, on crée des <strong>tarifs particuliers</strong>.</p>

              <h2>Créer un lot de tarifs</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Article → Tarif particulier → page blanche</strong>Créer un lot : un code (ex. 0002), un libellé, une <strong>date de validité</strong> (ex. 01/06/2026 → 31/12/2026).</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Ajouter des articles au lot</strong>On reprend des articles existants de la base (on ne recrée pas l'article). On peut modifier la désignation et fixer le <strong>prix de vente</strong> spécifique.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Rattacher le lot au client</strong>Sur la fiche client → onglet <strong>Éléments financiers → Tarif</strong>, rattacher le lot. C'est ce qui « active » les prix pour ce client.</div></div>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>On peut <strong>importer une liste d'articles depuis Excel</strong> (mêmes colonnes) au
                lieu de les saisir à la main — pratique pour reconstituer un BPU complet.</div>
              </div>

              <h2>À l'usage</h2>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Une fois le lot rattaché au client, on insère simplement l'article dans le devis :
                il remonte <strong>automatiquement avec le prix du tarif particulier</strong> du client. Ces prix
                s'appliquent <strong>partout</strong> : devis, factures, SAV.</div>
              </div>

              <p>Il faut donc créer tous les lots de tarifs et les rattacher aux clients concernés pour
              que les bons prix soient pris en compte.</p>
            `
          },

          {
            id: "code-etat",
            title: "Le code état du devis",
            lead: "Suivre l'évolution du devis (en cours, envoyé, accepté, refusé) et fiabiliser les éditions.",
            html: `
              <h2>À quoi sert le code état ?</h2>
              <p>Le <strong>code état</strong> reflète l'évolution du devis. Il est important pour
              <strong>suivre les devis</strong>, mais aussi parce qu'il a un <strong>impact sur les éditions</strong>
              (ex. portefeuille de commandes filtré par code état).</p>

              <table>
                <tr><th>Code état</th><th>Signification</th></tr>
                <tr><td>Devis en cours</td><td>En cours de création.</td></tr>
                <tr><td>Devis envoyé</td><td>Envoyé au client.</td></tr>
                <tr><td>Devis accepté</td><td>Validé par le client.</td></tr>
                <tr><td>Devis refusé</td><td>Refusé par le client.</td></tr>
              </table>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>Avant d'accepter un devis, pensez à <strong>changer le code état</strong>. Si un devis
                accepté reste en « devis en cours », toutes les éditions filtrées par code état sont
                faussées.</div>
              </div>

              <h2>Codes couleur</h2>
              <p>On peut associer une <strong>couleur</strong> à chaque code état (ex. en cours = bleu,
              envoyé = orange, accepté = vert, refusé = rouge). Beaucoup plus parlant visuellement
              dans la table des devis.</p>

              <h2>Recherche et colonnes</h2>
              <ul>
                <li>On peut <strong>rechercher par code état</strong> (ex. tous les devis « en cours » d'un client).</li>
                <li>On peut <strong>déplacer / masquer les colonnes</strong> (clic droit sur la bannière bleue) — la
                configuration est <strong>propre à chaque utilisateur</strong>.</li>
                <li>L'<strong>appareil photo</strong> garde en mémoire la configuration d'affichage.</li>
              </ul>

              <h2>Passage automatique et blocage</h2>
              <p>Le passage du code état n'est <strong>pas automatique</strong> par défaut (action manuelle),
              mais deux paramétrages sont possibles :</p>
              <ul>
                <li><strong>Bascule automatique</strong> : passer le devis en « accepté » bascule le code état
                en D3 automatiquement.</li>
                <li><strong>Blocage</strong> : empêcher l'acceptation tant que le code état n'a pas été passé en
                « accepté » — évite les oublis qui faussent les éditions.</li>
              </ul>
            `
          }

        ]
      },

      /* ============================================================
         SOUS-GROUPE 4 — FINALISER & ENVOYER
         ============================================================ */
      {
        name: "Finaliser & envoyer",
        items: [

          {
            id: "descriptifs-notes",
            title: "Descriptifs, notes et commentaires",
            lead: "Note interne, descriptif technique, descriptif commercial et commentaire de facturation.",
            html: `
              <h2>Une logique de communication entre services</h2>
              <p>Au-delà de la saisie, ces zones servent à <strong>faire le lien entre services</strong>
              (commercial, chantier, facturation). On retrouve ces « petits liens » sur plusieurs modules.</p>

              <h2>Note interne</h2>
              <p>Le <strong>bloc-notes</strong> permet de saisir une <strong>note interne</strong>. Plusieurs
              utilisateurs peuvent saisir des notes sur l'affaire. Elles <strong>remontent dans le suivi de
              chantier</strong> si le devis est accepté (même picto).</p>

              <h2>Descriptif technique</h2>
              <p>Le picto <strong>descriptif technique</strong> permet de saisir des éléments qui
              <strong>apparaîtront sur le suivi de chantier</strong> (ex. « prévoir une échelle »,
              « prévoir une sous-traitance »), pour le chargé d'affaires / responsable des travaux.</p>

              <h2>Commentaire de facturation</h2>
              <p>Dans l'onglet <strong>Facturation et comptabilité</strong>, le <strong>commentaire de
              facturation</strong> (ex. « Prévoir une facture d'avancement de 30 % au démarrage »)
              <strong>apparaît dans le module facturation des chantiers</strong> pour la personne qui facture.</p>

              <h2>Descriptif commercial</h2>
              <p>C'est le <strong>pavé de texte placé juste avant le chiffrage</strong> sur le PDF (ex.
              « Bonjour Madame, Monsieur, veuillez trouver ci-dessous notre chiffrage… »).</p>

              <h3>Se créer un modèle de texte</h3>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Picto « choisir un modèle de texte » → page blanche</strong>Créer un nouveau modèle (ex. « Test formation »).</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Saisir le texte + insérer des variables</strong>Double-clic sur une variable (ex. « N° devis ») : le champ se remplira automatiquement à la génération du PDF.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Enregistrer puis affecter</strong>Le picto « affectation de ce modèle » l'applique au devis courant.</div></div>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Le descriptif commercial n'est <strong>pas obligatoire</strong> : si le texte d'accompagnement
                est déjà dans le mail d'envoi, cela suffit. À réserver aux précisions techniques
                spécifiques, au cas par cas.</div>
              </div>
            `
          },

          {
            id: "edition-pdf-modeles",
            title: "Édition PDF et modèles",
            lead: "Choisir un modèle de PDF, prévisualiser et harmoniser les devis de l'entreprise.",
            html: `
              <h2>Aperçu et bibliothèque de modèles</h2>
              <p>Dans le chiffrage, le <strong>dossier bleu (bibliothèque des modèles)</strong> contient un
              ensemble de modèles de PDF. On choisit le modèle (double-clic), on <strong>enregistre</strong>
              pour actualiser, puis <strong>Édition PDF</strong> génère l'aperçu.</p>

              <div class="callout tip">
                <span class="ic">★</span>
                <div><strong>Harmonisez vos devis :</strong> concertez-vous en interne et choisissez
                <strong>un modèle par défaut</strong> (mis dans le paramétrage). Sinon le même client recevra
                des modèles différents — peu lisible. L'objectif est que tout le monde utilise les mêmes
                modèles (1 à 4 sans option, 5 ou 6 avec options).</div>
              </div>

              <h2>Modèles utiles</h2>
              <table>
                <tr><th>Modèle</th><th>Usage</th></tr>
                <tr><td>Modèles 5 ou 6</td><td>Quand il y a des <strong>options</strong> (affichées séparément).</td></tr>
                <tr><td>Modèles 16 / 18</td><td>Modèles classiques appréciés (le formateur utilise le 18).</td></tr>
              </table>

              <h3>Colonnes unité vs quantité</h3>
              <table>
                <tr><th>Colonne</th><th>Signification</th></tr>
                <tr><td>Unité</td><td>L'unité de vente (ex. mètre). Rien à voir avec la quantité.</td></tr>
                <tr><td>Quantité</td><td>La quantité réelle vendue.</td></tr>
              </table>

              <h3>CGV (conditions générales de vente)</h3>
              <p>Les CGV sont du <strong>texte ajouté dans le paramétrage</strong>, normalement rattaché au
              devis. À l'édition PDF, deux possibilités : <strong>à la suite</strong> du chiffrage, ou sur un
              <strong>PDF séparé</strong>.</p>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>L'<strong>en-tête de page</strong> (logo société), les <strong>pieds de page</strong> et les CGV
                n'apparaissent <strong>que sur la base production</strong>, pas sur la base test. C'est normal.</div>
              </div>
            `
          },

          {
            id: "envoyer-devis",
            title: "Envoyer le devis (mail & signature électronique)",
            lead: "Imprimer, générer le PDF, l'envoyer par mail (Outlook) ou par signature électronique.",
            html: `
              <h2>Les options d'envoi</h2>
              <p>Via l'<strong>imprimante</strong> (et la coche du côté), on peut imprimer, générer / voir le
              PDF, l'envoyer par <strong>mail</strong> ou par <strong>signature électronique</strong> (module à part).</p>

              <h2>Envoi par mail : Outlook ou SMTP</h2>
              <p>L'envoi génère automatiquement le PDF et le met en pièce jointe. Deux solutions :</p>
              <table>
                <tr><th>Méthode</th><th>Avantage / inconvénient</th></tr>
                <tr><td><strong>Via Outlook</strong> (recommandé)</td><td>Le mail part de votre Outlook et se retrouve dans vos « éléments envoyés » → <strong>traçabilité conservée</strong>. Compatible ancienne et nouvelle version d'Outlook.</td></tr>
                <tr><td><strong>SMTP générique</strong></td><td>Adresse mail générique : <strong>pas d'historique</strong> sur votre boîte personnelle (tout reste dans WIPSOS).</td></tr>
              </table>

              <div class="callout info">
                <span class="ic">i</span>
                <div>WIPSOS s'adapte aussi à Office 365 et Gmail (avec authentification renforcée). Le
                <strong>corps du mail</strong> et la <strong>signature</strong> se paramètrent ; chacun peut créer son
                propre modèle dans « modèles divers » (page blanche), en plus du mail générique par défaut.</div>
              </div>

              <h2>Renommer le PDF</h2>
              <p>Avant l'envoi, on peut <strong>renommer le fichier</strong> PDF (clic droit → Renommer) sans
              le sortir de WIPSOS.</p>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Le paramétrage du <strong>nom automatique du document</strong> (ex. n° devis – client –
                intitulé) existe déjà pour les factures ; à vérifier pour l'appliquer aux devis.</div>
              </div>

              <h2>Signature électronique</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Envoi par signature électronique</strong>Le client reçoit un mail avec le devis.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Validation en ligne</strong>À l'ouverture, il reçoit un SMS avec un code à saisir.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Remontée automatique</strong>Dès validation, WIPSOS marque le devis comme accepté.</div></div>
              <div class="step"><div class="step-num">4</div><div class="step-body">
                <strong>PDF signé</strong>Avec les signatures de l'entreprise et du client.</div></div>

              <div class="callout info">
                <span class="ic">i</span>
                <div>La pertinence de la signature électronique dépend des procédures du client
                (certains exigent un bon de commande à générer de leur côté).</div>
              </div>
            `
          },

          {
            id: "synthese-marge",
            title: "Synthèse et marge du devis",
            lead: "Vérifier la marge commerciale avant d'envoyer le devis au client.",
            html: `
              <h2>Le bouton Synthèse</h2>
              <p>Le bouton <strong>Synthèse</strong> donne un résumé <strong>financier interne</strong> du devis. On
              peut l'imprimer ou l'éditer en PDF.</p>

              <h2>Ce qu'on y trouve</h2>
              <ul>
                <li>Le <strong>coefficient de marge par prestation</strong> (matière, main d'œuvre, divers, déplacement) ;</li>
                <li>Une <strong>synthèse de la main d'œuvre</strong> ;</li>
                <li>La <strong>marge commerciale</strong> globale, en valeur et en pourcentage.</li>
              </ul>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Réflexe à avoir <strong>avant d'envoyer le devis</strong> : ouvrir la synthèse pour
                s'assurer que la <strong>marge est correcte</strong>.</div>
              </div>
            `
          }

        ]
      },

      /* ============================================================
         SOUS-GROUPE 5 — DEVIS DE CONTRAT
         ============================================================ */
      {
        name: "Devis de contrat",
        items: [

          {
            id: "proposition-contrat",
            title: "La proposition de contrat de maintenance",
            lead: "Créer un devis de contrat sur le même principe qu'un devis d'installation.",
            html: `
              <h2>Proposition ≠ contrat</h2>
              <p>On parle ici de la <strong>proposition</strong> de contrat de maintenance (phase amont), pas
              du contrat lui-même. Si la proposition est acceptée, elle ouvre la <strong>partie contrat</strong>
              (module ADV) pour saisir le contrat.</p>

              <table>
                <tr><th>Type de devis</th><th>Ce que ça ouvre à l'acceptation</th></tr>
                <tr><td>Devis d'installation</td><td>Un chantier (matériel + planification).</td></tr>
                <tr><td>Proposition de contrat</td><td>La partie contrat (pour saisir le contrat de maintenance).</td></tr>
              </table>

              <h2>Même principe que l'installation</h2>
              <p>La création est <strong>identique</strong> : choisir le client → page blanche → en-tête →
              chiffrage. Deux différences :</p>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>En-tête : type de facturation « Contrat »</strong>Au lieu de « Chantier ». Le type de prestation sera la maintenance.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Chiffrer le contrat</strong>Énumérer les articles de maintenance/vérification (ex. « Vérification extincteur annuelle » à 150 €/an, « Maintenance bloc autonome »…).</div></div>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Conseil : créez une <strong>typologie d'articles de maintenance</strong> (un article
                « Maintenance alarme incendie », « Maintenance bloc autonome », etc. par famille). On
                peut aussi partir d'un générique et modifier désignation + prix à la main. Cela permet
                de chiffrer rapidement le devis de contrat.</div>
              </div>

              <div class="callout info">
                <span class="ic">i</span>
                <div>L'édition se fait via <strong>fusion Word</strong> (et non l'imprimante PDF) — voir la
                formation « Regroupement pour Word et édition ».</div>
              </div>
            `
          },

          {
            id: "regroupement-word",
            title: "Regroupement pour Word et édition",
            lead: "Faire remonter les articles du chiffrage dans un document Word de contrat.",
            html: `
              <h2>Pourquoi « Regroupement pour Word » ?</h2>
              <p>Pour un contrat, le document final est un <strong>modèle Word</strong> intégré à WIPSOS. Le
              <strong>regroupement pour Word</strong> indique au logiciel quels articles du chiffrage doivent
              <strong>remonter dans le tableau</strong> du Word — pour éviter de les saisir à la main.</p>

              <h2>Étapes</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Chiffrer le devis de contrat</strong>Comme un devis classique, avec les articles de maintenance.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Clic droit sur le titre du paragraphe → « Regroupement pour Word »</strong>Double-clic sur « Tableau » pour rattacher le paragraphe à un tableau du Word.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Cocher les lignes à traiter</strong>Seulement les articles (pas le titre du paragraphe, pas le texte), puis enregistrer.</div></div>
              <div class="step"><div class="step-num">4</div><div class="step-body">
                <strong>Onglet Courrier → clic droit → choisir le modèle → page blanche → « Émission du document »</strong>WIPSOS génère le Word avec les variables (nom du client…) et le tableau d'articles rempli.</div></div>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Si le modèle Word contient <strong>plusieurs tableaux</strong>, on peut envoyer chaque
                paragraphe vers un tableau différent (tableau 1, 2, 3). S'il n'y a qu'un seul tableau,
                une seule ligne « Tableau » suffit.</div>
              </div>

              <h2>Envoyer le document</h2>
              <p>Une fois le Word généré, clic droit pour l'envoyer :</p>
              <ul>
                <li><strong>En Word</strong> — si le client doit modifier (ex. un quantitatif) ;</li>
                <li><strong>En PDF</strong> — version figée ;</li>
                <li><strong>Par signature électronique</strong> — si le module est disponible.</li>
              </ul>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Comme pour les modèles PDF, <strong>centralisez un seul modèle Word</strong> de contrat de
                maintenance pour toute l'entreprise, afin de l'intégrer au paramétrage et l'uniformiser.</div>
              </div>
            `
          }

        ]
      },

      /* ============================================================
         SOUS-GROUPE 6 — VERSIONS & GESTION DES DEVIS
         ============================================================ */
      {
        name: "Versions & gestion",
        items: [

          {
            id: "indices-versions",
            title: "Indices : créer des versions de devis",
            lead: "Proposer plusieurs variantes d'un devis sans encombrer la base.",
            html: `
              <h2>Pourquoi des indices ?</h2>
              <p>Les <strong>indices</strong> sont des <strong>variantes / versions</strong> d'un même devis (ex. un
              devis avec et un sans option, ou plus / moins d'extincteurs selon le budget). On peut
              envoyer les versions séparément, le client en choisit une.</p>

              <h2>Créer un indice</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Picto « Indice » → Création d'un indice</strong>WIPSOS duplique le devis en une nouvelle version.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Enregistrer et ressortir</strong>Actualiser la table avec la coche verte.</div></div>

              <h3>Numérotation</h3>
              <table>
                <tr><th>Sans indice</th><th>Avec indice</th></tr>
                <tr><td>500, 600, 700… (saut de 100)</td><td>500, 501, 502… (jusqu'à 99 versions)</td></tr>
              </table>

              <h2>L'avantage clé : nettoyage automatique</h2>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Quand le client accepte une version (ex. 500-1), les <strong>autres indices s'enlèvent
                automatiquement</strong> de la base. Pas besoin de supprimer manuellement les devis non
                retenus — contrairement au simple copier-coller, où il faut penser à supprimer la
                version non acceptée.</div>
              </div>

              <h2>Consulter l'historique</h2>
              <p>Sur la proposition acceptée, le picto <strong>« affichage des indices créés »</strong> permet
              de revoir les autres versions. Le petit <strong>+</strong> permet de créer / dupliquer de
              nouvelles versions.</p>
            `
          },

          {
            id: "copier-reaffecter",
            title: "Copier ou réaffecter une proposition",
            lead: "Réutiliser un devis pour un autre client ou corriger le client rattaché.",
            html: `
              <h2>Le clic droit sur la proposition</h2>
              <p>Depuis la table des devis, le <strong>clic droit</strong> sur une proposition donne plusieurs
              actions pratiques.</p>

              <h3>Copier la proposition</h3>
              <p>Permet de <strong>copier un devis vers un autre client</strong>. Par défaut, le client courant
              est proposé, mais on peut en choisir un autre (coche du côté), définir le code état
              (ex. devis en cours), puis « copie du devis ».</p>

              <h3>Réaffectation de la proposition</h3>
              <p>Si on s'est <strong>trompé de client</strong> : clic droit → <strong>réaffectation de la
              proposition</strong> → choisir le bon client → réaffecter.</p>

              <h2>Les devis types (client interne)</h2>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Beaucoup d'utilisateurs créent des <strong>devis types</strong> sur un <strong>client interne</strong>
                (ex. « 999 » / « PSL »). On y stocke plusieurs trames (installation, contrat de
                maintenance…), puis on fait <strong>clic droit → copier la proposition</strong> vers le vrai
                client et on enlève/garde ce qu'il faut. Gros gain de temps : on ne repart pas de zéro.</div>
              </div>
            `
          },

          {
            id: "supprimer-archiver",
            title: "Supprimer ou archiver un devis",
            lead: "Épurer la liste des devis sans perdre définitivement l'information.",
            html: `
              <h2>Supprimer une proposition</h2>
              <p>Clic droit sur la ligne → <strong>Suppression de la proposition</strong>. WIPSOS propose alors
              d'<strong>archiver</strong> le devis supprimé.</p>

              <div class="callout warn">
                <span class="ic">!</span>
                <div><strong>Attention :</strong> une suppression simple <strong>sans archivage</strong> est
                <strong>définitive</strong>. Le devis sera perdu et <strong>même le SAV ne pourra pas le
                récupérer</strong>. En cas de doute, archivez toujours.</div>
              </div>

              <h2>Archiver plutôt que perdre</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Cocher « Archiver le devis supprimé »</strong>Indiquer un motif (ex. « projet abandonné »).</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Le devis quitte la liste active</strong>Cela épure la liste des devis.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Onglet « Archives »</strong>On y retrouve les devis archivés.</div></div>
              <div class="step"><div class="step-num">4</div><div class="step-body">
                <strong>Clic droit → Réactiver la proposition</strong>Le devis revient dans la liste des propositions (utile si le client revient).</div></div>
            `
          }

        ]
      },

      /* ============================================================
         SOUS-GROUPE 7 — BON À SAVOIR
         ============================================================ */
      {
        name: "Bon à savoir",
        items: [

          {
            id: "base-test-production",
            title: "Base test et base production",
            lead: "Distinguer l'environnement de formation de l'environnement réel.",
            html: `
              <h2>Deux environnements</h2>
              <table>
                <tr><th>Environnement</th><th>Usage</th></tr>
                <tr><td><strong>WIPSOS (production)</strong></td><td>La base <strong>réelle</strong>. Ne pas y faire de tests.</td></tr>
                <tr><td><strong>WIPSOS Test</strong></td><td>Pour la <strong>formation</strong> et les essais : aucun impact.</td></tr>
              </table>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>On reconnaît la base test à la mention <strong>« Test » tout en haut</strong> de l'écran.
                Si elle n'y est pas, vous êtes en <strong>production</strong> : ne créez pas de faux devis,
                vous risquez de « polluer » la base réelle.</div>
              </div>

              <h2>Accès via le serveur (RDP)</h2>
              <p>WIPSOS est installé sur le <strong>serveur</strong> : on s'y connecte en <strong>RDP (connexion à
              distance)</strong> avec ses identifiants. Sur le serveur, on doit voir à la fois
              <strong>WIPSOS</strong> et <strong>WIPSOS Test</strong>. L'installation de la base test relève du
              <strong>service informatique / prestataire</strong> du client.</p>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Entraînez-vous sur la base test entre les sessions (quelques lignes de chiffrage
                suffisent). C'est indispensable pour les <strong>cas pratiques</strong> sans risque.</div>
              </div>

              <h3>Numéro de version</h3>
              <p>Le numéro de version de WIPSOS s'affiche en haut (ex. <code>2025-03</code>). Une base test
              ancienne peut ne pas être à jour ; le formateur peut la mettre à jour.</p>
            `
          },

          {
            id: "sauvegarde-enregistrement",
            title: "Sauvegarde et enregistrement",
            lead: "Comprendre la sauvegarde automatique et pourquoi cliquer régulièrement sur la disquette.",
            html: `
              <h2>Une sauvegarde automatique… mais pas instantanée</h2>
              <p>Pour le modèle de création de devis, une <strong>sauvegarde automatique</strong> se fait au fur
              et à mesure sur le serveur. Mais elle a un <strong>léger temps de traitement</strong>, elle n'est
              pas instantanée.</p>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Pensez à cliquer <strong>de temps en temps sur la disquette</strong> pour sécuriser et
                accélérer l'enregistrement, surtout pendant un long chiffrage.</div>
              </div>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>En cas de <strong>coupure réseau</strong> pendant la création d'un devis, contactez le
                support WIPSOS : grâce à la sauvegarde automatique, on peut généralement
                <strong>récupérer</strong> le devis. (Sur l'ancien logiciel, sans sauvegarde manuelle, tout était
                perdu — le concept a changé.)</div>
              </div>
            `
          },

          {
            id: "devis-adjonction",
            title: "Devis principal et devis d'adjonction",
            lead: "Ne pas recréer une installation qui existe déjà chez le client.",
            html: `
              <h2>Le principe</h2>
              <p>Quand une <strong>installation existe déjà</strong> chez le client pour une activité donnée
              (ex. bloc autonome), un nouveau devis sur la même activité ne doit pas <strong>recréer</strong> une
              installation : ce serait un <strong>devis d'adjonction</strong> (rajout de matériel sur une
              installation existante).</p>

              <table>
                <tr><th>Cas</th><th>Type</th></tr>
                <tr><td>Première installation de l'activité</td><td>Chantier <strong>principal</strong>.</td></tr>
                <tr><td>Ajout de matériel sur une installation existante</td><td>Devis d'<strong>adjonction</strong>.</td></tr>
              </table>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Au niveau <strong>commercial</strong>, le commercial fait simplement sa proposition. La
                distinction <strong>principal / adjonction</strong> est un <strong>contrôle à faire à la validation</strong>
                (partie ADV), pour ne pas créer une 2ᵉ installation en double. On garde l'installation
                principale qui regroupera tout le matériel.</div>
              </div>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>Sans ce contrôle, le client se retrouverait avec <strong>2 installations</strong> identiques.
                Ce point est détaillé dans le module ADV.</div>
              </div>
            `
          },

          {
            id: "profil-commercial",
            title: "Accès aux devis (profil commercial)",
            lead: "Voir tous les devis ou seulement les siens, selon le paramétrage.",
            html: `
              <h2>Deux possibilités</h2>
              <p>Par défaut, un paramétrage peut donner accès à <strong>l'ensemble des propositions de tous
              les commerciaux</strong>. Mais on peut <strong>figer le profil commercial</strong> par utilisateur
              pour que chaque personne n'ait accès qu'à <strong>ses propres devis</strong>.</p>

              <div class="callout info">
                <span class="ic">i</span>
                <div>C'est un <strong>choix interne</strong> à l'entreprise. Certaines sociétés préfèrent cloisonner
                par commercial, d'autres laisser tout le monde voir l'ensemble.</div>
              </div>
            `
          },

          {
            id: "base-article-prix",
            title: "Base article et mise à jour des prix",
            lead: "La clé d'un chiffrage rapide : des prix d'articles à jour.",
            html: `
              <h2>Pourquoi c'est essentiel</h2>
              <p>Le plus important pour chiffrer facilement, c'est la <strong>base article</strong> et ses
              <strong>prix</strong>. Quand les prix sont à jour, le chiffrage est plus simple et plus rapide.</p>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>Le <strong>générique</strong> (article passe-partout) dépanne, mais ce n'est pas une gestion
                à garder sur le long terme : il faut <strong>créer les vrais articles</strong>.</div>
              </div>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Les prix fluctuant beaucoup, une <strong>personne dédiée</strong> dans la société actualise
                les tarifs via les <strong>catalogues fournisseurs</strong>. Pensez aussi à créer des
                <strong>déplacements par zone</strong> (zone 1, zone 2, hors zone…) avec leurs tarifs spécifiques.</div>
              </div>

              <h2>Éditions et statistiques</h2>
              <p>Tant que la production n'a pas démarré, il n'y a ni résultats ni éditions. Au bout de
              <strong>6 mois à 1 an</strong> d'utilisation, on peut sortir des éditions : rentabilité,
              statistiques, portefeuille de commandes…</p>
            `
          },

          {
            id: "siret-type-client",
            title: "SIRET et type de client",
            lead: "Pourquoi le SIRET n'est pas toujours obligatoire (facturation électronique).",
            html: `
              <h2>Le SIRET selon le type de client</h2>
              <p>Avec la <strong>facturation électronique</strong> (lot 5), un champ <strong>type de client</strong>
              apparaît :</p>
              <ul>
                <li>Particulier</li>
                <li>Professionnel</li>
                <li>B2B</li>
                <li>Gouvernement</li>
              </ul>

              <table>
                <tr><th>Type</th><th>SIRET</th></tr>
                <tr><td>Professionnel / entreprise</td><td>Obligatoire.</td></tr>
                <tr><td>Particulier</td><td><strong>Non obligatoire</strong> (champ grisé : pas de saisie possible).</td></tr>
              </table>

              <div class="callout info">
                <span class="ic">i</span>
                <div>Sur une base test ancienne, ce comportement peut ne pas être actif. Le formateur
                mettra à jour la base (test et production) pendant les sessions.</div>
              </div>

              <div class="callout tip">
                <span class="ic">★</span>
                <div>Astuce de contournement : pour ne pas être bloqué par l'obligation de SIRET lors de
                la création d'un prospect, on peut saisir une valeur factice (ex. <code>00014</code>) en
                attendant.</div>
              </div>
            `
          },

          {
            id: "prochaines-sessions",
            title: "Suite & rappels",
            lead: "Ce qui sera approfondi et la logique de déploiement.",
            html: `
              <h2>Déjà couvert (module commercial)</h2>
              <ul>
                <li>Création de devis d'installation (en-tête, chiffrage, options, multi-activités).</li>
                <li>Proposition de contrat de maintenance (fusion Word).</li>
                <li>Tarifs particuliers / BPU.</li>
              </ul>

              <h2>À venir</h2>
              <ul>
                <li><strong>Module ADV</strong> — acceptation des devis, devis d'adjonction, partie contrat
                (le commerce y sera rattaché).</li>
                <li><strong>Module SAV</strong> — devis de correctif, bons d'intervention, rapports de maintenance.</li>
                <li><strong>Suivi de chantier</strong> — installations, imputations de matière, planification.</li>
                <li>Éditions : <strong>portefeuille de commandes</strong>, résultats commerciaux, statistiques, rentabilité.</li>
              </ul>

              <div class="callout info">
                <span class="ic">i</span>
                <div>La formation se fait <strong>en plusieurs temps</strong>. Des <strong>piqûres de rappel</strong> et
                des compléments sont prévus, notamment au déploiement complet (septembre). Entraînez-vous
                sur la base test et notez vos questions entre les sessions.</div>
              </div>

              <div class="callout warn">
                <span class="ic">!</span>
                <div>Pré-requis pour les cas pratiques : chaque participant doit avoir accès à sa
                <strong>base test</strong> (à voir avec le service informatique).</div>
              </div>
            `
          }

        ]
      }

    ]
  }
];
