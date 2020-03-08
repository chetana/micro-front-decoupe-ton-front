# Microdex - Le micro pokedex

## Step 1 - Mon Web Component à la vanille

### Step 1.1 - Transformer la Poke List en Web Component
La structure d'un Web Component est comme ci :
```javascript
class MyElement extends HTMLElement {
    constructor() { } // Appelé lors de la création de l'élément

    connectedCallback() {} // appelé lorsque l'élément personnalisé est connecté pour la première fois au DOM du document ;

    disconnectedCallback() {} // appelé lorsque l'élément personnalisé est déconnecté du DOM du document ;

    adoptedCallback() {} // appelé lorsque l'élément personnalisé est déplacé vers un nouveau document ;

    attributeChangedCallback() {} // appelé lorsque l'un des attributs de l'élément personnalisé est ajouté, supprimé ou modifié.
}
window.customElements.define("my-element", MyElement);
```

Un changement s'est produit dans l'index.html. 
Nous avons remplacé le div contenant la liste pokémon par le composant poke-list.

Adapter le code pour que le fichier poke-list.js soit un Web Component qui lors de la création du composant fait les manipulation HTML faite précédement dans main.js

### Step 1.2 J'ai perdu le style

En transformant notre liste en Web Component nous n'avons plus accès au ressource parent.

Utiliser les template pour ajouter le css du main.css dans le Web Component

## Passer à l'étape 2
```
git checkout step-2
```
