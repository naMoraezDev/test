/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */

const template = document.createElement('template');

template.innerHTML = `
    <span id="odds"><a href="url" target="lancebet"></a></span>
  `;

class Odds extends HTMLElement {
  affiliateId = 'AY2838324479';

  // Do not edit anyething below this line
  nonProdUrl = 'https://graphql.cts.kambicdn.com';

  prodUrl = 'https://graphql.kambicdn.com';

  nonProdTarget = 'https://lancebet-com-uat.eyasgaming.net/home';

  prodTarget = 'https://www.lancebetting.com/home';

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.url = this.prod ? this.prodUrl : this.nonProdUrl;
    this.target = this.prod ? this.prodTarget : this.nonProdTarget;
  }

  get id() {
    return this.getAttribute('id');
  }

  get prod() {
    const isProd = this.getAttribute('prod');

    return isProd === null || isProd === 'true';
  }

  connectedCallback() {
    this.$odds = this._shadowRoot.querySelector('a');
    this.$odds.innerHTML = '';
    this.$odds.href = `${this.target}?affiliateId=${this.affiliateId}`;
    this.getOdds(this.id);
    this.$odds.style = 'text-decoration:none;color:#ffffff;';
  }

  getOdds(id) {
    const data = JSON.stringify({
      query: `
        query Outcome {
          outcomes(offering: "eyasgamingbr", market: "BR", outcomeIds: "${id}") {
            outcomes {
              odds
              status
            }
          }
        }`,
    });

    let currentElement = document.getElementById(this.id);

    for (let i = 0; i < 2; i++) {
      currentElement = currentElement.parentElement;
    }

    if (currentElement.tagName !== 'DIV') {
      currentElement = currentElement.parentElement;
    }

    const response = fetch(this.url, {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        Authorization: 'eyas_gaming',
      },
    })
      .then(response => response.json())
      .then(data =>
        this.renderPrice(data.data.outcomes.outcomes[0].odds, currentElement),
      )
      .catch(error => {
        currentElement.textContent = '';
      });
  }

  renderPrice(price, element) {
    setTimeout(() => {
      element.classList.remove('hidden');
    }, 1000);
    this.$odds.innerHTML = (Number(price) / 1000).toFixed(2).toLocaleString();
    this.$odds.href = `${this.target}?affiliateId=${this.affiliateId}&coupon=single|${this.id}||append|lance`;
  }
}

window.customElements.define('inline-odds', Odds);
