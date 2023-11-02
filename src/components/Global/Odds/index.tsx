import { LBETTING_IMAGE } from '@/constants/common';

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace JSX {
    // eslint-disable-next-line no-unused-vars
    interface IntrinsicElements {
      'eyas-offering-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'subtitle-brand-logo': string;
          'coupon-id': string;
          title: string;
          'max-events-displayed': string;
          'target-url': string;
          prod: boolean;
        },
        HTMLElement
      >;
    }
  }
}

export default function Odds() {
  return (
    <div
      className="
        h-[500px]
      "
    >
      <eyas-offering-container
        subtitle-brand-logo={LBETTING_IMAGE}
        target-url={process.env.EMBED_TARGET as string}
        coupon-id={process.env.EMBED_ID as string}
        title="Odds do dia"
        max-events-displayed="10"
        prod={process.env.EMBED_PROD === 'true'}
      ></eyas-offering-container>
    </div>
  );
}
