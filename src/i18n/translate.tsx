
import { useSelector } from 'react-redux';
import { RootState } from '../store';
const useTranslation = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  const langData = getLangData(language); 
  const translate = (key) => {
    return langData[key] || key;
  };

  return translate;
};

export default useTranslation;
