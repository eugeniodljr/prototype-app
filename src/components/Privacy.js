import PrivacyHolder from "./styled/PrivacyHolder.styled";
import { useNavigate } from "react-router";

const Privacy = () => {
    const navigate = useNavigate();

    return(
        <PrivacyHolder>
            <div id='btn-privacy'>
                <button onClick={()=>navigate(-1)}></button>
            </div> 
            <h2>Privacy</h2>
            <div>

                <h3>Privacy Policy for Legere</h3>

                <p>At Legere, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Legere and how we use it.</p>

                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at legere@gmail.com.</p>

                <h4>Log Files</h4>

                <p>Legere follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</p>
                <h3>Cookies and Web Beacons</h3>

                <p>Like any other website, Legere uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.</p>
                <h3>DoubleClick DART Cookie</h3>

                <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – http://www.google.com/privacy_ads.html.</p>
                <h3>Our Advertising Partners</h3>

                <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners include:</p>

                    <p>Google</p>

                <p>Each of our advertising partners has their own Privacy Policy for their website. For easier access, an updated and hyperlinked resource is maintained here:</p>

                <h4>Privacy Policies</h4>

                <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Legere.</p>

                <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Legere, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                <p>Note that Legere has no access to or control over these cookies that are used by third-party advertisers.</p>

                <h4>Third Part Privacy Policies</h4>

                <p>Legere’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here and <a target='_blank' rel='noreferrer' href='https://fbaddlikebutton.com/nl/'>click here</a>: Privacy Policy Links.</p>

                <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites. What Are Cookies?</p>

                <h4>Children’s Information</h4>

                <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                <p>Legere does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                <h4>Online Privacy Policy Only</h4>

                <p>This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Legere. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                <h4>Consent</h4>

                <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>

            </div>
        </PrivacyHolder>
    )
}

export default Privacy;