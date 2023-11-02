import { HowToBetPosts } from '@/types/bettingTips';
import { HowToBetCard } from './components/HowToBetCard';
import { Presentation } from './components/Presentation';
import pay from '../../../../assets/images/svg/pay-icon.svg';
import ball from '../../../../assets/images/svg/ball-icon.svg';
import money from '../../../../assets/images/svg/money-icon.svg';
import handClick from '../../../../assets/images/svg/hand-click-icon.svg';

type HowToBetStepsProps = {
  posts: HowToBetPosts;
};

export function HowToBetSteps({ posts }: HowToBetStepsProps) {
  return (
    <div className="mob:px-24">
      <Presentation />

      <div
        className="
          mt-40 mx-auto flex gap-[39px]
          desk-sm:mt-[20px] desk-md:gap-[19px] desk-sm:flex-col
          tab:mt-[25px] tab:gap-24
          mob:mt-[15px] mob:gap-16
          mob-sm:mt-[29px] mob-sm:gap-8
        "
      >
        <div
          className="
            flex gap-[39px]
            desk-md:gap-[19px]
            tab:justify-center tab:gap-24
            mob:gap-16
            mob-sm:flex-wrap mob-sm:gap-8
          "
        >
          <div className="z-40 mob:w-full">
            <HowToBetCard
              icon={handClick}
              displayNumber="01"
              title={posts.block1.title}
              image={posts.block1.imageUrl}
              altImage="pessoa comemorando"
              slug={`${posts.block1.slug}.html/1`}
              altIcon="icone de ponteiro de mouse clicando em algo"
            />
          </div>

          <div
            className="
              z-30
              mob:w-full
            "
          >
            <HowToBetCard
              icon={pay}
              displayNumber="02"
              imagePosition="top"
              hideAfterElementOnBreak
              title={posts.block2.title}
              altImage="pessoa comemorando"
              image={posts.block2.imageUrl}
              slug={`${posts.block2.slug}.html/2`}
              altIcon="icone simbolizando uma transação em dinheiro"
            />
          </div>
        </div>

        <div
          className="
            flex gap-[39px]
            desk-md:flex-nowrap
            desk-md:gap-[19px]
            tab:justify-center tab:gap-24
            mob:gap-16
            mob-sm:flex-wrap mob-sm:gap-8
          "
        >
          <div
            className="
              z-20
              mob:w-full
            "
          >
            <HowToBetCard
              icon={ball}
              displayNumber="03"
              title={posts.block3.title}
              image={posts.block3.imageUrl}
              altImage="pessoa comemorando"
              slug={`${posts.block3.slug}.html/3`}
              altIcon="icone de uma bola de futebol"
            />
          </div>

          <div
            className="
              z-10
              mob:w-full
            "
          >
            <HowToBetCard
              icon={money}
              hideAfterElement
              displayNumber="04"
              imagePosition="top"
              title={posts.block4.title}
              image={posts.block4.imageUrl}
              altImage="pessoa comemorando"
              slug={`${posts.block4.slug}.html/4`}
              altIcon="icone simbolizando transferencias bancarias"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
