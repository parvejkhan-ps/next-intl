"use client";
import { withTranslation } from '@/i18n';
import React,{Component} from 'react';
// import { withTranslation } from '../../lib/i18n';
// import Child from '../components/transChild1';
class NewTranslationPage extends Component {


    render() {
        const { t: formatMessage, i18n } = this.props;

        console.log("formatr",formatMessage('campaignProfile:groupButtonText'),i18n)
        return (
            <div>
                <h1>New Translation Page</h1>
                <button>{formatMessage('campaignProfile:groupButtonText')}</button>
                <h1>New Translation Page</h1>
                <h1>{formatMessage('dashboard:userName',{userName:"parvej khan"})}</h1>
                <button>{formatMessage('campaignProfile:groupButtonText')}</button>
                <button>{formatMessage('giveCommon:continueButton', 'Continuesssss')}</button>
                {/* <Child/> */}
            </div>
        );
    }
}
// export default NewTranslationPage;
export default withTranslation(['dashboard','campaignProfile','giveCommon'])(NewTranslationPage);
export { NewTranslationPage };
