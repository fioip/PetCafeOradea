import imgMira from "../assets/photos/mira/mira.jpg";
import imgKira from "../assets/photos/kira/kira.jpg";
import imgTiramisu from "../assets/photos/tiramisu/tiramisu.jpg";
import imgAsh from "../assets/photos/ash/ash.jpg";
import imgDaisy from "../assets/photos/daisy/daisy.jpeg";
import imgChili from "../assets/photos/chili/chili.jpg";
import imgWinnie from "../assets/photos/winnie/winnie.jpeg";
import imgWendy from "../assets/photos/wendy/wendy.jpeg";
import imgMisu from "../assets/photos/misu/misu.jpg";
import imgBaghera from "../assets/photos/baghera/baghera.jpg";

// Import dinamic pentru Mira
const imaginiMira = import.meta.glob('../assets/photos/mira/*.{jpg,jpeg,png}', { eager: true });
const imaginiMiraArray = Object.values(imaginiMira).map(module => module.default);
const additionalImagesMira = imaginiMiraArray.filter(img => img !== imgMira);

// Import dinamic pentru Kira
const imaginiKira = import.meta.glob('../assets/photos/kira/*.{jpg,jpeg,png}', { eager: true });
const imaginiKiraArray = Object.values(imaginiKira).map(module => module.default);
const additionalImagesKira = imaginiKiraArray.filter(img => img !== imgKira);

// Import dinamic pentru Tiramisu
const imaginiTiramisu = import.meta.glob('../assets/photos/tiramisu/*.{jpg,jpeg,png}', { eager: true });
const imaginiTiramisuArray = Object.values(imaginiTiramisu).map(module => module.default);
const additionalImagesTiramisu = imaginiTiramisuArray.filter(img => img !== imgTiramisu);

// Import dinamic pentru Ash
const imaginiAsh = import.meta.glob('../assets/photos/ash/*.{jpg,jpeg,png}', { eager: true });
const imaginiAshArray = Object.values(imaginiAsh).map(module => module.default);
const additionalImagesAsh = imaginiAshArray.filter(img => img !== imgAsh);

// Import dinamic pentru Misu
const imaginiMisu = import.meta.glob('../assets/photos/misu/*.{jpg,jpeg,png}', { eager: true });
const imaginiMisuArray = Object.values(imaginiMisu).map(module => module.default);
const additionalImagesMisu = imaginiMisuArray.filter(img => img !== imgMisu);

// Import dinamic pentru Baghera
const imaginiBaghera = import.meta.glob('../assets/photos/baghera/*.{jpg,jpeg,png}', { eager: true });
const imaginiBagheraArray = Object.values(imaginiBaghera).map(module => module.default);
const additionalImagesBaghera = imaginiBagheraArray.filter(img => img !== imgBaghera);

// Import dinamic pentru Daisy
const imaginiDaisy = import.meta.glob('../assets/photos/daisy/*.{jpg,jpeg,png}', { eager: true });
const imaginiDaisyArray = Object.values(imaginiDaisy).map(module => module.default);
const additionalImagesDaisy = imaginiDaisyArray.filter(img => img !== imgDaisy);

// Import dinamic pentru Chili
const imaginiChili = import.meta.glob('../assets/photos/chili/*.{jpg,jpeg,png}', { eager: true });
const imaginiChiliArray = Object.values(imaginiChili).map(module => module.default);
const additionalImagesChili = imaginiChiliArray.filter(img => img !== imgChili);

// Import dinamic pentru Wendy
const imaginiWendy = import.meta.glob('../assets/photos/wendy/*.{jpg,jpeg,png}', { eager: true });
const imaginiWendyArray = Object.values(imaginiWendy).map(module => module.default);
const additionalImagesWendy = imaginiWendyArray.filter(img => img !== imgWendy);

// Import dinamic pentru Winnie
const imaginiWinnie = import.meta.glob('../assets/photos/winnie/*.{jpg,jpeg,png}', { eager: true });
const imaginiWinnieArray = Object.values(imaginiWinnie).map(module => module.default);
const additionalImagesWinnie = imaginiWinnieArray.filter(img => img !== imgWinnie);

export const Mira = [
  {
    animalTitle: "Mira",
    imgURL: imgMira,
    smallText: "Sunt o domnisoara din rasa british shorthair, foarte calma, ador somnul si pliculețele...",
    denumire:
      "Sunt o domnisoara din rasa british shorthair, foarte calma, ador somnul si pliculețele. (Da, eu sunt pisicuta care adoarme pe spate intotdeauna).",
    additionalImages: additionalImagesMira,
  },
];

export const Kira = [
  {
    animalTitle: "Kira",
    imgURL: imgKira,
    smallText: "Sunt o fetita din rasa british shorthair, prietenoasa de obicei dar am si eu toanele mele, evident...",
    denumire:
      "Sunt o fetita din rasa british shorthair, prietenoasa de obicei dar am si eu toanele mele, evident. Imi place sa ma joc cu ghiozdanele clientilor si adorm mereu pe mese. P.S.: daca iti lasi cappuccino-ul nesupravegheat mai mult de 3 secunde fii sigur ca-l voi ataca!",
    additionalImages: additionalImagesKira,
  },
];

export const Tiramisu = [
  {
    animalTitle: "Tiramisu",
    imgURL: imgTiramisu,
    smallText: "Sunt o fetita din rasa Siameza, foarte iubitoare si jucausa. Adorm mereu in pătuțul cațeilor si nimeni ma poate...",
    denumire:
      "Sunt o fetita din rasa Siameza, foarte iubitoare si jucausa. Adorm mereu in pătuțul cațeilor si nimeni ma poate opri din a face asta!",
    additionalImages: additionalImagesTiramisu,
  },
];

export const Ash = [
  {
    animalTitle: "Ash",
    imgURL: imgAsh,
    smallText: "Eu sunt un motanel persan, evident prințul din local. Motto-ul meu in viata e “ai pliculet stau, n-ai pliculet ceau”...",
    denumire:
      "Eu sunt un motanel persan, evident prințul din local. Motto-ul meu in viata e “ai pliculet stau, n-ai pliculet ceau”. Imi plac la nebunie jucariile si mângăierea sub bărbiță. ",
    additionalImages: additionalImagesAsh,
  },
];

export const Misu = [
  {
    animalTitle: "Misu",
    imgURL: imgMisu,
    smallText: "Salut, numele meu este Mișu, sunt un motănel din rasa norvegiană de pădure, foarte jucaus si activ...",
    denumire:
      "Salut, numele meu este Mișu, sunt un motănel din rasa norvegiană de pădure, foarte jucaus si activ. Daca ar fi sa-mi gasesc un defect, acesta ar fi faptul ca sunt foarte curios…chiar prea curios uneori. Eu si Ash ne luptăm pentru titulatura de împărat al cafenelei zi de zi. Promit ca dacă voi fi ales președinte, voi exila toți câinii pe Marte.",
    additionalImages: additionalImagesMisu,
  },
];

export const Baghera = [
  {
    animalTitle: "Baghera",
    imgURL: imgBaghera,
    smallText: "Această pisică adoră să fie în centrul atenției și să primească alinturi. Se va așeza lângă tine pe canapea...",
    denumire:
      "Această pisică adoră să fie în centrul atenției și să primească alinturi. Se va așeza lângă tine pe canapea sau îți va „cerși” atenția prin frecarea ușoară a botului. Este perfectă pentru cei care caută o companie afectuoasă și devotată.",
    additionalImages: additionalImagesBaghera,
  },
];

export const Daisy = [
  {
    animalTitle: "Daisy",
    imgURL: imgDaisy,
    smallText: "Sunt o fetita din rasa Pomeranian, jucausa si blanda, dar nu cu toata lumea...",
    denumire:
      "Sunt o fetita din rasa Pomeranian, jucausa si blanda, dar nu cu toata lumea! Daca dorm, va rog sa ma lasati sa-mi fac semnul de frumusete ca altfel s-a zis cu voi!",
    additionalImages: additionalImagesDaisy,
  },
];

export const Chili = [
  {
    animalTitle: "Chili",
    imgURL: imgChili,
    smallText: "Sunt o fetita din rasa Pug, jucausa si foarte energica, dar si somnul e pe masura...",
    denumire:
      "Sunt o fetita din rasa Pug, jucausa si foarte energica, dar si somnul e pe masura!",
    additionalImages: additionalImagesChili,
  },
];

export const Wendy = [
  {
    animalTitle: "Wendy",
    imgURL: imgWendy,
    smallText: "Suntem doua surori din rasa Teckel, foarte jucause si adormim mereu impreuna...",
    denumire:
      "Suntem doua surori din rasa Teckel, foarte jucause si adormim mereu impreuna. Ne plac gustarile si sa ne jucam cu pisicutele!",
    additionalImages: additionalImagesWendy,
  },
];

export const Winnie = [
  {
    animalTitle: "Winnie",
    imgURL: imgWinnie,
    smallText: "Suntem doua surori din rasa Teckel, foarte jucause si adormim mereu impreuna...",
    denumire:
      "Suntem doua surori din rasa Teckel, foarte jucause si adormim mereu impreuna. Ne plac gustarile si sa ne jucam cu pisicutele!",
    additionalImages: additionalImagesWinnie,
  },
];