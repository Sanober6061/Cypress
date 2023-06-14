export class sign_up {

    firstname= 'input[name="firstname"]'



    Enterfirstname(fname)    
    {
        cy.get(this.firstname).type(fname)

    }

   lastname= 'input[name="lastname"]'
    Enterlastname(lname)
    {
        cy.get(this.lastname).type(lname)

    }

    Email= 'input[name="reg_email__"]'
    Enteremail(email)
    {
        cy.get(this.Email).type(email)

    }
    confirm_email= 'input[name="reg_email_confirmation__"]'
    Enterconfirmemail(c_email)
    {
        cy.get(this.confirm_email).type(c_email)

    }

    password= 'input[name="reg_passwd__"]'
    EnterPassword(pass)
    {
        cy.get(this.password).type(pass)

    }
    Day= "#day"
    SelectDay(day)
    {
        cy.get(this.Day).select(day) 
    }
    Month= "#month"
    SelectMonth(month)
    {
        cy.get(this.Month).select(month) 
    }
    Year= "#year"
    SelectYear(year)
    {
        cy.get(this.Year).select(year) 
    }
    Gender='[type="radio"]'
    Checkgender(gender)
    {
        cy.get(this.Gender).check(gender) 
    }
    Signupbtn= '#u_2_s_n9'
    Clicksignup()
    {
        cy.get(this.Signupbtn).click() 
    }
    clicktosignup (){
        cy.get('[data-testid="open-registration-form-button"]').click().should('be.visible');
    }
    wait (time){
        cy.wait(time)
    }
 }
