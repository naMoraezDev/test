import present from '../images/svg/gift-icon.svg';
import presentinho from '../images/svg/eyas-banner.svg';

// const giftboxMock = {
//   hasCampaign: true,
//   hash: "12346",
//   categorySlugPage: ["ALL"], // show in all category or array with some categorys
//   dataCampaign: [
//     {
//       id: 1,
//       name: "campanha 1",
//       slugCampaign: "campanha-1",
//       linkCampaign: "http://lance.com.br",
//       categorySlugCampaign: ["ALL"], // show in all category or array with some categorys
//       description: "alguma descrição",
//       icon: {
//         url: present,
//         alt: "presente",
//       },
//       date: {
//         start: "01/01/2023",
//         end: "05/01/2023",
//       },
//       mediaData: {
//         type: "image", // video or image file
//         url: presentinho,
//         alt: "algum texto alternativo",
//       },
//     },
//     {
//       id: 2,
//       name: "campanha 2",
//       slugCampaign: "campanha-2",
//       linkCampaign: "http://lance.com.br/lancebiz",
//       categorySlugCampaign: ["ALL"], // show in all category or array with some categorys
//       description: "alguma descrição",
//       icon: {
//         url: bell,
//         alt: "sino",
//       },
//       date: {
//         start: "02/01/2023",
//         end: "06/01/2023",
//       },
//       mediaData: {
//         type: "image", // video or image file
//         url: presentinho2,
//         alt: "algum texto alternativo",
//       },
//     },
//     {
//       id: 3,
//       name: "campanha 3",
//       slugCampaign: "campanha-3",
//       linkCampaign: "http://lance.com.br/resenha-de-apostas",
//       categorySlugCampaign: ["ALL"], // show in all category or array with some categorys
//       description: "alguma descrição",
//       icon: {
//         url: food,
//         alt: "prato de comida",
//       },
//       date: {
//         start: "01/01/2023",
//         end: "07/01/2023",
//       },
//       mediaData: {
//         type: "image", // video or image file
//         url: presentinho,
//         alt: "algum texto alternativo",
//       },
//     },
//     {
//       id: 4,
//       name: "campanha 4",
//       slugCampaign: "campanha-4",
//       linkCampaign: "http://lance.com.br/flamengo",
//       categorySlugCampaign: ["ALL"], // show in all category or array with some categorys
//       description: "alguma descrição",
//       icon: {
//         url: beer,
//         alt: "caneca de cerveja",
//       },
//       date: {
//         start: "01/01/2023",
//         end: "05/01/2023",
//       },
//       mediaData: {
//         type: "image", // video or image file
//         url: presentinho2,
//         alt: "algum texto alternativo",
//       },
//     },
//     {
//       id: 5,
//       name: "campanha 5",
//       slugCampaign: "campanha-5",
//       linkCampaign: "http://lance.com.br/fluminense",
//       categorySlugCampaign: ["ALL"], // show in all category or array with some categorys
//       description: "alguma descrição",
//       icon: {
//         url: food,
//         alt: "prato de comida",
//       },
//       date: {
//         start: "01/01/2023",
//         end: "05/01/2023",
//       },
//       mediaData: {
//         type: "image", // video or image file
//         url: presentinho,
//         alt: "algum texto alternativo",
//       },
//     },
//   ],
// };

const giftboxMock = {
  hasCampaign: true,
  hash: '12346',
  categorySlugPage: ['resenha-de-apostas'], // show in all category or array with some categorys
  dataCampaign: [
    {
      id: 45,
      name: 'campanha 45',
      slugCampaign: 'campanha-45',
      linkCampaign: 'http://lance.com.br/flamengo',
      categorySlugCampaign: ['ALL'], // show in all category or array with some categorys
      description: 'alguma descrição',
      icon: {
        url: present,
        alt: 'caneca de cerveja',
      },
      date: {
        start: '01/01/2023',
        end: '05/01/2023',
      },
      mediaData: {
        type: 'image', // video or image file
        url: presentinho,
        alt: 'algum texto alternativo',
      },
    },
  ],
};

export { giftboxMock };
