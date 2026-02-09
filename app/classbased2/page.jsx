"use client";

import React, { Component } from 'react';
import withTranslation from '../i18n/withTranslation';
class ProfileHead extends Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <h2>{t.campaignProfile('groupButtonText')}</h2>
        <h2>{t.common('title',{name:"parvej class"})}</h2>
      </div>
    );
  }
}

export default withTranslation(['campaignProfile','common'])(ProfileHead);
