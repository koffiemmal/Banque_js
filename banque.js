let Banque = []

let sectionListes = document.querySelector(".listComptes")
let divEpargne = document.querySelector(`.Epargne`)
let divCourant = document.querySelector(`.Courant`)
let divGold = document.querySelector(`.Gold`)


let AjoutBtn = document.querySelector(`.Ajout`)

class Compte{

    constructor(id,nom,prenom,age,profession,typeCompte){
        this.id= id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.profession = profession;
        this.typeCompte= typeCompte;
    }
    solde = 0;

    crediter(montantAjouter){

        this.solde +=montantAjouter;

    }

    transaction(id_recepteur){

let montantAEnvoyer = Number(prompt("entrer le montant a envoyer "))

if(montantAEnvoyer>this.solde){
    alert("votre compte ne contient pas cette somme")
    return;
}
switch (this.typeCompte) {
    case "Epargne":
    
    if((montantAEnvoyer+(montantAEnvoyer*0.05))>this.solde)
    {
        alert("votre somme contient la somme mais les frais d'envoie bloque le transfert")
        return;
    }else{

        this.solde-=montantAEnvoyer+(montantAEnvoyer*0.05);
        for(let a of Banque){
            if(a.id == id_recepteur){
                a.solde+=montantAEnvoyer

                Affichage()
            }
        }
    }

        break;
        case "Courant":
    
        if((montantAEnvoyer+(montantAEnvoyer*0.03))>this.solde)
        {
            alert("votre somme contient la somme mais les frais d'envoie bloque le transfert")
            return;
        }else{
    
            this.solde-=montantAEnvoyer+(montantAEnvoyer*0.03);
            for(let a of Banque){
                if(a.id == id_recepteur){
                    a.solde+=montantAEnvoyer
                    
                    Affichage()
                }
            }
        }
    
            break;
            case "Gold":
    
            if((montantAEnvoyer+(montantAEnvoyer*0.02))>this.solde)
            {
                alert("votre somme contient la somme mais les frais d'envoie bloque le transfert")
                return;
            }else{
        
                this.solde-=montantAEnvoyer+(montantAEnvoyer*0.02);
                for(let a of Banque){
                    if(a.id == id_recepteur){
                        a.solde+=montantAEnvoyer
                        
                        Affichage()
                    }
                }
            }
        
                break;

    default:
        break;
}


    }

}


Affichage=()=>{
    if(Banque.length<0){
        console.log("vide")
        return;
    }
    

    divEpargne.innerHTML="<h2>Epargne</h2>";
    divCourant.innerHTML="<h2>Courant</h2>";
    divGold.innerHTML="<h2>Gold</h2>";

    for(let option of Banque){


        if(option.typeCompte == "Epargne"){

           

    let idArticle = document.createElement("article")

    let nomArticle = document.createElement("article")
    
    let prenomArticle = document.createElement("article")

    let ageArticle = document.createElement("article")

    let professionArticle = document.createElement("article")

    let typeCompteArticle = document.createElement("article")

    let soldeArticle = document.createElement("article")

    let CrediterBtn = document.createElement("button")

    let TransactionBtn = document.createElement("button")

    idArticle.textContent = `ID ${option.id}`
    
    nomArticle.textContent = `Nom    :${option.nom}`;
    
    prenomArticle.textContent = `Prenom    :${option.prenom}`;
    
    ageArticle.textContent = `Age   :${option.age}`;
    
    professionArticle.textContent = `Profession    :${option.profession}`;
    
    typeCompteArticle.textContent = `Type de Compte    :${option.typeCompte}`;
    
    soldeArticle.textContent = ` Solde     : ${option.solde}$`;
    
    CrediterBtn.textContent ="crediter"

    TransactionBtn.textContent="transaction"
    
    divEpargne.appendChild(typeCompteArticle)

    divEpargne.appendChild(idArticle)
    
    divEpargne.appendChild(nomArticle)
    
    divEpargne.appendChild(prenomArticle)
    
    divEpargne.appendChild(ageArticle)
    
    divEpargne.appendChild(professionArticle)
    
    divEpargne.appendChild(soldeArticle)

  
    
    CrediterBtn.addEventListener("click",(e)=>{
    
    let Credit = Number(prompt("quel est le montant du credit"))
    
        option.crediter(Credit)
    
        Affichage()
    
    })
divEpargne.appendChild(CrediterBtn)

TransactionBtn.addEventListener("click",(e)=>{
    let iddestinataire = Number(prompt("entrer l'ID du destinataire"))

    option. transaction(iddestinataire)

})
divEpargne.appendChild(TransactionBtn)





    }

   if(option.typeCompte == "Courant"){

      

let idArticle = document.createElement("article")

let nomArticle = document.createElement("article")

let prenomArticle = document.createElement("article")

let ageArticle = document.createElement("article")

let professionArticle = document.createElement("article")

let typeCompteArticle = document.createElement("article")

let soldeArticle = document.createElement("article")

let CrediterBtn = document.createElement("button")

let TransactionBtn = document.createElement("button")

CrediterBtn.textContent ="crediter"

idArticle.textContent = `ID ${option.id}`

nomArticle.textContent = `Nom    :${option.nom}`;

prenomArticle.textContent = `Prenom    :${option.prenom}`;

ageArticle.textContent = `Age   :${option.age}`;

professionArticle.textContent = `Profession    :${option.profession}`;

typeCompteArticle.textContent = `Type de Compte    :${option.typeCompte}`;

soldeArticle.textContent = ` Solde     : ${option.solde}$`;

TransactionBtn.textContent="transaction"




divCourant.appendChild(typeCompteArticle)

divCourant.appendChild(idArticle)

divCourant.appendChild(nomArticle)

divCourant.appendChild(prenomArticle)

divCourant.appendChild(ageArticle)

divCourant.appendChild(professionArticle)

divCourant.appendChild(soldeArticle)

 CrediterBtn.addEventListener("click",(e)=>{
    
    let Credit = Number(prompt("quel est le montant du credit"))
    
        option.crediter(Credit)
    
        Affichage()
    
    })

divCourant.appendChild(CrediterBtn)


TransactionBtn.addEventListener("click",(e)=>{
    let iddestinataire = Number(prompt("entrer l'ID du destinataire"))

    option. transaction(iddestinataire)

})
divCourant.appendChild(TransactionBtn)




}

   
if(option.typeCompte == "Gold"){


      let idArticle = document.createElement("article")

let nomArticle = document.createElement("article")

let prenomArticle = document.createElement("article")

let ageArticle = document.createElement("article")

let professionArticle = document.createElement("article")

let typeCompteArticle = document.createElement("article")

let soldeArticle = document.createElement("article")

let CrediterBtn = document.createElement("button")

  let TransactionBtn = document.createElement("button")

CrediterBtn.textContent ="crediter"

TransactionBtn.textContent="transaction"


idArticle.textContent = `ID ${option.id}`

nomArticle.textContent = `Nom    :${option.nom}`;

prenomArticle.textContent = `Prenom    :${option.prenom}`;

ageArticle.textContent = `Age   :${option.age}`;

professionArticle.textContent = `Profession    :${option.profession}`;

typeCompteArticle.textContent = `Type de Compte    :${option.typeCompte}`;

soldeArticle.textContent = ` Solde     : ${option.solde}$`;


CrediterBtn.addEventListener("click",(e)=>{

    let Credit = Number(prompt("quel est le montant du credit"))
    
        option.crediter(Credit)
    
        Affichage()
    
    })

TransactionBtn.addEventListener("click",(e)=>{
    let iddestinataire = Number(prompt("entrer l'ID du destinataire"))

    option. transaction(iddestinataire)

})


divGold.appendChild(typeCompteArticle)

divGold.appendChild(idArticle)

divGold.appendChild(nomArticle)

divGold.appendChild(prenomArticle)

divGold.appendChild(ageArticle)

divGold.appendChild(professionArticle)

divGold.appendChild(soldeArticle)

divGold.appendChild(CrediterBtn)

divGold.appendChild(TransactionBtn)

} 
 

        }



}



AjoutBtn.addEventListener("click",(e)=>{

    let nom = prompt("entrer votre nom");
    let prenom = prompt("entrer votre prenom")
    let age = Number(prompt("entrer votre age"))
    let profession = prompt("entrer votre profession")
    let typeCompte = prompt("a quel type de compte souscriver vous ?!\n 1-) Epargne \n 2-)Courant \n 3-)Gold")

    while(typeCompte != 1 && typeCompte !=2 && typeCompte!=3)
    {
        typeCompte = prompt("a quel type de compte souscriver vous ?!\n 1-) Epargne \n 2-)Courant \n 3-)Gold")
    }
    switch (typeCompte) {
        case `1`:
            Banque.push(new Compte(Banque.length+1,nom,prenom,age,profession,"Epargne"))

            break;
            case `2`:
                Banque.push(new Compte(Banque.length+1,nom,prenom,age,profession,"Courant"))
                break;
                case `3`:
                    Banque.push(new Compte(Banque.length+1,nom,prenom,age,profession,"Gold"))
                    break;
    
        default:
            break;
    }

    console.log(typeCompte)

Affichage()
})

