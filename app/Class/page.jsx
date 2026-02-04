"use client";

import React from 'react';
import {withTranslation} from '../../lib/i18n/withTranslation';
class MyComponent extends React.Component {

  render() {

    const { t: formatMessage } = this.props;

    return (
      <div>

        {/* Basic */}
        <p>{formatMessage('welcome')}</p>

        {/* Interpolation */}
        <p>{formatMessage('greeting', { name: 'Alice' })}</p>

        {/* Plural */}
        <p>{formatMessage('items', { count: 5 })}</p>

        {/* Context */}
        <p>{formatMessage('friend', { context: 'female' })}</p>

        {/* Fallback */}
        <p>{formatMessage('missing', 'Fallback Text')}</p>

        <p>
          {formatMessage('missing2', {
            defaultValue: 'Fallback 2'
          })}
        </p>

      </div>
    );
  }
}

export default withTranslation(['common','nav'])(MyComponent);
