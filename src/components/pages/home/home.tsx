import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'home.css',
  shadow: true
})
export class Home {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
