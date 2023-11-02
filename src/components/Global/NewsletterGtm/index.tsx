import Image from 'next/image';
import { BLUR_DATA_URL } from '@/constants/common';
import newsletter from '../../../assets/images/png/newsletter.png';

export function NewsletterGtm() {
  return (
    <>
      <style global jsx>{`
        #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
          .bricks--column
          > div {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
          .bricks--component-text {
          display: none !important;
        }

        #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
          .bricks--column {
          width: 100% !important;
        }

        #bricks-component-4CRugUBonMaqURkEHRpKwQ {
          width: 100% !important;
        }

        #rd-column-le3cm01r > div {
          background-color: transparent;
          background-image: none !important;
        }

        #rd-row-le3cm01o .bricks--column > div {
          padding: 24px !important;
        }

        #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
          .bricks-form {
          margin-bottom: 0 !important;
          margin: 0 !important;
        }

        #rd-row-le3cm01o .bricks--column > div {
          width: 100% !important;
        }

        #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
          form {
          display: flex !important;
          align-items: end !important;
          flex-direction: row !important;
        }

        #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
          .bricks-form__input.error {
          bottom: -14px !important;
          position: relative !important;
        }

        #rd-form-le3cm01t label.error {
          bottom: -14px !important;
          position: relative !important;
        }

        #rd-button-le3cm01w {
          width: 151px !important;
          height: 72px !important;
          bottom: 12px !important;
          color: #031e10 !important;
          font-size: 20px !important;
          max-width: 151px !important;
          margin-left: 24px !important;
          font-weight: bold !important;
          border-radius: 8px !important;
          position: relative !important;
          font-family: Roboto !important;
          background-color: #ffff00 !important;
        }

        #rd-button-le3cm01w:after {
          content: 'e-mail';
        }

        #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
          .bricks-form__submit {
          width: fit-content !important;
        }

        #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
          h2 {
          display: none;
        }

        #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
          p {
          display: none;
        }

        #rd-form-le3cm01t .bricks-form__input:not(textarea) {
          height: 72px !important;
          font-size: 20px !important;
          border-radius: 8px !important;
          font-family: Roboto !important;
          width: 100% !important;
        }

        #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
          .bricks-form__fieldset {
          margin: 0 !important;
        }

        #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
          .bricks-form {
          padding: 0 !important;
        }

        .bricks-form__label {
          color: #979797;
        }

        #rd-form-le3cm01t:before {
          left: -5px !important;
          color: white !important;
          font-size: 48px !important;
          font-weight: bold !important;
          margin-bottom: 8px !important;
          position: relative !important;
          content: 'News do Lance!';
          line-height: normal !important;
          font-family: var(--font-work-sans) !important;
        }

        #rd-form-le3cm01t .bricks-form__field:before {
          color: white !important;
          font-size: 20px !important;
          line-height: 32px !important;
          font-family: Roboto !important;
          font-weight: normal !important;
          margin-bottom: 16px !important;
          content: 'Receba boletins diários no seu e-mail para ficar por dentro do que rola no mundo dos esportes e no seu time do coração!';
        }

        @media (max-width: 1366px) {
          #rd-form-le3cm01t:before {
            font-size: 32px !important;
          }

          #rd-form-le3cm01t .bricks-form__field:before {
            font-size: 16px !important;
            line-height: normal !important;
          }

          #rd-form-le3cm01t .bricks-form__input:not(textarea) {
            height: 47px !important;
          }

          #rd-button-le3cm01w {
            height: 47px !important;
            font-size: 16px !important;
          }

          #rd-form-le3cm01t .bricks-form__input:not(textarea) {
            font-size: 16px !important;
          }
        }

        @media (max-width: 430px) {
          #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
            form {
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }

          #rd-button-le3cm01w {
            width: 100% !important;
            margin-left: 0 !important;
            max-width: 100% !important;
            margin-top: 24px !important;
          }

          #rdstation-bricks-embeddable-form-bricks-component-4CRugUBonMaqURkEHRpKwQ
            .bricks-form__submit {
            width: 100% !important;
          }

          #rd-form-le3cm01t .bricks-form__input:not(textarea) {
            height: 40px !important;
            width: 100% !important;
          }

          #rd-button-le3cm01w {
            height: 40px !important;
            width: 100% !important;
            margin-left: -20px !important;
            margin-right: -20px !important;
          }

          #rd-form-le3cm01t .bricks-form__submit {
            width: 100% !important;
          }
        }
      `}</style>

      <div
        role="main"
        id="captacao-e-mail-l-dca77450894396d0d947"
        className="
          relative mt-56 overflow-hidden rounded-normal animate-card-fade flex justify-center items-center
          desk-md:mt-32
          tab:mt-64
          mob:mt-24
        "
      >
        <Image
          fill
          src={newsletter}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="(max-width: 430px) 50vw"
          alt="imagem de fundo da newsletter"
          className="absolute w-full h-full top-0 left-0 object-cover object-[50%_39%]"
        />

        <div
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            background:
              'linear-gradient(to right, #070308, rgba(0, 122, 24, 0))',
          }}
        />
      </div>
    </>
  );
}
