import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return children;
};

export default ScrollToTop;
