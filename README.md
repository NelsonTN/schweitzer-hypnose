# schweitzer-hypnose.fr

Site one-page statique pour Pascale Schweitzer, hypnothérapeute à Mulhouse.

## Stack

- HTML / CSS / JS vanilla
- Déploiement : Vercel
- Formulaire : Formspree (`xaqkwlgq`)
- Domaine : schweitzer-hypnose.fr (Gandi)

## Structure

```
/
├── index.html        ← page principale
├── style.css         ← styles
├── script.js         ← interactions (burger, animations, scroll)
├── assets/
│   └── photo-pascale.jpg   ← à remplacer par la vraie photo
└── README.md
```

## Déploiement

1. Pousser sur GitHub
2. Connecter le repo sur Vercel
3. Ajouter le domaine `schweitzer-hypnose.fr` dans Vercel > Settings > Domains
4. Configurer le DNS Gandi :
   - Enregistrement A : `@` → `76.76.21.21`
   - Enregistrement CNAME : `www` → `cname.vercel-dns.com`

## À compléter avant mise en ligne

- [ ] Remplacer `assets/photo-pascale.jpg` par la vraie photo
- [ ] Renseigner le numéro SIRET dans le footer (mentions légales)
- [ ] Valider la politique d'annulation avec Pascale
- [ ] Activer le renouvellement automatique du domaine sur Gandi

## Maintenance

Pour toute modification de contenu (texte, tarifs, photo) :
- Éditer `index.html` directement
- Pousser sur GitHub → Vercel redéploie automatiquement en ~30 secondes
