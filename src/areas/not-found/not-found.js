import React from 'react';

export class NotFound extends React.PureComponent {

  render () {
    console.log('Not Found', { props: this.props } );

    return (
      <h1>
        not found
      </h1>
    );
  }

}