import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import i18n from '../i18n';
import './styles/LanguageDropdown.css';

class LanguageDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      language: 'es'
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  changeLanguage = (language) => {
    i18n.changeLanguage(language);
    this.setState({ language });
  };

  render() {
    return (
      <Dropdown className='dropdown-language' isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
        <DropdownToggle caret>
            {this.props.language}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => this.changeLanguage('an')}>Aragonés</DropdownItem>
          <DropdownItem onClick={() => this.changeLanguage('es')}>Español</DropdownItem>
          <DropdownItem onClick={() => this.changeLanguage('en')}>English</DropdownItem>
          <DropdownItem onClick={() => this.changeLanguage('fr')}>Français</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default LanguageDropdown;