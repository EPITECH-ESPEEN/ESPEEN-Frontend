/*
    Authors:
    >> Caroline BOILLY - { caroline.boilly@epitech.eu }
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./termsOfServicePageContent.module.css"
import TextWithAir from "src/components/text/textWithAir/textWithAir";

/* ----- COMPONENT ----- */
const TermsOfServicePageContent: React.FC = () => {
    return (
        <div className={css.container}>
            <TextWithAir left={false}>
                <p className="italic">Last Updated: October 31, 2024</p>
                <div className="textStyle-huge">Terms of Service for Espeen</div>
                <div className="textStyle-text">
                    Welcome to Espeen! Please read these Terms of Service ("Terms") carefully as they govern your access
                    to and use of Espeen's platform and services ("Services"). By accessing or using our Service, you agree
                    to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Service.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">1. Service Overview</div>
                <div className="textStyle-text">
                    Espeen is a versatile project focused on enabling users to automate tasks using action-reaction workflows,
                    known as "Areas." Users define specific "Actions," which trigger "Reactions," enabling
                    streamlined workflows across various scenarios, including real-time notifications and other automated processes.
                </div>
            </TextWithAir>


            <TextWithAir>
                <div className="textStyle-title">2. Use of the Service</div>
                <div className="textStyle-text">
                    <li>
                        <strong>Account Registration:</strong> To use Espeen, you may be required to register for an account. By registering,
                        you agree to provide accurate and complete information and to keep your account details up to date.
                    </li>
                    <li>
                        <strong>Eligibility:</strong> You must be at least 18 years old or the age of majority in your jurisdiction to use
                        Espeen's Service. By agreeing to these Terms, you represent and warrant that you meet these requirements.
                    </li>
                    <li>
                        <strong>User Responsibilities:</strong> You are responsible for maintaining the security of your account credentials.
                        Espeen cannot and will not be liable for any loss or damage arising from unauthorized use of your account.
                    </li>
                    <li>
                        <strong>Prohibited Conduct:</strong> You agree not to misuse Espeen’s Service, including but not limited to:
                        <ul className="list-disc list-inside ml-6 space-y-1">
                            <li>Attempting to interfere with or disrupt the platform.</li>
                            <li>Using the Service to infringe on the rights of others.</li>
                            <li>Conducting any activities that are unlawful or violate third-party rights.</li>
                        </ul>
                    </li>
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">3. Features of Espeen</div>
                <div className="textStyle-text">
                    <li>
                        <strong>Action-Driven Workflows:</strong> Define "Actions" that trigger automatic "Reactions," allowing for flexible
                        and customizable automation.
                    </li>
                    <li>
                        <strong>Modular and Extensible Design:</strong> The Service is designed to allow new types of Actions and Reactions
                        to be added, ensuring a customizable experience tailored to diverse user needs.
                    </li>
                    <li>
                        <strong>User-Friendly Interface:</strong> Espeen offers an intuitive interface to simplify setting up and managing Areas.
                    </li>
                </div>
            </TextWithAir>


            <TextWithAir>
                <div className="textStyle-title">4. User Content and Privacy</div>
                <div className="textStyle-text">
                    <li>
                        <strong>User Data and Privacy:</strong> By using Espeen, you agree to our collection and use of your data as described
                        in our <a href="/privacy-policy">Privacy Policy</a>. Espeen is committed to protecting user data and adheres
                        to industry standards for security and data protection.
                    </li>
                    <li>
                        <strong>Content Ownership and License:</strong> While you retain ownership of any content you submit to Espeen, you grant
                        Espeen a non-exclusive, worldwide, royalty-free license to use, store, and display your content solely for the purpose
                        of operating the Service.
                    </li>
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">5. Modifications to the Service and Terms</div>
                <div className="textStyle-text">
                    Espeen reserves the right to modify, suspend, or discontinue the Service, or any portion of it, with or without notice. We may
                    also revise these Terms at any time. Changes will be effective when posted on our platform. Continued use of the Service after
                    changes constitute acceptance of the modified Terms.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">6. Disclaimer of Warranties</div>
                <div className="textStyle-text">
                    Espeen is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee
                    that the Service will be uninterrupted, secure, or error-free, nor do we guarantee any results from the use of the Service.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">7. Limitation of Liability</div>
                <div className="textStyle-text">
                    To the fullest extent permitted by law, Espeen and its affiliates, directors, employees, and agents will not be liable for
                    any indirect, incidental, punitive, or consequential damages arising from your use or inability to use the Service.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">8. Indemnification</div>
                <div className="textStyle-text">
                    You agree to indemnify, defend, and hold harmless Espeen from and against any claims, liabilities, damages, losses, or expenses
                    arising out of your violation of these Terms or misuse of the Service.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">9. Governing Law and Jurisdiction</div>
                <div className="textStyle-text">
                    These Terms will be governed by and construed in accordance with the laws of the jurisdiction in which Espeen is registered.
                    Any disputes arising out of or related to these Terms will be resolved exclusively in the courts of that jurisdiction.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-title">10. Contact Us</div>
                <div className="textStyle-text">
                    For questions or concerns regarding these Terms, please contact us at <a href="mailto:support@espeen.com">support@espeen.com</a>.
                </div>
            </TextWithAir>

            <TextWithAir>
                <div className="textStyle-text">
                    By using Espeen, you acknowledge that you have read, understood, and agree to these Terms of Service.
                </div>
            </TextWithAir>

        </div>
    );
};

export default TermsOfServicePageContent;