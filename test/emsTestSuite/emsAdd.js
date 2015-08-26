module.exports = {
  'Test for EMS-APPLICATION' : function (client) {
    client
      .url('http://localhost:3013/#/add')
      .waitForElementVisible('body', 1000)
      .assert.title('Employee Application')
      .assert.visible('input')
      .setValue('input[name=code]', '4444')
	  .setValue('input[name=name]', 'Navin')
	  .setValue('input[name=city]', 'chennai')
      .waitForElementVisible('input[id=submitEmployeeData]', 1000)
      .click('body > div.ng-scope > div > div > input.btn.btn-link')
     
  },
  'List of Employees' : function(client,browser){
	  client
	  .url('http://localhost:3013/#/list')
	  .waitForElementVisible('body', 1000)
	  .assert.title('Employee Application')
	/*
	.getText(('body > div.smart-green > table > tbody >', function(result) {
		result.value.forEach(function(name){
			console.log(name)
		})
	})
  
	  .assert.visible('body > div.smart-green > table > tbody > tr:nth-child(41) > td:nth-child(1)' )
	  .assert.elementPresent('body > div.smart-green > table > tbody > tr:nth-child(41) > td:nth-child(1)')
	 .assert.value('body > div.smart-green > table > tbody > tr:nth-child(n) > td:nth-child(1)',5555)
	  var length =body > div.smart-green > table > tbody > tr:nth-child(n).length(); */
	
	.getText('body > div.ng-scope > div > div > table > thead > tr.ng-scope > td:nth-child(1)', function(result) {
		
		console.log("value is :"+result.value);
    this.assert.equal(result.value, '4444')
	
	
})
	  
	  
	 // .assert.attributeEquals('body','table','Manoj1')
	  .end();
  }
}
//.pause(1000)
 //     .end();