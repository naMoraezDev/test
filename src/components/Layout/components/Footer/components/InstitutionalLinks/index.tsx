import { EXTERNAL_LINKS } from '@/constants/common';

export function InstitutionalLinks() {
  return (
    <>
      <a href={EXTERNAL_LINKS.advertise}>
        <p className="text-footer-institutional text-white font-workSans active:text-secondary-cian transition-all duration-300">
          Anuncie
        </p>
      </a>

      <a href={EXTERNAL_LINKS.workWithUs}>
        <p className="text-footer-institutional text-white font-workSans active:text-secondary-cian transition-all duration-300">
          Trabalhe Conosco
        </p>
      </a>
    </>
  );
}
