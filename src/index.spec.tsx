/**
 * @jest-environment jsdom
 */

 describe('index.tsx', () => {
  it('should render the App connected to redux in the #root element of the HTML page', () => {
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);
    require('./index');
    expect(rootElement).toMatchSnapshot();
  })
 });