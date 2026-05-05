/* ═══════════════════════════════════════════════
   EPREUVE E5 — Compétences C1-C22 · Modal System
═══════════════════════════════════════════════ */
'use strict';

/* ─── COMPETENCES DATA ─── */
const COMPETENCES = {
  c1: {
    code: 'C1', bloc: 'Gérer le patrimoine informatique',
    title: 'Recensement et identification des ressources numériques',
    desc: `Recenser et identifier les ressources numériques de l'organisation à l'aide d'un outil de gestion de parc.`,
    how: `<p>Lors de mon <strong>stage à la Mairie du Perreux-sur-Marne</strong>, j'ai réalisé le recensement complet du parc informatique avec <strong>GLPI</strong>. Chez <strong>EXTIA</strong>, j'ai utilisé <strong>Microsoft Intune</strong> pour la gestion du parc à distance.</p>
          <ul><li>Installation et configuration de GLPI sur le serveur de la Mairie</li><li>Inventaire de 13 machines : postes fixes, serveurs, portables</li><li>Référencement des équipements réseau : switches, pare-feu</li><li>Chez EXTIA : gestion du parc avec Microsoft Intune (déploiement et suivi des postes à distance)</li><li>Chaque équipement tracé par localisation, numéro de série et fabricant</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> L'inventaire a été long car rien n'était automatisé à la Mairie — tout était fait manuellement poste par poste. Chez EXTIA, Intune permettait de gérer les postes à distance, ce qui m'a permis de voir la différence entre un SI à structurer et un SI mature.</p>`,
    projects: [
      { num: 'SP1', name: 'Inventaire parc GLPI', ctx: 'Stage Mairie · 2025' },
      { num: 'SP8', name: 'Gestion parc Intune', ctx: 'Stage EXTIA · 2025' }
    ],
    techs: ['GLPI', 'Intune', 'Active Directory', 'Windows Server'],
    screenshots: [{ src: 'assets/screenshots/glpi-parc.png', caption: 'GLPI — Inventaire du parc (13 postes, serveurs, portables)' }]
  },
  c2: {
    code: 'C2', bloc: 'Gérer le patrimoine informatique',
    title: 'Exploitation des référentiels, normes et standards',
    desc: `Exploiter des référentiels, normes et standards adoptés par l'organisation pour la gestion du patrimoine informatique.`,
    how: `<p>Pour installer et configurer <strong>GLPI</strong> sur le serveur de la Mairie, j'ai suivi la <strong>documentation officielle</strong> du projet.</p>
          <ul><li>Consultation de la documentation officielle GLPI pour l'installation (prérequis, configuration Apache + MySQL)</li><li>Suivi des étapes pas à pas : téléchargement, décompression, configuration base de données</li><li>Utilisation de la doc pour le paramétrage des catégories de tickets et des profils</li><li>Référence régulière à la doc pour résoudre les problèmes rencontrés</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> C'est la première fois que je suivais une documentation technique aussi complète. Ça m'a appris à chercher dans la doc avant de demander de l'aide.</p>`,
    projects: [{ num: 'SP1', name: 'Installation GLPI via doc officielle', ctx: 'Stage Mairie · 2025' }],
    techs: ['GLPI', 'Documentation', 'Apache', 'MySQL'],
    screenshots: [{ src: 'assets/screenshots/glpi-parc.png', caption: 'GLPI — Installé en suivant la documentation officielle' }]
  },
  c3: {
    code: 'C3', bloc: 'Gérer le patrimoine informatique',
    title: "Mise en place et vérification des niveaux d'habilitation",
    desc: `Mettre en place et vérifier les niveaux d'habilitation associés à un service informatique.`,
    how: `<p>J'ai configuré les <strong>profils d'habilitation dans GLPI</strong> et géré les droits d'accès sur les postes via <strong>Active Directory</strong>.</p>
          <ul><li>Configuration de 8 profils GLPI : Super-Admin, Admin, Technicien, Hotliner, Superviseur, Observateur, Self-Service, Lecture seule</li><li>Chaque profil dispose de permissions spécifiques (lecture, écriture, suppression)</li><li>Gestion des droits utilisateurs via Active Directory</li><li>Vérification régulière de la cohérence des habilitations</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> À la Mairie, certains utilisateurs avaient des droits incohérents — des comptes avec trop de permissions ou des profils mal attribués. Il a fallu faire un audit et corriger ça un par un.</p>`,
    projects: [{ num: 'SP2', name: 'Gestion des habilitations GLPI', ctx: 'Stage Mairie · 2025' }],
    techs: ['GLPI', 'Active Directory', 'Profils'],
    screenshots: [{ src: 'assets/screenshots/glpi-profils.png', caption: 'GLPI — 8 profils avec droits différents' }]
  },
  c4: {
    code: 'C4', bloc: 'Gérer le patrimoine informatique',
    title: "Vérification des conditions de la continuité d'un service",
    desc: `Vérifier les conditions de la continuité d'un service informatique et anticiper les risques de rupture.`,
    how: `<p>J'ai vérifié que les <strong>sauvegardes GLPI fonctionnaient correctement</strong> et que les services critiques de la Mairie pouvaient redémarrer après une coupure.</p>
          <ul><li>Vérification régulière des sauvegardes MySQL (intégrité des fichiers .sql)</li><li>Test de restauration de la base GLPI sur un environnement de test</li><li>Vérification du bon fonctionnement des onduleurs (UPS) sur les serveurs</li><li>Contrôle que les services (GLPI, Active Directory) redémarraient correctement après coupure</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Vérifier que les sauvegardes marchent vraiment, c'est pas juste regarder si le fichier existe — il faut tester la restauration. J'ai appris qu'une sauvegarde non testée ne vaut rien.</p>`,
    projects: [{ num: 'SP3', name: 'Vérification sauvegardes et continuité', ctx: 'Stage Mairie · 2025' }],
    techs: ['MySQL', 'Sauvegardes', 'GLPI', 'UPS'],
    screenshots: [{ src: 'assets/screenshots/phpmyadmin-glpi.png', caption: 'Vérification intégrité des sauvegardes GLPI' }]
  },
  c5: {
    code: 'C5', bloc: 'Gérer le patrimoine informatique',
    title: 'Gestion des sauvegardes',
    desc: `Gérer des sauvegardes de données et de configurations pour assurer la pérennité du patrimoine informatique.`,
    how: `<p>J'ai réalisé la <strong>sauvegarde de la base de données GLPI</strong> via <strong>mysqldump</strong> et documenté la procédure.</p>
          <ul><li>Sauvegarde MySQL de la base GLPI avec mysqldump</li><li>Fichier SQL de sauvegarde de plus de 14 000 lignes</li><li>Documentation de la procédure pour exécution régulière</li><li>Vérification de l'intégrité des sauvegardes</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> La sauvegarde en elle-même n'était pas compliquée, mais ça a pris du temps de documenter la procédure correctement pour que quelqu'un d'autre puisse la reproduire après mon départ.</p>`,
    projects: [{ num: 'SP3', name: 'Sauvegarde BDD GLPI', ctx: 'Stage Mairie · 2025' }],
    techs: ['MySQL', 'mysqldump', 'Sauvegardes', 'GLPI'],
    screenshots: [{ src: 'assets/screenshots/phpmyadmin-glpi.png', caption: 'phpMyAdmin — Base de données GLPI' }]
  },
  c6: {
    code: 'C6', bloc: 'Gérer le patrimoine informatique',
    title: "Vérification du respect des règles d'utilisation des ressources numériques",
    desc: `Vérifier le respect des règles d'utilisation des ressources numériques et sensibiliser les utilisateurs.`,
    how: `<p>J'ai <strong>sensibilisé les utilisateurs</strong> de la Mairie aux bonnes pratiques informatiques lors de mes interventions sur les postes.</p>
          <ul><li>Rappel des bonnes pratiques lors des interventions : ne pas brancher de clé USB personnelle, verrouiller sa session</li><li>Explication des risques de phishing aux agents qui me posaient des questions</li><li>Conseils sur les mots de passe : éviter les mots de passe trop simples</li><li>Discussion avec les utilisateurs sur les bons réflexes en cas de mail suspect</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> C'était informel — pas une formation officielle, mais à chaque fois que j'intervenais sur un poste, j'en profitais pour rappeler les bonnes pratiques. Les agents étaient réceptifs.</p>`,
    projects: [{ num: 'SP7', name: 'Sensibilisation bonnes pratiques', ctx: 'Stage Mairie · 2025' }],
    techs: ['Sécurité', 'Bonnes pratiques', 'Sensibilisation'],
    screenshots: []
  },

  /* ══ CATÉGORIE 2 — Incidents ══ */
  c7: {
    code: 'C7', bloc: 'Répondre aux incidents',
    title: 'Collecte, suivi et orientation des demandes',
    desc: `Collecter, suivre et orienter des demandes d'assistance et d'évolution via un outil de ticketing.`,
    how: `<p>J'ai configuré le <strong>système de ticketing GLPI</strong> pour gérer les incidents et demandes de la Mairie.</p>
          <ul><li>Paramétrage de 6 catégories de tickets : Réseau, Matériel, Logiciel, Accès/Droits, Imprimante, Messagerie</li><li>Définition des niveaux de priorité</li><li>Attribution des tickets aux techniciens concernés</li><li>Création et gestion de 10 tickets couvrant différents types d'incidents</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Le paramétrage s'est bien passé. Les utilisateurs de la Mairie créaient correctement leurs tickets, ce qui a facilité le suivi et la résolution des incidents.</p>`,
    projects: [{ num: 'SP4', name: 'Paramétrage ticketing GLPI', ctx: 'Stage Mairie · 2025' }],
    techs: ['GLPI', 'Ticketing', 'ITIL'],
    screenshots: [{ src: 'assets/screenshots/glpi-tickets.png', caption: 'GLPI — 10 tickets gérés' }]
  },
  c8: {
    code: 'C8', bloc: 'Répondre aux incidents',
    title: 'Traitement des demandes concernant les services réseau et système',
    desc: `Traiter des demandes concernant les services réseau, les systèmes et diagnostiquer les incidents.`,
    how: `<p>J'ai résolu des <strong>incidents réseau et système réels</strong> lors de mon stage à la Mairie.</p>
          <ul><li>Incident réseau : toutes les stations de l'annexe ont perdu l'accès réseau</li><li>Diagnostic : crash du switch HP 2530-24G, redémarrage et vérification des connexions</li><li>Alerte critique Zabbix : disque du serveur de fichiers à 92% de capacité</li><li>Nettoyage des anciens logs (libération de 15 Go) et archivage sur le NAS</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Pour le diagnostic du switch, j'ai été accompagné par mon tuteur de stage. C'était mon premier incident réseau réel — j'ai appris à suivre une démarche de diagnostic méthodique plutôt que de chercher au hasard.</p>`,
    projects: [{ num: 'SP5', name: 'Résolution incidents réseau', ctx: 'Stage Mairie · 2025' }],
    techs: ['Switch HP', 'Zabbix', 'Réseau', 'Diagnostic'],
    screenshots: [{ src: 'assets/screenshots/glpi-ticket-detail.png', caption: 'GLPI — Ticket résolu : Alerte Zabbix disque serveur à 92%' }]
  },
  c9: {
    code: 'C9', bloc: 'Répondre aux incidents',
    title: 'Traitement des demandes concernant les applications',
    desc: `Traiter des demandes concernant les applications et résoudre les incidents applicatifs.`,
    how: `<p>J'ai résolu un <strong>incident applicatif</strong> concernant le logiciel de comptabilité de la Mairie.</p>
          <ul><li>Problème : le logiciel comptable est devenu très lent après une mise à jour (30 secondes par enregistrement)</li><li>Diagnostic : le mode de cache a été modifié de local à réseau par la mise à jour</li><li>Correction du paramètre et retour aux performances normales</li><li>Documentation de la solution dans GLPI pour référence future</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Le diagnostic n'a pas été difficile — le lien avec la mise à jour était assez évident. Ça m'a appris à toujours vérifier les changements récents quand un problème apparaît.</p>`,
    projects: [{ num: 'SP6', name: 'Résolution incident applicatif', ctx: 'Stage Mairie · 2025' }],
    techs: ['Diagnostic', 'GLPI', 'Support applicatif'],
    screenshots: [{ src: 'assets/screenshots/glpi-tickets.png', caption: 'GLPI — Ticket logiciel comptabilité résolu' }]
  },

  /* ══ CATÉGORIE 3 — Présence en ligne ══ */
  c10: {
    code: 'C10', bloc: 'Développer la présence en ligne',
    title: "Valorisation de l'image de l'organisation sur les médias numériques",
    desc: `Participer à la valorisation de l'image de l'organisation sur les médias numériques.`,
    how: `<p>J'ai créé un <strong>profil LinkedIn professionnel</strong> pour développer mon réseau et valoriser mon image.</p>
          <ul><li>Création d'un profil LinkedIn complet</li><li>Publication de posts sur les projets BTS SIO et découvertes technologiques</li><li>Développement du réseau professionnel via LinkedIn</li><li>Partage du portfolio pour valoriser les compétences</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> J'ai tout construit de zéro — je n'avais pas de réseau professionnel avant. Le plus dur a été de se lancer et de savoir comment se présenter, mais au final ça m'a permis de créer des contacts utiles pour l'alternance.</p>`,
    projects: [{ num: 'RP1', name: 'Profil LinkedIn professionnel', ctx: 'Projet personnel · 2024' }],
    techs: ['LinkedIn', 'Réseaux sociaux', 'Communication'],
    screenshots: [{ src: 'assets/screenshots/linkedin-profil.png', caption: 'Profil LinkedIn — Paul Cohen, 500+ relations' }]
  },
  c11: {
    code: 'C11', bloc: 'Développer la présence en ligne',
    title: 'Référencement des services en ligne et mesure de leur visibilité',
    desc: `Référencer les services en ligne de l'organisation et mesurer leur visibilité.`,
    how: `<p>J'ai mis en place des <strong>bonnes pratiques SEO</strong> sur le portfolio.</p>
          <ul><li>Utilisation de HTML sémantique : balises h1, h2, meta tags</li><li>Titres de pages descriptifs et pertinents</li><li>Attributs alt sur toutes les images</li><li>Compréhension du principe de Google Analytics pour la mesure du trafic</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Je ne connaissais rien au SEO avant de faire le portfolio. J'ai découvert les bases (meta tags, HTML sémantique) en cherchant comment rendre mon site plus visible. C'est un domaine que je continue d'explorer.</p>`,
    projects: [{ num: 'RP2', name: 'SEO du portfolio', ctx: 'Projet personnel · 2025' }],
    techs: ['SEO', 'HTML sémantique', 'Meta tags'],
    screenshots: [{ src: 'assets/screenshots/github-repos.png', caption: 'GitHub PaulC94 — 18 repositories' }]
  },
  c12: {
    code: 'C12', bloc: 'Développer la présence en ligne',
    title: "Participation à l'évolution d'un site Web",
    desc: `Participer à l'évolution d'un site Web en développant de nouvelles fonctionnalités.`,
    how: `<p>J'ai développé <strong>ce portfolio BTS SIO</strong> de A à Z avec des évolutions itératives.</p>
          <ul><li>Conception et développement complet en HTML/CSS/JavaScript</li><li>Design responsive adapté à tous les écrans</li><li>Évolution itérative : ajout de sections (compétences, épreuves)</li><li>Déploiement sur Vercel avec CI/CD automatique</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Le plus dur a été de savoir comment retranscrire 2 ans de BTS dans un petit portfolio. Il a fallu synthétiser, choisir quoi montrer et quoi laisser de côté sans perdre l'essentiel.</p>`,
    projects: [{ num: 'RP3', name: 'Portfolio BTS SIO', ctx: 'Projet personnel · 2025' }],
    techs: ['HTML/CSS', 'JavaScript', 'Vercel'],
    screenshots: [{ src: 'assets/screenshots/intellij-projet.png', caption: 'IntelliJ IDEA — Projet NeoAsset Dashboard' }]
  },

  /* ══ CATÉGORIE 4 — Mode projet ══ */
  c13: {
    code: 'C13', bloc: 'Travailler en mode projet',
    title: "Analyse des objectifs et des modalités d'organisation d'un projet",
    desc: `Analyser les objectifs et les modalités d'organisation d'un projet en rédigeant un cahier des charges.`,
    how: `<p>Pour le projet <strong>Auto-École</strong>, j'ai défini le périmètre du projet via un <strong>cahier des charges</strong> complet.</p>
          <ul><li>Définition des objectifs et des utilisateurs cibles</li><li>Identification des exigences fonctionnelles : CRUD élèves, moniteurs, examens, planning</li><li>Contraintes techniques : Java/MySQL, design responsive</li><li>Identification des livrables et du planning</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> La rédaction du cahier des charges n'était pas très difficile en soi. Par contre, ça m'a appris à structurer un projet avant de coder — poser les besoins sur papier avant de foncer dans le code.</p>`,
    projects: [{ num: 'RP4', name: 'Cahier des charges Auto-École', ctx: 'Projet scolaire · 2024' }],
    techs: ['Cahier des charges', 'Analyse', 'Spécifications'],
    screenshots: []
  },
  c14: {
    code: 'C14', bloc: 'Travailler en mode projet',
    title: 'Planification des activités',
    desc: `Planifier les activités d'un projet en utilisant des méthodes agiles et des outils de suivi.`,
    how: `<p>J'ai utilisé <strong>Trello</strong> avec la <strong>méthode Kanban</strong> pour organiser les tâches.</p>
          <ul><li>Organisation en colonnes Kanban : À faire, En cours, Bloqué, Fini, Ressources</li><li>Distribution des tâches entre les membres de l'équipe (PC, AC, SS, RA)</li><li>Suivi de l'avancement : tâches cochées au fur et à mesure</li><li>Coordination via Trello et GitHub</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> On était un groupe de 5 et la coordination s'est plutôt bien passée grâce à Trello. Chacun savait ce qu'il devait faire, ce qui a évité les doublons et les blocages.</p>`,
    projects: [{ num: 'RP5', name: 'Organisation projet Trello', ctx: 'Projet scolaire · 2024' }],
    techs: ['Trello', 'Kanban', 'Organisation', 'Git', 'Équipe'],
    screenshots: [{ src: 'assets/screenshots/trello-kanban.png', caption: 'Trello — Board Kanban' }]
  },
  c15: {
    code: 'C15', bloc: 'Travailler en mode projet',
    title: "Évaluation des indicateurs de suivi d'un projet",
    desc: `Évaluer les indicateurs de suivi d'un projet et analyser les écarts.`,
    how: `<p>Lors du <strong>hackathon</strong>, j'ai suivi la complétion des fonctionnalités prévues vs livrées.</p>
          <ul><li>Suivi des fonctionnalités planifiées vs livrées</li><li>Identification des fonctionnalités non terminées : favoris, filtres avancés</li><li>Priorisation des fonctionnalités essentielles : recherche, affichage, navigation</li><li>Analyse post-hackathon : ce qui a fonctionné et les axes d'amélioration</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Le projet était fonctionnel à la fin du hackathon mais pas terminé — les favoris et les filtres avancés n'ont pas pu être livrés. Ça m'a appris à prioriser les fonctionnalités essentielles quand le temps est limité.</p>`,
    projects: [{ num: 'RP5', name: 'Suivi KPI Hackathon', ctx: 'Hackathon · 2024' }],
    techs: ['KPI', 'Suivi projet', 'Analyse'],
    screenshots: [{ src: 'assets/screenshots/trello-kanban.png', caption: 'Trello — Suivi des tâches' }]
  },

  /* ══ CATÉGORIE 5 — Services ══ */
  c16: {
    code: 'C16', bloc: 'Mettre à disposition un service',
    title: "Test d'intégration et d'acceptation d'un service",
    desc: `Réaliser les tests d'intégration et d'acceptation d'un service informatique.`,
    how: `<p>Pour les projets <strong>Auto-École</strong> et <strong>E-Commerce</strong>, j'ai testé toutes les opérations CRUD.</p>
          <ul><li>Tests de toutes les opérations CRUD (création, lecture, modification, suppression)</li><li>Vérification de la validation des formulaires</li><li>Contrôle de l'intégrité de la base de données</li><li>Test du flux de navigation complet</li><li>MAMP comme environnement de test local</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Pas énormément de bugs trouvés, les projets étaient assez stables. Mais ça m'a quand même montré l'importance de tester systématiquement chaque opération plutôt que de se fier à l'intuition.</p>`,
    projects: [{ num: 'RP6', name: 'Tests projets Java', ctx: 'Projets scolaires · 2024' }],
    techs: ['Tests manuels', 'MAMP', 'Validation', 'Java'],
    screenshots: [{ src: 'assets/screenshots/intellij-projet.png', caption: 'IntelliJ IDEA — Développement et tests' }]
  },
  c17: {
    code: 'C17', bloc: 'Mettre à disposition un service',
    title: "Déploiement d'un service",
    desc: `Déployer un service informatique en environnement de production.`,
    how: `<p>J'ai déployé plusieurs services en production : <strong>GLPI</strong> et <strong>Apache Guacamole</strong> à la Mairie, <strong>Ansible</strong> chez EXTIA, et le portfolio sur <strong>Vercel</strong>.</p>
          <ul><li>Déploiement de GLPI : configuration Apache + MySQL, base de données, permissions</li><li>Déploiement d'Apache Guacamole : accès distant aux postes via navigateur (RDP/VNC/SSH)</li><li>Écriture de playbooks Ansible chez EXTIA pour automatiser la configuration serveur</li><li>Déploiement du portfolio sur Vercel avec CI/CD automatique</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Chaque déploiement avait ses défis — Guacamole nécessitait la configuration de Tomcat et des connexions RDP, Ansible demandait de comprendre la syntaxe YAML et les modules, et Vercel est très simple avec le CI/CD automatique depuis GitHub.</p>`,
    projects: [
      { num: 'SP7', name: 'Déploiement GLPI + Guacamole', ctx: 'Stage Mairie · 2025' },
      { num: 'SP8', name: 'Playbooks Ansible', ctx: 'Stage EXTIA · 2025' },
      { num: 'RP3', name: 'Déploiement Portfolio (Vercel)', ctx: 'Projet personnel · 2025' }
    ],
    techs: ['GLPI', 'Guacamole', 'Ansible', 'MAMP', 'Apache', 'Vercel'],
    screenshots: [{ src: 'assets/screenshots/glpi-tickets.png', caption: 'GLPI déployé et opérationnel' }]
  },
  c18: {
    code: 'C18', bloc: 'Mettre à disposition un service',
    title: "Accompagnement des utilisateurs dans la mise en place d'un service",
    desc: `Accompagner les utilisateurs dans la mise en place d'un service.`,
    how: `<p>J'ai rédigé un <strong>guide utilisateur pour GLPI</strong> et créé un formulaire de demande d'amélioration.</p>
          <ul><li>Guide utilisateur : comment se connecter à GLPI</li><li>Procédure de création d'un ticket d'incident</li><li>Suivi du statut des tickets par l'utilisateur</li><li>Procédure d'urgence en cas d'incident critique</li><li>Formulaire de suggestion d'amélioration</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Le plus dur a été d'écrire pour des gens non techniques — il fallait simplifier le vocabulaire et ajouter des captures d'écran étape par étape pour que ce soit vraiment compréhensible.</p>`,
    projects: [{ num: 'DOC4', name: 'Guide utilisateur GLPI', ctx: 'Stage Mairie · 2025' }],
    techs: ['Documentation', 'Guide utilisateur', 'GLPI'],
    screenshots: [{ src: 'assets/screenshots/doc-guide-utilisateur.png', caption: 'Guide utilisateur GLPI' }]
  },

  /* ══ CATÉGORIE 6 — Développement pro ══ */
  c19: {
    code: 'C19', bloc: 'Développement professionnel',
    title: "Mettre en place son environnement d'apprentissage personnel",
    desc: `Mettre en place son environnement d'apprentissage personnel en utilisant des outils numériques.`,
    how: `<p>J'ai configuré un <strong>environnement de développement complet</strong> pour mes projets BTS et personnels.</p>
          <ul><li><strong>IntelliJ IDEA</strong> comme IDE principal (Java, HTML, web)</li><li><strong>GitHub</strong> pour versionner tous mes projets (github.com/PaulC94)</li><li><strong>MAMP</strong> comme serveur local pour MySQL</li><li>Terminal intégré pour Git, npm, Maven</li><li>Documentation de chaque projet dans des README sur GitHub</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Le GitHub Student Developer Pack m'a donné accès à IntelliJ IDEA gratuitement et j'en suis très content — c'est devenu mon IDE principal pour tous mes projets. Ça m'a montré l'intérêt de chercher les ressources étudiantes disponibles.</p>`,
    projects: [{ num: 'VP1', name: 'Environnement de travail', ctx: 'Continu · 2024-2026' }],
    techs: ['IntelliJ IDEA', 'GitHub', 'MAMP', 'Git', 'Terminal'],
    screenshots: [
      { src: 'assets/screenshots/intellij-projet.png', caption: 'IntelliJ IDEA — Environnement de développement' },
      { src: 'assets/screenshots/github-repos.png', caption: 'GitHub PaulC94 — 18 repositories' }
    ]
  },
  c20: {
    code: 'C20', bloc: 'Développement professionnel',
    title: "Mettre en œuvre des outils et stratégies de veille informationnelle",
    desc: `Mettre en œuvre des outils et stratégies de veille informationnelle.`,
    how: `<p>Je réalise une <strong>veille technologique régulière</strong> via plusieurs canaux.</p>
          <ul><li><strong>Discussions entre camarades</strong> : partage de découvertes tech, comparaison des frameworks</li><li><strong>YouTube</strong> : Fireship, Traversy Media pour tutos et news dev</li><li><strong>Twitter/X</strong> : suivi de développeurs et actus tech</li><li><strong>GitHub Trending</strong> : projets populaires et open-source</li><li>Sujets suivis : <strong>OpenClaw</strong> (agent IA, 350k stars), <strong>Docker</strong> (conteneurisation), <strong>Tailwind CSS vs Bootstrap</strong></li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> La veille c'est quelque chose que j'adore faire — ça ne me demande pas d'effort. Je suis naturellement curieux sur les nouvelles technos, donc ça fait partie de mon quotidien.</p>`,
    projects: [{ num: 'VP2', name: 'Veille technologique', ctx: 'Continu · 2024-2026' }],
    techs: ['YouTube', 'Twitter/X', 'GitHub Trending', 'Discussions promo'],
    screenshots: [{ src: 'assets/screenshots/youtube-veille.png', caption: 'YouTube — Veille sur OpenClaw' }]
  },
  c21: {
    code: 'C21', bloc: 'Développement professionnel',
    title: 'Gérer son identité professionnelle',
    desc: `Gérer son identité professionnelle en maintenant une présence en ligne cohérente.`,
    how: `<p>Je maintiens une <strong>identité professionnelle cohérente</strong> sur 3 plateformes.</p>
          <ul><li><strong>LinkedIn</strong> (linkedin.com/in/paul-cohen94/) : profil complet, publications sur mes projets BTS</li><li><strong>GitHub</strong> (github.com/PaulC94) : 6 dépôts publics (NeoAsset, Manga Dash, Auto-École, Scan Tracker, Puissance 4, E-Commerce)</li><li><strong>Portfolio web</strong> (ce site) : vitrine avec projets, compétences, CV et épreuves BTS</li><li>Cohérence : même identité, liens croisés entre les plateformes</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Maintenir les 3 plateformes n'a pas posé de difficulté particulière. L'important c'est d'avoir une identité cohérente partout — même photo, même description, liens croisés.</p>`,
    projects: [{ num: 'VP3', name: 'LinkedIn + Portfolio + GitHub', ctx: 'Continu · 2024-2026' }],
    techs: ['LinkedIn', 'Portfolio', 'GitHub', 'Personal Branding'],
    screenshots: [
      { src: 'assets/screenshots/linkedin-profil.png', caption: 'LinkedIn — Profil Paul Cohen, 500+ relations' },
      { src: 'assets/screenshots/github-repos.png', caption: 'GitHub PaulC94 — 18 repositories' }
    ]
  },
  c22: {
    code: 'C22', bloc: 'Développement professionnel',
    title: 'Développer son projet professionnel',
    desc: `Développer son projet professionnel en définissant des objectifs à court, moyen et long terme.`,
    how: `<p>J'ai construit mon <strong>projet professionnel</strong> progressivement au fil de ma formation.</p>
          <ul><li><strong>Court terme (2026)</strong> : obtenir le BTS SIO option SLAM avec mention</li><li><strong>Moyen terme (2026-2027)</strong> : intégrer le Bachelor Développement Web &amp; IA à l'EFREI en alternance. Alternance confirmée</li><li><strong>Long terme</strong> : me spécialiser en <strong>DevOps</strong> — automatisation, CI/CD, infrastructure as code. Carrière dans une ESN ou startup tech</li><li>Montée en compétences : Docker, Ansible, Kubernetes, CI/CD côté DevOps + Java, React côté dev</li><li>Les stages m'ont confirmé mon intérêt pour le support IT (Mairie) et le DevOps (EXTIA)</li></ul>
          <p class="modal-bilan"><strong>Bilan :</strong> Le DevOps n'était pas mon objectif initial — c'est pendant mon stage chez EXTIA que j'ai découvert Ansible, le CI/CD et l'automatisation. Ça a été le déclic, et c'est maintenant la direction que je veux prendre pour ma carrière.</p>`,
    projects: [{ num: 'VP4', name: 'Projet professionnel', ctx: '2024-2027' }],
    techs: ['Alternance', 'Bachelor EFREI', 'DevOps', 'CI/CD', 'Docker'],
    screenshots: [{ src: 'assets/screenshots/linkedin-profil.png', caption: 'LinkedIn — Apprenti Développeur Web & IA' }]
  }
};

/* ═══════ MODAL SYSTEM ═══════ */
function initCompModal() {
  const modal = document.getElementById('comp-modal');
  if (!modal) return;
  const closeBtn = modal.querySelector('.modal-close');

  /* Color map */
  const colorMap = {
    c1:'#D6FF4D',c2:'#D6FF4D',c3:'#D6FF4D',c4:'#D6FF4D',c5:'#D6FF4D',c6:'#D6FF4D',
    c7:'#6ee7b7',c8:'#6ee7b7',c9:'#6ee7b7',
    c10:'#f472b6',c11:'#f472b6',c12:'#f472b6',
    c13:'#E8A838',c14:'#E8A838',c15:'#E8A838',
    c16:'#60a5fa',c17:'#60a5fa',c18:'#60a5fa',
    c19:'#c084fc',c20:'#c084fc',c21:'#c084fc',c22:'#c084fc'
  };

  document.querySelectorAll('.comp-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.comp;
      const data = COMPETENCES[key];
      if (!data) return;

      document.getElementById('modalCode').textContent = data.code;
      document.getElementById('modalCode').style.color = colorMap[key] || '#D6FF4D';
      document.getElementById('modalBloc').textContent = data.bloc;
      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalDesc').innerHTML = data.desc;
      document.getElementById('modalHow').innerHTML = data.how;

      /* Projects */
      document.getElementById('modalProjects').innerHTML = data.projects.map(p => `
        <div class="modal-proj-item">
          <span class="modal-proj-num">${p.num}</span>
          <span class="modal-proj-name">${p.name}</span>
          <span class="modal-proj-ctx">${p.ctx}</span>
        </div>
      `).join('');

      /* Screenshots */
      const ssSection = document.getElementById('modalScreenshotsSection');
      const ssContainer = document.getElementById('modalScreenshots');
      if (data.screenshots && data.screenshots.length > 0) {
        ssSection.style.display = '';
        ssContainer.innerHTML = data.screenshots.map(s => `
          <div class="modal-screenshot">
            <img src="${s.src}" alt="${s.caption}" loading="lazy" onclick="this.classList.toggle('zoomed')">
            <p class="modal-ss-caption">${s.caption}</p>
          </div>
        `).join('');
      } else {
        ssSection.style.display = 'none';
        ssContainer.innerHTML = '';
      }

      /* Techs */
      document.getElementById('modalTechs').innerHTML = data.techs.map(t =>
        `<span class="modal-tech-tag">${t}</span>`
      ).join('');

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
}

/* ═══════ INIT ═══════ */
document.addEventListener('DOMContentLoaded', () => {
  initCompModal();
});
