import React from 'react';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FooterWrapper, FooterText } from '../StyledComponents';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterText>Made with </FooterText>
            <FontAwesomeIcon icon='heart' size={16} color={'#393939'} />
            <FooterText> by </FooterText>
            <FooterText style={{ color: 'blue' }}
                onPress={() => Linking.openURL('https://github.com/codingkapoor')}>
                codingkapoor
            </FooterText>
        </FooterWrapper>
    );
}

export default Footer;
