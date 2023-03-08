function ThemeButton({ theme, onChangeTheme }) {
  return (
    <button className={`btn btn-${theme}`} onClick={onChangeTheme}>
      Change theme
    </button>
  );
}

export default ThemeButton;
