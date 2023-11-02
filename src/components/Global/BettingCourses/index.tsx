import { CourseCard } from '../CourseCard';
import { CourseList } from '../CourseList';
import { TopLineText } from '../../UI/TopLineText';
import { CardShowcaseMobile } from '../CardShowcaseMobile';

type Course = {
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string;
};

type Category = {
  name: string;
  slug: string;
  description: string;
};

type BettingCoursesProps = {
  coursesPosts: Course[];
  strategyPosts: Course[];
  coursesCategory: Category;
  strategyCategory: Category;
  bettingMarketPosts: Course[];
  bettingMarketCategory: Category;
};

export function BettingCourses({
  coursesPosts,
  strategyPosts,
  coursesCategory,
  strategyCategory,
  bettingMarketPosts,
  bettingMarketCategory,
}: BettingCoursesProps) {
  return (
    <>
      <div
        className="
          mt-[61px]
          desk-sm:mt-56
          tab:mt-[26px]
          mob:ml-24
        "
      >
        <TopLineText>
          Dicas e estratégias para você começar a apostar em esportes!
        </TopLineText>
      </div>

      <div
        className="
          w-full flex gap-x-40 mt-[44px]
          desk-sm:gap-x-[20px] desk-sm:mt-[38px]
          tab:gap-24 tab:mt-[26px]
          mob:hidden
        "
      >
        <CourseList
          name={bettingMarketCategory.name}
          slug={bettingMarketCategory.slug}
          description={bettingMarketCategory.description}
        >
          {bettingMarketPosts.map((course, index) => (
            <CourseCard
              key={index}
              courseData={course}
              categorySlug={bettingMarketCategory.slug}
            />
          ))}
        </CourseList>

        <CourseList
          name={strategyCategory.name}
          slug={strategyCategory.slug}
          description={strategyCategory.description}
        >
          {strategyPosts.map((course, index) => (
            <CourseCard
              key={index}
              courseData={course}
              categorySlug={strategyCategory.slug}
            />
          ))}
        </CourseList>

        <CourseList
          name={coursesCategory.name}
          slug={coursesCategory.slug}
          description={coursesCategory.description}
        >
          {coursesPosts.map((course, index) => (
            <CourseCard
              key={index}
              courseData={course}
              categorySlug={coursesCategory.slug}
            />
          ))}
        </CourseList>
      </div>

      <div
        className="
          flex flex-col gap-[30px]
          mob:mt-[30px]
          mob-sm:mt-[59px]
        "
      >
        <CardShowcaseMobile
          name={bettingMarketCategory.name}
          slug={bettingMarketCategory.slug}
          description={bettingMarketCategory.description}
        >
          {bettingMarketPosts.map((course, index) => (
            <CourseCard
              key={index}
              courseData={course}
              categorySlug={bettingMarketCategory.slug}
            />
          ))}
        </CardShowcaseMobile>

        <CardShowcaseMobile
          name={strategyCategory.name}
          slug={strategyCategory.slug}
          description={strategyCategory.description}
        >
          {strategyPosts.map((course, index) => (
            <CourseCard
              key={index}
              courseData={course}
              categorySlug={strategyCategory.slug}
            />
          ))}
        </CardShowcaseMobile>

        <CardShowcaseMobile
          name={coursesCategory.name}
          slug={coursesCategory.slug}
          description={coursesCategory.description}
        >
          {coursesPosts.map((course, index) => (
            <CourseCard
              key={index}
              courseData={course}
              categorySlug={coursesCategory.slug}
            />
          ))}
        </CardShowcaseMobile>
      </div>
    </>
  );
}
