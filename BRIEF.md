# BRIEF — Site Pascale Schweitzer, Hypnothérapeute

## Informations praticienne

| Champ | Valeur |
|---|---|
| Nom complet | Pascale Schweitzer |
| Titre | Hypnothérapeute |
| Localisation | Mulhouse et environs |
| Téléphone | 07 55 67 11 91 |
| Email | hypnose.pascaleschweitzer@gmail.com |
| Domaine | schweitzer-hypnose.fr |
| Formation | Centre Emergences, Rennes (2024) — centre français dédié à l'hypnose et à la communication thérapeutique |
| Syndicat | SUP-H — Syndicat Unitaire des Professionnels de l'Hypnose |
| SIRET | À renseigner avant mise en ligne |

---

## Objectif du site

Permettre à Pascale de décrocher rapidement ses premiers clients.  
Le site doit inspirer confiance, donner envie de prendre contact, et rassurer les visiteurs hésitants.  
Priorité absolue : rendre la prise de contact la plus simple possible.

---

## Stack technique

- **Type** : One-page HTML statique (HTML / CSS / JS vanilla)
- **Versioning** : GitHub (dépôt public ou privé)
- **Déploiement** : Vercel (connexion GitHub → déploiement automatique)
- **Domaine** : schweitzer-hypnose.fr (branché sur Vercel via DNS)
- **Budget hébergement** : zéro (Vercel gratuit)
- **Maintenabilité** : Thibault intervient à distance sur le code, Pascale n'édite pas elle-même
- **Évolutivité prévue** : possible migration vers Astro si blog souhaité ultérieurement

---

## Structure de la page (sections / ancres)

1. **Hero** — Nom, titre, accroche courte, CTA principal "Me contacter"
2. **Qui suis-je** — Présentation de Pascale, formation Emergences, appartenance SUP-H, photo
3. **L'hypnose, c'est quoi ?** — Définition simple, démystification, ce que ce n'est pas
4. **Ce que j'accompagne** — Liste des spécialités (voir ci-dessous)
5. **Déroulement d'une séance** — Ce qui se passe concrètement (durée, ambiance, étapes)
6. **Tarifs** — 60 € / séance — 200 € / pack 4 séances + info mutuelles
7. **Contact** — Téléphone + formulaire de contact (nom, email, téléphone, message)
8. **Mentions légales & footer** — Mentions obligatoires, disclaimer médical, SIRET, éditeur, hébergeur

---

## Spécialités / champs d'accompagnement

- Gestion du stress
- Gestion des émotions
- Relation d'aide
- Arrêt du tabac
- Gestion de la douleur chronique et aiguë
- Gestion du poids

---

## Tarifs

| Formule | Prix |
|---|---|
| Séance individuelle | 60 € |
| Pack 4 séances | 200 € |

Précisions à afficher :
- Les séances ne sont pas prises en charge par la Sécurité Sociale
- Certaines mutuelles proposent un remboursement partiel — se renseigner auprès de son organisme

---

## Mentions obligatoires à intégrer

### Disclaimer médical (obligatoire)
> L'hypnose est une pratique de bien-être. Elle ne se substitue en aucun cas à un suivi médical ou psychologique. En cas de troubles de santé, consultez toujours un médecin. Certaines contre-indications existent (troubles psychiatriques sévères, épilepsie, etc.) — nous en discutons ensemble lors du premier contact.

### Contre-indications à mentionner
- Troubles psychiatriques (psychose, schizophrénie, troubles dissociatifs, borderline)
- Épilepsie
- En cas de doute, avis médical préalable requis

### Mentions légales (footer ou page dédiée)
- Éditeur du site : Pascale Schweitzer
- SIRET : [à renseigner]
- Hébergeur : Vercel Inc. — 340 Pine Street, Suite 701, San Francisco, CA 94104, USA
- Appartenance syndicale : SUP-H
- Formation : Centre Emergences, Rennes

### Politique d'annulation (recommandée)
Prévoir une mention sur les annulations (ex : 48h à l'avance) — à valider avec Pascale.

---

## Formulaire de contact

Champs :
- Prénom / Nom
- Email
- Téléphone
- Message

Service d'envoi : **Formspree** (gratuit, sans backend, compatible site statique)  
→ Créer un compte sur formspree.io et récupérer l'endpoint avant intégration.

---

## Photo

- Photo provisoire intégrée au lancement
- Remplacement prévu ultérieurement (simple remplacement de fichier image)
- Format recommandé : carré ou portrait, .jpg ou .webp, max 400 Ko

---

## SEO minimal à prévoir

- Balise `<title>` : "Pascale Schweitzer — Hypnothérapeute à Mulhouse"
- Meta description : courte phrase incluant hypnose, Mulhouse, spécialités principales
- Balises `h1`, `h2` structurées
- Attributs `alt` sur toutes les images
- Page rapide (pas de framework lourd, images optimisées)

---

## Ce qui n'est pas dans la V1

- Blog / articles (prévu si besoin → migration Astro)
- Prise de RDV en ligne type Doctolib
- Espace client
- Paiement en ligne
