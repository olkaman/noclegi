import PropTypes from 'prop-types';
import styles from './Layout.module.scss';

const propTypes = {
  header: PropTypes.object.isRequired,
  menu: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
};

function Layout({ header, footer, content, menu }) {
  return (
    <div>
      <div>{header}</div>
      <div>{menu}</div>
      <div className='container'>{content}</div>
      <div>{footer}</div>
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;
