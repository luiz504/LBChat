import React, { useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { WrapperInfoSection } from './styles';

const InfoSection: React.FC = () => {
  const history = useHistory();
  const handleClickLeave = useCallback(() => {
    history.push('/');
  }, [history]);
  return (
    <WrapperInfoSection>
      <button type="button" onClick={handleClickLeave}>
        Leave Room
      </button>
    </WrapperInfoSection>
  );
};

export default InfoSection;
