import Link from 'next/link';
import css from "./home.module.css"

function Home() {
  return (
    <div className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>
          Welcome to NoteHub
        </h1>
        <p className={css.subtitle}>
          Your ultimate note-taking companion. Organize your thoughts, ideas, and 
          important information in one beautiful place. Simple, fast, and powerful.
        </p>
        
        <div className={css.ctaGroup}>
          <Link href="/notes/filter/all" className={`${css.ctaButton} ${css.ctaPrimary}`}>
            View Notes →
          </Link>
          <Link href="/notes/action/create" className={`${css.ctaButton} ${css.ctaSecondary}`}>
            Create Note
          </Link>
        </div>

        <div className={css.features}>
          <div className={css.featureCard}>
            <div className={css.featureIcon}>📝</div>
            <h3 className={css.featureTitle}>Easy to Use</h3>
            <p className={css.featureDescription}>
              Create and organize notes with our intuitive interface
            </p>
          </div>
          
          <div className={css.featureCard}>
            <div className={css.featureIcon}>🏷️</div>
            <h3 className={css.featureTitle}>Categorize</h3>
            <p className={css.featureDescription}>
              Keep everything organized with custom categories
            </p>
          </div>
          
          <div className={css.featureCard}>
            <div className={css.featureIcon}>⚡</div>
            <h3 className={css.featureTitle}>Fast & Responsive</h3>
            <p className={css.featureDescription}>
              Lightning-fast performance for all your note-taking needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;