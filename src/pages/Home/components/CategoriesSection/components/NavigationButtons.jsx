import BaseButton from '../../../../../components/BaseButton';

export function NavigationButtons() {
  return (
    <>
      <BaseButton
        aria-label="Anterior"
        className="categories-prev group absolute left-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:shadow-lg hover:scale-105 transition-all"
        variant="secondary"
        size="md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </BaseButton>
      <BaseButton
        aria-label="Próximo"
        className="categories-next group absolute right-5 top-1/2 -translate-y-1/2 z-20 h-11 w-11 bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:shadow-lg hover:scale-105 transition-all"
        variant="secondary"
        size="md"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
      </BaseButton>
    </>
  );
}
