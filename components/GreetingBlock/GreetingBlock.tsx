import css from './GreetingBlock.module.css';

const GreetingBlock = () => {
  return (
  <section className={css.greetingBlock}>
    <h1 className={css.pageTitle}>Доброго ранку, Ганно!</h1>
  </section>
  );
};

export default GreetingBlock;
