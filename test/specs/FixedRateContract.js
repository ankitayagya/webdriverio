describe('Fixed rate contract creation',()=>{
    
it('open the url for deel',async()=>{
    const logo=$(".//a[@class='logo']");
    //open the deel URL
    browser.url('https://app.deel.training/login');
    //validate the url
    await expect(logo).toHaveHref('https://deel.com');
    //max the window
    await browser.fullscreenWindow();
    
});
it('provide username and password', async()=>{

    const email=$('[name="email"]');
    const password=$('[name="password"]');
    const loginbutton=$(".//div[contains(text(),'log in')]");
    const logo=$(".//div[@class='logo']");
    //provide the user name
    await email.addValue("ankitaaug41@capgemini.com");
    //provide the password
    await password.addValue("Password12#");
    //click on login button
    await loginbutton.click();
    await browser.pause(5000);
    const closebutton=$(".deel-ui__icon-close-1");
    //handle the intermediate screen
    if(closebutton.isExisting()){
        closebutton.click();
    }
    await browser.fullscreenWindow();
    //validate Deel client platform opens
    await expect(logo).toExist();

    browser.debug();
});
it('click on create a contract',async()=>{
    
    const creatacontractlink= $(".//a[@href='/create']");
    const contracttypepage= $('.//h1');
    await creatacontractlink.waitForClickable({timeout:5000});
    //click on "create a contract"
    await creatacontractlink.click();
    console.log("create a contract link is clicked");
    browser.pause(4000);
    //validate 'create a contract' link is clicked
    await expect(creatacontractlink).toExist();
    
});
it('click on fixed rate',async()=>{
    const fixedratelink=$('h4=Fixed Rate');
    //click on 'fixed rate'
    await fixedratelink.click();
    browser.pause(4000);
    const creatingfixedcontracttext= await $('.mb-10=Creating a fixed contract');
    //Validate fixed rate is clicked
    await expect(creatingfixedcontracttext).toExist();

});

it('enter contract Name', async()=>{
    const contractname=$('[name="name"]');
    //input to the contract name text box
    await contractname.addValue("Ace & Hammer Builders");
    const retrivecontractname = await contractname.getValue();
    //validate the contract name text box
    await expect(retrivecontractname==='Ace & Hammer Builders');
    browser.pause(7000);
    console.log("this step is executed");
    browser.pause(40000);
        browser.pause(4000);
});
    it('enter USA in contractor tax residence', async()=>{
        browser.pause(4000);
     const ctrboxfirstclick=$(".//div[@class='input-container' and @data-qa='contractor-tax-residence']/div/div/div/div/div[1]/div[1]"); 
       browser.pause(4000);
       //click on the contractor tax residence to open the drop down
       ctrboxfirstclick.click();
       const usa=$(".//div[@id='react-select-3-group-1-heading']//following::div/div[3]");
       usa.waitForClickable();
       if(usa===false){
       browser.pause(4000);
       //click on the contractor tax residence to open the drop down
       ctrboxfirstclick.click();
       }
       browser.pause(4000);    
        usa.click();
        browser.pause(4000);
        const actualname=$(".//div[@class='input-container' and @data-qa='contractor-tax-residence']/div/div/div/div/div[1]/div[1]");
        await actualname.waitForExist({timeout:50000});
        const actualvalue= await actualname.getText();
        expect(actualvalue==='United States')
})
it('choose a state',async()=>{
    
    const statebox=$(".//div[@data-qa='contractor-tax-residence-province' and @class='deel-ui__select__input-container']/div/div[1]/div[1]");
    await statebox.waitForExist({timeout:5000}); 
    //click on the choose a state field
    await statebox.click();
    browser.pause(4000);
    const colorado=$(".//div[@id='react-select-5-option-5']");
    await colorado.waitForClickable();
    await colorado.click();
    browser.pause(4000);
    const actualplace=$(".//div[@data-qa='contractor-tax-residence-province' and @class='deel-ui__select__input-container']/div/div[1]/div[1]");
    const actualplacevalue= await actualplace.getText();
    // validate the entred data is correct
    expect(actualvalue==='Colorado');

})
it('enter scope of work',async()=>{
 const sow=$("//textarea[@name='scope']");
 await sow.addValue("test");
 const retrivesow = await sow.getValue();
 //validate the scope of work text box
 await expect(retrivesow==='test');

})
it('contractor start date',async()=>{
    //click on the date field
    const datefield= $("//input[@name='effectiveDate']");
    const todaydate=datefield.getValue();
    //click on the date field
    datefield.click();
    console.log(await datefield.getValue());

})
it('clicking of next button', async()=>{
 const nextbutton=$("//button[@theme='primary']");
 //click the next button
 nextbutton.click();
})
});