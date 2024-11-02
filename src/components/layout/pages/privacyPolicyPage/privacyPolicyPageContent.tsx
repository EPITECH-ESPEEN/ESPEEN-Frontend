/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./privacyPolicyPageContent.module.css"
import TextWithAir from "src/components/text/textWithAir/textWithAir";

/* ----- COMPONENT ----- */
const PrivacyPolicyPageContent: React.FC = () => {
    return (
        <div className={css.container}>
            <TextWithAir left={false}>
                <p className="italic">Last Updated: October 31, 2024</p>
                <div className="textStyle-huge">Privacy Policy</div>
                <div className="textStyle-title">
                    Welcome to ESPEEN, your privacy is important to us.
                </div>
                <div className="textStyle-text">
                    This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit our website. Please read this policy
                    carefully to understand our views and practices regarding your personal data and how we will treat it.
                    By accessing or using our website, you agree to the terms of this Privacy Policy.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">1. Information We Collect</div>
                <div className="textStyle-text">
                    <li><strong>Personal Information</strong>: When you create an account, contact us, or subscribe to our services, we may collect information such as your name, email address, and other information necessary to fulfill our services.</li>
                    <li><strong>Automatically Collected Information</strong>: We may automatically collect information about your device, browsing actions, and usage patterns. This includes your IP address, browser type, access times, and pages visited.</li>
                    <li><strong>Cookies</strong>: Our website uses cookies to collect data about your browsing behavior. Cookies are small data files stored on your device and help us provide a more personalized experience.</li>
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">2. How We Use Your Information</div>
                <div className="textStyle-text">
                    <li>To operate, maintain, and improve our website.</li>
                    <li>To process transactions and manage your account.</li>
                    <li>To personalize user experience and deliver content and products you are most interested in.</li>
                    <li>To communicate with you, including providing updates and promotional offers.</li>
                    <li>To analyze trends and gather statistical information about user engagement.</li>
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">3. Disclosure of Your Information</div>
                <div className="textStyle-text">
                    <li><strong>With Service Providers</strong>: We may share your data with third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</li>
                    <li><strong>For Legal Purposes</strong>: We may disclose your information if required to do so by law, in response to valid requests by public authorities, or to protect the rights, property, or safety of our users or others.</li>
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">4. Security of Your Information</div>
                <div className="textStyle-text">
                    We use administrative, technical, and physical safeguards to help protect your personal information. However, no security system is impenetrable. We cannot guarantee the security of our databases or the information you send us over the Internet. Any transmission of personal information is at your own risk.
                </div>
            </TextWithAir>

            <TextWithAir>
            <div className="textStyle-title">5. Your Rights and Choices</div>
            <div className="textStyle-text">
                Depending on your location, you may have certain rights regarding your personal information:
                <li><strong>Access</strong>: You may have the right to access the personal information we hold about you.</li>
                <li><strong>Correction</strong>: You may request that we correct or update any incorrect information.</li>
                <li><strong>Deletion</strong>: You may request the deletion of your personal information, subject to certain exceptions.</li>
                To exercise these rights, please contact us using the contact details below.
            </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">6. Data Retention</div>
                <div className="textStyle-text">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">7. Third-Party Links</div>
                <div className="textStyle-text">
                    Our website contains links to third-party websites. This Privacy Policy does not apply to these external sites, and we are not responsible for the practices of these sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">8. Children's Privacy</div>
                <div className="textStyle-text">
                    Our website is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we learn that we have collected information from a child under 13, we will delete that information as quickly as possible.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">9. Changes to This Privacy Policy</div>
                <div className="textStyle-text">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “Last Updated” date above. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">10. Contact Us</div>
                <div className="textStyle-text">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                    <p>ESPEEN</p>
                    <p>Immeuble les cimes, 131 Bd René Cassin, 06200 Nice</p>
                    <p>Email : <a href="mailto:support@espeen.com">support@espeen.com</a></p>
                    <p>Phone : <a href="tel:0422133266">0422133266</a></p>
                    <p>
                        This Privacy Policy was created to help you understand how we handle your personal information. Thank you for trusting us with your data.
                    </p>
                </div>
            </TextWithAir>
        </div>
    );
};

export default PrivacyPolicyPageContent;
