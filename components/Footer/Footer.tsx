import css from "./Footer.module.css";

function Footer() {
  return (
    <footer className={css.footer}>
      <p className={css.text}>
        Created <time dateTime={new Date().getFullYear().toString()}>{new Date().getFullYear().toString()}</time>
      </p>
    </footer>
  );
}

export default Footer;