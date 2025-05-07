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
    smallText: "Sunt o domnișoară din rasa british shorthair, foarte calmă, ador somnul și pliculețele...",
    denumire:
      "Sunt o domnișoară din rasa british shorthair, foarte calmă, ador somnul și pliculețele. (Da, eu sunt pisicuță care adoarme pe spate întotdeauna).",
    additionalImages: additionalImagesMira,
  },
];

export const Kira = [
  {
    animalTitle: "Kira",
    imgURL: imgKira,
    smallText: "Sunt o fetiță din rasa british shorthair, prietenoasă de obicei dar am și eu toanele mele, evident...",
    denumire:
      "Sunt o fetiță din rasa british shorthair, prietenoasă de obicei dar am și eu toanele mele, evident. Îmi place să mă joc cu ghiozdanele clienților și adorm mereu pe mese. P.S.: dacă îți lași cappuccino-ul nesupravegheat mai mult de 3 secunde fii sigur că-l voi ataca!",
    additionalImages: additionalImagesKira,
  },
];

export const Tiramisu = [
  {
    animalTitle: "Tiramisu",
    imgURL: imgTiramisu,
    smallText: "Sunt o fetiță din rasa Siameza, foarte iubitoare și jucăușă. Adorm mereu în pătuțul cățeilor și nimeni mă poate...",
    denumire:
      "Sunt o fetiță din rasa Siameza, foarte iubitoare și jucaușă. Adorm mereu în pătuțul cățeilor si nimeni mă poate opri din a face asta!",
    additionalImages: additionalImagesTiramisu,
  },
];

export const Ash = [
  {
    animalTitle: "Ash",
    imgURL: imgAsh,
    smallText: "Eu sunt un motănel persan, evident prințul din local. Motto-ul meu în viață e “ai pliculeț stau, n-ai pliculeț ceau”...",
    denumire:
      "Eu sunt un motănel persan, evident prințul din local. Motto-ul meu în viață e “ai pliculeț stau, n-ai pliculeț ceau”. Îmi plac la nebunie jucăriile și mângăierea sub bărbiță. ",
    additionalImages: additionalImagesAsh,
  },
];

export const Misu = [
  {
    animalTitle: "Misu",
    imgURL: imgMisu,
    smallText: "Salut, numele meu este Mișu, sunt un motănel din rasa norvegiană de pădure, foarte jucăuș și activ...",
    denumire:
      "Salut, numele meu este Mișu, sunt un motănel din rasa norvegiană de pădure, foarte jucăus și activ. Dacș ar fi să-mi găsesc un defect, acesta ar fi faptul că sunt foarte curios…chiar prea curios uneori. Eu și Ash ne luptăm pentru titulatura de împărat al cafenelei zi de zi. Promit că dacă voi fi ales președinte, voi exila toți câinii pe Marte.",
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
    smallText: "Sunt o fetiță din rasa Pomeranian, jucaușă și blândă, dar nu cu toata lumea...",
    denumire:
      "Sunt o fetiță din rasa Pomeranian, jucaușă și blandă, dar nu cu toata lumea! Dacă dorm, vă rog să mă lasați să-mi fac somnul de frumusețe că altfel s-a zis cu voi!",
    additionalImages: additionalImagesDaisy,
  },
];

export const Chili = [
  {
    animalTitle: "Chili",
    imgURL: imgChili,
    smallText: "Sunt o fetiță din rasa Pug, jucaușă și foarte energică, dar și somnul e pe măsură...",
    denumire:
      "Sunt o fetiță din rasa Pug, jucaușă și foarte energică, dar și somnul e pe măsură!",
    additionalImages: additionalImagesChili,
  },
];

export const Wendy = [
  {
    animalTitle: "Wendy",
    imgURL: imgWendy,
    smallText: "Suntem două surori din rasa Teckel, foarte jucaușe și adormim mereu împreună...",
    denumire:
      "Suntem doua surori din rasa Teckel, foarte jucaușe și adormim mereu împreună. Ne plac gustările și să ne jucăm cu pisicuțele!",
    additionalImages: additionalImagesWendy,
  },
];

export const Winnie = [
  {
    animalTitle: "Winnie",
    imgURL: imgWinnie,
    smallText: "Suntem două surori din rasa Teckel, foarte jucaușe și adormim mereu împreună...",
    denumire:
      "Suntem doua surori din rasa Teckel, foarte jucaușe și adormim mereu împreună. Ne plac gustările și să ne jucăm cu pisicuțele!",
    additionalImages: additionalImagesWinnie,
  },
];