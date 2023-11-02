interface SingleMatchProps {
  content: any;
}

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace JSX {
    // eslint-disable-next-line no-unused-vars
    interface IntrinsicElements {
      'eyas-style': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          css: string;
          class: string;
        },
        HTMLElement
      >;
      'eyas-match-container': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'bet-offer-id': any;
        },
        HTMLElement
      >;
    }
  }
}

export default function SingleMatch({ content }: SingleMatchProps) {
  const matchId = content.attributesJSON.id;

  return (
    <div className="w-full my-40">
      <eyas-style
        css="
          .match-banner {
            width: 100%!important;
          }
        "
        class="hidden"
      />
      <eyas-match-container bet-offer-id={matchId}></eyas-match-container>
    </div>
  );
}
