
///<reference types="cypress"/>
import { sign_up } from "./pages/signup page"
const signup = new sign_up


it ('FB login page ', function(){
    cy.visit ('https://www.facebook.com/')
    cy.get(':nth-child(2) > ._sv4').click()
    cy.get('[data-testid="open-registration-form-button"]').click()
     signup.Enterfirstname ('sanober')
     signup.Enterlastname ('Rafique')
     signup.Enteremail ('sanoberrafique49@gmail.com')
     signup.Enterconfirmemail ('sanoberrafique49@gmail.com')
     signup.EnterPassword('sanober123*')
     signup.SelectDay('14')
     signup.SelectMonth('Oct')
     signup.SelectYear('1998')
     signup.Checkgender('1')
     signup.Clicksignup()







    //  signup.Enterlastname()
    //  signup.Enteremail()
    //  signup.Enterconfirmemail()



    //
   // cy.get('input[name="firstname"]').type('sanober')
   // cy.get('input[name="lastname"]').type('rafique')
   // cy.get('input[name="reg_email__"]').type('sanoberrafique49@gmail.com')
   // cy.get('input[name="reg_email_confirmation__"]').type('sanoberrafique49@gmail.com')
   // cy.get('input[name="reg_passwd__"]').type('Sanober123*')
   // cy.get("#day").select('14')
   // cy.get("#month").select('Oct')
   // cy.get("#year").select('1998')
   // cy.get('[type="radio"]').check('1')
   // cy.get("#u_3_s_05").submit()//

  
    // it('fb signup', () => {
    //     cy.visit ('https://www.facebook.com/')
    //     cy.get(':nth-child(2) > ._sv4').click()
    //     cy.get('.signup_box_content > ._42ft').click()

    })