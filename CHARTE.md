# CHARTE — Site Pascale Schweitzer, Hypnothérapeute

## Intention générale

Le site doit transmettre trois sentiments dès les premières secondes :
**confiance**, **espoir**, **sérénité**.

Le visiteur qui arrive est souvent vulnérable — il cherche de l'aide pour quelque chose qui lui pèse.  
Le site doit le rassurer, lui montrer qu'il est au bon endroit, et lui donner envie de franchir le pas.

---

## Palette de couleurs

Violet et vert en tons doux, naturels, jamais saturés.

| Rôle | Couleur | Hex |
|---|---|---|
| Primaire | Violet sauge doux | `#8B7BA8` |
| Secondaire | Vert sauge naturel | `#7A9E8E` |
| Accent clair | Lavande pâle | `#EDE8F5` |
| Fond principal | Blanc cassé chaud | `#FAF8F5` |
| Fond alternatif | Vert très pâle | `#EFF4F1` |
| Texte principal | Gris anthracite doux | `#2D2D2D` |
| Texte secondaire | Gris moyen | `#6B6B6B` |
| CTA (bouton principal) | Violet moyen | `#7A6B9E` |
| CTA hover | Violet profond | `#5E5280` |

**Règle d'utilisation :**
- Fond : blanc cassé dominant, sections alternées en lavande pâle ou vert très pâle
- Violet : titres principaux, boutons, accents
- Vert : éléments secondaires, icônes, séparateurs, listes
- Jamais de noir pur, jamais de blanc pur

---

## Typographie

### Titres (display)
**Cormorant Garamond** — élégant, organique, légèrement littéraire  
→ Source Google Fonts : `Cormorant Garamond` (weights 400, 500, 600)

### Corps de texte
**Lato** — lisible, doux, humain, neutre sans être froid  
→ Source Google Fonts : `Lato` (weights 300, 400)

### Tailles recommandées
| Élément | Taille |
|---|---|
| H1 (hero) | 3rem à 3.5rem |
| H2 (sections) | 2rem à 2.2rem |
| H3 | 1.3rem |
| Corps | 1rem à 1.1rem |
| Petits textes / mentions | 0.85rem |

**Interlignage** : généreux (1.7 à 1.9 pour le corps) — favorise la lecture apaisée.

---

## Style visuel

### Direction artistique
**Chaleureux, humain et organique.**

- Formes arrondies (border-radius généreux sur les cartes, boutons, images)
- Beaucoup d'espace blanc / respiration entre les sections
- Textures légères possibles (grain subtil en overlay, pas de motifs chargés)
- Pas de lignes rigides ni de grilles trop strictes — légère asymétrie bienvenue
- Illustrations ou formes vectorielles douces si besoin (feuilles, cercles, vagues)

### Ce qu'on évite absolument
- Gradients violets saturés sur fond blanc (cliché du secteur bien-être)
- Stock photos génériques (femme méditant les yeux fermés en HD)
- Mise en page trop corporate / clinique
- Animations intrusives ou trop rapides
- Effets trop chargés qui alourdissent le ressenti

### Animations
- Apparition douce des sections au scroll (fade-in + légère montée, `opacity` + `translateY`)
- Transition hover sur les boutons (couleur + légère élévation)
- Tout doit rester lent et calme — vitesse d'animation : 0.4s à 0.6s, easing `ease-out`

---

## Ton éditorial

### Valeurs à transmettre
- Bienveillance
- Professionnalisme sans froideur
- Accessibilité (pas de jargon technique)
- Douceur et humanité

### Style d'écriture
- Phrases courtes, directes, apaisantes
- Vouvoiement systématique
- Parler au visiteur, pas à lui — s'adresser à ce qu'il ressent
- Éviter : "je suis experte", "méthode révolutionnaire", superlatifs creux
- Privilégier : "je vous accompagne", "ensemble", "à votre rythme", "en toute confiance"

### Exemple de ton (accroche hero)
> "Et si vous faisiez confiance à votre capacité de changement ?"  
> "Un accompagnement doux, à votre rythme, pour retrouver l'équilibre."

---

## Composants UI

### Boutons
- Coins arrondis (`border-radius: 50px`)
- Fond violet primaire, texte blanc
- Hover : fond violet profond + légère ombre douce
- Padding généreux : `14px 32px`

### Cartes / blocs de contenu
- Fond blanc cassé ou lavande très pâle
- Border-radius : 16px à 20px
- Ombre très légère et diffuse (`box-shadow: 0 4px 24px rgba(0,0,0,0.06)`)
- Pas de bordures dures

### Séparateurs de sections
- Pas de lignes horizontales — utiliser des changements de fond subtils
- Possibilité d'une forme SVG douce (vague, courbe) entre certaines sections

### Icônes
- Style ligne fine (ex : Lucide Icons ou Heroicons)
- Couleur vert sauge ou violet doux selon contexte
- Taille cohérente (24px en général)

---

## Photo de Pascale

- Traitement : légèrement réchauffé, doux, pas trop contrasté
- Cadrage : portrait ou mi-corps, fond neutre ou naturel
- Intégration : forme arrondie (cercle ou ovale) ou légère découpe organique
- Pas d'effet clinique / professionnel froid

---

## Responsive

- Mobile-first
- Navigation : menu burger sur mobile, ancres lisses
- Sections : une colonne sur mobile, deux colonnes possibles sur desktop pour certaines sections (Qui suis-je, Tarifs)
- Taille de police body minimum : 16px sur mobile
- Touch targets minimum : 44px

---

## Performance

- Images en `.webp` de préférence, max 300-400 Ko chacune
- Google Fonts chargées avec `display=swap`
- Pas de framework CSS lourd (pas de Bootstrap) — CSS custom variables
- JS minimal, vanilla uniquement (scroll animations légères)
- Objectif : score Lighthouse > 90 sur mobile

---

## Fichiers à prévoir dans le projet

```
/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── photo-pascale.jpg        ← photo provisoire
│   └── favicon.ico / favicon.svg
└── README.md
```
