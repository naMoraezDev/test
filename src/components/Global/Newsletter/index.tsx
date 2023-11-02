import { Text } from '../../UI/Text';
import { NewsletterMobile } from './components/NewsletterMobile';
import newsletter from '../../../assets/images/png/newsletter.png';

export function Newsletter() {
  return (
    <>
      <div
        className="
          w-full h-[288px] bg-cover bg-center mt-56 rounded-normal flex justify-center items-center px-[43px]
          desk-md:h-[210px] desk-md:mt-32
          tab:mt-24 tab:px-[20px]
          mob:hidden
        "
        style={{
          backgroundImage: `linear-gradient(to right, #06378D, rgba(0, 255, 255, 0.47)), url(${newsletter.src})`,
        }}
      >
        <div
          className="
            mx-auto h-full flex flex-col justify-between py-40
            desk-sm:w-full desk-md:py-[19px]
            tab:py-[28px]
          "
        >
          <div
            className="
              flex flex-col gap-8
              desk-md:gap-0
              tab:gap-8
            "
          >
            <Text color="white" variant="h2">
              Conteúdo Exclusivo
            </Text>

            <Text color="white" variant="text" className="max-w-[552px]">
              Receba diretamente no seu e-mail conteúdos relacionados a betting.
            </Text>
          </div>

          <div>
            <div className="flex gap-24 w-full">
              <input
                type="email"
                placeholder="Digite aqui seu e-mail"
                className="
                  outline-none w-[712px] h-[72px] px-12 rounded-normal
                  desk-md:w-full
                  desk-md:h-[47px] desk-md:text-text-2-desk-lg
                  tab:h-40
                "
              />

              <button
                type="button"
                className="
                  w-[151px] h-[72px] bg-primary-green text-white text-button-md whitespace-nowrap rounded-normal transition-all duration-500 shrink-0
                  desk-md:h-[47px]
                  tab:h-40 px-[14px]
                  hover:bg-primary-green
                  active:bg-primary-green-light active:shadow-inset-button active:duration-150
                "
              >
                Enviar e-mail
              </button>
            </div>
          </div>
        </div>
      </div>

      <NewsletterMobile />
    </>
  );
}
