export default async function getGiftboxData(slug = '') {
const myHeaders = new Headers({ origin: process.env.NEXT_PUBLIC_URL });

const requestOptions = {
method: 'GET',
mode: 'cors',
headers: myHeaders,
redirect: 'follow',
};

const result = await fetch(
`${process.env.PUBLIC_API_GIFTBOX}/giftbox${slug ? `/${slug}` : ''}`,
requestOptions,
);

const response = await result.json();

if (response.status === 503) {
console.log('Api returned 503 status code');
}

return response;
}
