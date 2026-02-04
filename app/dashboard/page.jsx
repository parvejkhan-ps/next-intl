"use client";

import React from 'react';
import {withTranslation} from '../../lib/i18n/withTranslation';
class Dashboard extends React.Component {

  render() {
    const {t: formatMessage} = this.props;

    return (
      <div>
        <h1>New Translation Page</h1>
                <button>{formatMessage('campaignProfile:groupButtonText')}</button>
                <h1>New Translation Page</h1>
                <h1>{formatMessage('dashboard:userName',{userName:"parvej khan"})}</h1>
                <button>{formatMessage('campaignProfile:groupButtonText')}</button>
                <button>{formatMessage('giveCommon:continueButton', 'Continuesssss')}</button>
      </div>
    );
  }
}

export default withTranslation(['dashboard','campaignProfile','giveCommon'])(Dashboard);
