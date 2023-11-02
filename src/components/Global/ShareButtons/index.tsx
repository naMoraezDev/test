import Image from 'next/image';
import shareIcon from '../../../assets/images/svg/blue-share-icon.svg';
import twitterIcon from '../../../assets/images/svg/blue-twitter-icon.svg';
import facebookIcon from '../../../assets/images/svg/blue-facebook-icon.svg';
import whatsappIcon from '../../../assets/images/svg/blue-whatsapp-icon.svg';

type ShareButtonsProps = {
  link: string;
  tab?: boolean;
  mobile?: boolean;
  priority?: boolean;
  showShareText?: boolean;
};

export function ShareButtons({
  tab,
  link,
  mobile,
  priority,
  showShareText,
}: ShareButtonsProps) {
  return (
    <div
      className={`
        ${
          showShareText
            ? 'flex-row items-center tab:justify-between tab:gap-40 tab-sm:w-full tab-sm:gap-0'
            : 'flex-col mob:justify-between mob:gap-0'
        }
        ${tab ? 'tab:flex-row' : 'mob:flex-row'} 
        flex gap-40 tab:items-center tab:justify-center
      `}
    >
      <p
        className={`
          ${
            showShareText
              ? 'block text-small-text-desk-lg tab-xs:hidden'
              : 'hidden text-small-text-mob'
          } 
          ${mobile ? 'hidden' : 'mob:block'}
          text-gray1
        `}
      >
        Compartilhe
      </p>

      <a
        target="_blank"
        href={`https://twitter.com/intent/tweet?url=${link}&text=Saiba mais sobre o mundo das apostas:%0a%0a`}
      >
        <div
          className={`
            ${mobile ? 'mob:w-40 mob:h-40' : 'mob:w-[30px] mob:h-[30px]'}
            w-40 h-40 rounded-[100%] shadow-icon-button flex justify-center bg-white
          `}
        >
          <Image
            width={17.85}
            height={14.59}
            src={twitterIcon}
            priority={priority}
            alt="logo do twitter"
            className={`
              ${mobile ? 'mob:w-[18.67px]' : 'mob:w-[13.39px]'}
            `}
          />
        </div>
      </a>

      <a
        target="_blank"
        href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
      >
        <div
          className={`
            ${mobile ? 'mob:w-40 mob:h-40' : 'mob:w-[30px] mob:h-[30px]'}
            w-40 h-40 rounded-[100%] shadow-icon-button flex justify-center bg-white
          `}
        >
          <Image
            width={8.03}
            height={14.93}
            src={facebookIcon}
            priority={priority}
            alt="icone do facebook"
            className={`
              ${mobile ? 'mob:w-[8.03px]' : 'mob:w-[6.02px]'}
            `}
          />
        </div>
      </a>

      <a
        target="_blank"
        href={`https://api.whatsapp.com/send?text=Saiba mais sobre o mundo das apostas:${link}`}
      >
        <div
          className={`
            ${mobile ? 'mob:w-40 mob:h-40' : 'mob:w-[30px] mob:h-[30px]'}
            w-40 h-40 rounded-[100%] shadow-icon-button flex justify-center bg-white
          `}
        >
          <Image
            width={17.89}
            height={17.88}
            src={whatsappIcon}
            priority={priority}
            alt="icone do whatsapp"
            className={`
              ${mobile ? 'mob:w-[18.67px]' : 'mob:w-[13.39px]'}
            `}
          />
        </div>
      </a>

      <div
        onClick={() =>
          navigator.share({
            url: link,
            text: 'Saiba mais sobre o mundo das apostas:',
          })
        }
        className={`
          ${mobile ? 'mob:w-40 mob:h-40' : 'mob:w-[30px] mob:h-[30px]'}
          w-40 h-40 rounded-[100%] shadow-icon-button flex justify-center bg-white cursor-pointer
        `}
      >
        <Image
          width={17.88}
          height={17.84}
          src={shareIcon}
          priority={priority}
          alt="icone de compartilhamento"
          className={`
            ${mobile ? 'mob:w-[18.67px]' : 'mob:w-[13.39px]'}
          `}
        />
      </div>
    </div>
  );
}
