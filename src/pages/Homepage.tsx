import { Fragment, FC } from 'react';

import Header from '../components/Header';

import { translate } from '../i18n';
import { RootState } from '../store';
import { useSelector } from 'react-redux';


const HomePage: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
 
  return (
    <Fragment>
      <Header fixed transparent />
      <section className="intro">
        <div className="intro__overlay"></div>
        <div className="intro__body">
        
          <h1>React</h1>
          <p>{translate('introText', language)}</p>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
