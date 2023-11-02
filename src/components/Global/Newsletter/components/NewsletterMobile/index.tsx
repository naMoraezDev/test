import { Text } from '@/components/UI/Text';
import newsletter from '../../../../../assets/images/png/newsletter.png';

export function NewsletterMobile() {
  return (
    <div className="px-24">
      <div
        className="
          hidden w-full rounded-normal bg-background mt-24
          mob:block mob:flex-col
        "
      >
        <div
          style={{
            backgroundImage: `linear-gradient(to right, #06378D, rgba(0, 255, 255, 0.47)), url(${newsletter.src})`,
          }}
          className="w-full h-[128px] bg-cover bg-top rounded-t-normal flex flex-col justify-center items-center"
        >
          <h1 className="text-heading-1-desk-sm text-white font-workSans">
            Conteúdo
          </h1>

          <h1 className="text-heading-1-desk-sm text-white font-workSans">
            Exclusivo
          </h1>
        </div>

        <div>
          <div className="px-16 mt-24 mb-[26px] flex flex-col gap-24">
            <Text variant="text-2">
              Receba diretamente no seu e-mail conteúdos relacionados a betting.
            </Text>

            <input
              type="email"
              placeholder="Digite aqui seu e-mail"
              className="
                outline-none w-full h-40 px-12 border border-primary-green bg-background rounded-normal placeholder-gray2 relative text-subtitle-desk-sm
                desk-sm:text-text-2-desk-lg
              "
            />
          </div>

          <button
            className="
              w-full h-40 px-[14px] bg-primary-green text-white text-button-md whitespace-nowrap rounded-normal transition-colors duration-150 outline-none shrink-0
              hover:bg-primary-green mob-sm:h-32
              active:bg-primary-green-light active:shadow-inset-button
              focus:outline-none
            "
            type="button"
          >
            Enviar e-mail
          </button>
        </div>
      </div>
    </div>
  );
}
