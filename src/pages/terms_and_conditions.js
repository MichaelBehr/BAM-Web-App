import React, { Component } from 'react';
import AppBar from '../components/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './terms.css'

export class terms_and_conditions extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar 
                    dash = {this.props.dash}
                    bank = {this.props.bank}
                    res = {this.props.res}
                    home = {this.props.home}
                    finance = {this.props.finance}
                    summary = {this.props.summary}
                    terms = {this.props.terms}
                />  
            <br/>
            <h1><strong>TERMS AND CONDITIONS</strong></h1>
            
            <p>Last updated: March 23, 2020</p>

            <p>Please read these terms and conditions thoroughly prior to using Our Service.</p>
            <br/>

            <h1><strong> DEFINITIONS AND INTERPRETATION</strong></h1>

            <h2 className = "subheader">Definitions</h2>
            <p>For the purposes of these Terms and Conditions:</p>
            <ul>
                <li><strong>Company</strong> (referred to as "the Company", "We", "Our" or "Us" in this Agreement) refers to BAM.</li>
                <li><strong>Country</strong> refers to: Ontario, Canada</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Terms and Conditions</strong> (also referred to "Terms") mean these Terms and Conditions that form the whole agreement between the Company and You concerning the use of the Service.</li>
                <li><strong>Third-party Social Media Service</strong> means any services or content (including information, data, products or services) provided by means of a third-party that may be presented, included or made available by the Service.</li>
                <li><strong>Website</strong> refers to BAM "Budget Allocation Management", accessible from https://www.bam.ca</li>    
                <li><strong>You</strong> means the person accessing or using the Service, or the company, or other legal entity on behalf of which such person is accessing or using the Service, as applicable.</li>
            </ul>

            <br/>
            <h2 className = "subheader">Interpretation</h2>
                <p>The words on which the initial letters are capitalized have meanings defined under the following terms.</p>
                <p>The following explanations shall have the same meaning regardless of whether they exist in singular or in plural.</p>
            <br/>

            <h1>Trademark</h1>
                <p> The official symbols of the BAM  may not be reproduced, whether for commercial or non-commercial purposes, without our prior authorization which you must receive in writing from us.</p>

            <br/>
            <h1>Acknowledgement</h1>
                <p>These are the Terms and Conditions regulating the use of this Service and the agreement that operates between You and the Service provider. These Terms and Conditions lay out the obligations and rights of all users regarding the use of the Service.</p>
                <p>Your use of and access to the Service is based on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all users, visitors and others who use or access the Service.</p>
                <p>By using or accessing the Service You agree to be constrained by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not gain access to the Service.</p>
                <p>Your access to and use of the Service is also conditioned by Your acknowledgment of and conformity with the Privacy Policy of the Company. Our Privacy Policy illustrates Our policies and procedures on the collection, use and release of Your private information when You use the Application or the Website and informs You about Your privacy rights and how the law protects You. Please read Our Privacy Policy thoroughly prior to using Our Service.</p>


            <br/>
            <h1>Links to Other Websites</h1>
                <p>Our Service might contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
                <p>The Company has no control over and assumes no responsibility for, the privacy policies, practices, or content of any third-party websites or services. You furthermore acknowledge and agree that the Company shall not be accountable or liable, directly or indirectly, for any damage or harm caused or alleged to be caused by or in connection with the use of or dependence on any such content, goods or services offered on or through any such websites or services.</p>
                <p>We firmly advise You to read the privacy policies and terms and conditions of any third-party websites or services that You visit.</p>
            

            <br/>
            <h1>Termination</h1>
                <p>We may suspend or terminate Your access immediately, without prior notice or liability, for any reason whatsoever, including with no limitation if You breach these Terms and Conditions.</p>
                <p>Upon termination, Your right to use or access the Service will terminate immediately.</p>
            <br/>   
            <h1>Limitation of Liability</h1>
                <p>Nonetheless of any damages that You might incur, the total obligation of the Company and any of its providers under any provision of this Terms and Your exclusive resolution for all of the foregoing shall be restricted to the amount paid by You through the Service or 0 CAD if You haven't purchased anything through the Service.</p>
                <p>To the maximum extent permitted by related law, in no incident shall the Company or its suppliers be accountable for any incidental, indirect, special, or consequential damages whatsoever (including, but not restricted to, damages for loss of profits, loss of data or other information, for business disruption, for individual injury, loss of privacy arising out of or in any way related to the use of or failure to use the Service, third-party hardware and/or third-party software used with the Service, or otherwise in link with any provision of this Terms), even if the Company or any provider has been guided of the possibility of such damages and even if the remedy fails of its essential purpose.</p>
                <p>Some provinces do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which implies that some of the previously mentioned limitations may not apply. In these provinces, each party's liability will be limited to the greatest extent acceptable by law.</p>
            <br/>
            <h1>"AS IS" and "AS AVAILABLE" Disclaimer</h1>
                <p>The Service is delivered to You "AS IS" and "AS AVAILABLE" and with all flaws and errors without warranty of any kind. To the maximum extent permitted under the relevant law, the Company, on its own behalf and on behalf of its Associates and its and their respective licensors and suppliers, explicitly disclaims all warranties, whether express, implied, statutory or otherwise, related to the Service, including all implied warranties of merchantability, title and non-infringement, appropriateness for a specific purpose, and warranties that may occur out of the course of performance, course of dealing, usage or trade practice. Without limitation to the foregoing, the Company offers no undertaking or warranty, and makes no representation of any kind that the Service will satisfy Your requirements, be compatible or work with any other software, achieve any intended results, services, systems, or applications, function without disruption, meet any performance or reliability standards or be error-free or that any defects or errors can or will be revised.</p>
                <p>Without restraining the foregoing, neither the Company nor any of the Company's supplier makes any representation or warranty of any kind, implied or express: (i) that the Service will be uninterrupted or error-free; (ii) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (iii) as to the precision, currency or reliability of any information or content delivered through the Service; or (iv) that the Service, its content, the servers, or emails sent from or on behalf of the Company are free of scripts, viruses, worms, trojan horses, malware, timebombs or other harmful components.</p>
                <p>Some jurisdictions do not permit the exclusion of certain types of warranties or limitations on applicable legislative rights of a consumer, so some or all of the above limitations and exclusions may not be valid to You. But in such a case the limitations and exclusions outlined in this section shall be applied to the maximum extent enforceable under applicable law.</p>
            <br/>
            <h1>Governing Law</h1>
                <p>The laws and regulations of the country, apart from its conflicts of law guidelines, shall rule this Terms and Your use of the Service. Your utilization of the Application may also be subject to other local, provincial, national, or international laws.</p>
            <br/>
            <h1>Disputes Resolution</h1>
                <p>If You have any concern or dispute about the Service, You agree to first try to settle the dispute informally by contacting the Company.</p>
            <br/>
            <h1>For European Union (EU) Users</h1>
                <p>If You are a European Union consumer, you will benefit from any compulsory conditions of the rule of the country in which you are resident in.</p>


            <br/>
            <h1>Canadian Legal Compliance</h1>
                <p>You agree and warrant that (i) You are not located in a country that is subject to Canadian government embargo, or that has been designated by the Canadian government as "terrorist supporting" country, and (ii) You are not registered on any Canadian government list of prohibited or restricted parties.</p>
            <br/>
            <h1>Severability and Waiver</h1>
            <h2 className = "subheader">Severability</h2>
            <p>If any specification of these Terms is held to be invalid or unenforceable, such provision will be amended and interpreted to achieve the intentions of such stipulation to the greatest extent possible under applicable law and the remaining conditions will remain in full force and effect.</p>
            <br/>
            <h2 className = "subheader">Waiver</h2>
                <p>Except as mentioned herein, the failure to exercise a right or to the demand performance of a responsibility under this Terms shall not effect a party's ability to use such power or demand such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.</p>
            <br/>
            <h1>Translation Interpretation</h1>
                <p>These Terms and Conditions may have been translated if We have made them available to You on our Service.</p>
                <p>You agree that the original English text shall prevail in the case of a dispute.</p>
            <br/>
            <h1>Changes to These Terms and Conditions</h1>
                <p>We reserve all rights, at Our sole preference, to replace or modify these Terms at any time. If a revision is substantial, We will make reasonable efforts to provide at least 14 days' notice before any new terms taking effect. What represents a significant change will be determined at Our sole discretion.</p>
                <p>By continuing to use or access Our Service after those amendments become active, You agree to be constrained by the revised terms. If You decide not to comply with the new terms, in whole or in part, please stop using the website and the Service.</p>
            <br/>
            <h1>Contact Us</h1>
                <p>If there are any questions about these Terms and Conditions, you can email us at:</p>
                <p>bamoffice@gmail.com</p>


            </React.Fragment>
        </MuiThemeProvider>
    )
  }
}

export default terms_and_conditions
