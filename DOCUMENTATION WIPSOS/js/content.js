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
   Enregistrements de formation :
     VIDEO_S1 = Formation Commercial 1/2 (groupe 1) — YouTube
     VIDEO_S2 = Formation Commercial 2/2 (groupe 1) — YouTube
     VIDEO_S3 = Formation Appro-Logistique 1/2 — YouTube
     VIDEO_S4 = Formation Suivi de chantier 2/2 — YouTube
     VIDEO_S5 = Formation ADV (acceptation) — YouTube
     VIDEO_S6 = Formation Appro-Logistique 2/2 — YouTube
     VIDEO_S7 = Formation Contrat 1/2 — YouTube
     VIDEO_S8 = Formation Contrat 2/2 — YouTube
     VIDEO_S9 = Formation SAV 1/2 — YouTube
     VIDEO_S10 = Formation SAV 2/2 — YouTube
     VIDEO_S11 = Formation Compta. Tiers Clients (Facturation) — YouTube
   (Le bouton « Voir la vidéo » s'adapte automatiquement à la plateforme.)
   Tant qu'une URL VIDEO_Sx est vide (""), le bouton « Voir la vidéo »
   ne s'affiche pas : il suffira de coller le lien YouTube pour l'activer.

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

/* === Endpoints vidéo à compléter (collez l'URL YouTube entre les guillemets) === */
const VIDEO_S3 = "https://youtu.be/cZpWBm-PrZY";  // Formation Appro-Logistique 1/2
const VIDEO_S4 = "https://youtu.be/bcjeamMXmOE";  // Formation Suivi de chantier 2/2
const VIDEO_S5 = "https://youtu.be/AgzK3FgM460";  // Formation ADV (acceptation)
const VIDEO_S6 = "https://youtu.be/g8ZY23PiNL0";  // Formation Appro-Logistique 2/2
const VIDEO_S7 = "https://youtu.be/FhKXDrhyN5g";  // Formation Contrat 1/2
const VIDEO_S8 = "https://youtu.be/7Mo7G2PHDa0";  // Formation Contrat 2/2
const VIDEO_S9 = "https://youtu.be/oYsNnYJjUXw";  // Formation SAV 1/2
const VIDEO_S10 = "https://youtu.be/oZnjbmCERLE";  // Formation SAV 2/2
const VIDEO_S11 = "https://youtu.be/rTV2tP5qaWY";  // Formation Compta. Tiers Clients / Facturation

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
  "tarifs-particuliers":            { v: VIDEO_S2, t: 6266 },  // 1:44:26

  /* ----- Session 3 — Formation Appro-Logistique 1/2 ----- */
  "appro-codes-etat-intro":         { v: VIDEO_S3, t: 161 },   // 02:41
  "appro-devis-nomenclature-plan":  { v: VIDEO_S3, t: 470 },   // 07:50
  "appro-acceptation-aura-pro":     { v: VIDEO_S3, t: 565 },   // 09:25
  "appro-gestion-articles-chantier":{ v: VIDEO_S3, t: 1043 },  // 17:23
  "appro-demande-achat-auto":       { v: VIDEO_S3, t: 1231 },  // 20:31
  "appro-acceptation-globale":      { v: VIDEO_S3, t: 1644 },  // 27:24
  "appro-suivi-chantier-base":      { v: VIDEO_S3, t: 1899 },  // 31:39
  "appro-notes-chantier":           { v: VIDEO_S3, t: 1964 },  // 32:44
  "appro-recap-heures":             { v: VIDEO_S3, t: 2018 },  // 33:38
  "appro-imputation-matiere":       { v: VIDEO_S3, t: 2710 },  // 45:10
  "appro-reappro-auto":             { v: VIDEO_S3, t: 2922 },  // 48:42
  "appro-historique-code-etat":     { v: VIDEO_S3, t: 3204 },  // 53:24
  "appro-planning-reservation":     { v: VIDEO_S3, t: 3517 },  // 58:37
  "appro-crm-prospection":          { v: VIDEO_S3, t: 3992 },  // 1:06:32
  "appro-terminer-cloturer":        { v: VIDEO_S3, t: 4803 },  // 1:20:03
  "appro-code-etat-auto":           { v: VIDEO_S3, t: 5149 },  // 1:25:49
  "appro-notif-plans":              { v: VIDEO_S3, t: 5289 },  // 1:28:09

  /* ----- Session 4 — Formation Suivi de chantier 2/2 ----- */
  "chantier-presentation":          { v: VIDEO_S4, t: 278 },   // 04:38
  "chantier-deux-appro":            { v: VIDEO_S4, t: 873 },   // 14:33
  "chantier-recherche-filtres":     { v: VIDEO_S4, t: 1243 },  // 20:43
  "chantier-entree-base":           { v: VIDEO_S4, t: 1403 },  // 23:23
  "chantier-codes-etat-etapes":     { v: VIDEO_S4, t: 1441 },  // 24:01
  "chantier-responsable":           { v: VIDEO_S4, t: 1523 },  // 25:23
  "chantier-module-reappro":        { v: VIDEO_S4, t: 2209 },  // 36:49
  "chantier-articles-stock":        { v: VIDEO_S4, t: 2334 },  // 38:54
  "chantier-demande-achat":         { v: VIDEO_S4, t: 2616 },  // 43:36
  "chantier-article-generique":     { v: VIDEO_S4, t: 2919 },  // 48:39
  "chantier-commande-plans":        { v: VIDEO_S4, t: 3658 },  // 1:00:58
  "chantier-suivi-code-etat":       { v: VIDEO_S4, t: 3891 },  // 1:04:51
  "chantier-imputation":            { v: VIDEO_S4, t: 4715 },  // 1:18:35
  "chantier-planification":         { v: VIDEO_S4, t: 5293 },  // 1:28:13
  "chantier-reservation":           { v: VIDEO_S4, t: 5516 },  // 1:31:56
  "chantier-rdv-mail":              { v: VIDEO_S4, t: 6037 },  // 1:40:37

  /* ----- Session 5 — Formation ADV (acceptation) ----- */
  "adv-introduction":               { v: VIDEO_S5, t: 253 },   // 04:13
  "adv-contrat-vs-sav":             { v: VIDEO_S5, t: 289 },   // 04:49
  "adv-creation-client":            { v: VIDEO_S5, t: 428 },   // 07:08
  "adv-mises-a-jour":               { v: VIDEO_S5, t: 473 },   // 07:53
  "adv-type-affaire-siret":         { v: VIDEO_S5, t: 655 },   // 10:55
  "adv-code-reglement-tva":         { v: VIDEO_S5, t: 831 },   // 13:51
  "adv-remise-bpu":                 { v: VIDEO_S5, t: 1040 },  // 17:20
  "adv-creation-contact":           { v: VIDEO_S5, t: 1168 },  // 19:28
  "adv-creation-devis":             { v: VIDEO_S5, t: 1416 },  // 23:36
  "adv-devis-sav-commercial":       { v: VIDEO_S5, t: 1552 },  // 25:52
  "adv-chiffrage":                  { v: VIDEO_S5, t: 1954 },  // 32:34
  "adv-sous-totaux-options":        { v: VIDEO_S5, t: 2450 },  // 40:50
  "adv-arrondi-remise":             { v: VIDEO_S5, t: 2737 },  // 45:37
  "adv-descriptif-commercial":      { v: VIDEO_S5, t: 2875 },  // 47:55
  "adv-modeles-mail-signature":     { v: VIDEO_S5, t: 3191 },  // 53:11
  "adv-historique-mails":           { v: VIDEO_S5, t: 3398 },  // 56:38
  "adv-acceptation-devis":          { v: VIDEO_S5, t: 3658 },  // 1:00:58
  "adv-validation-prospect-client": { v: VIDEO_S5, t: 3916 },  // 1:05:16
  "adv-fiche-technique":            { v: VIDEO_S5, t: 4318 },  // 1:11:58
  "adv-devis-adjonction":           { v: VIDEO_S5, t: 4391 },  // 1:13:11
  "adv-acceptation-globale-chantier":{ v: VIDEO_S5, t: 4673 },  // 1:17:53

  /* ----- Session 6 — Formation Appro-Logistique 2/2 ----- */
  "appro2-import-stock":            { v: VIDEO_S6, t: 161 },   // 02:41
  "appro2-module-reappro":          { v: VIDEO_S6, t: 303 },   // 05:03
  "appro2-date-arrete":             { v: VIDEO_S6, t: 483 },   // 08:03
  "appro2-choix-depot":             { v: VIDEO_S6, t: 520 },   // 08:40
  "appro2-lecture-proposition":     { v: VIDEO_S6, t: 559 },   // 09:19
  "appro2-vue-chantier":            { v: VIDEO_S6, t: 689 },   // 11:29
  "appro2-generer-demande-achat":   { v: VIDEO_S6, t: 800 },   // 13:20
  "appro2-demande-achat-entete":    { v: VIDEO_S6, t: 918 },   // 15:18
  "appro2-type-commande":           { v: VIDEO_S6, t: 1009 },  // 16:49
  "appro2-ajout-articles":          { v: VIDEO_S6, t: 1248 },  // 20:48
  "appro2-copier-demande":          { v: VIDEO_S6, t: 1732 },  // 28:52
  "appro2-valoriser-commande":      { v: VIDEO_S6, t: 2075 },  // 34:35
  "appro2-fusionner":               { v: VIDEO_S6, t: 2379 },  // 39:39
  "appro2-commande-manuelle":       { v: VIDEO_S6, t: 3029 },  // 50:29
  "appro2-reception":               { v: VIDEO_S6, t: 3264 },  // 54:24
  "appro2-reception-reliquat":      { v: VIDEO_S6, t: 3376 },  // 56:16
  "appro2-historique":              { v: VIDEO_S6, t: 3728 },  // 1:02:08
  "appro2-inventaire-stock":        { v: VIDEO_S6, t: 3918 },  // 1:05:18
  "appro2-reception-imputation":    { v: VIDEO_S6, t: 4435 },  // 1:13:55
  "appro2-import-fichier":          { v: VIDEO_S6, t: 4760 },  // 1:19:20
  "appro2-prestation-0-5":          { v: VIDEO_S6, t: 5085 },  // 1:24:45

  /* ----- Session 7 — Formation Contrat 1/2 ----- */
  "contrat-type-commande-fournisseur": { v: VIDEO_S7, t: 206 },   // 03:26
  "contrat-creer":                     { v: VIDEO_S7, t: 252 },   // 04:12
  "contrat-modes-affichage":           { v: VIDEO_S7, t: 353 },   // 05:53
  "contrat-logique-installation":      { v: VIDEO_S7, t: 457 },   // 07:37
  "contrat-onglets-type":              { v: VIDEO_S7, t: 539 },   // 08:59
  "contrat-mono-multi":                { v: VIDEO_S7, t: 603 },   // 10:03
  "contrat-abonnement-visite":         { v: VIDEO_S7, t: 808 },   // 13:28
  "contrat-rattacher-codifier":        { v: VIDEO_S7, t: 867 },   // 14:27
  "contrat-codification":              { v: VIDEO_S7, t: 1001 },  // 16:41
  "contrat-creer-installation":        { v: VIDEO_S7, t: 1268 },  // 21:08
  "contrat-parc-materiel":             { v: VIDEO_S7, t: 1359 },  // 22:39
  "contrat-reprise-parc":              { v: VIDEO_S7, t: 1449 },  // 24:09
  "contrat-dates":                     { v: VIDEO_S7, t: 1674 },  // 27:54
  "contrat-facture-visite":            { v: VIDEO_S7, t: 1773 },  // 29:33
  "contrat-onglet-facturation":        { v: VIDEO_S7, t: 1903 },  // 31:43
  "contrat-abonnement":                { v: VIDEO_S7, t: 2186 },  // 36:26
  "contrat-gestion-visites":           { v: VIDEO_S7, t: 2346 },  // 39:06
  "contrat-creer-visite":              { v: VIDEO_S7, t: 2439 },  // 40:39
  "contrat-affecter-parc-visite":      { v: VIDEO_S7, t: 2608 },  // 43:28
  "contrat-generation-visites":        { v: VIDEO_S7, t: 2751 },  // 45:51
  "contrat-multi-activites":           { v: VIDEO_S7, t: 2914 },  // 48:34
  "contrat-associer-installations":    { v: VIDEO_S7, t: 3304 },  // 55:04
  "contrat-annee-application":         { v: VIDEO_S7, t: 3656 },  // 1:00:56

  /* ----- Session 8 — Formation Contrat 2/2 (mise en pratique) ----- */
  "contrat2-acceder-module":           { v: VIDEO_S8, t: 307 },   // 05:07
  "contrat2-rechercher-client":        { v: VIDEO_S8, t: 429 },   // 07:09
  "contrat2-type-activite":            { v: VIDEO_S8, t: 890 },   // 14:50
  "contrat2-codifier-installation":    { v: VIDEO_S8, t: 987 },   // 16:27
  "contrat2-fiche-technique":          { v: VIDEO_S8, t: 1464 },  // 24:24
  "contrat2-alimenter-parc":           { v: VIDEO_S8, t: 1535 },  // 25:35
  "contrat2-enregistrer-sortir":       { v: VIDEO_S8, t: 1981 },  // 33:01
  "contrat2-texte-facture":            { v: VIDEO_S8, t: 2186 },  // 36:26
  "contrat2-facture-visite":           { v: VIDEO_S8, t: 2318 },  // 38:38
  "contrat2-onglet-facturation":       { v: VIDEO_S8, t: 2392 },  // 39:52
  "contrat2-visite-vs-abonnement":     { v: VIDEO_S8, t: 2846 },  // 47:26
  "contrat2-devis-commercial":         { v: VIDEO_S8, t: 2960 },  // 49:20
  "contrat2-phase-acceptation":        { v: VIDEO_S8, t: 3154 },  // 52:34
  "contrat2-calendrier-visites":       { v: VIDEO_S8, t: 3461 },  // 57:41
  "contrat2-multi-activites":          { v: VIDEO_S8, t: 4600 },  // 1:16:40
  "contrat2-associer-installations":   { v: VIDEO_S8, t: 4766 },  // 1:19:26
  "contrat2-abonnement":               { v: VIDEO_S8, t: 5227 },  // 1:27:07
  "contrat2-abonnement-montant":       { v: VIDEO_S8, t: 5893 },  // 1:38:13
  "contrat2-client-payeur":            { v: VIDEO_S8, t: 6142 },  // 1:42:22
  "contrat2-changer-payeur":           { v: VIDEO_S8, t: 6405 },  // 1:46:45
  "contrat2-pas-blocage":              { v: VIDEO_S8, t: 6511 },  // 1:48:31
  "contrat2-heures-previsionnelles":   { v: VIDEO_S8, t: 6587 },  // 1:49:47
  "contrat2-lien-sav":                 { v: VIDEO_S8, t: 6850 },  // 1:54:10

  /* ----- Session 9 — Formation SAV 1/2 ----- */
  "sav-module-apercu":                 { v: VIDEO_S9, t: 516 },   // 08:36
  "sav-appels-depannage":              { v: VIDEO_S9, t: 719 },   // 11:59
  "sav-alertes":                       { v: VIDEO_S9, t: 764 },   // 12:44
  "sav-creer-bon-gravite":             { v: VIDEO_S9, t: 855 },   // 14:15
  "sav-contact":                       { v: VIDEO_S9, t: 892 },   // 14:52
  "sav-motif":                         { v: VIDEO_S9, t: 1030 },  // 17:10
  "sav-code-provenance":               { v: VIDEO_S9, t: 1062 },  // 17:42
  "sav-documents":                     { v: VIDEO_S9, t: 1119 },  // 18:39
  "sav-note-technicien":               { v: VIDEO_S9, t: 1355 },  // 22:35
  "sav-intervention-societe":          { v: VIDEO_S9, t: 1547 },  // 25:47
  "sav-planning-parametrage":          { v: VIDEO_S9, t: 1891 },  // 31:31
  "sav-heure-affectee-debut":          { v: VIDEO_S9, t: 2138 },  // 35:38
  "sav-planning-web":                  { v: VIDEO_S9, t: 2266 },  // 37:46
  "sav-terminer-bon":                  { v: VIDEO_S9, t: 2667 },  // 44:27
  "sav-terminer-suivre":               { v: VIDEO_S9, t: 2876 },  // 47:56
  "sav-premiere-intervention":         { v: VIDEO_S9, t: 2959 },  // 49:19
  "sav-mails-auto":                    { v: VIDEO_S9, t: 3053 },  // 50:53
  "sav-suivi-numero":                  { v: VIDEO_S9, t: 3166 },  // 52:46
  "sav-devis-transformer":             { v: VIDEO_S9, t: 3514 },  // 58:34
  "sav-devis-simplifie":               { v: VIDEO_S9, t: 4037 },  // 1:07:17
  "sav-devis-commercial":              { v: VIDEO_S9, t: 4311 },  // 1:11:51
  "sav-devis-acceptation":             { v: VIDEO_S9, t: 4429 },  // 1:13:49
  "sav-devis-reappro":                 { v: VIDEO_S9, t: 4573 },  // 1:16:13
  "sav-generation-visites":            { v: VIDEO_S9, t: 5116 },  // 1:25:16
  "sav-generation-filtres":            { v: VIDEO_S9, t: 5193 },  // 1:26:33
  "sav-creation-bons-visite":          { v: VIDEO_S9, t: 5665 },  // 1:34:25
  "sav-planif-volee":                  { v: VIDEO_S9, t: 6075 },  // 1:41:15
  "sav-planif-manuelle":               { v: VIDEO_S9, t: 6302 },  // 1:45:02
  "sav-distribution-multiple":         { v: VIDEO_S9, t: 6449 },  // 1:47:29
  "sav-controle-puits":                { v: VIDEO_S9, t: 6755 },  // 1:52:35

  /* ----- Session 10 — Formation SAV 2/2 (mise en pratique) ----- */
  "sav2-cycle-complet":                { v: VIDEO_S10, t: 1022 },  // 17:02
  "sav2-creer-contrat":                { v: VIDEO_S10, t: 1183 },  // 19:43
  "sav2-type-activite":                { v: VIDEO_S10, t: 1491 },  // 24:51
  "sav2-codifier":                     { v: VIDEO_S10, t: 1567 },  // 26:07
  "sav2-parc-materiel":                { v: VIDEO_S10, t: 1804 },  // 30:04
  "sav2-facture-visite":               { v: VIDEO_S10, t: 2100 },  // 35:00
  "sav2-onglet-facturation":           { v: VIDEO_S10, t: 2166 },  // 36:06
  "sav2-previsionnel-visite":          { v: VIDEO_S10, t: 2234 },  // 37:14
  "sav2-affecter-parc-visite":         { v: VIDEO_S10, t: 2502 },  // 41:42
  "sav2-generer-visite":               { v: VIDEO_S10, t: 2726 },  // 45:26
  "sav2-appels-vs-visites":            { v: VIDEO_S10, t: 3060 },  // 51:00
  "sav2-creation-bon":                 { v: VIDEO_S10, t: 3173 },  // 52:53
  "sav2-retrouver-bon":                { v: VIDEO_S10, t: 3330 },  // 55:30
  "sav2-planifier-visite":             { v: VIDEO_S10, t: 3653 },  // 1:00:53
  "sav2-alerte-autres-visites":        { v: VIDEO_S10, t: 3762 },  // 1:02:42
  "sav2-planning-avance":              { v: VIDEO_S10, t: 3990 },  // 1:06:30
  "sav2-note-recurrente":              { v: VIDEO_S10, t: 4856 },  // 1:20:56
  "sav2-fiche-rubriques":              { v: VIDEO_S10, t: 4941 },  // 1:22:21
  "sav2-suite-technique":              { v: VIDEO_S10, t: 5635 },  // 1:33:55
  "sav2-devis-commercial":             { v: VIDEO_S10, t: 6057 },  // 1:40:57
  "sav2-devis-acceptation":            { v: VIDEO_S10, t: 6274 },  // 1:44:34
  "sav2-bon-preparation":              { v: VIDEO_S10, t: 6376 },  // 1:46:16
  "sav2-imputation":                   { v: VIDEO_S10, t: 6933 },  // 1:55:33
  "sav2-imputation-timing":            { v: VIDEO_S10, t: 7386 },  // 2:03:06
  "sav2-blocage-compta":               { v: VIDEO_S10, t: 7862 },  // 2:11:02

  /* ----- Session 11 — Formation Compta. Tiers Clients (Facturation) ----- */
  "fact-module-apercu":                { v: VIDEO_S11, t: 68 },    // 01:08
  "fact-facturer-contrats":            { v: VIDEO_S11, t: 307 },   // 05:07
  "fact-date-echeance":                { v: VIDEO_S11, t: 348 },   // 05:48
  "fact-electronique":                 { v: VIDEO_S11, t: 405 },   // 06:45
  "fact-execution":                    { v: VIDEO_S11, t: 634 },   // 10:34
  "fact-controle-ligne":               { v: VIDEO_S11, t: 654 },   // 10:54
  "fact-apercu-valider":               { v: VIDEO_S11, t: 738 },   // 12:18
  "fact-envoi-factures":               { v: VIDEO_S11, t: 938 },   // 15:38
  "fact-contact-mail":                 { v: VIDEO_S11, t: 1066 },  // 17:46
  "fact-piece-jointe-bc":              { v: VIDEO_S11, t: 1482 },  // 24:42
  "fact-envoi-masse":                  { v: VIDEO_S11, t: 1526 },  // 25:26
  "fact-avoir-directe":                { v: VIDEO_S11, t: 1657 },  // 27:37
  "fact-sav-apercu":                   { v: VIDEO_S11, t: 2095 },  // 34:55
  "fact-sav-retours":                  { v: VIDEO_S11, t: 2180 },  // 36:20
  "fact-sav-controle-fleche":          { v: VIDEO_S11, t: 2234 },  // 37:14
  "fact-sav-rapport":                  { v: VIDEO_S11, t: 2564 },  // 42:44
  "fact-sav-articles-imputes":         { v: VIDEO_S11, t: 2637 },  // 43:57
  "fact-sav-automatisation":           { v: VIDEO_S11, t: 2872 },  // 47:52
  "fact-sav-facturation-immediate":    { v: VIDEO_S11, t: 3597 },  // 59:57
  "fact-sav-edition-chiffree":         { v: VIDEO_S11, t: 3772 },  // 1:02:52
  "fact-chantiers":                    { v: VIDEO_S11, t: 4902 },  // 1:21:42
  "fact-code-etat":                    { v: VIDEO_S11, t: 5027 },  // 1:23:47
  "fact-consulter-client":             { v: VIDEO_S11, t: 5083 },  // 1:24:43
  "fact-avancement":                   { v: VIDEO_S11, t: 5176 },  // 1:26:16
  "fact-valider-situation":            { v: VIDEO_S11, t: 5739 },  // 1:35:39
  "fact-definitive-reste":             { v: VIDEO_S11, t: 5870 },  // 1:37:50
  "fact-avoir-chantier":               { v: VIDEO_S11, t: 6015 }   // 1:40:15
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
  },

  /* ==============================================================
     CATÉGORIE — APPRO-LOGISTIQUE (Session 3 — Appro-Logistique 1/2)
     ============================================================== */
  {
    category: "Appro-Logistique",
    icon: "📦",
    groups: [

      {
        name: "Du devis au chantier",
        items: [

          {
            id: "appro-codes-etat-intro",
            title: "Codes d'état : la base du suivi",
            lead: "Pourquoi créer ses propres codes d'état pour suivre l'avancement.",
            html: `
              <h2>À quoi servent les codes d'état ?</h2>
              <p>Le <strong>code d'état</strong> est, pour l'équipe, le <strong>seul moyen de suivre
              l'avancement des chantiers</strong> (relevé planifié, relevé transmis, maquette,
              retour maquette, impression OK, etc.).</p>
              <ul>
                <li>On n'est <strong>pas limité</strong> en nombre de codes d'état : il faut les créer.</li>
                <li>Il vaut mieux en avoir <strong>trop</strong> et épurer ensuite que l'inverse.</li>
                <li>Chaque scénario doit devenir un code d'état « théorique » pour le retrouver dans la liste.</li>
              </ul>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Travail à faire en interne : <strong>checklister</strong> tous les codes d'état nécessaires,
                puis les paramétrer sur la base de production.</div>
              </div>
            `
          },

          {
            id: "appro-devis-nomenclature-plan",
            title: "Devis d'installation avec nomenclature « plan »",
            lead: "Préparer le devis en amont : matériel + nomenclature des plans.",
            html: `
              <h2>Structurer le devis</h2>
              <p>Le devis d'installation se compose de plusieurs paragraphes, par exemple :</p>
              <ul>
                <li>un paragraphe <strong>matériel / main d'œuvre / déplacement</strong> ;</li>
                <li>un paragraphe avec une <strong>nomenclature « plan »</strong> regroupant les articles
                liés aux plans (cadre, relevé, dessin, impression…).</li>
              </ul>
              <p>La nomenclature va <strong>s'éclater</strong> à l'acceptation : on retrouvera dans le
              suivi de chantier le détail de tous les articles qui la composent.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div><strong>Tout part du devis.</strong> Les articles de la nomenclature doivent être
                correctement créés, avec le <strong>bon fournisseur</strong>, car c'est lui qui
                conditionnera la demande d'achat.</div>
              </div>
            `
          },

          {
            id: "appro-acceptation-aura-pro",
            title: "Acceptation « hors appro » vs globale (plans)",
            lead: "Choisir le fournisseur des articles du plan via le mode hors approvisionnement.",
            html: `
              <h2>Deux modes d'acceptation</h2>
              <table>
                <tr><th>Mode</th><th>Effet</th></tr>
                <tr><td>Acceptation <strong>globale</strong></td><td>Lance la demande d'achat sur le
                <strong>fournisseur principal</strong> de la fiche article (pas de choix).</td></tr>
                <tr><td>Acceptation <strong>hors appro</strong> (aura pro)</td><td>On garde la
                <strong>main</strong> dans le suivi de chantier pour choisir un autre fournisseur
                rattaché à l'article avant de lancer la demande d'achat.</td></tr>
              </table>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Le hors appro est utile quand un article (ex. cadre) peut être commandé chez
                <strong>plusieurs fournisseurs</strong> : clic droit sur l'article →
                modifier le fournisseur affecté → lancer la demande d'achat.</div>
              </div>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Si un article a toujours le <strong>même fournisseur unique</strong>, l'acceptation
                globale suffit.</div>
              </div>
            `
          },

          {
            id: "appro-gestion-articles-chantier",
            title: "Gestion des articles dans le chantier",
            lead: "Retrouver et vérifier les articles issus de la proposition.",
            html: `
              <h2>Onglet « Gestion des articles »</h2>
              <p>Après acceptation, le suivi de chantier affiche les articles de la proposition
              (extincteurs, main d'œuvre, déplacement) et, en dessous, le <strong>détail de la
              nomenclature</strong> acceptée.</p>
              <p>C'est ici qu'on peut :</p>
              <ul>
                <li>vérifier que les articles correspondent bien à la proposition ;</li>
                <li><strong>ajouter des articles</strong> non prévus initialement (clic droit → ajout d'article) ;</li>
                <li>lancer/valider les demandes d'achat selon le mode choisi.</li>
              </ul>
            `
          },

          {
            id: "appro-demande-achat-auto",
            title: "Demande d'achat automatique à l'acceptation",
            lead: "Paramétrer le lancement auto des demandes d'achat sur les articles « plan ».",
            html: `
              <h2>Automatiser la demande d'achat</h2>
              <p>Sur la fiche article, deux coches déterminent le comportement à l'acceptation :</p>
              <table>
                <tr><th>Coche</th><th>Effet</th></tr>
                <tr><td><strong>Réappro auto</strong> + <strong>réappro chantier</strong></td>
                    <td>Lance la demande d'achat <strong>dès l'acceptation</strong> du devis.</td></tr>
                <tr><td><strong>Réappro chantier</strong> seul</td>
                    <td>Article géré en stock, calculé dans le module réappro (commande par semaine).</td></tr>
              </table>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Le process retenu : acceptation globale → les articles « plan » génèrent
                automatiquement une <strong>demande d'achat à traiter</strong> (vue le lendemain dans
                le module fournisseur), où l'on peut conserver ou changer le fournisseur.</div>
              </div>
            `
          },

          {
            id: "appro-acceptation-globale",
            title: "Accepter le devis (exemple complet)",
            lead: "Dérouler l'acceptation globale de bout en bout.",
            html: `
              <h2>Étapes d'acceptation</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Renseigner le prévisionnel</strong> dates de travaux, responsable (département
                technicien travaux).</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Cocher « fiche technique »</strong> pour créer l'installation du client.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                <strong>Acceptation globale</strong> le hors appro est grisé pour éviter les erreurs.</div></div>
              <div class="step"><div class="step-num">4</div><div class="step-body">
                <strong>Valider</strong> double-clic sur l'installation pour la créer, enregistrer,
                ressortir et valider — une demande d'achat est lancée pour les articles « plan ».</div></div>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Selon le fournisseur de chaque article, vous pouvez obtenir <strong>plusieurs
                demandes d'achat</strong> (une par fournisseur).</div>
              </div>
            `
          }

        ]
      },

      {
        name: "Suivi & planification",
        items: [

          {
            id: "appro-suivi-chantier-base",
            title: "Onglet base & dates de travaux",
            lead: "Les informations remontées de la proposition et le rôle des dates.",
            html: `
              <h2>Onglet « Base »</h2>
              <p>On y retrouve les infos de la proposition. Les <strong>dates prévisionnelles de
              début et fin de travaux</strong> sont importantes : elles servent au calcul du module
              réappro (date d'arrêté).</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Indiquez toujours des dates prévisionnelles cohérentes : c'est ce qui permet de
                faire remonter les bons besoins au bon moment.</div>
              </div>
            `
          },

          {
            id: "appro-notes-chantier",
            title: "Notes du chantier",
            lead: "Saisir une note interne visible dès l'ouverture du chantier.",
            html: `
              <h2>Deux façons de noter</h2>
              <ul>
                <li>L'onglet <strong>Note</strong> (page blanche, titre + texte) : la note apparaît en bas
                à gauche, <strong>visible dès l'ouverture</strong> du chantier.</li>
                <li>Le picto <strong>note interne</strong> : pratique mais il faut rentrer dedans pour la voir.</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Exemple : « Dispo client le 6 juillet à 14h00 ». Pas d'impact sur le planning,
                c'est une simple note interne au chantier.</div>
              </div>
            `
          },

          {
            id: "appro-recap-heures",
            title: "Récap des heures (vendu / planifié / reste)",
            lead: "Suivre les heures directement depuis l'onglet planification du chantier.",
            html: `
              <h2>Le petit récap en bas</h2>
              <p>Dès qu'il y a des heures planifiées, l'onglet planification affiche un récapitulatif :</p>
              <ul>
                <li><strong>Total des heures vendues</strong></li>
                <li><strong>Déjà planifié</strong></li>
                <li><strong>Reste à planifier</strong></li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Plus besoin d'aller dans la planification multiple : ce récap remonte directement
                sur le chantier (paramétrage à activer).</div>
              </div>
            `
          },

          {
            id: "appro-imputation-matiere",
            title: "Imputation de la matière",
            lead: "Sortir le matériel du stock vers l'installation du client.",
            html: `
              <h2>Imputer = sortir du stock</h2>
              <p>L'imputation déplace informatiquement le matériel <strong>du dépôt vers
              l'installation</strong> du client. Elle alimente la <strong>fiche technique</strong>
              (parc matériel).</p>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Vérifier la colonne <strong>stock en cours</strong> sur le dépôt sélectionné.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                Accès au détail des imputations → choisir le technicien et la date de sortie.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                Sélectionner les lignes → clic droit <strong>validation</strong> → valider en bas à droite.</div></div>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Ne pas oublier l'imputation quand vous sortez le matériel : c'est elle qui tient
                à jour le parc matériel (utile ensuite pour le SAV et les contrats).</div>
              </div>
              <p>Un <strong>bon de livraison interne</strong> peut être édité pour accompagner la préparation.</p>
            `
          },

          {
            id: "appro-reappro-auto",
            title: "Coches « fiche technique » & réappro auto",
            lead: "Les bons réglages sur la fiche article pour que tout remonte.",
            html: `
              <h2>À vérifier sur chaque article</h2>
              <table>
                <tr><th>Coche</th><th>Quand l'utiliser</th></tr>
                <tr><td><strong>Fiche technique</strong></td><td>Articles à faire remonter sur
                l'installation (pas le petit matériel / outillage).</td></tr>
                <tr><td><strong>Réappro auto + réappro chantier</strong></td><td>Lance la demande
                d'achat dès l'acceptation (articles « plan »).</td></tr>
                <tr><td><strong>Réappro chantier</strong> seul</td><td>Articles gérés en stock (ex.
                extincteurs) → calcul des quantités dans le module réappro.</td></tr>
              </table>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>En cas d'import de base article, vérifiez que la colonne <strong>fiche technique</strong>
                est bien taguée pour les bons articles.</div>
              </div>
            `
          },

          {
            id: "appro-historique-code-etat",
            title: "Historique des codes d'état",
            lead: "Tracer qui a modifié un code d'état et quand.",
            html: `
              <h2>Suivre les modifications</h2>
              <p>À côté du code d'état, un petit picto donne l'<strong>historique des modifications</strong> :
              par date/heure et par profil utilisateur.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Utile quand un code d'état est changé par erreur : on retrouve qui l'a modifié et
                quand, pour rétablir le bon avancement.</div>
              </div>
            `
          },

          {
            id: "appro-planning-reservation",
            title: "Planning & réservations",
            lead: "Paramétrer le planning et bloquer un créneau en attente de confirmation.",
            html: `
              <h2>Paramétrer le planning</h2>
              <p>Dans <em>Fichier → Paramétrage</em>, par utilisateur : bornage de journée (début/fin),
              nombre de jours affichés (5 ou 7), couleurs (centralisées pour tous ou laissées libres).</p>
              <h2>Réservation</h2>
              <p>Clic droit → <strong>ajouter une réservation</strong> : bloque un créneau
              <strong>en attente de confirmation du client</strong>. En la rattachant à un numéro de
              chantier/devis, on peut ensuite la <strong>transformer en planification</strong>
              (clic droit → valider la réservation).</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Sans rattachement à une affaire, il faut supprimer la réservation puis replanifier.
                Avec rattachement, la conversion en planification de chantier est directe.</div>
              </div>
            `
          },

          {
            id: "appro-crm-prospection",
            title: "CRM & prospection",
            lead: "Quand utiliser le CRM plutôt qu'une simple réservation.",
            html: `
              <h2>Le CRM pour la vraie prospection</h2>
              <p>Le planning gère tout (chantiers, SAV, réunions, événements). Pour la
              <strong>prospection terrain</strong>, mieux vaut le <strong>CRM</strong> :</p>
              <ul>
                <li>créer un prospect / client, un projet, des actions (appels, RDV) ;</li>
                <li>planning commercial en lien avec <strong>Outlook</strong> ;</li>
                <li>historique de ce qui s'est passé sur le client/prospect.</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Le CRM peut être déclenché dans un second temps (pour ne pas activer tous les
                modules d'un coup). Une formation spécifique pourra y être consacrée.</div>
              </div>
            `
          },

          {
            id: "appro-terminer-cloturer",
            title: "Chantier terminé vs clôturé",
            lead: "Deux notions différentes — et pourquoi penser à clôturer.",
            html: `
              <h2>Terminé ≠ clôturé</h2>
              <table>
                <tr><th>État</th><th>Effet</th></tr>
                <tr><td><strong>Terminé</strong></td><td>Disparaît de la liste des chantiers en cours ;
                on peut encore le ré-ouvrir, ajouter planifications/articles, imputer.</td></tr>
                <tr><td><strong>Clôturé</strong></td><td>Interdit toute saisie ultérieure (à faire quand
                les fonds sont reçus).</td></tr>
              </table>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Pensez à <strong>clôturer</strong> au fur et à mesure pour épurer la liste.
                La facturation reste possible à tout moment (avancement, global, 100 %) — ce n'est pas lié
                à l'état « terminé ».</div>
              </div>
            `
          },

          {
            id: "appro-code-etat-auto",
            title: "Code d'état automatique à la planification",
            lead: "Faire basculer le code d'état tout seul quand on planifie.",
            html: `
              <h2>Automatiser l'avancement</h2>
              <p>On peut paramétrer le passage automatique du code d'état (ex. « chantier planifié »)
              dès qu'une planification est créée — pour ne pas oublier de le changer à la main.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Demande fréquente : beaucoup pensent que le code d'état évolue tout seul. Sans
                paramétrage, c'est une <strong>action manuelle</strong>. Maximisez l'automatisation des
                étapes qui peuvent l'être.</div>
              </div>
            `
          },

          {
            id: "appro-notif-plans",
            title: "Informer le service plans",
            lead: "Transmettre les demandes d'achat « plan » aux bonnes personnes.",
            html: `
              <h2>Demande d'achat « plan » → service interne</h2>
              <p>Depuis le module fournisseur, chaque demande d'achat concernant les plans peut être
              <strong>envoyée en PDF / par mail</strong> aux contacts internes concernés.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Alternative préférée : créer un <strong>type de commande « plan »</strong> ; le service
                filtre par type de commande et retrouve directement ses demandes d'achat — sans dépendre
                d'un mail (suivi en temps réel dans le module).</div>
              </div>
            `
          }

        ]
      },

      /* ===== Session 6 — Appro-Logistique 2/2 ===== */

      {
        name: "Réappro & demandes d'achat (2/2)",
        items: [

          {
            id: "appro2-import-stock",
            title: "Import base article & stock",
            lead: "Le stock n'est pas intégré en même temps que la base article.",
            html: `
              <h2>Deux temps distincts</h2>
              <p>On intègre d'abord les <strong>articles par fournisseur</strong> (fichier Excel).
              Le <strong>stock</strong> (et les dépôts) se renseigne <strong>ensuite</strong> — ce n'est
              pas bloquant à l'import.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Comme vous travaillez <strong>par dépôt</strong>, les stocks mini/maxi sont à
                définir par dépôt. Un article unique est rattaché à plusieurs dépôts (et plusieurs
                fournisseurs) — on ne <strong>duplique pas</strong> les articles.</div>
              </div>
            `
          },

          {
            id: "appro2-module-reappro",
            title: "Le module réapprovisionnement",
            lead: "Le module central : prévisionnel des demandes d'achat par dépôt.",
            html: `
              <h2>À quoi il sert</h2>
              <p>Dans <em>Fournisseur → Réapprovisionnement</em>, on visualise l'ensemble des
              <strong>commandes client</strong> et la disponibilité en stock, pour lancer les
              <strong>demandes d'achat à traiter</strong>.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Process retenu : lancer le réappro <strong>une fois par semaine</strong>. WIPSOS
                calcule le prévisionnel selon une date, puis génère les demandes d'achat.</div>
              </div>
            `
          },

          {
            id: "appro2-date-arrete",
            title: "Date d'arrêté (prévision)",
            lead: "Filtrer par date prévisionnelle — ou la bypasser.",
            html: `
              <h2>La date de prévision</h2>
              <p>Le module demande une <strong>date d'arrêté</strong> (issue des dates de travaux
              prévisionnelles). Un <strong>paramétrage</strong> permet de la <strong>bypasser</strong> :
              WIPSOS calcule alors le besoin global, toutes affaires confondues.</p>
            `
          },

          {
            id: "appro2-choix-depot",
            title: "Choisir un dépôt",
            lead: "La sélection d'un dépôt est obligatoire (travail par agence).",
            html: `
              <h2>Sélection du dépôt</h2>
              <p>Choisir un <strong>dépôt</strong> est <strong>obligatoire</strong> : on visualise alors
              les articles de ce dépôt sur lesquels lancer des demandes d'achat. Les colonnes sont
              filtrables (clic droit → filtrer « contient », comme dans Excel).</p>
            `
          },

          {
            id: "appro2-lecture-proposition",
            title: "Lire la proposition (commande client, stock, mini/maxi)",
            lead: "Comprendre comment la proposition est calculée.",
            html: `
              <h2>Les colonnes clés</h2>
              <ul>
                <li><strong>Commande client</strong> : besoin réel issu des affaires.</li>
                <li><strong>Stock en cours / prévisionnel</strong> : ce qu'il reste / projeté.</li>
                <li><strong>Proposition</strong> : calculée automatiquement (et selon
                <strong>stock mini/maxi</strong> de la fiche article — on se base sur le maxi).</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Ex. besoin 9, stock 0 → proposition 9. Avec un maxi à 10 → proposition 19. Les
                quantités restent <strong>modifiables</strong> à la main.</div>
              </div>
            `
          },

          {
            id: "appro2-vue-chantier",
            title: "Vue globale vs vue par chantier",
            lead: "Le bouton « chantier » pour voir le besoin par affaire.",
            html: `
              <h2>Deux vues</h2>
              <p>L'écran réappro centralise tout (vue globale). Le bouton <strong>chantier</strong>
              affiche le besoin <strong>par affaire</strong> (check-list par chantier). On peut basculer
              entre les deux avec le bouton réappro.</p>
            `
          },

          {
            id: "appro2-generer-demande-achat",
            title: "Générer la demande d'achat",
            lead: "Cocher les articles, puis générer la demande d'achat à traiter.",
            html: `
              <h2>Lancer la demande</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Cocher (ou sélectionner avec Ctrl) les articles voulus.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                Clic droit → <strong>effectuer les propositions de commande</strong>.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                Cocher « génération » → clic droit → <strong>générer les demandes sélectionnées</strong>.</div></div>
              <p>On retrouve la demande dans <em>Commande et gestion</em> (petit cadenas = demande d'achat).</p>
            `
          },

          {
            id: "appro2-demande-achat-entete",
            title: "Demande d'achat : en-tête & détail",
            lead: "Dépôt de rattachement, lieu de livraison, commentaire.",
            html: `
              <h2>Contenu de la demande</h2>
              <p>Le double-clic ouvre la demande : date, <strong>dépôt de rattachement</strong>, code
              règlement, <strong>type de commande</strong>, lieu de livraison (stock, client, enlèvement,
              adresse de mise à disposition), commentaire (affiché sur le PDF).</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Le dépôt est repris automatiquement du module réappro (lien entre les deux écrans),
                mais reste modifiable.</div>
              </div>
            `
          },

          {
            id: "appro2-type-commande",
            title: "Type de commande (plan, demande de prix)",
            lead: "Le type de commande s'affiche sur le PDF et sert de filtre.",
            html: `
              <h2>Choisir le type</h2>
              <p>Le <strong>type de commande</strong> (achat matériel, <strong>plan</strong>,
              <strong>demande de prix</strong>…) titre le PDF et permet de <strong>filtrer</strong> les
              demandes. Ex. : le service plans filtre par type « plan » pour retrouver ses demandes.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Le type de commande est une <strong>action manuelle</strong> : par défaut une demande
                d'achat est « achat matière ». Ne pas oublier de la basculer (ex. en « plan »).</div>
              </div>
            `
          },

          {
            id: "appro2-ajout-articles",
            title: "Ajouter des articles (réf. fournisseur)",
            lead: "Compléter une demande, y compris un article non référencé chez le fournisseur.",
            html: `
              <h2>Enrichir la demande</h2>
              <p>Dans l'onglet <strong>détail</strong>, on peut ajouter d'autres articles (page blanche →
              recherche). Si l'article n'est pas référencé chez ce fournisseur, WIPSOS demande de saisir
              la <strong>référence fournisseur</strong> et le prix d'achat (non bloquant).</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Si la base article est bien tenue (tous les fournisseurs rattachés), cette saisie
                manuelle est rarement nécessaire.</div>
              </div>
            `
          }

        ]
      },

      {
        name: "Commandes, réception & stock (2/2)",
        items: [

          {
            id: "appro2-copier-demande",
            title: "Copier / dupliquer une demande d'achat",
            lead: "Refaire une demande chez un autre fournisseur en cas de rupture.",
            html: `
              <h2>Dupliquer</h2>
              <p>Clic droit → <strong>copier</strong> une demande d'achat, puis
              <strong>changer le fournisseur</strong> sur la copie → on obtient 2 demandes de prix.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Cas d'usage : un fournisseur en rupture / délai trop long → on annule d'un côté et
                on duplique pour solliciter un autre fournisseur. Si les articles ne sont pas référencés
                chez le nouveau fournisseur, saisir les références.</div>
              </div>
            `
          },

          {
            id: "appro2-valoriser-commande",
            title: "Recevoir les prix & basculer en commande",
            lead: "Mettre à jour les prix d'achat puis passer la demande en commande.",
            html: `
              <h2>De la demande de prix à la commande</h2>
              <p>Une <strong>demande de prix</strong> s'édite <strong>sans valorisation</strong> (pas de
              prix). Au retour du fournisseur :</p>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Double-clic sur chaque ligne → saisir le <strong>prix d'achat</strong> réel.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                En-tête : type de commande « achat matériel » → <strong>copier commande</strong> → enregistrer.</div></div>
              <p>La demande d'achat devient une <strong>commande</strong> (on ne réceptionne que des
              commandes). Le PDF s'édite alors <strong>avec valorisation</strong> et s'envoie par mail.</p>
            `
          },

          {
            id: "appro2-fusionner",
            title: "Fusionner des demandes d'achat",
            lead: "Regrouper plusieurs demandes d'un même fournisseur en une commande.",
            html: `
              <h2>Fusion</h2>
              <p>Pour un <strong>même fournisseur</strong> : sélectionner les demandes (Ctrl) → clic droit
              → <strong>fusionner les demandes d'achat sélectionnées</strong> → une seule demande à traiter.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Utile pour éviter les frais de port et regrouper des demandes traitées au fil de l'eau.</div>
              </div>
            `
          },

          {
            id: "appro2-commande-manuelle",
            title: "Créer une commande manuelle",
            lead: "Commander pour le stock sans passer par le module réappro.",
            html: `
              <h2>Commande directe</h2>
              <p>Positionné sur <strong>Commande</strong> (et non demande d'achat), la page blanche crée
              une commande : choisir le <strong>fournisseur</strong>, le <strong>dépôt</strong>, puis dans
              l'onglet détail rechercher et ajouter les articles (quantité, date de livraison souhaitée,
              prix d'achat, destination stock).</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Un picto <strong>enveloppe @</strong> apparaît sur la ligne quand le mail a été envoyé
                au fournisseur depuis WIPSOS (suivi en temps réel).</div>
              </div>
            `
          },

          {
            id: "appro2-reception",
            title: "Réceptionner une commande",
            lead: "Enregistrer la réception de la marchandise au dépôt.",
            html: `
              <h2>Réception gestion</h2>
              <p>Dans <em>Réception → Gestion</em>, double-clic sur la commande. On peut saisir le
              <strong>numéro d'accusé / BL</strong>, puis valider la réception.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>C'est la <strong>réception</strong> qui fait monter le <strong>stock en cours</strong>.
                Inutile d'imprimer le bon de réception WIPSOS : conservez plutôt le <strong>BL
                fournisseur</strong> dans les documents électroniques.</div>
              </div>
            `
          },

          {
            id: "appro2-reception-reliquat",
            title: "Réception totale, reliquat ou abandon",
            lead: "Gérer une réception partielle.",
            html: `
              <h2>Trois cas</h2>
              <table>
                <tr><th>Cas</th><th>Action</th></tr>
                <tr><td>Tout reçu</td><td><strong>Validation globale</strong> de la réception.</td></tr>
                <tr><td>Partiel → <strong>reliquat</strong></td><td>Clic droit → modification → saisir la
                quantité reçue ; le reste reste à recevoir (commande non historisée).</td></tr>
                <tr><td>Partiel → <strong>abandon</strong></td><td>Le reste est abandonné (ex. rupture
                fournisseur).</td></tr>
              </table>
            `
          },

          {
            id: "appro2-historique",
            title: "Commande en historique",
            lead: "Une commande totalement reçue bascule en historique.",
            html: `
              <h2>Épurer le visuel</h2>
              <p>Une commande <strong>reçue en totalité</strong> bascule en <strong>historique</strong>
              (paramétrage conseillé) — elle disparaît des commandes en cours pour ne pas polluer le visuel.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Depuis l'historique, on peut <strong>consulter</strong>, rééditer le bon, ou
                <strong>dupliquer</strong> une commande (recopiée en demande d'achat avec les
                <strong>tarifs actualisés</strong>) — pratique pour les commandes récurrentes.</div>
              </div>
            `
          },

          {
            id: "appro2-inventaire-stock",
            title: "Stock en cours & inventaire",
            lead: "Mettre le stock à jour au démarrage et le maintenir fiable.",
            html: `
              <h2>Tenir le stock à jour</h2>
              <p>Au démarrage, le stock doit être <strong>initialisé</strong> (inventaire ponctuel ou
              import de fichier). Sinon le module réappro lancerait des commandes sans tenir compte de
              l'existant.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Pas de blocage par défaut → un stock négatif est possible. On peut activer un
                <strong>blocage / seuil mini</strong> plus tard. Beaucoup d'entreprises initialisent lors
                d'une <strong>clôture</strong> (situation / bilan) et ressaisissent les commandes en cours.</div>
              </div>
            `
          },

          {
            id: "appro2-reception-imputation",
            title: "Réception = imputation au chantier",
            lead: "La réception alimente le chantier (et le suivi des plans).",
            html: `
              <h2>Lien avec le chantier</h2>
              <p>Réceptionner une commande rattachée à un chantier <strong>impute l'affaire</strong> :
              les articles remontent sur le chantier. Pour les <strong>plans</strong>, la réception
              matérialise l'avancement (un point de contrôle).</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Quand le technicien clôture sa mission via <strong>IP Connect</strong>, le chantier
                passe en <strong>terminé</strong> automatiquement (code d'état mis à jour) — ce qui évite
                les mails internes « c'est posé ».</div>
              </div>
            `
          },

          {
            id: "appro2-import-fichier",
            title: "Vérifier le fichier d'import (base article)",
            lead: "Colonnes clés : désignation, fournisseur, mini/maxi, fiche technique.",
            html: `
              <h2>Contrôle avant import</h2>
              <p>Le fichier d'import concerne la <strong>matière (prestation 0)</strong>. Points de
              vigilance :</p>
              <ul>
                <li><strong>Désignation</strong> limitée (≈ 40 caractères) ;</li>
                <li><strong>Gestion de stock</strong> (1 = oui), <strong>stock mini / maxi</strong> ;</li>
                <li><strong>Fiche technique</strong> cochée pour les articles à faire remonter sur
                l'installation ;</li>
                <li>code fournisseur, famille, gamme, code fabricant.</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Les <strong>mains d'œuvre</strong>, <strong>prestations</strong> et
                <strong>nomenclatures « plan »</strong> ne passent pas par cet import : ils se créent
                à part (manuellement ou import dédié).</div>
              </div>
            `
          },

          {
            id: "appro2-prestation-0-5",
            title: "Prestations 0 & 5 (sous-traitance, location)",
            lead: "Bien typer les articles pour les commander et analyser la rentabilité.",
            html: `
              <h2>Les codes prestation</h2>
              <table>
                <tr><th>Code</th><th>Nature</th></tr>
                <tr><td><strong>0</strong></td><td>Matière (commandable).</td></tr>
                <tr><td><strong>1</strong></td><td>Main d'œuvre interne (technicien).</td></tr>
                <tr><td><strong>5</strong></td><td>Sous-traitance / location (commandable).</td></tr>
              </table>
              <p>On peut intégrer matière, main d'œuvre, prestations et articles dans une
              <strong>nomenclature</strong>. Les prestations <strong>0 et 5</strong> peuvent être
              commandées auprès du fournisseur rattaché ; on peut aussi les ajouter dans le suivi de
              chantier puis lancer la demande d'achat.</p>
            `
          }

        ]
      }

    ]
  },

  /* ==============================================================
     CATÉGORIE — SUIVI DE CHANTIER (Session 4 — Suivi de chantier 2/2)
     ============================================================== */
  {
    category: "Suivi de chantier",
    icon: "🏗️",
    groups: [

      {
        name: "Principes & approvisionnement",
        items: [

          {
            id: "chantier-presentation",
            title: "Qu'est-ce que le suivi de chantier ?",
            lead: "Une vision globale : articles, approvisionnement et planification.",
            html: `
              <h2>Un module global</h2>
              <p>Le suivi de chantier regroupe :</p>
              <ul>
                <li>la <strong>gestion des articles</strong> issus de la proposition acceptée
                (commander ? récupérer sur stock ?) ;</li>
                <li>la <strong>planification</strong> du chantier (heures vendues vs heures réalisées) ;</li>
                <li>la sortie de matériel pour alimenter la <strong>fiche technique</strong> (parc matériel).</li>
              </ul>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Pensez « <strong>qui fait quoi</strong> » : segmentez les tâches (gestion articles,
                planification, imputation) pour ne pas se marcher dessus.</div>
              </div>
            `
          },

          {
            id: "chantier-deux-appro",
            title: "Deux types d'approvisionnement",
            lead: "Approvisionnement global vs hors approvisionnement.",
            html: `
              <h2>Comprendre les 2 modes</h2>
              <table>
                <tr><th>Mode</th><th>Fonctionnement</th></tr>
                <tr><td><strong>Global</strong></td><td>Utilise le <strong>module réappro</strong> en
                parallèle : vue de l'état du stock sur l'ensemble des affaires, demandes d'achat
                groupées (un peu automatisé).</td></tr>
                <tr><td><strong>Hors appro</strong></td><td>Action <strong>manuelle</strong> chantier
                par chantier : on valide les articles dans le suivi de chantier (récupérer sur stock
                ou demande d'achat).</td></tr>
              </table>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Lors d'une acceptation, c'est <strong>soit l'un, soit l'autre</strong> — on ne
                cumule pas les deux modes.</div>
              </div>
            `
          },

          {
            id: "chantier-recherche-filtres",
            title: "Recherche, filtres & codes d'état",
            lead: "Retrouver ses chantiers par responsable, activité, code d'état.",
            html: `
              <h2>Filtrer la liste des chantiers</h2>
              <p>Le suivi de chantier liste tous les devis acceptés. On peut filtrer par :</p>
              <ul>
                <li><strong>responsable</strong> (le chargé d'affaires voit ses chantiers le matin) ;</li>
                <li><strong>activité</strong> (extincteur, etc.) ;</li>
                <li><strong>code d'état</strong> (en cours, en attente, en commande…).</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Les codes d'état sont <strong>standard</strong> (communs à toutes les activités) : on
                ne peut pas les différencier par activité.</div>
              </div>
            `
          },

          {
            id: "chantier-entree-base",
            title: "Entrer dans un chantier — onglet base",
            lead: "Les informations en lecture seule remontées de la proposition.",
            html: `
              <h2>Onglet « Base »</h2>
              <p>En haut, des informations en <strong>fond bleu non modifiables</strong> :
              proposition, client, chantier, commercial, activité. C'est là aussi qu'on retrouve
              le <strong>code d'état</strong> du chantier.</p>
            `
          },

          {
            id: "chantier-codes-etat-etapes",
            title: "Codes d'état : structurer les étapes",
            lead: "Construire la check-list d'avancement (relevé, dessin, maquette…).",
            html: `
              <h2>Structurer de A à Z</h2>
              <p>C'est dans le paramétrage des codes d'état qu'on définit toutes les étapes :
              relevé, dessin, envoi de maquette, retour maquette, impression OK…</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Le suivi des plans se fait <strong>uniquement</strong> par code d'état (action
                humaine). C'est la fusion des codes d'état « Sage » et « production » à checklister
                ensemble.</div>
              </div>
            `
          },

          {
            id: "chantier-responsable",
            title: "Technicien responsable / chargé d'affaires",
            lead: "Qui est en charge du chantier — et ce n'est pas la planification.",
            html: `
              <h2>Responsable ≠ planification</h2>
              <p>Le <strong>technicien responsable</strong> (= chargé d'affaires) est la personne en
              charge du chantier : il vérifie les articles, organise, planifie. Un bouton permet de
              l'<strong>avertir par mail</strong> que le chantier lui a été affecté.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>La <strong>planification</strong> à un ou plusieurs techniciens est une étape
                distincte (picto planification). On peut aussi mettre un <strong>service</strong> en
                responsable plutôt qu'une personne.</div>
              </div>
            `
          }

        ]
      },

      {
        name: "Réappro, commandes & plans",
        items: [

          {
            id: "chantier-module-reappro",
            title: "Module réapprovisionnement",
            lead: "Date d'arrêté, choix du dépôt, vision globale des besoins.",
            html: `
              <h2>Vue globale des besoins</h2>
              <p>Le module réappro (menu Fournisseur) donne une vision sur l'ensemble des affaires et
              la disponibilité des stocks. On choisit une <strong>date d'arrêté</strong> et un
              <strong>dépôt</strong> (vous travaillez par dépôt/agence).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Avant de démarrer en production, le <strong>stock doit être à jour</strong> sur les
                articles, et chaque article doit être <strong>géré en stock</strong> (sinon la réception
                n'alimente pas le stock).</div>
              </div>
            `
          },

          {
            id: "chantier-articles-stock",
            title: "Articles, stock & proposition de commande",
            lead: "Commande client, stock en cours, stock mini/maxi.",
            html: `
              <h2>Lire la proposition</h2>
              <ul>
                <li><strong>Commande client</strong> : quantité réellement nécessaire pour les affaires.</li>
                <li><strong>Stock en cours</strong> : ce qu'il reste en stock.</li>
                <li><strong>Proposition</strong> : calculée automatiquement (et selon stock mini/maxi de
                la fiche article).</li>
              </ul>
              <p>On peut <strong>modifier les quantités</strong> proposées avant de générer la demande
              d'achat. Une vue « par chantier » regroupe l'ensemble des articles par affaire.</p>
            `
          },

          {
            id: "chantier-demande-achat",
            title: "Générer la demande d'achat",
            lead: "De la proposition à la demande d'achat fournisseur.",
            html: `
              <h2>Toujours une demande d'achat</h2>
              <p>Dans WIPSOS, c'est toujours d'abord une <strong>demande d'achat à traiter</strong>
              (jamais directement une commande).</p>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Sélectionner l'article → clic droit <strong>effectuer les propositions de commande</strong>.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                Cocher la génération → clic droit <strong>générer les commandes sélectionnées</strong>.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                La demande d'achat apparaît dans <em>Fournisseur → Commande et gestion</em>.</div></div>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Ensuite, un simple interrupteur permet de basculer la demande d'achat en
                <strong>commande</strong> (avec ou sans demande de prix au fournisseur).</div>
              </div>
            `
          },

          {
            id: "chantier-article-generique",
            title: "Le cas de l'article générique",
            lead: "Pourquoi le générique n'apparaît pas dans le module réappro.",
            html: `
              <h2>Générique = non géré en stock</h2>
              <p>Un article <strong>générique</strong> (Artegen) n'est pas géré en stock : il
              <strong>n'apparaît pas</strong> dans le module réappro. On le retrouve dans le
              <strong>suivi de chantier</strong> (onglet gestion des articles) où il faut le traiter
              directement.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Conseil : limiter le générique et alimenter la base d'articles au fur et à mesure
                pour chiffrer avec des <strong>articles réels</strong>.</div>
              </div>
            `
          },

          {
            id: "chantier-commande-plans",
            title: "Commander les plans",
            lead: "Passer la commande de plans en interne/externe et la rattacher au chantier.",
            html: `
              <h2>Commande dédiée « plan »</h2>
              <p>Le service plans (créé comme un <strong>fournisseur</strong>, même interne — PSL plan)
              passe sa commande depuis le module fournisseur, avec un <strong>type de commande « plan »</strong>
              distinct de l'achat de matériel.</p>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Créer manuellement la commande, détailler les articles.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Rattacher chaque article au numéro de chantier</strong>.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                À la réception, les articles s'imputent automatiquement → la rentabilité est juste.</div></div>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Pour la rentabilité, bien définir la <strong>prestation</strong> de chaque article
                (0 = matière, 1 = main d'œuvre, 5 = prestation…) : le tableau de bord analyse par prestation.</div>
              </div>
            `
          },

          {
            id: "chantier-suivi-code-etat",
            title: "Suivre l'avancement des plans (code d'état)",
            lead: "Dessin, envoi maquette, BAT… tout passe par le code d'état.",
            html: `
              <h2>Les étapes d'un plan</h2>
              <p>Un plan « simple » peut compter ~8 étapes : reçu non traité, pris en compte, dessin
              envoyé, relevé fait, relevé transmis, maquette, retour maquette, impression…</p>
              <p>Chaque étape = une <strong>mise à jour du code d'état</strong>, faite par la personne
              concernée (ex. le dessinateur), ce qui donne la visibilité aux autres.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>C'est une <strong>action humaine</strong> : au moment d'un transfert (remise main
                ou mail), penser à changer le code d'état. À cadrer en interne : qui change quoi, et quand.</div>
              </div>
            `
          }

        ]
      },

      {
        name: "Imputation & planning",
        items: [

          {
            id: "chantier-imputation",
            title: "Imputation & bon de livraison",
            lead: "Sortir le matériel, alimenter la fiche technique, éditer le BL interne.",
            html: `
              <h2>Imputer la matière</h2>
              <p>Deux systèmes d'imputation :</p>
              <table>
                <tr><th>Mode</th><th>Effet</th></tr>
                <tr><td><strong>Automatique</strong> (à la réception)</td><td>Les articles basculent de
                la réception vers l'installation, sans action.</td></tr>
                <tr><td><strong>Manuel</strong></td><td>On sort le matériel du dépôt vers l'installation
                en s'appuyant sur la colonne <strong>stock en cours</strong>.</td></tr>
              </table>
              <p>L'imputation alimente la <strong>fiche technique</strong> (parc matériel) et permet
              d'éditer un <strong>bon de livraison interne</strong> pour la préparation.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Tant qu'on n'a pas imputé, on peut quand même planifier — mais l'imputation reste
                <strong>obligatoire</strong> pour tenir à jour le parc (impact SAV / contrats).</div>
              </div>
            `
          },

          {
            id: "chantier-planification",
            title: "Planifier le chantier",
            lead: "Planification simple, sur plusieurs jours ou distribution multiple.",
            html: `
              <h2>Plusieurs façons de planifier</h2>
              <ul>
                <li><strong>Simple</strong> : clic droit → ajouter la planification (journée entière,
                matin, après-midi ou horaires définis).</li>
                <li><strong>Sur plusieurs jours</strong> : distribuer entre deux dates.</li>
                <li><strong>Distribution multiple</strong> : répartir entre plusieurs techniciens avec
                un <strong>décompte des heures</strong> en bas à droite (vendu / planifié / reste).</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Les heures de fin et la pause déjeuner peuvent être saisies manuellement, mais
                remontent surtout automatiquement quand le technicien clôture via l'application
                <strong>IP Connect</strong>.</div>
              </div>
            `
          },

          {
            id: "chantier-reservation",
            title: "Réservations dans le planning",
            lead: "Bloquer un créneau et le transformer en planification de chantier.",
            html: `
              <h2>Réserver avant de planifier</h2>
              <p>Clic droit → <strong>ajouter une réservation</strong> (période, département, descriptif,
              événement). En rattachant un <strong>chantier</strong>, on peut ensuite
              <strong>valider la réservation</strong> pour la convertir en planification.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Le technicien ne voit sur son téléphone que ce qui est <strong>validé</strong> : la
                réservation reste interne tant qu'elle n'est pas confirmée.</div>
              </div>
            `
          },

          {
            id: "chantier-rdv-mail",
            title: "Rendez-vous, mail client & pièces jointes",
            lead: "Prévenir le client et joindre les documents au bon endroit.",
            html: `
              <h2>Prévenir le client</h2>
              <p>À la planification, un bouton permet d'<strong>envoyer un mail au client</strong>
              (modèle à paramétrer). On peut joindre une pièce depuis le bureau ou depuis les
              <strong>documents électroniques</strong> du client.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Centralisez les documents du chantier dans WIPSOS (sous-dossiers) : on les
                retrouve pour les joindre aux mails sans aller les chercher ailleurs.</div>
              </div>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Un même chantier peut être planifié à <strong>plusieurs techniciens</strong> ;
                un technicien peut aussi en ajouter un autre depuis l'application (le planning se met à jour).</div>
              </div>
            `
          }

        ]
      }

    ]
  },

  /* ==============================================================
     CATÉGORIE — ADV (Session 5 — Acceptation des propositions)
     ============================================================== */
  {
    category: "ADV (Acceptation)",
    icon: "✅",
    groups: [

      {
        name: "Avant le devis",
        items: [

          {
            id: "adv-introduction",
            title: "Introduction à l'ADV",
            lead: "L'acceptation des propositions (DV) : le point de bascule devis → chantier.",
            html: `
              <h2>De quoi parle-t-on ?</h2>
              <p>L'<strong>ADV</strong> (ou « DV ») désigne l'<strong>acceptation des propositions</strong> :
              c'est l'étape, dans WIPSOS, où l'on enregistre qu'un devis a été signé par le client.
              Elle ouvre le <strong>chantier</strong>.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Le module chiffrage est partagé : commerce, contrats, correctifs et chantier 9
                peuvent tous être amenés à chiffrer — d'où une session ouverte à tout le commerce.</div>
              </div>
            `
          },

          {
            id: "adv-contrat-vs-sav",
            title: "Où créer quoi : contrat vs SAV",
            lead: "Maintenance dans Contrat, correctifs/réparations dans SAV.",
            html: `
              <h2>Le bon module</h2>
              <table>
                <tr><th>Besoin</th><th>Module</th></tr>
                <tr><td>Contrat de maintenance (chiffrage récurrent)</td><td><strong>Contrat</strong></td></tr>
                <tr><td>Correctif / réparation (matériel cassé à changer)</td><td><strong>SAV</strong>
                (bons d'intervention, génération de visites, devis de réparation)</td></tr>
                <tr><td>Devis d'installation</td><td><strong>Commercial</strong></td></tr>
              </table>
              <div class="callout info">
                <span class="ic">i</span>
                <div>L'ADV intervient une fois le devis <strong>accepté</strong>, quel que soit le module
                d'origine.</div>
              </div>
            `
          },

          {
            id: "adv-creation-client",
            title: "Créer un prospect / client",
            lead: "La page blanche pour créer, le type prospect ↔ client.",
            html: `
              <h2>Création</h2>
              <p>Dans <em>Commercial → Client</em>, la <strong>page blanche</strong> sert à créer.
              Prospect et client se créent de la même façon : on s'arrête simplement sur le
              <strong>type de client</strong> (prospect dans un premier temps).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Travaillez toujours sur la <strong>base test</strong> (bandeau rouge en haut) pour
                vos essais — vérifiez avant de saisir.</div>
              </div>
            `
          },

          {
            id: "adv-mises-a-jour",
            title: "Mises à jour du logiciel",
            lead: "Appliquer les mises à jour (lot 5) et donner la main à distance.",
            html: `
              <h2>Tenir WIPSOS à jour</h2>
              <p>Des mises à jour sortent environ <strong>tous les 2 mois</strong>
              (<em>Outils logiciels → Téléchargement des mises à jour</em>), avec un code reçu par mail.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>À faire quand il n'y a personne de connecté (ex. 12h00) pour ne pas éjecter les
                utilisateurs. Pour le support, donnez la main via <strong>AnyDesk / TeamViewer</strong>
                (Outils logiciels → autres options de connexion).</div>
              </div>
            `
          },

          {
            id: "adv-type-affaire-siret",
            title: "Type d'affaire & SIRET",
            lead: "Le type d'affaire (facturation électronique) conditionne le SIRET.",
            html: `
              <h2>Nouveau champ « type d'affaire »</h2>
              <p>Lié à la <strong>facturation électronique</strong> (lot 5) :</p>
              <table>
                <tr><th>Type</th><th>SIRET</th></tr>
                <tr><td>Particulier</td><td>Non obligatoire.</td></tr>
                <tr><td>B2B / professionnel France</td><td><strong>Obligatoire</strong>.</td></tr>
              </table>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Le SIRET évite les doublons : chaque client est unique. Un blocage peut être
                activé sur le code SIRET.</div>
              </div>
            `
          },

          {
            id: "adv-code-reglement-tva",
            title: "Code règlement & TVA",
            lead: "Renseigner le code règlement et le bon taux de TVA.",
            html: `
              <h2>Éléments financiers</h2>
              <p>Le <strong>code règlement</strong> (ex. virement 210 / 30 jours) remonte par défaut
              s'il est saisi sur la fiche client (modifiable avant facturation).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Attention à la <strong>TVA</strong> : sans valeur, c'est du 20 %. Pour du 10 %,
                pensez à changer la valeur. On peut aller jusqu'à 3 taux de TVA sur un chiffrage.</div>
              </div>
            `
          },

          {
            id: "adv-remise-bpu",
            title: "Remise générale & tarifs particuliers (BPU)",
            lead: "Remise au niveau client, ou prix préférentiels par BPU.",
            html: `
              <h2>Deux logiques</h2>
              <ul>
                <li><strong>Remise générale</strong> (fiche client) : appliquée à chaque devis (en %
                ou en coefficient).</li>
                <li><strong>Tarifs particuliers / BPU</strong> : prix préférentiels par article pour
                certains clients.</li>
              </ul>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Les BPU peuvent être <strong>importés via un fichier Excel</strong> (trame
                prédéfinie) pour gagner du temps quand il y a beaucoup d'articles.</div>
              </div>
            `
          },

          {
            id: "adv-creation-contact",
            title: "Créer un contact",
            lead: "Contact principal, accès portail client, habilitation SAV.",
            html: `
              <h2>Le contact</h2>
              <p>Page blanche → nom, fonction, téléphone, mail. Cochez selon le rôle :</p>
              <ul>
                <li><strong>Installation / habilitation appel SAV</strong> : ces contacts remontent sur
                l'application des techniciens.</li>
                <li><strong>Facturation / comptabilité</strong> : ne pas cocher SAV (pas d'intérêt).</li>
                <li><strong>Contact principal</strong> : à cocher pour qu'il apparaisse par défaut.</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>L'« accès portail » concerne le <strong>portail client</strong> (factures,
                demandes de dépannage, contrats, installations).</div>
              </div>
            `
          }

        ]
      },

      {
        name: "Devis & chiffrage",
        items: [

          {
            id: "adv-creation-devis",
            title: "Créer le devis d'installation",
            lead: "Sélectionner le client, remplir l'en-tête (généralités, facturation).",
            html: `
              <h2>En-tête du devis</h2>
              <p><em>Commercial → Devis</em> → rechercher le prospect → page blanche. Deux onglets
              à renseigner :</p>
              <ul>
                <li><strong>Généralités</strong> : intitulé, date, relance, activité, contact,
                % de réussite, remise / TVA globales.</li>
                <li><strong>Facturation & comptabilité</strong> : type de facturation (chantier),
                conditions de règlement, acompte (affichage), commentaire de facturation.</li>
              </ul>
            `
          },

          {
            id: "adv-devis-sav-commercial",
            title: "Devis SAV simplifié vs commercial",
            lead: "Deux façons de chiffrer un correctif depuis le module SAV.",
            html: `
              <h2>Deux options de devis SAV</h2>
              <table>
                <tr><th>Option</th><th>Caractéristiques</th></tr>
                <tr><td><strong>Devis SAV simplifié</strong></td><td>Un seul modèle PDF, recherche
                d'articles + petit texte.</td></tr>
                <tr><td><strong>Devis commercial (depuis SAV)</strong></td><td>Même visuel et même
                chiffrage que le commerce, avec choix du modèle.</td></tr>
              </table>
              <div class="callout info">
                <span class="ic">i</span>
                <div>On part toujours d'un <strong>bon d'intervention</strong> que l'on bascule en devis SAV.</div>
              </div>
            `
          },

          {
            id: "adv-chiffrage",
            title: "Chiffrer : colis, accès rapide, nomenclature",
            lead: "Insérer des articles et des nomenclatures dans le paragraphe.",
            html: `
              <h2>Insérer des articles</h2>
              <ul>
                <li><strong>Accès rapide</strong> : taper la désignation, quantité, Entrée → l'article
                s'ajoute.</li>
                <li><strong>Colis</strong> (onglet recherche) : rechercher par désignation ou code
                article, double-clic, quantité, enregistrer.</li>
                <li><strong>Nomenclature</strong> (prestation 9) : insérée puis personnalisée (nombre
                d'heures, déplacements) → le prix de vente se calcule. Elle s'éclatera à l'acceptation.</li>
              </ul>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Attention au <strong>positionnement</strong> : l'article s'insère sous la ligne
                sélectionnée. Travaillez de préférence en <strong>paragraphes</strong>.</div>
              </div>
            `
          },

          {
            id: "adv-sous-totaux-options",
            title: "Sous-totaux & options",
            lead: "Structurer le chiffrage et proposer des options.",
            html: `
              <h2>Sous-totaux</h2>
              <p>Le picto « + » insère un <strong>sous-total</strong> de paragraphe (sous-total
              progressif possible).</p>
              <h2>Options</h2>
              <p>Le picto « puzzle » crée un paragraphe <strong>Options</strong> (toujours en fin de
              chiffrage). Les options n'entrent pas dans le montant.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Si le client accepte une option, <strong>remontez l'article dans un paragraphe</strong>
                (copier la ligne) avant d'accepter — sinon l'option ne sera pas facturée. Utilisez les
                modèles <strong>5 et 6</strong> pour éditer les options séparées.</div>
              </div>
            `
          },

          {
            id: "adv-arrondi-remise",
            title: "Arrondi & remise commerciale",
            lead: "Forcer un montant HT : coefficient de vente ou article arrondi.",
            html: `
              <h2>Modifier le montant HT</h2>
              <p>En cliquant sur le montant HT, on peut le forcer. WIPSOS propose alors :</p>
              <table>
                <tr><th>Mode</th><th>Effet</th></tr>
                <tr><td><strong>Coefficient de vente</strong></td><td>Recalcule les prix des articles
                pour atteindre le montant.</td></tr>
                <tr><td><strong>Article arrondi</strong></td><td>Crée une ligne « remise commerciale »
                (différence entre le prix initial et le prix cible).</td></tr>
              </table>
              <div class="callout info">
                <span class="ic">i</span>
                <div>À réserver à des cas précis — c'est une alternative à la remise globale de l'en-tête.</div>
              </div>
            `
          },

          {
            id: "adv-descriptif-commercial",
            title: "Descriptif commercial & modèles",
            lead: "Texte d'introduction avec variables qui se mettent à jour.",
            html: `
              <h2>Descriptif commercial</h2>
              <p>Petit texte avant le chiffrage : saisi à la main ou via des <strong>modèles
              prédéfinis</strong> contenant des <strong>variables</strong> (client, n° de proposition…)
              qui se remplissent à l'édition PDF.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>À côté, le <strong>descriptif technique</strong> sert à transmettre des consignes
                au chargé d'affaires / au technicien (lien avec le suivi de chantier et l'application).</div>
              </div>
            `
          },

          {
            id: "adv-modeles-mail-signature",
            title: "Modèles de devis, envoi mail & signature",
            lead: "Choisir un modèle PDF et envoyer le devis depuis WIPSOS.",
            html: `
              <h2>Édition & envoi</h2>
              <p>Un <strong>modèle par défaut</strong> est paramétré (modifiable). L'envoi par mail
              ouvre une fenêtre avec le PDF joint.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Paramétrez un <strong>modèle de mail</strong> commun et une
                <strong>signature</strong> par utilisateur (récupérées depuis Outlook) pour ne pas
                retaper à chaque fois.</div>
              </div>
            `
          },

          {
            id: "adv-historique-mails",
            title: "Historique des mails",
            lead: "Tout est tracé dans WIPSOS, peu importe l'utilisateur.",
            html: `
              <h2>Tracer les envois</h2>
              <p>Depuis la fiche client, un picto donne accès à l'<strong>historique des mails
              envoyés</strong> (filtrable par objet, destinataire, période).</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Envoyez les mails <strong>depuis WIPSOS</strong> (pas depuis votre boîte perso) :
                tout est centralisé et accessible même si la personne est absente. Le SMTP permet
                d'envoyer depuis n'importe quel poste.</div>
              </div>
            `
          }

        ]
      },

      {
        name: "Acceptation & fiche technique",
        items: [

          {
            id: "adv-acceptation-devis",
            title: "Accepter le devis (code d'état)",
            lead: "Le blocage volontaire qui force à passer le devis en « accepté ».",
            html: `
              <h2>Passer en « devis accepté »</h2>
              <p>Sur l'en-tête, changez le <strong>code d'état</strong> en « devis accepté » avant de
              cliquer sur <strong>Acceptation</strong> (petit pouce).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Un <strong>blocage volontaire</strong> empêche l'acceptation si le code d'état n'est
                pas mis à jour — pour garantir un suivi fiable (éditions, portefeuille de commandes).</div>
              </div>
            `
          },

          {
            id: "adv-validation-prospect-client",
            title: "Valider le prospect en client",
            lead: "WIPSOS demande de compléter la fiche avant d'ouvrir le chantier.",
            html: `
              <h2>Prospect → client</h2>
              <p>À l'acceptation, WIPSOS demande de <strong>basculer le prospect en client</strong> et
              de compléter :</p>
              <ul>
                <li><strong>Secteur géographique</strong> (devient obligatoire — utile au SAV pour
                facturer le déplacement) ;</li>
                <li><strong>Code règlement</strong> (par défaut, modifiable avant facturation).</li>
              </ul>
              <p>On bascule alors automatiquement sur la partie <strong>ADV / acceptation</strong>.</p>
            `
          },

          {
            id: "adv-fiche-technique",
            title: "Créer la fiche technique (installation)",
            lead: "L'étape clé : créer l'enveloppe « installation » du client.",
            html: `
              <h2>La fiche technique = installation</h2>
              <p>Cochez <strong>fiche technique</strong> avant d'accepter : WIPSOS crée l'installation
              (ex. « extincteur ») rattachée au client. Elle est <strong>vide au départ</strong> ; le
              parc matériel s'alimente ensuite via les <strong>imputations / réceptions</strong>.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Tout part de là : le parc matériel alimente le <strong>SAV</strong>, les
                <strong>contrats</strong> de maintenance et l'<strong>application technicien</strong>.</div>
              </div>
            `
          },

          {
            id: "adv-devis-adjonction",
            title: "Devis d'adjonction (travaux supplémentaires)",
            lead: "Ne pas recréer l'installation pour un devis complémentaire.",
            html: `
              <h2>Éviter les doublons d'installation</h2>
              <p>Pour un <strong>devis complémentaire</strong> (TS) sur un client qui a déjà une
              installation de la même activité : <strong>ne pas cocher fiche technique</strong> — on
              <strong>rattache l'installation existante</strong> (champ « installation principale
              d'adjonction »).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Recréer une fiche technique à chaque devis crée des <strong>doublons
                d'installation</strong> : matériel dispersé, SAV faussé. C'est ~60 % de la bonne
                utilisation du soft.</div>
              </div>
            `
          },

          {
            id: "adv-acceptation-globale-chantier",
            title: "Acceptation globale → ouverture du chantier",
            lead: "Valider l'acceptation et ouvrir le chantier (code C…).",
            html: `
              <h2>Finaliser</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Renseigner le <strong>responsable</strong> du futur chantier.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Acceptation globale</strong> (le hors appro est masqué pour éviter les erreurs).</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                Double-clic sur l'installation à créer → enregistrer → <strong>valider</strong>.</div></div>
              <p>La proposition est acceptée et porte un <strong>code chantier</strong> (ex. C 8A). Elle
              disparaît des devis en cours (filtre « devis accepté » pour la revoir, coche
              <strong>Accepté</strong>).</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>La suite (réappro, imputations, planification) se fait dans le
                <strong>suivi de chantier</strong>.</div>
              </div>
            `
          }

        ]
      }

    ]
  },

  /* ==============================================================
     CATÉGORIE — CONTRATS (Session 7 — Contrat 1/2)
     ============================================================== */
  {
    category: "Contrats",
    icon: "📄",
    groups: [

      {
        name: "Créer un contrat de maintenance",
        items: [

          {
            id: "contrat-type-commande-fournisseur",
            title: "Type de commande automatique (rappel)",
            lead: "Faire remonter le type de commande automatiquement via le fournisseur.",
            html: `
              <h2>Automatiser le type de commande</h2>
              <p>Réponse à la question de la veille : on peut <strong>rattacher le type de commande
              au fournisseur</strong>. Dans chaque fiche fournisseur (onglet <strong>Commande</strong>),
              on renseigne le type (ex. « plan »).</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>À l'acceptation, la demande d'achat portera directement le bon type de commande —
                plus besoin de le changer à la main. C'est automatisé.</div>
              </div>
            `
          },

          {
            id: "contrat-creer",
            title: "Créer un contrat",
            lead: "Le module Contrat : consulter ou créer via la page blanche.",
            html: `
              <h2>Module Contrat</h2>
              <p><em>Contrat → Fiche</em> permet de consulter les contrats existants ou d'en créer un.
              La <strong>page blanche</strong> crée un nouveau contrat de maintenance.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Avant la page blanche, <strong>rechercher le client</strong> sur lequel affecter le
                contrat.</div>
              </div>
            `
          },

          {
            id: "contrat-modes-affichage",
            title: "Modes d'affichage (table / contrat)",
            lead: "Deux façons de visualiser les contrats.",
            html: `
              <h2>Table vs Contrat</h2>
              <table>
                <tr><th>Mode</th><th>Affichage</th></tr>
                <tr><td><strong>Table</strong></td><td>Clients en haut ; en cliquant sur un client, ses
                contrats s'affichent dans la table du dessous.</td></tr>
                <tr><td><strong>Contrat</strong></td><td>Vue centralisée de l'ensemble des contrats de la
                base (souvent plus pratique).</td></tr>
              </table>
            `
          },

          {
            id: "contrat-logique-installation",
            title: "Logique : contrat = installation",
            lead: "Rattacher une installation existante ou en créer une.",
            html: `
              <h2>Le principe</h2>
              <p>Un contrat de maintenance vient <strong>rattacher une installation</strong> :</p>
              <ul>
                <li><strong>Installation existante</strong> : issue d'un devis d'installation accepté
                dans WIPSOS (fiche technique déjà créée) ;</li>
                <li><strong>Créer l'installation</strong> à la volée et alimenter le
                <strong>parc matériel</strong> (cas d'une reprise de parc).</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Le parc matériel = l'ensemble des articles ouverts par le contrat. C'est la base de
                tout le suivi (visites, SAV).</div>
              </div>
            `
          },

          {
            id: "contrat-onglets-type",
            title: "Onglets & type de maintenance",
            lead: "Généralités et facturation ; type maintenance ou autoliquidée.",
            html: `
              <h2>Renseigner l'en-tête</h2>
              <p>Deux onglets à compléter : <strong>Généralités</strong> et <strong>Facturation</strong>.
              L'agence et le commercial remontent du client (modifiables).</p>
              <p>Le <strong>type</strong> : « maintenance » ou « maintenance autoliquidée ».</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Méthode : remplir « en cascade » (de gauche à droite) — pas besoin de saisir chaque
                cellule, seulement les champs en gras (obligatoires) et ceux utiles.</div>
              </div>
            `
          },

          {
            id: "contrat-mono-multi",
            title: "Contrat mono ou multi-activités",
            lead: "Un contrat par activité, ou un contrat regroupant plusieurs activités.",
            html: `
              <h2>Choisir l'activité</h2>
              <p>L'<strong>activité</strong> du contrat est importante. Deux organisations possibles :</p>
              <ul>
                <li>un <strong>contrat par activité</strong> ;</li>
                <li>un <strong>contrat multi-activités</strong> (majoritaire) : plusieurs installations
                rattachées, chacune avec ses propres visites.</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>En multi-activités, WIPSOS génère les visites <strong>par installation et mois par
                mois</strong> automatiquement — l'oubli d'une visite devient très rare.</div>
              </div>
            `
          },

          {
            id: "contrat-abonnement-visite",
            title: "Abonnement vs facturé à la visite",
            lead: "Les deux grands types de fonctionnement d'un contrat.",
            html: `
              <h2>Deux typologies</h2>
              <table>
                <tr><th>Type</th><th>Facturation</th></tr>
                <tr><td><strong>Abonnement</strong></td><td>Récurrente (annuelle, mensuelle,
                trimestrielle), montant forfaitaire.</td></tr>
                <tr><td><strong>À la visite</strong></td><td>Au réel : on facture depuis le
                <strong>SAV</strong> au retour de la visite (le plus courant en incendie).</td></tr>
              </table>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Le « contrat principal » permet de rattacher plusieurs contrats entre eux pour une
                seule facture (vu plus en détail par la suite).</div>
              </div>
            `
          },

          {
            id: "contrat-rattacher-codifier",
            title: "Rattacher ou codifier une installation",
            lead: "Le champ installation : liste existante ou codification manuelle.",
            html: `
              <h2>Installation du contrat</h2>
              <p>Dans la cellule « chantier/installation » :</p>
              <ul>
                <li>si l'installation existe (devis accepté), on la <strong>sélectionne</strong> dans la
                liste ;</li>
                <li>sinon, on la <strong>codifie manuellement</strong>.</li>
              </ul>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Une installation issue d'un devis accepté commence par <strong>« C »</strong> (n° de
                chantier). Ne créez pas vos codifications manuelles avec « C » pour éviter erreurs et
                doublons.</div>
              </div>
            `
          },

          {
            id: "contrat-codification",
            title: "Codifier manuellement (reprise de parc)",
            lead: "Créer une installation quand le devis n'a pas été fait dans WIPSOS.",
            html: `
              <h2>Cas de la reprise</h2>
              <p>Quand on arrive chez un client avec un parc existant (pas de devis WIPSOS), il faut
              <strong>codifier l'installation</strong>. Méthode conseillée :
              <strong>numéro de client + 1</strong> (1ʳᵉ installation), + 2 pour une 2ᵉ activité, etc.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>En tapant ce code (Tab), WIPSOS propose de <strong>créer l'installation</strong> :
                cochez, puis accédez à la fiche technique. La fiche est rattachée à l'<strong>activité</strong>
                renseignée. C'est le cas majoritaire (les chantiers 9 = ~10 %).</div>
              </div>
            `
          },

          {
            id: "contrat-creer-installation",
            title: "Créer la fiche technique (installation)",
            lead: "Accéder à l'installation créée et préparer son parc.",
            html: `
              <h2>La fiche technique</h2>
              <p>Le picto <strong>accès à la fiche technique</strong> ouvre l'installation (ex.
              « installation extincteur »). Elle est <strong>vide au départ</strong> : le parc matériel
              va s'y ajouter.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Une liste déroulante des activités sera préparée pour éviter de retaper le libellé
                à chaque fois.</div>
              </div>
            `
          },

          {
            id: "contrat-parc-materiel",
            title: "Alimenter le parc matériel",
            lead: "Ajouter les articles sous contrat à l'installation.",
            html: `
              <h2>Ajouter les articles</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Page blanche → rechercher l'article (ex. extincteur).</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                Renseigner la <strong>date de mise en service</strong> et la <strong>quantité sous
                contrat</strong>.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                Enregistrer → le parc s'alimente (ex. 5 extincteurs sous contrat).</div></div>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Étape essentielle pour les installations <strong>non générées automatiquement</strong>
                par WIPSOS.</div>
              </div>
            `
          },

          {
            id: "contrat-reprise-parc",
            title: "Reprise de parc : 3 solutions",
            lead: "Récupérer au maximum le parc pour que le technicien ne parte pas de zéro.",
            html: `
              <h2>Comment renseigner le parc</h2>
              <ul>
                <li><strong>J'ai l'info</strong> : je saisis le parc réel (manuellement).</li>
                <li><strong>Import Excel</strong> : parc rattaché au contrat (utile au-delà de ~10 articles).</li>
                <li><strong>Le technicien complète</strong> : sur site, via l'application, il met à jour
                le parc — les articles remontent automatiquement sous contrat.</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Si l'info est approximative, mettre une quantité prévisionnelle (ex. 10 extincteurs) ;
                le technicien ajustera lors de la visite.</div>
              </div>
            `
          },

          {
            id: "contrat-dates",
            title: "Dates de signature & mise en service",
            lead: "Renseigner les dates clés du contrat.",
            html: `
              <h2>Les dates</h2>
              <ul>
                <li><strong>Date de signature</strong> : date d'aujourd'hui ou antérieure, selon le contrat.</li>
                <li><strong>Date de mise en service</strong> : début effectif du contrat (peut différer de
                la signature).</li>
              </ul>
              <p>Un <strong>texte de facture</strong> peut être saisi (il apparaîtra sur la facture).</p>
            `
          }

        ]
      },

      {
        name: "Facturation, visites & multi-activités",
        items: [

          {
            id: "contrat-facture-visite",
            title: "Contrat facturé à la visite",
            lead: "Cocher « facturé à la visite » pour facturer au réel.",
            html: `
              <h2>Facturer au réel</h2>
              <p>Cocher <strong>« contrat facturé à la visite »</strong> : le contrat n'est pas facturé en
              abonnement mais <strong>au retour de chaque visite</strong> (nombre réel d'articles posés).</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>En incendie, c'est quasiment toujours ce mode (on facture le réel : s'il y a 9
                extincteurs, on facture 9).</div>
              </div>
            `
          },

          {
            id: "contrat-onglet-facturation",
            title: "Onglet facturation",
            lead: "Début/prochaine facturation, périodicité, formule.",
            html: `
              <h2>Champs à renseigner</h2>
              <p>Même en « à la visite », l'onglet Facturation demande : <strong>début</strong> et
              <strong>prochaine facturation</strong>, <strong>périodicité</strong> (ex. annuel),
              <strong>formule</strong> (sans augmentation).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>En « à la visite », ces valeurs sont obligatoires mais <strong>sans impact</strong> :
                laissez le <strong>montant vide</strong> (la facturation se fera au retour SAV).</div>
              </div>
            `
          },

          {
            id: "contrat-abonnement",
            title: "Contrat type abonnement",
            lead: "Montant, périodicité, échu/à échoir et formule d'augmentation.",
            html: `
              <h2>Paramétrer un abonnement</h2>
              <p>Ne pas cocher « à la visite ». Renseigner un <strong>montant HT</strong> (base et actuel),
              la <strong>périodicité</strong>, et l'échéance :</p>
              <ul>
                <li><strong>À échoir</strong> : facture en début de période (même date).</li>
                <li><strong>Échu</strong> : facture en fin de période (année suivante).</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div><strong>Montant de base</strong> reste figé ; <strong>montant actuel</strong> évolue
                avec la formule d'augmentation (non augmentable / augmentable / jamais augmentable).</div>
              </div>
            `
          },

          {
            id: "contrat-gestion-visites",
            title: "Gestion des visites (prévisionnel)",
            lead: "Indiquer les visites à faire par installation.",
            html: `
              <h2>Le calendrier des visites</h2>
              <p>Depuis le contrat, le <strong>bloc-notes</strong> ouvre la gestion des visites. Pour
              chaque installation, on définit un <strong>prévisionnel</strong> qui permettra de générer
              les bons de visite à planifier.</p>
            `
          },

          {
            id: "contrat-creer-visite",
            title: "Créer une visite (code visite, mois)",
            lead: "Définir le type de visite et le mois d'intervention.",
            html: `
              <h2>Créer une visite d'entretien</h2>
              <p>Page blanche → <strong>code visite</strong> (ex. annuelle, mensuelle) → choisir le
              <strong>mois</strong> de la visite. On peut indiquer un nombre d'heures et de techniciens
              (prévisionnel).</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Ces heures/techniciens sont <strong>théoriques</strong> (un repère visuel sur le banc
                de visite) — sans impact sur la planification. 1 h + 1 technicien suffit pour générer.</div>
              </div>
            `
          },

          {
            id: "contrat-affecter-parc-visite",
            title: "Affecter le parc à la visite",
            lead: "Étape obligatoire avant de générer la visite.",
            html: `
              <h2>Rattacher les articles à checker</h2>
              <p>Dans la gestion des visites, onglet <strong>parc installé</strong> → clic droit →
              <strong>affecter la totalité des articles à la visite</strong>. Les articles remonteront sur
              l'application du technicien (à vérifier sur site).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div><strong>Action obligatoire avant de générer la visite.</strong> Sans elle, les
                articles ne sont pas pris en compte et le rapport d'intervention est vide.</div>
              </div>
            `
          },

          {
            id: "contrat-generation-visites",
            title: "Générer les visites",
            lead: "Générer mois par mois ou sur l'année.",
            html: `
              <h2>Générer les bons de visite</h2>
              <p>Une fois le prévisionnel posé, on <strong>génère les visites</strong> pour les retrouver
              dans le module SAV et les planifier au technicien.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Deux stratégies : générer <strong>mois par mois</strong> (anticiper le mois suivant)
                ou <strong>toute l'année</strong> d'un coup — à choisir selon l'organisation interne.</div>
              </div>
            `
          },

          {
            id: "contrat-multi-activites",
            title: "Contrat multi-activités",
            lead: "Créer plusieurs installations pour un même contrat.",
            html: `
              <h2>Plusieurs installations</h2>
              <p>Type = <strong>multi-activités</strong>. Via le picto <strong>accès aux fiches
              techniques</strong>, la page blanche permet de créer chaque installation (extincteur, alarme
              incendie, bloc autonome…) avec la codification <em>n° client + numéro d'ordre</em>.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Ne passez pas par le champ unique « installation » (un seul champ) : utilisez le picto
                fiches techniques pour créer <strong>plusieurs</strong> installations, chacune avec son parc.</div>
              </div>
            `
          },

          {
            id: "contrat-associer-installations",
            title: "Associer les installations au contrat",
            lead: "Rattacher toutes les installations créées au contrat.",
            html: `
              <h2>Rattachement final</h2>
              <p>En multi-activités, après avoir créé les installations, cliquez sur le bouton latéral pour
              <strong>affecter le numéro du contrat</strong> à toutes les installations (elles passent
              « sous contrat »).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Sans cette étape, les installations restent <strong>hors contrat</strong>. Chaque
                activité aura ensuite son <strong>propre rapport d'intervention</strong> et son
                calendrier de visites.</div>
              </div>
            `
          },

          {
            id: "contrat-annee-application",
            title: "Année d'application des visites",
            lead: "Décaler le déclenchement d'une visite à l'année suivante.",
            html: `
              <h2>Anticiper une visite</h2>
              <p>Le champ <strong>année d'application</strong> permet de saisir une visite qui se déclenche
              l'<strong>année suivante</strong> (ex. 2027) plutôt que l'année en cours.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Laissé vide, WIPSOS prend l'<strong>année en cours</strong> — inutile de saisir 2026 si
                vous démarrez en 2026.</div>
              </div>
            `
          }

        ]
      },

      /* ===== Session 8 — Contrat 2/2 (mise en pratique) ===== */

      {
        name: "Créer un contrat pas à pas (2/2)",
        items: [

          {
            id: "contrat2-acceder-module",
            title: "Accéder au module Contrat",
            lead: "Contrat → Fiche, en double-clic.",
            html: `
              <h2>Ouvrir la gestion des contrats</h2>
              <p>Menu <em>Contrat → Gestion → Fiche</em> : un <strong>double-clic</strong> sur le
              sous-menu ouvre la table de recherche des contrats.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Basculez en <strong>mode contrat</strong> (en haut) puis cliquez la
                <strong>coche verte</strong> pour afficher l'ensemble des contrats de la base.</div>
              </div>
            `
          },

          {
            id: "contrat2-rechercher-client",
            title: "Rechercher le client",
            lead: "La petite coche « client » n'apparaît qu'en mode contrat.",
            html: `
              <h2>Sélectionner le client</h2>
              <p>Pour créer un contrat, il faut d'abord un <strong>client</strong>. La petite coche
              d'ouverture de la recherche client n'est disponible qu'en <strong>mode contrat</strong>
              (pas en mode table).</p>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Cliquer la coche à côté de « client » → recherche.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Raison sociale *</strong> + coche verte, ou choisir dans la liste.</div></div>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Chaque personne prend un <strong>client différent</strong> pour ne pas se marcher
                dessus (évite les doublons dans la base test).</div>
              </div>
            `
          },

          {
            id: "contrat2-type-activite",
            title: "Type & activité",
            lead: "Maintenance (ou autoliquidée) + l'activité concernée.",
            html: `
              <h2>Renseigner l'en-tête</h2>
              <p>Page blanche → <strong>type</strong> = « maintenance ». L'« autoliquidée » concerne la
              TVA (sous-traitance) — chez PSL ce sera toujours « maintenance ».</p>
              <p>À droite, choisir l'<strong>activité</strong> (ex. extincteur) pour un contrat mono-activité.</p>
            `
          },

          {
            id: "contrat2-codifier-installation",
            title: "Codifier une installation",
            lead: "Si la liste est vide : numéro du client + 1.",
            html: `
              <h2>Créer l'installation manuellement</h2>
              <p>Sous l'activité, la liste montre les installations existantes du client. Si elle est
              <strong>vide</strong>, l'installation n'existe pas dans WIPSOS → on la
              <strong>codifie</strong> : <em>numéro du client + 1</em> (puis + 2, + 3…).</p>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Taper le code, puis <strong>Tab</strong> (ou cliquer ailleurs).</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                Message « l'installation n'existe pas » → <strong>Créer l'installation</strong>.</div></div>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Si l'installation vient d'un devis accepté dans WIPSOS, elle est déjà dans la liste :
                il suffit de la <strong>sélectionner</strong> (pas de codification).</div>
              </div>
            `
          },

          {
            id: "contrat2-fiche-technique",
            title: "Ouvrir la fiche technique",
            lead: "Le picto puzzle donne accès à l'installation.",
            html: `
              <h2>La fiche technique</h2>
              <p>Après création, le <strong>picto fiche technique</strong> (petit puzzle) ouvre
              l'installation. En haut, le champ <strong>système</strong> = le titre de l'installation
              (à quoi elle correspond).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Toujours mettre un titre : sans lui, l'installation n'a pas de libellé (juste le code
                activité).</div>
              </div>
            `
          },

          {
            id: "contrat2-alimenter-parc",
            title: "Alimenter le parc matériel",
            lead: "Recherche d'article, ou code générique « artgen » en dépannage.",
            html: `
              <h2>Ajouter les articles</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Page blanche du parc → la ligne de recherche s'active en bas.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                Rechercher par <strong>désignation</strong> (ex. « extincteur ») + coche verte.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                Double-clic sur l'article, <strong>Tab</strong>, quantité, enregistrer (disquette).</div></div>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Astuce base test : taper <strong>artgen</strong> (article générique) puis Tab, et
                renommer la désignation. À n'utiliser que pour dépanner — en réel, prendre le vrai article.</div>
              </div>
            `
          },

          {
            id: "contrat2-enregistrer-sortir",
            title: "Enregistrer & sortir proprement",
            lead: "Disquette pour sauvegarder, flèche bleue pour quitter (jamais la croix).",
            html: `
              <h2>Bonnes habitudes</h2>
              <ul>
                <li><strong>Disquette</strong> (haut gauche) = sauvegarder.</li>
                <li><strong>Flèches bleues</strong> = quitter un écran.</li>
              </ul>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Ne pas quitter avec la <strong>croix</strong> : le travail non enregistré risque de ne
                pas être sauvegardé. Prendre l'habitude d'enregistrer au fur et à mesure.</div>
              </div>
            `
          },

          {
            id: "contrat2-texte-facture",
            title: "Texte de facture & bloc-notes",
            lead: "3 lignes de texte + un descriptif imprimable ; note interne séparée.",
            html: `
              <h2>Textes du contrat</h2>
              <p>Le <strong>texte de facture</strong> (3 lignes) apparaît sur la facture. Un
              <strong>descriptif</strong> plus long peut être imprimé en plus si besoin.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Le <strong>bloc-notes</strong> (fond bleu) est <strong>interne</strong> : on y accède
                via son picto, il ne sort pas sur les documents client. Le fond bleu bloque la saisie
                directe (anti-fausse manip).</div>
              </div>
            `
          },

          {
            id: "contrat2-facture-visite",
            title: "Cocher « facturé à la visite »",
            lead: "L'étape qu'on oublie facilement.",
            html: `
              <h2>Ne pas oublier</h2>
              <p>Dans <strong>Généralités</strong>, onglet <strong>facturation à la visite</strong> :
              cocher <strong>« contrat facturé à la visite »</strong>. C'est ce qui distingue un contrat
              « à la visite » d'un contrat « abonnement ».</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Si on va vite, on l'oublie — et le contrat serait traité comme un abonnement.</div>
              </div>
            `
          },

          {
            id: "contrat2-onglet-facturation",
            title: "Onglet facturation (à la visite)",
            lead: "Formule obligatoire, périodicité, montant laissé à 0.",
            html: `
              <h2>Champs à la visite</h2>
              <p>La <strong>formule</strong> (en gras) est obligatoire → « sans augmentation ».
              <strong>Périodicité</strong> = annuel. Pas besoin de dates de début / prochaine
              facturation, et le <strong>montant reste à 0</strong>.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Le chiffrage se fera au retour de visite (SAV), selon le réel posé par le technicien.</div>
              </div>
            `
          }

        ]
      },

      {
        name: "Facturation, abonnement & visites (2/2)",
        items: [

          {
            id: "contrat2-visite-vs-abonnement",
            title: "À la visite vs abonnement",
            lead: "Deux circuits de facturation différents.",
            html: `
              <h2>La différence clé</h2>
              <table>
                <tr><th>Type</th><th>Facturation</th></tr>
                <tr><td><strong>À la visite</strong></td><td>On génère un <strong>bon de visite</strong> à
                planifier ; facturé au retour SAV (réel).</td></tr>
                <tr><td><strong>Abonnement</strong></td><td>Facturation lancée depuis le <strong>module
                contrat</strong> (montant récurrent).</td></tr>
              </table>
            `
          },

          {
            id: "contrat2-devis-commercial",
            title: "Contrat ≠ devis commercial",
            lead: "Le montant vendu au client vit dans le module Commercial.",
            html: `
              <h2>Deux choses distinctes</h2>
              <p>Le contrat de maintenance créé ici est un <strong>contrat de support</strong> (il génère
              les visites et permet la facturation au réel). Le <strong>montant vendu</strong> au client
              (devis de contrat accepté) se trouve dans le <strong>module Commercial</strong>
              (portefeuille des commandes).</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Un chiffrage commercial peut viser une <strong>installation</strong> ou un
                <strong>contrat de maintenance</strong> — c'est là qu'on retrouve les montants acceptés.</div>
              </div>
            `
          },

          {
            id: "contrat2-phase-acceptation",
            title: "Où on se situe : l'acceptation",
            lead: "On enregistre un contrat déjà négocié et accepté.",
            html: `
              <h2>Phase du process</h2>
              <p>La négociation/proposition est déjà faite : ici on est en phase
              <strong>acceptation</strong>. On crée le contrat + le <strong>parc</strong>, ce qui
              alimentera tout le reste (visites, bons SAV, facturation réelle) de façon automatisée.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>C'est l'équivalent, côté maintenance, de l'ADV / acceptation : on saisit le détail
                matériel une fois pour que tout s'enchaîne ensuite.</div>
              </div>
            `
          },

          {
            id: "contrat2-calendrier-visites",
            title: "Calendrier des visites",
            lead: "Bloc-notes → clic droit → gestion des visites.",
            html: `
              <h2>Ouvrir le prévisionnel</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Cliquer le <strong>bloc-notes</strong> (liste des visites d'entretien).</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                <strong>Clic droit</strong> sur la ligne de l'installation → <strong>gestion des visites</strong>.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                Page blanche → code visite (annuelle) + mois → enregistrer.</div></div>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Deux clics à ne pas confondre : un clic ouvre la fenêtre, le clic droit accède à la
                gestion. On ne clique pas directement sur les mois (encadré bleu).</div>
              </div>
            `
          },

          {
            id: "contrat2-multi-activites",
            title: "Contrat multi-activités",
            lead: "Type = multi-activités, puis créer chaque installation.",
            html: `
              <h2>Plusieurs installations</h2>
              <p>Activité = <strong>multi-activités</strong>. On passe par le <strong>picto fiche
              technique</strong> et la page blanche pour créer chaque installation (extincteur, bloc
              autonome, désenfumage…) avec la codification <em>n° client + numéro d'ordre</em>.</p>
            `
          },

          {
            id: "contrat2-associer-installations",
            title: "Associer les installations au contrat",
            lead: "Le bouton d'affectation du numéro de contrat.",
            html: `
              <h2>Rattacher</h2>
              <p>Les installations créées sont d'abord <strong>hors contrat</strong>. On utilise le bouton
              latéral <strong>« affectation du numéro de contrat »</strong> → <strong>tout affecter</strong>,
              puis on alimente le parc de chacune.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Sans cette affectation, les installations restent hors contrat et ne remonteront pas
                dans le prévisionnel de visites.</div>
              </div>
            `
          },

          {
            id: "contrat2-abonnement",
            title: "Contrat type abonnement",
            lead: "Ne pas cocher « à la visite » ; saisir un montant.",
            html: `
              <h2>Créer un abonnement</h2>
              <p>Pour un forfait récurrent (grands comptes, marchés) : <strong>ne pas cocher</strong>
              « facturé à la visite ». Dans <strong>facturation</strong>, saisir le
              <strong>montant HT annuel</strong>, la <strong>périodicité</strong> (annuel, trimestriel,
              mensuel) et les dates.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div><strong>Début / prochaine facturation</strong> : à échoir = même date (facturé en
                début de période) ; échu = période suivante. « Prochaine facturation » = la
                <strong>première</strong> facture dans WIPSOS.</div>
              </div>
            `
          },

          {
            id: "contrat2-abonnement-montant",
            title: "Montant de base / actuel & augmentation",
            lead: "Saisir le même montant dans les deux zones la 1ʳᵉ fois.",
            html: `
              <h2>Les deux montants</h2>
              <p>Saisir le <strong>montant de base</strong> et le <strong>montant actuel</strong>
              (identiques au départ, ex. 1000 € HT/an). Le montant de base reste figé ; le montant actuel
              évoluera avec la <strong>formule d'augmentation</strong>.</p>
              <table>
                <tr><th>Choix</th><th>Effet</th></tr>
                <tr><td>Non augmentable la 1ʳᵉ fois</td><td>1ʳᵉ facture au montant saisi, puis augmentation.</td></tr>
                <tr><td>Augmentable dès la 1ʳᵉ</td><td>Indice appliqué dès la première facture.</td></tr>
                <tr><td>Jamais augmentable</td><td>Montant figé.</td></tr>
              </table>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Pour les augmentations automatiques, penser à tenir à jour les <strong>indices</strong>
                dans le paramétrage WIPSOS.</div>
              </div>
            `
          },

          {
            id: "contrat2-client-payeur",
            title: "Client payeur & structure des sites",
            lead: "Chaque site = un client = un contrat (logique Dash).",
            html: `
              <h2>Comprendre la macro</h2>
              <p>Dans WIPSOS, chaque <strong>site</strong> est un <strong>client</strong> et porte son
              propre <strong>contrat</strong> — comme le Dash. Un grand compte (ex. Engie) est renseigné
              en <strong>client payeur</strong> au-dessus.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Un compte avec 50 sites/rapports = <strong>50 contrats</strong> (au sens Dash, pas au
                sens commercial), avec leur parc matériel rattaché. Ils ont été importés depuis le Dash.</div>
              </div>
            `
          },

          {
            id: "contrat2-changer-payeur",
            title: "Changer le payeur / dupliquer",
            lead: "Le client payeur est modifiable à tout moment.",
            html: `
              <h2>Souplesse</h2>
              <p>Si un site change de donneur d'ordre (ex. passe de Spie à Engie), on
              <strong>change le client payeur</strong> dans l'administratif — pas besoin de tout recréer.
              On peut aussi <strong>dupliquer</strong> un contrat.</p>
            `
          },

          {
            id: "contrat2-pas-blocage",
            title: "Pas de blocage : suivre le process",
            lead: "WIPSOS ne bloque pas les oublis d'étapes non obligatoires.",
            html: `
              <h2>Attention aux oublis</h2>
              <p>WIPSOS est un outil large (multi-secteurs) : il ne met pas de blocage partout. On peut
              créer un contrat <strong>sans date de visite</strong> sans alerte.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Conséquence : si le prévisionnel n'est pas saisi, la visite ne remonte pas et n'est
                pas planifiée. D'où l'importance de <strong>suivre le process interne</strong> étape par
                étape (à mettre sur papier).</div>
              </div>
            `
          },

          {
            id: "contrat2-heures-previsionnelles",
            title: "Heures prévisionnelles = saisie manuelle",
            lead: "Le temps de visite se saisit à la main (pas de calcul auto natif).",
            html: `
              <h2>Temps de visite</h2>
              <p>Dans la gestion des visites, le nombre d'heures / techniciens est
              <strong>prévisionnel</strong> et se saisit <strong>manuellement</strong> (par défaut 1 h,
              1 technicien) — sans impact sur la planification.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Un calcul automatique du temps (ex. 15 min × nombre d'extincteurs) a été demandé —
                point <strong>à vérifier</strong> côté paramétrage / SAV.</div>
              </div>
            `
          },

          {
            id: "contrat2-lien-sav",
            title: "Lien avec le module SAV",
            lead: "La visite prévisionnelle devient un bon SAV à planifier.",
            html: `
              <h2>La suite</h2>
              <p>Le prévisionnel permet de <strong>générer les visites</strong> dans le module
              <strong>SAV</strong> : chaque visite devient un <strong>bon</strong> à planifier au
              technicien, puis facturé au réel au retour.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Le SAV couvre aussi le <strong>curatif</strong> (dépannages) et les
                <strong>devis correctifs</strong> — vu dans la formation SAV.</div>
              </div>
            `
          }

        ]
      }

    ]
  },

  /* ==============================================================
     CATÉGORIE — SAV (Session 9 — SAV 1/2)
     ============================================================== */
  {
    category: "SAV (dépannages & visites)",
    icon: "🛠️",
    groups: [

      {
        name: "Dépannages : création & planification",
        items: [

          {
            id: "sav-module-apercu",
            title: "Le module SAV (aperçu)",
            lead: "Dépannages, planification, devis de réparation et visites.",
            html: `
              <h2>Ce que couvre le SAV</h2>
              <ul>
                <li><strong>Créations de dépannage</strong> et leur planification ;</li>
                <li><strong>Devis de SAV</strong> (réparation) ;</li>
                <li><strong>Génération des visites</strong> de maintenance (issues des contrats).</li>
              </ul>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Les <strong>retours</strong> de bons (facturation) et l'historique sont traités dans
                la formation SAV 2/2.</div>
              </div>
            `
          },

          {
            id: "sav-appels-depannage",
            title: "Appels = dépannages (pas les visites)",
            lead: "Ne jamais mélanger un bon de dépannage et une visite.",
            html: `
              <h2>Le menu « Appels »</h2>
              <p>On passe par <em>SAV → Appels</em> (double-clic) pour créer un <strong>bon de
              dépannage</strong>, qu'il vienne d'un appel téléphonique ou d'un mail.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Les <strong>visites</strong> ne se créent pas par les appels : elles se
                <strong>génèrent</strong> depuis les contrats. Créer un bon SAV pour faire une visite
                ne fonctionnera pas.</div>
              </div>
            `
          },

          {
            id: "sav-alertes",
            title: "Alertes personnalisables",
            lead: "Chaque utilisateur coche les alertes qui l'intéressent.",
            html: `
              <h2>Onglet alertes</h2>
              <p>À la création d'un bon, WIPSOS affiche les <strong>alertes</strong> du client (à
              paramétrer par utilisateur) : interventions non traitées en cours, solde comptable, etc.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Cochez les alertes voulues puis ressortez pour les activer. Utile pour repérer
                qu'un client a déjà une intervention en cours.</div>
              </div>
            `
          },

          {
            id: "sav-creer-bon-gravite",
            title: "Créer un bon (installation & gravité)",
            lead: "Double-clic sur l'installation concernée, puis majeur / mineur.",
            html: `
              <h2>Lancer le dépannage</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Rechercher le client → ses installations (sous contrat) s'affichent.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                Double-clic sur l'installation concernée (ex. extincteur).</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                Choisir la <strong>gravité</strong> (majeur / mineur) → on arrive sur le bon.</div></div>
            `
          },

          {
            id: "sav-contact",
            title: "Le contact appelant",
            lead: "Créer / sélectionner le contact, habilitation appel SAV.",
            html: `
              <h2>Qui a appelé ?</h2>
              <p>On sélectionne le contact ou on le <strong>crée</strong> (page blanche) : fonction,
              téléphone, mail. Cocher <strong>« habilitation appel SAV »</strong> pour qu'il remonte sur
              l'application du technicien.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Ne pas écraser un contact existant en tapant par-dessus : cela ne crée pas de
                contact. Créez-le proprement avec la page blanche, puis sélectionnez-le.</div>
              </div>
            `
          },

          {
            id: "sav-motif",
            title: "Motif de l'intervention",
            lead: "Attention : le motif finira sur un PDF non modifiable.",
            html: `
              <h2>Décrire la demande</h2>
              <p>Le <strong>motif</strong> se saisit à la main (ou copier-coller depuis un mail). Il
              servira au technicien et apparaîtra sur le <strong>rapport d'intervention</strong>.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Le rapport devient un <strong>PDF non modifiable</strong> — faites attention à ce que
                vous écrivez.</div>
              </div>
            `
          },

          {
            id: "sav-code-provenance",
            title: "Code provenance (mail / appel)",
            lead: "À rendre obligatoire pour un bon pilotage.",
            html: `
              <h2>D'où vient la demande ?</h2>
              <p>Le <strong>code provenance</strong> (appel, mail…) alimente des états de pilotage (ratio
              d'appels vs mails).</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Conseil : laisser le champ <strong>vide et obligatoire</strong> plutôt qu'une valeur
                par défaut — sinon on oublie de la changer.</div>
              </div>
            `
          },

          {
            id: "sav-documents",
            title: "Documents électroniques",
            lead: "Sous-dossiers « mail client » et « BC facturation ».",
            html: `
              <h2>Centraliser les pièces</h2>
              <p>Dans les documents du bon, glisser le <strong>mail de demande</strong> et le
              <strong>bon de commande</strong>. La personne qui facture retrouve ainsi le n° d'ordre de
              service / BC.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Sous-dossiers conseillés : <strong>« Mail demande d'intervention »</strong> et
                <strong>« Bon de commande facturation »</strong>.</div>
              </div>
            `
          },

          {
            id: "sav-note-technicien",
            title: "Note pour le technicien",
            lead: "Via le picto note, rattachée au bon (avec suivi).",
            html: `
              <h2>Deux systèmes de notes</h2>
              <p>Une note peut être saisie sur le <strong>bon</strong> (picto note) ou sur la
              <strong>planification</strong>. Les deux remontent sur l'application du technicien.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Préférez la note du <strong>bon</strong> : elle est horodatée et suivie ; le
                technicien peut aussi y répondre. Les notes sont <strong>internes</strong> (le client ne
                les voit pas).</div>
              </div>
            `
          },

          {
            id: "sav-intervention-societe",
            title: "Retrouver un bon (intervention société)",
            lead: "Filtrer par état : non traités, en cours, à suivre, terminés…",
            html: `
              <h2>Rechercher / suivre</h2>
              <p><em>SAV → Intervention société</em> permet de filtrer les bons par <strong>état</strong>
              (non traités, en cours, à suivre, terminés, visites, devis), par date d'appel, et de ne
              prendre que les <strong>bons affectés</strong> à un technicien.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Deux points d'entrée pour retrouver un bon : <strong>intervention société</strong> ou
                le <strong>planning</strong> (clic droit → ouvrir le bon).</div>
              </div>
            `
          },

          {
            id: "sav-planning-parametrage",
            title: "Paramétrer le planning",
            lead: "Bornage horaire, techniciens, filtre — à faire une fois par profil.",
            html: `
              <h2>Première utilisation</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <em>Fichier → Paramétrage</em> : bornage de la journée (ex. 8 h – 18 h), semaine 5/7 jours.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                Picto <strong>techniciens</strong> : basculer à droite ceux avec qui on travaille.</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                Picto <strong>filtre</strong> : valider l'ordre d'affichage (obligatoire pour prise en compte).</div></div>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Sans ce paramétrage, le planning reste <strong>gris</strong>. C'est à faire par profil.</div>
              </div>
            `
          },

          {
            id: "sav-heure-affectee-debut",
            title: "Heure affectée vs heure de début",
            lead: "La distinction qui pilote l'état « non traité » / « en cours ».",
            html: `
              <h2>Deux notions à ne pas confondre</h2>
              <table>
                <tr><th>Cas</th><th>État du bon</th></tr>
                <tr><td>Heure affectée ≠ heure de début</td><td><strong>Non traité</strong> : c'est le
                technicien qui, en démarrant l'intervention, met le planning à jour.</td></tr>
                <tr><td>Heure affectée = heure de début</td><td><strong>En cours</strong> dès la
                validation.</td></tr>
              </table>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Vous saisissez l'heure d'affectation + la durée. Le passage « en cours » et l'heure
                réelle viennent de la synchro du technicien (« je commence l'intervention »).</div>
              </div>
            `
          },

          {
            id: "sav-planning-web",
            title: "Planning web & astreinte",
            lead: "Le technicien voit son planning ; il peut créer une astreinte.",
            html: `
              <h2>Côté technicien</h2>
              <p>Le <strong>planning web</strong> (depuis l'application) montre au technicien ses
              interventions <strong>déjà planifiées</strong>. Il ne voit pas les bons non traités des
              autres.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Pour une urgence, c'est le bureau qui <strong>ajoute le bon</strong> à la journée du
                technicien. Le module <strong>astreinte</strong> permet au technicien de créer lui-même une
                intervention quand il est prévenu directement.</div>
              </div>
            `
          }

        ]
      },

      {
        name: "Terminer, devis SAV & visites",
        items: [

          {
            id: "sav-terminer-bon",
            title: "Terminer un bon (≠ clôture)",
            lead: "Terminer = intervention faite ; la clôture, c'est la facturation.",
            html: `
              <h2>Terminer</h2>
              <p>Le technicien termine le bon depuis l'application ; on peut aussi le faire manuellement
              (clic droit → clôture) : dates début/fin, compte-rendu. Le bon passe en
              <strong>terminé</strong> (vert) sur le planning.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>« Terminer » ≠ « clôturer » : la <strong>clôture</strong> se fait à la
                <strong>facturation</strong> (le bon part alors en historique — vu en SAV 2/2).</div>
              </div>
            `
          },

          {
            id: "sav-terminer-suivre",
            title: "Terminé ou à suivre",
            lead: "« À suivre » quand l'intervention n'est pas finie.",
            html: `
              <h2>Le choix à la fin</h2>
              <table>
                <tr><th>Choix</th><th>Quand</th></tr>
                <tr><td><strong>Terminé</strong></td><td>Intervention finie → facturable.</td></tr>
                <tr><td><strong>À suivre</strong></td><td>Manque de matériel, retour nécessaire, devis à
                faire → facturation à la fin.</td></tr>
              </table>
            `
          },

          {
            id: "sav-premiere-intervention",
            title: "Première intervention facturable",
            lead: "Chez PSL : le dépannage est facturé à chaque intervention.",
            html: `
              <h2>Règle retenue</h2>
              <p>La <strong>première intervention</strong> est toujours mise en <strong>terminé</strong>
              (donc facturable). S'il faut réparer ensuite, on crée un <strong>nouveau bon</strong> via les
              appels et on le transforme en <strong>devis de SAV</strong>.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Un bon « à suivre » ne peut pas être facturé : il faut qu'il soit terminé.</div>
              </div>
            `
          },

          {
            id: "sav-mails-auto",
            title: "Mails automatiques selon l'état",
            lead: "Accusé de réception, terminé… paramétrables.",
            html: `
              <h2>Avertir le client</h2>
              <p>À chaque étape (création, à suivre, terminé), WIPSOS peut <strong>envoyer un mail</strong>
              au client. La fenêtre s'ouvre : on choisit d'envoyer (picto enveloppe @) ou de continuer sans
              mail.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Les modèles de mail se paramètrent (à voir avec Noa). On peut même rendre l'envoi
                quasi obligatoire en masquant le bouton « quitter sans envoyer ».</div>
              </div>
            `
          },

          {
            id: "sav-suivi-numero",
            title: "Suivre un bon par numéro",
            lead: "Le numéro d'intervention permet de retrouver le bon à tout moment.",
            html: `
              <h2>Numéro d'intervention</h2>
              <p>L'accusé de réception envoie un <strong>numéro de bon</strong>. Le client rappelle avec ce
              numéro → <em>Intervention société</em> → champ numéro → on ouvre le bon et on voit son état.</p>
            `
          },

          {
            id: "sav-devis-transformer",
            title: "Transformer une intervention en devis SAV",
            lead: "Le picto « stylo » apparaît une fois le bon enregistré.",
            html: `
              <h2>Créer un devis de réparation</h2>
              <p>On crée un nouveau bon (appels), on l'enregistre, puis on l'ouvre : le picto
              <strong>« transformer l'intervention en devis de SAV »</strong> apparaît.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Un paramètre propose alors <strong>deux versions</strong> : devis SAV
                <strong>simplifié</strong> ou devis <strong>commercial</strong>.</div>
              </div>
            `
          },

          {
            id: "sav-devis-simplifie",
            title: "Devis SAV simplifié",
            lead: "Recherche d'articles + caddie ; un seul modèle de PDF.",
            html: `
              <h2>Version simplifiée</h2>
              <p>Onglet articles → clic droit gestion → rechercher les articles (extincteur, main d'œuvre,
              déplacement…). Le <strong>caddie</strong> permet d'accumuler plusieurs articles avant de les
              générer.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Un <strong>seul modèle</strong> de PDF (pas de choix de mise en page). Envoi possible
                par mail au client directement depuis l'écran.</div>
              </div>
            `
          },

          {
            id: "sav-devis-commercial",
            title: "Devis SAV version commerciale",
            lead: "Même ergonomie que les devis d'installation.",
            html: `
              <h2>Version commerciale</h2>
              <p>Reprend l'écran des <strong>devis commerciaux</strong> : paragraphes, sous-totaux, choix
              de <strong>modèle</strong> (bibliothèque), facture globale ou détaillée. Type = correctif
              (SAV), pas chantier.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Plus de main sur la présentation. Conseil : choisir <strong>une seule</strong> façon de
                faire pour toute l'entreprise (éviter d'envoyer 2 présentations différentes au même client).</div>
              </div>
            `
          },

          {
            id: "sav-devis-acceptation",
            title: "Acceptation d'un devis SAV",
            lead: "Le devis accepté redevient un bon à planifier (pas de chantier).",
            html: `
              <h2>À l'acceptation</h2>
              <p>On saisit la <strong>date d'acceptation</strong> (impression / mail / sans envoi). Le devis
              de SAV <strong>ne crée pas de chantier</strong> : il se <strong>retransforme en bon SAV</strong>
              à planifier.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Un bouton permet de revoir le <strong>devis d'origine</strong> avec les articles
                validés par le client, puis de revenir au bon pour imputer et planifier.</div>
              </div>
            `
          },

          {
            id: "sav-devis-reappro",
            title: "Acceptation & réapprovisionnement",
            lead: "Pas de demande d'achat directe : tout passe par le réappro.",
            html: `
              <h2>Approvisionnement</h2>
              <p>À l'acceptation, un paramètre peut lancer une demande d'achat. Chez PSL, on le
              <strong>désactive</strong> : les besoins remontent dans le <strong>module réappro</strong>
              (cumul de quantités par client), comme pour les chantiers.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Un <strong>bon de préparation</strong> peut être édité pour le magasinier (sortir
                l'article du dépôt si en stock).</div>
              </div>
            `
          },

          {
            id: "sav-generation-visites",
            title: "Générer les visites de maintenance",
            lead: "Les visites prévisionnelles des contrats doivent être générées.",
            html: `
              <h2>De la prévision au bon</h2>
              <p>Les visites définies sur les contrats sont <strong>prévisionnelles</strong> : il faut les
              <strong>générer</strong> pour les retrouver dans le SAV et pouvoir les planifier
              (<em>Visites d'entretien → Gestion</em>).</p>
            `
          },

          {
            id: "sav-generation-filtres",
            title: "Filtrer la génération",
            lead: "Par date/mois, par activité, par contrat ou par client.",
            html: `
              <h2>Cibler la génération</h2>
              <p>La génération se travaille <strong>par date</strong> (mois + année). On peut filtrer par
              <strong>activité</strong>, par <strong>numéro de contrat</strong> ou par <strong>client</strong>
              (ex. générer les visites d'un contrat créé après coup) → <em>Générer la liste préparatoire</em>.</p>
            `
          },

          {
            id: "sav-creation-bons-visite",
            title: "Créer les bons de visite",
            lead: "Sélectionner les lignes → un numéro de bon par ligne.",
            html: `
              <h2>Liste préparatoire → bons</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Cocher les visites (ou clic droit → sélectionner tout).</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                Clic droit → <strong>création du bon</strong> → un n° de bon SAV par ligne.</div></div>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>La génération se <strong>cumule</strong> : si plusieurs personnes génèrent en même
                temps, on se marche dessus. Une <strong>seule personne</strong> doit générer (souvent en
                décembre pour l'année suivante).</div>
              </div>
            `
          },

          {
            id: "sav-planif-volee",
            title: "Planification à la volée (puits)",
            lead: "Pour certains clients : un « puits » de bons par technicien.",
            html: `
              <h2>Le puits</h2>
              <p>En mode table, clic droit → <strong>planification à la volée</strong> : on affecte un lot de
              bons à <strong>un technicien</strong> sur une date. Le technicien pioche ensuite dans ce
              <strong>puits</strong> et choisit par quel client commencer (immeubles, syndics, tournées…).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>À surveiller : un bon oublié dans le puits peut y rester des années. Le puits demande
                une gestion rigoureuse.</div>
              </div>
            `
          },

          {
            id: "sav-planif-manuelle",
            title: "Planifier les visites (manuel)",
            lead: "Les visites se génèrent auto, mais se planifient à la main.",
            html: `
              <h2>Planification manuelle</h2>
              <p>Depuis <em>Intervention société</em> (visites uniquement, non traitées), on ouvre chaque
              bon et on planifie via le planning. On peut filtrer par <strong>département</strong>,
              <strong>code postal</strong> ou <strong>ville</strong> pour aider à organiser les tournées.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Idée reçue à corriger : les visites se <strong>génèrent</strong> automatiquement mais la
                <strong>planification reste manuelle</strong> (sauf puits à la volée).</div>
              </div>
            `
          },

          {
            id: "sav-distribution-multiple",
            title: "Distribution multiple (grosses visites)",
            lead: "Répartir automatiquement un gros volume d'heures.",
            html: `
              <h2>Éclater les heures</h2>
              <p>Pour une visite à fort volume (ex. 39 h), clic droit → <strong>distribution multiple</strong>
              → choisir la période / le bornage → WIPSOS répartit et décompte les heures sur plusieurs jours.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Pour un bon de 4–5 h, inutile : on planifie directement (heure d'affectation + durée).</div>
              </div>
            `
          },

          {
            id: "sav-controle-puits",
            title: "Contrôler le puits",
            lead: "Le picto « puits » sur le planning signale les bons non traités.",
            html: `
              <h2>Suivi</h2>
              <p>Sur le planning, un picto <strong>puits des planifications</strong> montre les bons encore
              en attente. Les bons traités par le technicien en <strong>disparaissent</strong> automatiquement
              (ils passent en terminé / à suivre, avec un code couleur).</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Contrôle indispensable : s'il reste des bons dans le puits, c'est qu'ils n'ont jamais
                été traités.</div>
              </div>
            `
          }

        ]
      },

      /* ===== Session 10 — SAV 2/2 (mise en pratique) ===== */

      {
        name: "Cycle complet : contrat → visite (2/2)",
        items: [

          {
            id: "sav2-cycle-complet",
            title: "Le cycle complet",
            lead: "Contrat → génération de la visite → planification → SAV.",
            html: `
              <h2>Un cas pratique de bout en bout</h2>
              <p>Cette session déroule tout le cycle : créer le <strong>contrat de maintenance</strong>
              avec son prévisionnel, <strong>générer</strong> la visite, la <strong>planifier</strong>, puis
              la traiter dans le <strong>module SAV</strong>.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Contrat et SAV sont liés : la visite prévisionnelle du contrat bascule dans le SAV une
                fois générée. Votre travail s'arrête à la <strong>planification</strong> ; le technicien
                prend le relais sur l'application.</div>
              </div>
            `
          },

          {
            id: "sav2-creer-contrat",
            title: "Créer le contrat (rappel)",
            lead: "Mode contrat → rechercher le client → page blanche.",
            html: `
              <h2>Point de départ</h2>
              <p><em>Contrat → Fiche</em> (double-clic), <strong>mode contrat</strong>, coche du client pour
              la recherche (étoile + raison sociale), double-clic pour rattacher, puis <strong>page
              blanche</strong> pour créer le contrat.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Toujours sur un <strong>client site</strong> (sauf si le payeur a lui-même un site à
                gérer).</div>
              </div>
            `
          },

          {
            id: "sav2-type-activite",
            title: "Type & activité",
            lead: "Maintenance + activité ; en cascade du haut vers le bas.",
            html: `
              <h2>Renseigner l'en-tête</h2>
              <p>Type = <strong>maintenance</strong>, puis rattacher l'<strong>activité</strong> (ex.
              extincteur). On remplit « en cascade » : Généralités puis Facturation.</p>
            `
          },

          {
            id: "sav2-codifier",
            title: "Codifier l'installation",
            lead: "Numéro du client + numéro d'ordre de l'installation.",
            html: `
              <h2>Installation existante ou codifiée</h2>
              <p>Si l'installation existe (devis accepté), on la sélectionne. Sinon (reprise), on
              <strong>codifie</strong> : <em>n° client + numéro d'ordre</em> (ex. 4ᵉ installation → « …4 »).
              Tab → « installation n'existe pas » → <strong>créer l'installation</strong> → fiche technique
              (champ <strong>système</strong> = titre).</p>
            `
          },

          {
            id: "sav2-parc-materiel",
            title: "Alimenter le parc matériel",
            lead: "Page blanche → article → date de mise en service → quantité.",
            html: `
              <h2>Le parc sous contrat</h2>
              <p>Page blanche du parc → recherche article (désignation) → Tab → date de mise en service +
              <strong>quantité sous contrat</strong> → disquette.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Pensez à <strong>enregistrer</strong> : sans cela l'article disparaît (erreur vue en
                séance).</div>
              </div>
            `
          },

          {
            id: "sav2-facture-visite",
            title: "Cocher « facturé à la visite »",
            lead: "Sinon le contrat est traité comme un abonnement.",
            html: `
              <h2>Onglet facturation à la visite</h2>
              <p>Cocher <strong>« contrat facturé à la visite »</strong>. Sans cette case, WIPSOS considère
              le contrat comme un <strong>abonnement</strong> → incidence directe sur la facturation.</p>
            `
          },

          {
            id: "sav2-onglet-facturation",
            title: "Onglet facturation",
            lead: "Formule obligatoire + périodicité annuelle ; montant vide.",
            html: `
              <h2>Champs à la visite</h2>
              <p><strong>Formule</strong> (en gras, obligatoire) = sans augmentation ;
              <strong>périodicité</strong> = annuel. Pas de début/prochaine facturation (réservé à
              l'abonnement), <strong>montant vide</strong> (facturation au réel via SAV).</p>
            `
          },

          {
            id: "sav2-previsionnel-visite",
            title: "Prévisionnel de visite",
            lead: "Bloc-notes → clic droit → gestion des visites → code visite + mois.",
            html: `
              <h2>Programmer les visites</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                Bloc-notes (visites d'entretien) → clic droit sur l'installation → gestion des visites.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                Page blanche → <strong>code visite</strong> (annuelle) + <strong>mois</strong> (ex. juillet).</div></div>
              <div class="step"><div class="step-num">3</div><div class="step-body">
                1 h + 1 technicien par défaut (prévisionnel) → disquette.</div></div>
            `
          },

          {
            id: "sav2-affecter-parc-visite",
            title: "Affecter le parc à la visite",
            lead: "Onglet « parc installé » → clic droit → affecter à la visite.",
            html: `
              <h2>Étape à ne pas oublier</h2>
              <p>Dans la gestion des visites, onglet <strong>parc installé</strong> → clic droit →
              <strong>affecter la totalité des articles à la visite</strong>. Un <strong>stylo</strong>
              confirme que les articles sont tagués.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>À faire <strong>avant de générer</strong>. Sinon le technicien ne verra pas les articles
                à contrôler, et il faudra supprimer le bon puis régénérer.</div>
              </div>
            `
          },

          {
            id: "sav2-generer-visite",
            title: "Générer la visite (ciblée)",
            lead: "Visites d'entretien → gestion → cibler par contrat.",
            html: `
              <h2>Générer pour un contrat précis</h2>
              <p><em>Visite d'entretien → Gestion</em> : travailler <strong>par mois/année</strong>. Pour un
              contrat créé au fil de l'eau, <strong>cibler le numéro de contrat</strong> (ou le client) avant
              <em>Générer la liste préparatoire</em> — sinon toutes les visites du mois s'affichent.</p>
            `
          },

          {
            id: "sav2-appels-vs-visites",
            title: "Appels = dépannage seulement",
            lead: "Interdit de créer une visite via les appels.",
            html: `
              <h2>Rappel important</h2>
              <p>Le module <strong>Appels</strong> sert uniquement aux <strong>dépannages</strong>. Les
              <strong>visites se génèrent</strong> (elles ne se créent pas en bon via les appels).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Créer un bon d'appel « pour faire une visite » casse le lien au contrat → pas de
                <strong>rentabilité</strong> calculée. À proscrire.</div>
              </div>
            `
          },

          {
            id: "sav2-creation-bon",
            title: "Créer les bons de visite",
            lead: "Sélectionner les lignes → création du bon (un n° par ligne).",
            html: `
              <h2>Liste préparatoire → bons</h2>
              <p>Cocher (ou clic droit → sélectionner tout) → clic droit → <strong>création du bon</strong> :
              chaque ligne reçoit un <strong>numéro de bon SAV</strong>. La visite disparaît alors de la
              liste préparatoire (contrôle : plus rien ne doit y rester).</p>
            `
          }

        ]
      },

      {
        name: "Planifier, devis SAV & imputation (2/2)",
        items: [

          {
            id: "sav2-retrouver-bon",
            title: "Retrouver le bon généré",
            lead: "SAV → Intervention société → n° ou filtres.",
            html: `
              <h2>Recherche</h2>
              <p><em>SAV → Intervention société</em> : taper le <strong>numéro d'intervention</strong> pour
              ouvrir le bon directement, ou filtrer (visites uniquement, non traitées, noms affectés, date de
              création).</p>
            `
          },

          {
            id: "sav2-planifier-visite",
            title: "Planifier la visite",
            lead: "Ouvrir le bon → planning → clic droit → ajouter planification.",
            html: `
              <h2>Poser l'intervention</h2>
              <p>Double-clic sur le bon → l'onglet <strong>visite</strong> rappelle l'heure/technicien
              prévisionnels (repère). Picto <strong>planning</strong> → se positionner sur le technicien →
              clic droit → <strong>ajouter la planification</strong> (durée modifiable, matin/journée).</p>
            `
          },

          {
            id: "sav2-alerte-autres-visites",
            title: "Alerte « autres visites »",
            lead: "WIPSOS signale les autres visites du même client.",
            html: `
              <h2>Éviter les allers-retours</h2>
              <p>À la planification, une alerte prévient qu'il existe <strong>d'autres visites (ou
              dépannages) non planifiés</strong> pour ce client — pratique pour regrouper les passages.</p>
            `
          },

          {
            id: "sav2-planning-avance",
            title: "Planning avancé",
            lead: "Basculer de l'ancien planning vers le planning avancé.",
            html: `
              <h2>La bonne version du planning</h2>
              <p>Il existe deux plannings : l'ancien (obsolète) et le <strong>planning avancé</strong>
              (nouveau, à utiliser). Paramétrage : <em>Fichier → Paramétrage</em> (bornage horaire), picto
              techniciens, picto filtre (valider), puis redémarrer WIPSOS.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Point à vérifier avec Noa/Sylvain : faire passer tous les intervenants en
                <strong>planning avancé</strong>.</div>
              </div>
            `
          },

          {
            id: "sav2-note-recurrente",
            title: "Note de visite récurrente",
            lead: "Une note sur le prévisionnel se répète chaque année.",
            html: `
              <h2>Infos qui reviennent (codes d'accès…)</h2>
              <p>Sur le prévisionnel (clic droit sur la visite → <strong>note de visite</strong>), la note est
              reprise chaque année sur le bon généré → le technicien la voit. Idéal pour les
              <strong>codes d'accès</strong> et infos récurrentes, sans les retaper à chaque planification.</p>
            `
          },

          {
            id: "sav2-fiche-rubriques",
            title: "Rubriques de la fiche technique",
            lead: "Champs complémentaires par activité (code d'accès, IP…).",
            html: `
              <h2>Enrichir l'installation</h2>
              <p>Sur chaque <strong>fiche technique</strong> (par activité) on peut ajouter des
              <strong>rubriques</strong> : code d'accès, adresse IP externe, etc. Le technicien les consulte
              et peut les mettre à jour (selon paramétrage).</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Mieux vaut mettre ces infos sur l'<strong>installation</strong> : rattachée au client,
                elle est toujours visible.</div>
              </div>
            `
          },

          {
            id: "sav2-suite-technique",
            title: "Suite technique (depuis l'appli)",
            lead: "Le technicien déclenche une demande de devis en temps réel.",
            html: `
              <h2>Le lien terrain ↔ back-office</h2>
              <p>Sur site, le technicien crée une <strong>suite technique</strong> (avec photos du matériel
              défectueux) : elle remonte <strong>instantanément</strong> dans un tableau en page d'accueil.
              Double-clic → transformer en <strong>bon SAV</strong> → devis.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Avantage : pas besoin d'attendre le retour du technicien. Le motif et les photos
                remontent automatiquement. Alternative : créer le bon manuellement via les Appels.</div>
              </div>
            `
          },

          {
            id: "sav2-devis-commercial",
            title: "Devis SAV commercial",
            lead: "Transformer le bon en devis (version commerciale).",
            html: `
              <h2>Faire le devis de réparation</h2>
              <p>Enregistrer le bon → l'ouvrir → picto <strong>« transformer en devis de SAV »</strong> →
              choisir <strong>devis commercial</strong> : même écran que les devis d'installation
              (pourcentage de réussite, <strong>facture détaillée</strong>, type <strong>correctif</strong>,
              chiffrage, articles, main d'œuvre, déplacement, sous-totaux).</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Même ergonomie et mêmes éditions que les autres devis → cohérence des documents client.</div>
              </div>
            `
          },

          {
            id: "sav2-devis-acceptation",
            title: "Acceptation du devis SAV",
            lead: "Le devis accepté redevient un bon à planifier (pas de chantier).",
            html: `
              <h2>À l'acceptation</h2>
              <p>Bouton <strong>acceptation</strong> → date d'acceptation. Le devis SAV
              <strong>ne crée pas de chantier</strong> : il se <strong>retransforme en bon SAV</strong> à
              planifier. Un bouton « voir le devis d'origine » reste accessible.</p>
            `
          },

          {
            id: "sav2-bon-preparation",
            title: "Bon de préparation (magasinier)",
            lead: "Édition facultative pour préparer la matière.",
            html: `
              <h2>Préparer la matière</h2>
              <p>À l'acceptation, on peut éditer un <strong>bon de préparation</strong> (technicien, dépôt de
              sortie, date d'intervention, commentaire) : un PDF pour le magasinier.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Ce document est une <strong>édition</strong>, pas une sortie de stock. À déclencher au
                bon moment du process (pas forcément dès l'acceptation).</div>
              </div>
            `
          },

          {
            id: "sav2-imputation",
            title: "Imputer la matière (SAV)",
            lead: "Magasin → Imputation : sortie de stock + bon de livraison.",
            html: `
              <h2>Sortir la matière du stock</h2>
              <p><em>Magasin → Imputation</em> : rechercher le bon (sélection des bons) → double-clic →
              <strong>saisie des imputations</strong> → valider les lignes → <strong>bon de livraison</strong>
              interne. C'est ce qui sort réellement la matière du dépôt vers l'affaire.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Étape <strong>obligatoire</strong> (comme pour les chantiers) : sans imputation, les
                stocks ne sont pas à jour.</div>
              </div>
            `
          },

          {
            id: "sav2-imputation-timing",
            title: "Quand imputer ?",
            lead: "L'imputation impacte le stock — choisir le bon moment.",
            html: `
              <h2>Stock prévisionnel vs réel</h2>
              <p>L'imputation se fait <strong>informatiquement</strong> à tout moment et décompte le
              <strong>stock en cours</strong>. La faire trop tôt fausse le stock (sorties théoriques).</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Bonne pratique : imputer au moment de la <strong>planification / préparation réelle</strong>
                de l'intervention, pas à l'enregistrement de la commande. Le stock négatif ne sera pas
                bloqué (régularisation au fil de l'eau).</div>
              </div>
            `
          },

          {
            id: "sav2-blocage-compta",
            title: "Blocage compta & recouvrement",
            lead: "Bloquer un client selon son solde ou son statut.",
            html: `
              <h2>Maîtriser les impayés</h2>
              <p>Sur la fiche client, on peut poser des <strong>avertissements</strong> ou des
              <strong>blocages</strong> (SAV, négoce, devis, acceptation, création de contrat), ou un blocage
              par <strong>solde débiteur</strong> (ex. au-delà de 10 000 €).</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Utile même si le recouvrement est externalisé : le client en impayé est signalé dans
                WIPSOS pour arrêter devis et interventions. (Détaillé en formation Compta tiers client.)</div>
              </div>
            `
          }

        ]
      }

    ]
  },

  /* ==============================================================
     CATÉGORIE — FACTURATION (Session 11 — Compta. Tiers Clients)
     ============================================================== */
  {
    category: "Facturation",
    icon: "🧾",
    groups: [

      {
        name: "Facturer les contrats & envoyer",
        items: [

          {
            id: "fact-module-apercu",
            title: "Le module Facturation",
            lead: "Chaque type de facturation a son module dédié.",
            html: `
              <h2>Vue d'ensemble</h2>
              <p>WIPSOS n'a pas un module unique : la facturation est <strong>segmentée par nature</strong>.</p>
              <table>
                <tr><th>Nature</th><th>Où facturer</th></tr>
                <tr><td>Contrat abonnement</td><td>Contrat → <strong>Facturer les contrats</strong></td></tr>
                <tr><td>Dépannage / visite</td><td>SAV → <strong>Retours</strong></td></tr>
                <tr><td>Installation neuve</td><td>Facturation → <strong>Facturation des chantiers</strong></td></tr>
              </table>
            `
          },

          {
            id: "fact-facturer-contrats",
            title: "Facturer les contrats (abonnement)",
            lead: "Uniquement pour les contrats type abonnement (forfait).",
            html: `
              <h2>Le module « Facturer les contrats »</h2>
              <p>Réservé aux <strong>contrats abonnement</strong> (les contrats « à la visite » se facturent
              au retour SAV). Une fenêtre de recherche par <strong>date d'échéance</strong> permet de sortir
              d'un coup tous les contrats à facturer sur une période.</p>
            `
          },

          {
            id: "fact-date-echeance",
            title: "Date d'échéance & période",
            lead: "La date d'échéance vient du contrat (début de facturation).",
            html: `
              <h2>Travailler par période</h2>
              <p>Plutôt que de cibler un client à la fois, on saisit une <strong>période</strong> (ex. mois)
              pour lister les abonnements à facturer. La <strong>date de facture</strong> est modifiable —
              pour l'instant.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Ces dates permettent d'anticiper et de déclencher la facturation en début de période.</div>
              </div>
            `
          },

          {
            id: "fact-electronique",
            title: "Facturation électronique (à venir)",
            lead: "En septembre, la date de facture ne sera plus modifiable.",
            html: `
              <h2>Ce qui change</h2>
              <p>Avec la <strong>facturation électronique</strong>, la <strong>date de facture</strong> ne
              sera plus modifiable. Le dépôt sur plateformes puis l'envoi seront progressivement
              <strong>automatisés</strong> (centralisation des entrées/sorties de factures).</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Point à préparer : paramétrage des fiches clients (codes, adresse électronique) pour
                l'automatisation.</div>
              </div>
            `
          },

          {
            id: "fact-execution",
            title: "Exécution & factures à contrôler",
            lead: "Un onglet intermédiaire « facture à contrôler » avant production.",
            html: `
              <h2>Deux étapes</h2>
              <div class="step"><div class="step-num">1</div><div class="step-body">
                <strong>Exécution de la facturation</strong> → un onglet <strong>« facture à contrôler »</strong>
                apparaît avec toutes les lignes.</div></div>
              <div class="step"><div class="step-num">2</div><div class="step-body">
                Contrôler les montants avant de passer en production.</div></div>
              <div class="callout info">
                <span class="ic">i</span>
                <div>À ce stade ce ne sont pas encore des factures, juste des <strong>lignes remontées</strong>.</div>
              </div>
            `
          },

          {
            id: "fact-controle-ligne",
            title: "Corriger une ligne erronée",
            lead: "Clic droit → supprimer la ligne du puits, corriger le contrat.",
            html: `
              <h2>En cas d'erreur de montant</h2>
              <p>Sur une ligne au montant incorrect : clic droit → <strong>supprimer</strong> (on retire la
              ligne du puits, pas une facture). On rentre alors dans le <strong>contrat</strong> pour corriger
              le montant, puis on relance la recherche.</p>
            `
          },

          {
            id: "fact-apercu-valider",
            title: "Aperçu PDF & validation",
            lead: "Toujours contrôler l'aperçu avant de passer en production.",
            html: `
              <h2>Contrôler puis valider</h2>
              <p>Clic droit → <strong>aperçu du PDF</strong> pour vérifier périodes, TVA, montants. Puis
              sélectionner les lignes → clic droit → <strong>valider</strong> → ça passe en
              <strong>production</strong>.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Une fois validé, une erreur impose un <strong>avoir</strong> → contrôler en amont. On
                peut « initialiser la sélection » pour revenir à l'état de départ tant que non facturé.</div>
              </div>
            `
          },

          {
            id: "fact-envoi-factures",
            title: "Envoyer les factures",
            lead: "Facturation → Originaux / Duplicata → clic droit → par mail.",
            html: `
              <h2>Éditer / envoyer</h2>
              <p>Les factures émises se retrouvent dans <em>Facturation → Originaux / Duplicata</em>. Colonne
              <strong>facture numéro</strong> → clic droit → impression de l'original → <strong>imprimer, PDF
              ou envoyer par mail</strong>.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Fait à la main, ligne par ligne, c'est long → voir l'envoi automatisé et l'envoi en masse.</div>
              </div>
            `
          },

          {
            id: "fact-contact-mail",
            title: "Contact : envoi auto par mail",
            lead: "Taguer le contact « envoi par mail de facture ».",
            html: `
              <h2>Automatiser l'envoi</h2>
              <p>Sur le <strong>contact</strong> d'une fiche client, cocher <strong>« envoi par mail de
              facture »</strong>. Les factures de ces contacts remontent alors dans un puits d'envoi en masse.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Prérequis : la <strong>reprise des contacts</strong> doit être faite (sans contacts
                tagués, pas d'automatisation possible).</div>
              </div>
            `
          },

          {
            id: "fact-piece-jointe-bc",
            title: "Joindre le bon de commande",
            lead: "Rattacher le BC client au contrat / à l'envoi.",
            html: `
              <h2>Facture + bon de commande</h2>
              <p>Certains clients exigent la facture <strong>accompagnée de leur bon de commande</strong>. Sur
              le contrat (ou lors de l'envoi mail depuis originaux/duplicata), un picto permet d'<strong>ajouter
              une pièce jointe</strong> (le BC en PDF).</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Ce seront alors 2 pièces jointes (facture + BC). L'envoi automatisé en masse, lui, ne
                permet pas d'ajouter une pièce à la main.</div>
              </div>
            `
          },

          {
            id: "fact-envoi-masse",
            title: "Envoi en masse des factures",
            lead: "Un puits pour envoyer toutes les factures du jour d'un coup.",
            html: `
              <h2>Gagner du temps</h2>
              <p><em>Facturation → Envoi par mail des factures</em> : toutes les factures émises (contacts
              tagués) s'accumulent dans un <strong>puits</strong>. On filtre par utilisateur et on
              <strong>envoie tout d'un coup</strong> — pratique pour de gros volumes.</p>
            `
          },

          {
            id: "fact-avoir-directe",
            title: "Avoir & facture directe (contrat)",
            lead: "Complément de facture ou avoir sur une période.",
            html: `
              <h2>Corriger un abonnement</h2>
              <p>Dans le module contrat, <strong>« avoir / facture directe »</strong> travaille
              <strong>par période</strong>. Une <strong>calculette</strong> dispatche le montant selon le
              contrat.</p>
              <table>
                <tr><th>Signe</th><th>Effet</th></tr>
                <tr><td>Montant positif</td><td>Complément de facture (période oubliée).</td></tr>
                <tr><td>Montant en « moins »</td><td>Avoir (avec code avoir + motif).</td></tr>
              </table>
            `
          }

        ]
      },

      {
        name: "Facturer le SAV (dépannages & visites)",
        items: [

          {
            id: "fact-sav-apercu",
            title: "Facturer le SAV",
            lead: "Deux natures : dépannage et visite de maintenance.",
            html: `
              <h2>Le module SAV → Retours</h2>
              <p>La facturation SAV couvre les <strong>dépannages</strong> et les <strong>visites de
              maintenance</strong>. Objectif : passer d'un rôle de saisie à un rôle de
              <strong>contrôle</strong> grâce à l'automatisation.</p>
            `
          },

          {
            id: "fact-sav-retours",
            title: "Retours : terminé = facturable",
            lead: "Seul un bon terminé peut être facturé.",
            html: `
              <h2>État du bon</h2>
              <p><em>SAV → Retours</em> : filtrer sur les bons <strong>terminés</strong> (par le technicien).
              Dans WIPSOS, un bon <strong>« à suivre » n'est pas facturable</strong> — il faut terminer
              l'intervention.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>C'est pour ça que la 1ʳᵉ intervention (facturable) doit être passée en « terminé ».</div>
              </div>
            `
          },

          {
            id: "fact-sav-controle-fleche",
            title: "Contrôle & flèche verte",
            lead: "Un bon vérifié passe à l'état « retourné ».",
            html: `
              <h2>Deux process possibles</h2>
              <p>Une personne (chef SAV) peut <strong>vérifier</strong> chaque bon terminé et l'enregistrer :
              il passe en <strong>« retourné »</strong> (petite flèche verte). La personne qui facture ne
              traite alors que les bons tagués.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Si c'est la même personne qui vérifie et facture, cette étape « retourné » n'est pas
                indispensable.</div>
              </div>
            `
          },

          {
            id: "fact-sav-rapport",
            title: "Le rapport d'intervention",
            lead: "PDF non modifiable, dans les documents électroniques du bon.",
            html: `
              <h2>Contrôler le rapport</h2>
              <p>Dans le bon (en-tête), le picto <strong>documents électroniques</strong> contient le
              <strong>rapport d'intervention PDF</strong> du technicien (avec photos, nomenclature du parc).
              À contrôler car c'est un <strong>PDF non modifiable</strong>.</p>
            `
          },

          {
            id: "fact-sav-articles-imputes",
            title: "Articles imputés (onglet Détails)",
            lead: "Les articles saisis par le technicien remontent automatiquement.",
            html: `
              <h2>Remontée automatique</h2>
              <p>Onglet <strong>Détails</strong> : les articles imputés par le technicien sur l'application
              (vérifications, pièces…) remontent <strong>automatiquement</strong> dans le retour, avec leur
              prix. Sinon, il faudrait tout ressaisir à la main.</p>
            `
          },

          {
            id: "fact-sav-automatisation",
            title: "Automatiser les articles de service",
            lead: "Actions par article → article de service associé automatiquement.",
            html: `
              <h2>Le paramétrage clé (incendie)</h2>
              <p>Sur chaque article (ex. extincteur), on paramètre des <strong>actions</strong> (vérification
              annuelle, recharge, remplacement…). Quand le technicien choisit une action, l'<strong>article de
              service associé</strong> (avec son montant) remonte automatiquement dans le retour.</p>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Gros travail de fond au départ (chaque codification), mais c'est là qu'on gagne le plus
                de temps ensuite : plus de saisie manuelle article par article.</div>
              </div>
            `
          },

          {
            id: "fact-sav-facturation-immediate",
            title: "Facturation immédiate / au flot",
            lead: "Une facture par bon, ou une facture pour plusieurs interventions.",
            html: `
              <h2>Facturer le bon</h2>
              <p>Après contrôle : <strong>facturation immédiate</strong> (une facture par bon). La
              <strong>facturation au flot</strong> regroupe plusieurs interventions d'un client sur
              <strong>une seule facture</strong> (selon le type de client).</p>
            `
          },

          {
            id: "fact-sav-edition-chiffree",
            title: "Édition chiffrée (accord client)",
            lead: "Envoyer un BL chiffré à valider avant de facturer.",
            html: `
              <h2>Faire valider avant facture</h2>
              <p>L'<strong>édition chiffrée</strong> permet d'envoyer au client un devis/BL chiffré pour
              <strong>accord</strong> avant facturation (utile quand un bon de commande au même montant est
              exigé).</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Un module dédié suit toutes les éditions chiffrées envoyées, permet de les
                <strong>relancer</strong>, puis de facturer une fois l'accord reçu.</div>
              </div>
            `
          }

        ]
      },

      {
        name: "Facturer les chantiers & avoirs",
        items: [

          {
            id: "fact-chantiers",
            title: "Facturer les chantiers",
            lead: "Pour les installations neuves (devis acceptés).",
            html: `
              <h2>Facturation des chantiers</h2>
              <p><em>Facturation → Facturation des chantiers</em> : concerne les <strong>installations
              neuves</strong> (devis d'installation acceptés → chantier). On y retrouve la même mise en forme
              que le devis d'origine.</p>
            `
          },

          {
            id: "fact-code-etat",
            title: "Filtrer par code état",
            lead: "Repérer les chantiers terminés à facturer.",
            html: `
              <h2>Piloter par état</h2>
              <p>Le <strong>code état</strong> (mis à jour au fil de l'avancement) permet de filtrer, par
              exemple, les <strong>chantiers terminés à facturer</strong> — pour avoir sa liste du jour.</p>
              <div class="callout info">
                <span class="ic">i</span>
                <div>Ce sont les codes état (ex. « facture partielle », « chantier terminé ») qui indiquent
                à qui de facturer et quand.</div>
              </div>
            `
          },

          {
            id: "fact-consulter-client",
            title: "Consulter les factures d'un client",
            lead: "Tout est centralisé dans la fiche client.",
            html: `
              <h2>Vue par client</h2>
              <p>Un module d'affichage est <strong>segmenté par nature</strong> (contrat, SAV, chantier). Pour
              voir <strong>toutes</strong> les factures d'un client (tous modules), passer par la
              <strong>fiche client</strong> → picto de consultation des factures.</p>
            `
          },

          {
            id: "fact-avancement",
            title: "Facturer en % ou en totalité",
            lead: "100 % = facture définitive ; sinon facture d'avancement.",
            html: `
              <h2>Le pourcentage d'avancement</h2>
              <p>On facture en <strong>pourcentage</strong> selon l'avancement du chantier.</p>
              <table>
                <tr><th>Choix</th><th>Résultat</th></tr>
                <tr><td>100 %</td><td>Bouton <strong>« facture définitive »</strong>.</td></tr>
                <tr><td>60 %, 80 %…</td><td>Bouton <strong>« facture d'avancement »</strong> (situation).</td></tr>
              </table>
              <div class="callout tip">
                <span class="ic">★</span>
                <div>Le petit œil donne un aperçu ; « bordereau avec bas de page simplifié » sort une édition
                allégée.</div>
              </div>
            `
          },

          {
            id: "fact-valider-situation",
            title: "Valider la situation",
            lead: "Tant qu'une situation n'est pas validée, elle est invisible.",
            html: `
              <h2>Passage en production</h2>
              <p>Après une facture d'avancement, l'onglet <strong>Avancement</strong> montre la situation
              <strong>non validée</strong>. Il faut <strong>clic droit → acceptation</strong> pour la passer
              en production.</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Non validée = introuvable (ni originaux/duplicata, ni fiche client). Avantage : tant que
                non validée, on peut <strong>modifier le pourcentage</strong> sans faire d'avoir.</div>
              </div>
            `
          },

          {
            id: "fact-definitive-reste",
            title: "Solder après avancement",
            lead: "On met 100 % (pas le reste) pour la facture définitive.",
            html: `
              <h2>Piège fréquent</h2>
              <p>Après une 1ʳᵉ facture à 60 %, pour solder on remet <strong>100 %</strong> (et non 40 %) :
              WIPSOS facture alors le <strong>reste</strong> et le bouton devient « facture définitive ».</p>
              <div class="callout warn">
                <span class="ic">!</span>
                <div>Erreur classique : croire qu'il faut saisir 40 %. C'est bien <strong>100 %</strong> du
                total.</div>
              </div>
            `
          },

          {
            id: "fact-avoir-chantier",
            title: "Avoir sur chantier (totalité)",
            lead: "L'avoir chantier porte sur la facture entière, pas un article.",
            html: `
              <h2>Faire un avoir</h2>
              <p>Sur un chantier, l'<strong>avoir se fait sur la totalité</strong> de la facture (pas article
              par article) : il remet à 0, puis on refacture ce qu'il faut. Une 3ᵉ ligne « avoir » apparaît,
              à valider comme les autres situations.</p>
            `
          }

        ]
      }

    ]
  }
];
