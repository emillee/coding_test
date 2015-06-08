// slow down protractor
var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};


describe('Protractor Demo App', function() {

  it('should be able to edit an item', function() {
    browser.get('http://localhost:3000');

    var firstEl = element(by.css('.product-tr:first-of-type'));
    firstEl.all(by.css('.edit-product')).click();
    
    var inputEl = firstEl.all(by.css('.input-product-name'));
    inputEl.clear();
    inputEl.sendKeys('testName');
    firstEl.all(by.css('.submit-btn')).click();

    var changedEl = firstEl.element(by.css('.product-name'));
    expect(changedEl.getText()).toEqual('testName');
  });

});