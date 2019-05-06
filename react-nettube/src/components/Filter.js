import React from 'react';
import { Dropdown } from 'semantic-ui-react'


export default class Filter extends React.Component {

    languageOptions = [
        {
            key: 'All',
            text: 'All',
            value: 'All',
            image: { avatar: true, src: 'https://www.ruby-lang.org/images/header-ruby-logo.png' },
        },
        {
          key: 'Ruby',
          text: 'Ruby',
          value: 'Ruby',
          image: { avatar: true, src: 'https://www.ruby-lang.org/images/header-ruby-logo.png' },
        },
        {
          key: 'Rails',
          text: 'Rails',
          value: 'Rails',
          image: { avatar: true, src: 'data:image/png;base64,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' },
        },
        {
          key: 'Javascript',
          text: 'Javascript',
          value: 'Javascript',
          image: { avatar: true, src: 'https://i.stack.imgur.com/Mmww2.png' },
        },
        {
          key: 'React',
          text: 'React',
          value: 'React',
          image: { avatar: true, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' },
        },
      ]

      filter = () => (
        <Dropdown
            placeholder='Select Language'
            fluid
            selection
            options={this.languageOptions}
            onChange={(_, selection) => {
                this.props.filterVideos(selection.value)
            }}
        />
      )

    render() {
        return (
            <div>
                {this.filter()}
            </div>
        )
    }
}