# À faire avant / après lancement

## Contenu (nécessite Pascale)

- [ ] **Photo de Pascale** — remplacer `assets/img-cleo.jpeg` par la vraie photo. Format recommandé : JPG, ratio 3/4 (ex. 600×800px), bien éclairée. Mettre à jour le fichier à la même path pour ne pas toucher au HTML.

- [ ] **RGPD — formulaire de contact** — ajouter sous le bouton "Envoyer mon message" une phrase du type : *"Vos données (nom, email, téléphone) sont utilisées uniquement pour répondre à votre demande et ne sont pas transmises à des tiers."* + créer une page `confidentialite.html` et la lier dans le footer.

## Réseaux sociaux

- [ ] **Vérifier le lien Instagram** `https://www.instagram.com/schweitzer.hypnose/` — s'assurer que le compte est public et actif avant le lancement.

## Performance (technique, peut attendre le lancement)

- [ ] **og:image** — `LOGO-SH.png` est utilisé comme image de partage social. Idéalement, créer une image aux dimensions 1200×630px (format bannière) avec le logo sur fond clair pour un meilleur rendu sur Facebook/LinkedIn/WhatsApp.

- [ ] **Images** — ajouter `loading="lazy"` sur la photo de Pascale (`assets/img-cleo.jpeg`) et des attributs `width`/`height` sur le logo hero pour éviter le layout shift (CLS).

- [ ] **Logo PNG → WebP** — convertir `LOGO-SH.png` en `.webp` pour réduire le poids (~30% plus léger). Ajouter une balise `<picture>` avec fallback PNG.
