import { EXTERNAL_LINKS } from '@/constants/common';
import { KwaiIconSvg } from './components/KwaiIconSvg';
import { TiktokIconSvg } from './components/TiktokIconSvg';
import { YoutubeIconSvg } from './components/YoutubeIconSvg';
import { TwitterIconSvg } from './components/TwitterIconSvg';
import { FacebookIconSvg } from './components/FacebookIconSvg';
import { InstagramIconSvg } from './components/InstagramIconSvg';

export function SocialLinks() {
  return (
    <>
      <a
        target="_blank"
        aria-label="twitter do lance!"
        href={EXTERNAL_LINKS.bettingTwitter}
      >
        <TwitterIconSvg />
      </a>

      <a
        target="_blank"
        aria-label="instagram do lance!"
        href={EXTERNAL_LINKS.bettingIstagram}
      >
        <InstagramIconSvg />
      </a>

      <a
        target="_blank"
        aria-label="youtube do lance!"
        href={EXTERNAL_LINKS.bettingYoutube}
      >
        <YoutubeIconSvg />
      </a>

      <a
        target="_blank"
        aria-label="facebook do lance!"
        href={EXTERNAL_LINKS.bettingFacebook}
      >
        <FacebookIconSvg />
      </a>

      <a
        target="_blank"
        aria-label="tiktok do lance!"
        href={EXTERNAL_LINKS.bettingTiktok}
      >
        <TiktokIconSvg />
      </a>

      <a
        target="_blank"
        aria-label="kwai do lance!"
        href={EXTERNAL_LINKS.bettingKwai}
      >
        <KwaiIconSvg />
      </a>
    </>
  );
}
