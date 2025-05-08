const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const el = document.querySelector(".gallery");

const img1 = document.createElement('img');
img1.src = images[0].url;                     
img1.alt = images[0].alt;                     
const img2 = document.createElement('img');
img2.src = images[1].url;                     
img2.alt = images[1].alt;                     
const img3 = document.createElement('img');
img3.src = images[2].url;                     
img3.alt = images[2].alt;                     
const img4 = document.createElement('img');
img4.src = images[3].url;                     
img4.alt = images[3].alt;                     
const img5 = document.createElement('img');
img5.src = images[4].url;                     
img5.alt = images[4].alt;  
const img6 = document.createElement('img');
img6.src = images[5].url;                     
img6.alt = images[5].alt;  

el.append(img1, img2, img3, img4, img5, img6);
